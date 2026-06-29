import { motion } from "framer-motion";
import {
  ScanLine,
  BrainCircuit,
  Sparkles,
  RefreshCw,
  Dna,
  Activity,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    label: "Capture",
    title: "We Listen to Your Body",
    description:
      "Your vitals, lifestyle, dosha profile and 50+ biomarkers are gathered into a single, living health signal.",
    icon: ScanLine,
    color: "#84D8FF",
  },
  {
    label: "Analyze",
    title: "Ayurveda Meets AI",
    description:
      "Our hybrid engine fuses 5000+ years of Ayurvedic logic with deep-learning models to find the root cause.",
    icon: BrainCircuit,
    color: "#7EF2C8",
  },
  {
    label: "Personalize",
    title: "A Plan Built for You",
    description:
      "Herbs, nutrition, routines and programs are tailored precisely to your constitution and current state.",
    icon: Sparkles,
    color: "#EFD98B",
  },
  {
    label: "Adapt",
    title: "It Learns Every Day",
    description:
      "As your body responds, the intelligence recalibrates — getting smarter and more personal over time.",
    icon: RefreshCw,
    color: "#9EF5A5",
  },
];

const capabilities = [
  { icon: Dna, label: "Genetic & Dosha Mapping" },
  { icon: Activity, label: "Real-time Biomarker Tracking" },
  { icon: ShieldCheck, label: "Private & Secure by Design" },
];

export default function AISection() {
  return (
    <section className="relative overflow-hidden bg-[#071513] py-24">
      {/* Top transition (seamless from dashboard) */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#071513] to-transparent z-10 pointer-events-none" />

      {/* Background glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute left-1/2 top-10 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[#7EF2C8]/10 blur-[150px]"
      />

      <div className="relative z-20 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-serif text-5xl leading-tight text-white md:text-6xl">
            Intelligence That
            <span className="block bg-gradient-to-r from-[#EFD98B] to-[#7EF2C8] bg-clip-text text-transparent">
              Understands You
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/60">
            Behind every recommendation is a four-stage engine that learns who
            you are, decodes what your body needs, and evolves with you each day.
          </p>
        </motion.div>

        {/* Pipeline */}
        <div className="relative mt-20">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="absolute left-0 right-0 top-9 hidden h-px origin-left bg-gradient-to-r from-[#84D8FF] via-[#7EF2C8] to-[#EFD98B] lg:block"
          />

          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="relative"
                >
                  {/* Node */}
                  <div className="relative z-10 mx-auto flex h-[72px] w-[72px] items-center justify-center">
                    <div
                      className="absolute inset-0 rounded-full blur-md"
                      style={{ background: `${step.color}30` }}
                    />
                    <div
                      className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full border bg-[#0B1F1B]"
                      style={{ borderColor: `${step.color}55` }}
                    >
                      <Icon size={28} color={step.color} />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="mt-8 rounded-[26px] border border-white/10 bg-white/[0.03] p-7 text-center transition-colors hover:border-white/20">
                    <p
                      className="text-xs font-semibold uppercase tracking-[0.32em]"
                      style={{ color: step.color }}
                    >
                      {`0${i + 1} · ${step.label}`}
                    </p>
                    <h3 className="mt-4 font-serif text-2xl text-white">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-7 text-white/55">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Capability strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-4"
        >
          {capabilities.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm text-white/75 backdrop-blur-sm"
            >
              <Icon className="h-4 w-4 text-[#7EF2C8]" />
              {label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
