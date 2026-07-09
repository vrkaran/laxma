import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  Leaf,
  Pulse,
} from "@phosphor-icons/react";

const ayurveda = [
  "5000+ Years of Ancient Wisdom",
  "Dosha Analysis",
  "Natural Herbs & Nutrition",
  "Daily Lifestyle Balance",
  "Root Cause Healing",
];

const ai = [
  "AI Health Intelligence",
  "Biomarker Analysis",
  "Adaptive Learning",
  "Real-time Recommendations",
  "Continuous Optimization",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function StorySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F9F9F6] via-[#F7F7F2] to-[#F5F5F1] py-20">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/60 to-transparent z-10 pointer-events-none" />
      {/* background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #1C3322 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* ambient tints (glow removed, kept extremely soft) */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [-80, 60, -80],
            y: [-40, 20, -40],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute left-20 top-24 h-72 w-72 rounded-full bg-[#4A6B53]/5 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [60, -40, 60],
            y: [40, -20, 40],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute right-20 bottom-16 h-96 w-96 rounded-full bg-[#D4B85C]/5 blur-[140px]"
        />
      </div>

      {/* floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -25, 0],
            opacity: [.15, .5, .15],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            delay: i * .25,
            repeat: Infinity,
          }}
          className="absolute h-[2px] w-[2px] rounded-full bg-[#4A6B53]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative z-20 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >
          <h2
            className="
            mt-10
            font-serif
            text-4xl
            leading-tight
            text-[#1C3322]
            sm:text-5xl
            md:text-7xl
            "
          >
            Ancient Wisdom.
            <br />
            <span className="bg-gradient-to-r from-[#0C6C57] via-[#4A6B53] to-[#D4B85C] bg-clip-text text-transparent">
              Modern Intelligence.
            </span>
          </h2>

          <p
            className="
            mx-auto
            mt-8
            max-w-3xl
            text-lg
            leading-9
            text-[#55665A]
            "
          >
            AyurGenX doesn't replace Ayurveda with AI.
            <br />
            It empowers timeless Ayurvedic knowledge using modern
            intelligence to deliver deeply personalized health guidance
            for every individual.
          </p>
        </motion.div>

        {/* Main */}
        <div className="relative mt-12 grid items-center gap-10 lg:mt-16 lg:gap-16 lg:grid-cols-3">

          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              delay: .2,
              duration: .7,
            }}
          >
            <div className="flex items-center gap-5 rounded-xl border border-[#E0E6E1] bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:border-[#D4B85C]/50 hover:shadow-md">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#D4B85C]/30 bg-[#D4B85C]/10">
                <Leaf weight="duotone" className="h-8 w-8 text-[#B8862E]" />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#B8862E]">
                  Ayurveda
                </p>
                <h3 className="mt-2 text-3xl font-serif text-[#1C3322]">
                  Nature Knows.
                </h3>
              </div>
            </div>

            <div className="mt-12 space-y-8">
              {ayurveda.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: .3 + i * .15,
                  }}
                  className="flex items-center gap-5"
                >
                  <div className="h-2 w-2 rounded-full bg-[#D4B85C]" />
                  <p className="text-lg text-[#37524C]">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CENTER — desktop pillar (lg and up only) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute hidden lg:block h-40 w-40 rounded-full border border-dashed border-[#D7E4DF]"
          />
          <motion.div
            initial={{ opacity: 0, scale: .8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative hidden lg:flex items-center justify-center h-[520px]"
          >
            {/* Soft tint */}
            <div className="absolute h-72 w-72 rounded-full bg-[#4A6B53]/5 blur-[120px]" />

            {/* Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: 260 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
              className="absolute w-[2px] bg-gradient-to-b from-[#D4B85C] via-[#4A6B53] to-[#0C6C57]"
            />

            {/* Top */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute top-20 flex h-20 w-20 items-center justify-center rounded-full border border-[#D4B85C]/30 bg-[#D4B85C]/10"
            >
              <Leaf weight="duotone" className="h-9 w-9 text-[#B8862E]" />
            </motion.div>

            {/* Bottom */}
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute bottom-20 flex h-20 w-20 items-center justify-center rounded-full border border-[#4A6B53]/30 bg-[#4A6B53]/10"
            >
              <Brain weight="duotone" className="h-9 w-9 text-[#4A6B53]" />
            </motion.div>

            {/* Center */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [.9, 1, .9],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="relative z-20 flex h-28 w-28 items-center justify-center rounded-full border border-[#E0E6E1] bg-white shadow-sm"
            >
              <Cpu weight="duotone" className="h-11 w-11 text-[#1C3322]" />
            </motion.div>

            {/* Data Particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [-110, 110],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2.5,
                  delay: i * .35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-2 w-2 rounded-full bg-[#4A6B53]"
              />
            ))}
          </motion.div>

          {/* CENTER — compact mobile fusion (below lg) */}
          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="lg:hidden flex items-center justify-center gap-3 py-2 sm:gap-4"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#D4B85C]/30 bg-[#D4B85C]/10 sm:h-16 sm:w-16">
              <Leaf weight="duotone" className="h-6 w-6 text-[#B8862E] sm:h-7 sm:w-7" />
            </div>

            <div className="relative h-px w-6 bg-gradient-to-r from-[#D4B85C] to-[#55665A]/30 sm:w-10">
              <motion.span
                animate={{ x: ["-100%", "200%"], opacity: [0, 1, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-[#1C3322]"
              />
            </div>

            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [.9, 1, .9] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border border-[#E0E6E1] bg-white shadow-sm sm:h-20 sm:w-20"
            >
              <Cpu weight="duotone" className="h-8 w-8 text-[#1C3322] sm:h-9 sm:w-9" />
            </motion.div>

            <div className="relative h-px w-6 bg-gradient-to-r from-[#55665A]/30 to-[#4A6B53] sm:w-10">
              <motion.span
                animate={{ x: ["-100%", "200%"], opacity: [0, 1, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: .9 }}
                className="absolute top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-[#1C3322]"
              />
            </div>

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#4A6B53]/30 bg-[#4A6B53]/10 sm:h-16 sm:w-16">
              <Brain weight="duotone" className="h-6 w-6 text-[#4A6B53] sm:h-7 sm:w-7" />
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              delay: .4,
              duration: .7,
            }}
          >
            <div className="flex flex-row-reverse items-center justify-start gap-4 rounded-xl border border-[#E0E6E1] bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:border-[#4A6B53]/40 hover:shadow-md lg:flex-row lg:justify-end">
              <div className="text-left lg:text-right">
                <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#4A6B53]">
                  Artificial Intelligence
                </p>
                <h3 className="mt-2 text-3xl font-serif text-[#1C3322]">
                  AI Understands.
                </h3>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#4A6B53]/30 bg-[#4A6B53]/10">
                <Brain weight="duotone" className="h-8 w-8 text-[#4A6B53]" />
              </div>
            </div>

            <div className="mt-12 space-y-8">
              {ai.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: .3 + i * .15,
                  }}
                  className="flex flex-row-reverse items-center justify-start gap-5 lg:flex-row lg:justify-end"
                >
                  <p className="text-lg text-left text-[#37524C] lg:text-right">
                    {item}
                  </p>
                  <div className="h-2 w-2 rounded-full bg-[#4A6B53]" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: .5,
            duration: .8,
          }}
          className="mt-16 text-center"
        >
          <Pulse weight="duotone" className="mx-auto mb-8 h-10 w-10 text-[#4A6B53]" />

          <h2
            className="
            font-serif
            text-4xl
            sm:text-5xl
            md:text-6xl
            text-[#1C3322]
            "
          >
            Nature × Intelligence
          </h2>

          <p
            className="
            mx-auto
            mt-8
            max-w-3xl
            text-lg
            leading-9
            text-[#55665A]
            "
          >
            By combining timeless Ayurvedic wisdom with continuously
            learning AI, AyurGenX creates a living health companion
            that evolves with your body every single day.
          </p>
        </motion.div>

      </div>
    </section>
  );
}