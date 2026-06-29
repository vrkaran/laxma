import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  Leaf,
  Sparkles,
  ShieldCheck,
  Activity,
} from "lucide-react";

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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#081B17] via-[#071614] to-[#020807] py-20">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 to-transparent z-10 pointer-events-none" />
      {/* background glow */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
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
          className="absolute left-20 top-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-[120px]"
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
          className="absolute right-20 bottom-16 h-96 w-96 rounded-full bg-cyan-300/10 blur-[140px]"
        />

      </div>

      {/* floating particles */}

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -25, 0],
            opacity: [.2, .8, .2],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            delay: i * .25,
            repeat: Infinity,
          }}
          className="absolute h-[2px] w-[2px] rounded-full bg-emerald-300"
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
            text-5xl
            leading-tight
            text-white
            md:text-7xl
            "
          >
            Ancient Wisdom.
            <br />

            <span className="bg-gradient-to-r from-[#EFD98B] via-white to-[#7EF2C8] bg-clip-text text-transparent">

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
            text-white/65
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

        <div className="relative mt-16 grid items-center gap-16 lg:grid-cols-3">

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

            <div className="flex items-center gap-5 rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 backdrop-blur-sm transition-colors hover:border-[#EFD98B]/20">

              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#EFD98B]/20 bg-[#EFD98B]/5">

                <Leaf
                  className="h-8 w-8 text-[#EFD98B]"
                />

              </div>

              <div>

                <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#EFD98B]">

                  Ayurveda

                </p>

                <h3 className="mt-2 text-3xl font-serif text-white">

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

                  <div className="h-2 w-2 rounded-full bg-[#EFD98B]" />

                  <p className="text-lg text-white/70">

                    {item}

                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* CENTER */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute h-40 w-40 rounded-full border border-dashed border-white/10"
          />
          <motion.div
            initial={{ opacity: 0, scale: .8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center h-[520px]"
          >

            {/* Glow */}

            <div className="absolute h-72 w-72 rounded-full bg-emerald-400/10 blur-[120px]" />

            {/* Line */}

            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: 260 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
              className="absolute w-[2px] bg-gradient-to-b from-[#EFD98B] via-white to-[#7EF2C8]"
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
              className="absolute top-20 flex h-20 w-20 items-center justify-center rounded-full border border-[#EFD98B]/30 bg-[#EFD98B]/10 backdrop-blur-sm"
            >
              <Leaf className="h-9 w-9 text-[#EFD98B]" />
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
              className="absolute bottom-20 flex h-20 w-20 items-center justify-center rounded-full border border-[#7EF2C8]/30 bg-[#7EF2C8]/10 backdrop-blur-sm"
            >
              <Brain className="h-9 w-9 text-[#7EF2C8]" />
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
              className="relative z-20 flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm"
            >
              <Cpu className="h-11 w-11 text-white" />
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
                className="absolute h-2 w-2 rounded-full bg-[#7EF2C8]"
              />
            ))}

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

            <div className="flex items-center justify-end gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 backdrop-blur-sm transition-colors hover:border-[#7EF2C8]/20">

              <div className="text-right">

                <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#7EF2C8]">
                  Artificial Intelligence
                </p>

                <h3 className="mt-2 text-3xl font-serif text-white">
                  AI Understands.
                </h3>

              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#7EF2C8]/20 bg-[#7EF2C8]/5">
                <Brain className="h-8 w-8 text-[#7EF2C8]" />
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
                  className="flex items-center justify-end gap-5"
                >

                  <p className="text-lg text-right text-white/70">
                    {item}
                  </p>

                  <div className="h-2 w-2 rounded-full bg-[#7EF2C8]" />

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

          <Activity className="mx-auto mb-8 h-10 w-10 text-[#7EF2C8]" />

          <h2
            className="
            font-serif
            text-5xl
            md:text-6xl
            text-white
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
            text-white/60
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