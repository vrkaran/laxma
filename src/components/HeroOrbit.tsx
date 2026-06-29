import { motion } from "framer-motion";

const dataStreamItems = [
  "ANALYZING",
  "VITALS",
  "METABOLISM",
  "DOSHA BALANCE",
  "PREDICTING",
  "PERSONALIZING",
];

export default function HeroOrbit() {
  return (
    <div className="absolute left-[68%] top-[33%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <div className="absolute inset-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
      <div
        className="relative h-80 w-80"
        style={{ clipPath: "circle(48% at 50% 38%)" }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-white/10"
        >
          <div
            className="absolute h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-lg shadow-emerald-400/60"
            style={{ left: "50%", top: 0, transform: "translate(-50%, -50%)" }}
          />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-8 rounded-full border border-emerald-300/20"
        >
          <div
            className="absolute h-2 w-2 rotate-45 bg-emerald-200/70"
            style={{ left: "100%", top: "50%", transform: "translate(-50%, -50%)" }}
          />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 rounded-full border border-emerald-300/30"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <motion.div
              key={deg}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, delay: deg / 120, repeat: Infinity }}
              className="absolute h-2 w-2 rounded-full bg-emerald-300 shadow-lg shadow-emerald-400/50"
              style={{
                left: "50%",
                top: "50%",
                transform: `rotate(${deg}deg) translateY(-160px)`,
              }}
            />
          ))}
        </motion.div>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -6, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.4 }}
            className="absolute h-1 w-1 rounded-full bg-emerald-200/60"
            style={{ left: `${20 + i * 14}%`, top: `${15 + (i % 3) * 20}%` }}
          />
        ))}
      </div>
      <div className="absolute right-[100%] top-[14%] flex flex-col items-end gap-2 pr-4">
        <div className="mb-1 flex h-6 w-6 items-center justify-center rounded-md border border-emerald-300/30 bg-emerald-400/10 text-[9px] font-semibold text-emerald-200">
          AI
        </div>
        {dataStreamItems.map((label, i) => (
          <motion.div
            key={label}
            animate={{ opacity: [0, 1, 1, 0], y: [8, 0, 0, -4] }}
            transition={{
              duration: 2,
              delay: i * 0.6,
              repeat: Infinity,
              repeatDelay: dataStreamItems.length * 0.6,
            }}
            className="flex items-center gap-2 text-[10px] tracking-wider text-emerald-200/80"
          >
            {label}
            <span className="h-px w-4 bg-emerald-300/40" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}