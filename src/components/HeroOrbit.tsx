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
      <div className="absolute inset-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-[#4A6B53]/8 blur-3xl" />
      <div
        className="relative h-80 w-80"
        style={{ clipPath: "circle(48% at 50% 38%)" }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-[#4A6B53]/25"
        >
          <div
            className="absolute h-2.5 w-2.5 rounded-full bg-[#4A6B53] shadow-md shadow-[#4A6B53]/40"
            style={{ left: "50%", top: 0, transform: "translate(-50%, -50%)" }}
          />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-8 rounded-full border border-[#D4B85C]/30"
        >
          <div
            className="absolute h-2 w-2 rotate-45 bg-[#D4B85C]/80"
            style={{ left: "100%", top: "50%", transform: "translate(-50%, -50%)" }}
          />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.06, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 rounded-full border border-[#4A6B53]/25"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <motion.div
              key={deg}
              animate={{ opacity: [0.25, 0.9, 0.25] }}
              transition={{ duration: 2, delay: deg / 120, repeat: Infinity }}
              className="absolute h-2 w-2 rounded-full bg-[#4A6B53] shadow-md shadow-[#4A6B53]/40"
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
            animate={{ y: [0, -6, 0], opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.4 }}
            className="absolute h-1 w-1 rounded-full bg-[#4A6B53]/60"
            style={{ left: `${20 + i * 14}%`, top: `${15 + (i % 3) * 20}%` }}
          />
        ))}
      </div>
      <div className="absolute right-[100%] top-[14%] flex flex-col items-end gap-2 pr-4">
        <div className="mb-1 flex h-6 w-6 items-center justify-center rounded-md border border-[#4A6B53]/30 bg-[#4A6B53]/10 text-[9px] font-semibold text-[#1C3322]">
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
            className="flex items-center gap-2 text-[10px] tracking-wider text-[#1C3322]/70"
          >
            {label}
            <span className="h-px w-4 bg-[#4A6B53]/40" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}