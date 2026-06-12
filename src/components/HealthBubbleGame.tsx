import React, { useEffect, useMemo, useRef, useState } from 'react';
import { X, Heart, Activity, FileText } from 'lucide-react';

type BubbleItem = {
  id: string;
  xPercent: number; // left position in % of viewport
  yPercent: number; // top position in % of viewport
  sizePx: number;
  floatDurationSec: number;
  floatDelaySec: number;
  driftXPx: number;
  hueDeg?: number;
};

const ISSUE_LABELS = [
  'Obesity / Overweight',
  'Type 2 Diabetes (Early-stage / Pre-diabetes)',
  'Hypertension (High Blood Pressure)',
  'High Cholesterol / Triglycerides',
  'Fatty Liver (NAFLD)',
  'Thyroid Imbalance',
  'PCOS / PCOD',
  'Acidity, Bloating & Gut Issues',
  'Chronic Fatigue & Low Energy',
  'Stress, Anxiety, Poor Recovery',
  'Inflammation & Joint Pain',
  'Poor Immunity',
  'Cardiovascular Risk (Preventive)',
  'Early Aging / Declining Health',
];
// Short labels shown on bubbles (single, compact names)
const ISSUE_SHORT_LABELS = [
  'Obesity',
  'Diabetes',
  'High BP',
  'Cholesterol',
  'Fatty Liver',
  'Thyroid',
  'PCOS',
  'Gut Issues',
  'Fatigue',
  'Stress',
  'Inflammation',
  'Immunity',
  'Cardio Risk',
  'Early Aging',
];

const ISSUE_DESCRIPTIONS: Record<string, string> = {
  'Obesity / Overweight': 'Through clean nutrition, portion control, and metabolic-supportive Ayurvedic meals.',
  'Type 2 Diabetes (Early-stage / Pre-diabetes)': 'Helps reduce sugar spikes and improve insulin sensitivity with food & lifestyle guidance.',
  'Hypertension (High Blood Pressure)': 'Low-sodium, heart-friendly meals, stress recovery guidance, and daily health insights.',
  'High Cholesterol / Triglycerides': 'Zero-adulteration meals free from trans fats, palm oil, and harmful additives.',
  'Fatty Liver (NAFLD)': 'Detox-supportive Ayurvedic meals that reduce liver stress and improve metabolism.',
  'Thyroid Imbalance': 'Targeted nutrient-rich meals and lifestyle mapping (sleep, stress, circadian rhythm).',
  'PCOS / PCOD': 'Stabilize hormones through anti-inflammatory foods and daily wellness guidance.',
  'Acidity, Bloating & Gut Issues': 'Naturopathy-aligned meals support digestion and reduce processed-food triggers.',
  'Chronic Fatigue & Low Energy': 'Nutritionally-complete, adulteration-free meals that improve micronutrient intake.',
  'Stress, Anxiety, Poor Recovery': 'Wearable-driven insights (HRV, stress, sleep quality) to optimize lifestyle choices.',
  'Inflammation & Joint Pain': 'Reduce pro-inflammatory habits and increase anti-inflammatory ingredients.',
  'Poor Immunity': 'Nutrient-dense meals and Ayurvedic immune-supportive foods.',
  'Cardiovascular Risk (Preventive)': 'Daily data on heart rate, stress load, and nutrition helps prevent long-term disease.',
  'Early Aging / Declining Health': 'Reverse Ageing Platform to improve organ function, toxin load, recovery, metabolism.',
};

const THRESHOLD_TO_SUMMARY = 5; // number of pops before showing final popup

function usePopSound() {
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    audioCtxRef.current = ctx;
    return () => {
      try { ctx.close(); } catch {}
    };
  }, []);

  return async () => {
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    // Ensure audio can play on first user gesture
    if (ctx.state === 'suspended') {
      try { await ctx.resume(); } catch {}
    }

    // 1) Noise crack
    const duration = 0.12;
    const sampleRate = ctx.sampleRate;
    const frameCount = Math.floor(sampleRate * duration);
    const buffer = ctx.createBuffer(1, frameCount, sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < frameCount; i++) {
      const t = i / frameCount;
      const decay = Math.exp(-9.5 * t);
      data[i] = (Math.random() * 2 - 1) * 0.45 * decay;
    }
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 400;
    source.connect(hp);

    // 2) Short tone for pop peak with quick pitch drop
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(420, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.14);
    osc.connect(gain);

    const master = ctx.createGain();
    master.gain.value = 0.9;
    hp.connect(master);
    gain.connect(master);
    master.connect(ctx.destination);

    source.start();
    osc.start();
    osc.stop(ctx.currentTime + 0.16);
  };
}

export default function HealthBubbleGame() {
  const MAX_ACTIVE_BUBBLES = 6;
  const [isActive, setIsActive] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
  const [poppedIds, setPoppedIds] = useState<Set<string>>(new Set());
  const [bubbleLabels, setBubbleLabels] = useState<Record<string, number>>({});
  const [showSummary, setShowSummary] = useState(false);
  const [hasShownSummary, setHasShownSummary] = useState(false);
  const [plusOneTick, setPlusOneTick] = useState(0); // to retrigger +1 animation
  const [scoreHue, setScoreHue] = useState<number>(120); // 120=green, 0=red
  const playPop = usePopSound();

  // Generate bubbles with stable positions so layout feels consistent
  const bubbles: BubbleItem[] = useMemo(() => {
    // Spread bubbles horizontally and vertically; slow float with periodic fade
    const xPositions = [8, 16, 25, 38, 52, 65, 78, 88];
    const yPositions = [68, 30, 55, 20, 75, 42, 60, 28];
    const sizes = [90, 96, 104, 92, 98, 94, 108, 88];
    const durations = [18, 19, 20, 18.5, 19.5, 18.8, 20.2, 19.2];
    const delays = [0, 0.6, 0.2, 1.0, 0.4, 1.2, 0.5, 0.9];
    const drifts = [14, 10, 16, 12, 18, 11, 15, 13];

    return xPositions.map((x, i) => ({
      id: `hb-${i}`,
      xPercent: x,
      yPercent: yPositions[i],
      sizePx: sizes[i],
      floatDurationSec: durations[i],
      floatDelaySec: delays[i],
      driftXPx: drifts[i],
      hueDeg: [10, -6, 22, 0, 18, -12, 26, 8][i],
    }));
  }, []);

  // Initialize labels per bubble and rotate periodically to show more issues
  useEffect(() => {
    setBubbleLabels(prev => {
      const next: Record<string, number> = { ...prev };
      bubbles.forEach((b, i) => {
        if (typeof next[b.id] !== 'number') next[b.id] = i % ISSUE_LABELS.length;
      });
      return next;
    });

    const timers = bubbles.map((b, i) => {
      return setInterval(() => {
        setBubbleLabels(curr => {
          const currentIdx = typeof curr[b.id] === 'number' ? curr[b.id] as number : 0;
          const jump = 1 + Math.floor(Math.random() * 2);
          const nextIdx = (currentIdx + jump) % ISSUE_LABELS.length;
          return { ...curr, [b.id]: nextIdx };
        });
      }, (b.floatDurationSec * 1000) + (i * 300));
    });

    return () => { timers.forEach(t => clearInterval(t)); };
  }, [bubbles]);

  // Recover score meter color slowly back to green when flashed to red
  useEffect(() => {
    if (scoreHue === 0) {
      const toGreen = setTimeout(() => setScoreHue(120), 1000);
      return () => clearTimeout(toGreen);
    }
  }, [scoreHue]);

  const onPop = (bubble: BubbleItem, targetEl: HTMLElement) => {
    if (poppedIds.has(bubble.id) || showSummary) return;

    if (!isActive) setIsActive(true); // first click activates the game

    // Shockwave + vibrate, then pop visually
    targetEl.classList.add('bubble-blast');
    targetEl.classList.add('bubble-vibrate');
    playPop();

    setTimeout(() => {
      targetEl.classList.remove('bubble-vibrate');
      targetEl.classList.add('bubble-pop');
    }, 180);

    setTimeout(() => {
      setPoppedIds(prev => new Set(prev).add(bubble.id));
      setScore(s => s + 1);
      setPlusOneTick(t => t + 1);
      setScoreHue(0);
      setSelectedIssues(prev => {
        const idx = bubbleLabels[bubble.id];
        const label = ISSUE_LABELS[idx ?? 0];
        if (!label) return prev;
        if (prev.includes(label)) return prev;
        return [...prev, label];
      });
    }, 180 + 160);

    // Respawn bubble after short cooldown to keep flow continuous
    setTimeout(() => {
      setPoppedIds(prev => {
        const next = new Set(prev);
        next.delete(bubble.id);
        return next;
      });
    }, 2600);
  };

  useEffect(() => {
    if (score >= THRESHOLD_TO_SUMMARY && !showSummary && !hasShownSummary) {
      // Reveal summary once; avoid immediate re-open after closing
      setShowSummary(true);
      setHasShownSummary(true);
    }
  }, [score, showSummary, hasShownSummary]);

  const onPlayAgain = () => {
    setShowSummary(false);
    setHasShownSummary(false);
    setScore(0);
    setSelectedIssues([]);
    setPoppedIds(new Set());
    setPlusOneTick(0);
  };

  return (
    <div className="absolute inset-0 z-20">
      {/* +1 score burst */}
      {plusOneTick > 0 && (
        <div key={plusOneTick} className="score-plus select-none">+1</div>
      )}

      {/* Score indicator meter (visible only after first bubble click) */}
      {isActive && (
        <div className="score-indicator select-none">
          <div className="score-meter">
            <div className="score-fill" style={{ backgroundColor: `hsl(${scoreHue}, 75%, 45%)` }} />
          </div>
          <div className="score-text">Score {score}</div>
        </div>
      )}

      {/* Interactive bubbles overlay (does not block non-bubble clicks) */}
      <div className="absolute inset-0 pointer-events-none">
        {bubbles.slice(0, MAX_ACTIVE_BUBBLES).map(b => (
          poppedIds.has(b.id) ? null : (
            <div
              key={b.id}
              className="disease-bubble interactive-floating pointer-events-auto"
              style={(function(){
                // Avoid central hero text area (safe zone): x 28–72%, y 22–64%
                let x = b.xPercent;
                let y = b.yPercent;
                if (x >= 28 && x <= 72 && y >= 22 && y <= 64) {
                  x = x < 50 ? 22 : 78;
                  y = y < 50 ? 18 : 68;
                }
                return {
                  ['--x' as any]: `${x}%`,
                  ['--y' as any]: `${y}%`,
                  ['--size' as any]: `${b.sizePx}px`,
                  ['--floatDuration' as any]: `${b.floatDurationSec}s`,
                  ['--floatDelay' as any]: `${b.floatDelaySec}s`,
                  ['--driftX' as any]: `${b.driftXPx}px`,
                  ['--hue' as any]: `${b.hueDeg ?? 0}deg`,
                } as React.CSSProperties;
              })()}
              onPointerDown={(e) => onPop(b, e.currentTarget)}
              role="button"
              aria-label={`Pop ${ISSUE_LABELS[(bubbleLabels[b.id] ?? 0)]} bubble`}
              title={`Pop ${ISSUE_LABELS[(bubbleLabels[b.id] ?? 0)]}`}
            >
              {/* blast sparks */}
              <span className="blast-spark spark-tl" />
              <span className="blast-spark spark-tr" />
              <span className="blast-spark spark-bl" />
              <span className="blast-spark spark-br" />
              <span className="blast-spark spark-l" />
              <span className="blast-spark spark-r" />
              <span className="bubble-label select-none">{ISSUE_SHORT_LABELS[(bubbleLabels[b.id] ?? 0)]}</span>
            </div>
          )
        ))}
      </div>

      {/* Final summary modal (Medical-style health report) */}
      {showSummary && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/40 backdrop-blur-sm p-4"
          onClick={() => setShowSummary(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-[92vw] max-w-2xl max-h-[80vh] rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative px-5 py-4 bg-gradient-to-r from-emerald-600 to-green-500 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shadow">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold tracking-wide">AyurGenX Health Report</h3>
                    <p className="text-[11px] opacity-90">Generated: {new Date().toLocaleString()}</p>
                  </div>
                </div>
                <button
                  className="p-2 rounded-lg bg-white/15 hover:bg-white/25 transition"
                  aria-label="Close report"
                  onClick={() => setShowSummary(false)}
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="px-5 py-4 grid gap-4 flex-1 overflow-y-auto">
              {/* Overview cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl border border-slate-200 p-3 bg-slate-50">
                  <div className="text-xs text-slate-600">Engagement Score</div>
                  <div className="mt-1 text-xl font-bold text-slate-900">{score}</div>
                  <div className="mt-2 score-meter">
                    <div
                      className="score-fill"
                      style={{ backgroundColor: `hsl(${Math.max(0, 120 - selectedIssues.length * 12)}, 75%, 45%)` }}
                    />
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 p-3 bg-slate-50">
                  <div className="text-xs text-slate-600">Issues Selected</div>
                  <div className="mt-1 text-xl font-bold text-slate-900">{selectedIssues.length}</div>
                  <div className="mt-1 text-[11px] text-slate-600">Tap reflects your priorities</div>
                </div>
                <div className="rounded-xl border border-slate-200 p-3 bg-slate-50">
                  <div className="text-xs text-slate-600">Report ID</div>
                  <div className="mt-1 text-base font-bold text-slate-900">AGX-{String(Math.floor(Math.random()*90000+10000))}</div>
                  <div className="mt-1 text-[11px] text-slate-600">Temporary preview</div>
                </div>
              </div>

              {/* Issues and descriptions */}
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2"><Heart className="w-4 h-4 text-emerald-700" /> Selected Health Concerns</h4>
                {selectedIssues.length === 0 ? (
                  <p className="text-gray-600">No issues selected.</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedIssues.map((issue) => (
                      <div key={issue} className="rounded-xl bg-slate-100 p-2 border border-slate-200">
                        <div className="font-semibold text-slate-900 flex items-center gap-2"><Activity className="w-4 h-4 text-emerald-700" /> {issue}</div>
                        {ISSUE_DESCRIPTIONS[issue] && (
                          <div className="text-[12px] text-slate-700 mt-1">{ISSUE_DESCRIPTIONS[issue]}</div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Recommendations */}
              <div className="rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50 p-4">
                <h4 className="text-base font-semibold text-emerald-900 flex items-center gap-2"><Heart className="w-4 h-4 text-emerald-700" /> Personalized Recommendations</h4>
                <ul className="mt-2 text-[13px] text-slate-800 list-disc pl-5">
                  <li>Begin a clean, portion-aware meal plan with anti-inflammatory focus.</li>
                  <li>Track sleep and stress (HRV); add gentle breathwork + evening wind‑down.</li>
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-2">
                <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                  Start My Recovery Journey
                </button>
                <button onClick={onPlayAgain} className="px-5 py-2.5 rounded-full bg-white text-gray-900 font-semibold border border-gray-200 shadow hover:shadow-md hover:scale-105 transition-all">
                  Play Again
                </button>
              </div>
            </div>

            {/* Footer disclaimer */}
            <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-600">
              This preview is informational and supports lifestyle guidance. For diagnostics and prescriptions, consult a qualified medical professional.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
