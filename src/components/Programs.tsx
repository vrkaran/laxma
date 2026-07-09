import { motion } from "framer-motion";
import {
  Moon,
  Heartbeat,
  Brain,
  Leaf,
  ArrowRight,
  Sparkle,
  ShieldCheck,
  Pulse,
} from "@phosphor-icons/react";

const programs = [
  {
    title: "Sleep Reset",
    duration: "21 Days",
    success: "94%",
    icon: Moon,
    color: "#7FA6C4",
  },
  {
    title: "Stress Balance",
    duration: "28 Days",
    success: "91%",
    icon: Brain,
    color: "#4A6B53",
  },
  {
    title: "Gut Restore",
    duration: "30 Days",
    success: "96%",
    icon: Leaf,
    color: "#D4B85C",
  },
];

export default function ProgramsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F1] py-24">

      {/* Transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#F9F9F6] to-[#F5F5F1] pointer-events-none z-10" />

      {/* Background tint */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [.08, .15, .08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-0 top-32 h-[500px] w-[500px] rounded-full bg-[#4A6B53]/10 blur-[150px]"
      />

      <div className="relative z-20 mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-[1fr_560px]">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
          >

            <h2 className="font-serif text-4xl leading-tight text-[#1C3322] sm:text-5xl md:text-6xl">
              Personalized
              <span className="block bg-gradient-to-r from-[#0C6C57] to-[#D4B85C] bg-clip-text text-transparent">
                Wellness Programs
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-[#48635D]">
              Every recommendation adapts to your body,
              habits and goals. Our AI continuously
              improves each wellness program based on
              your progress.
            </p>

            <div className="mt-16 space-y-8">
              {programs.map((program, index) => {

                const Icon = program.icon;

                return (
                  <motion.div
                    key={program.title}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * .15,
                    }}
                    whileHover={{
                      x: 12,
                    }}
                    className="group flex items-center justify-between rounded-[28px] border border-[#D7E4DF] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,.05)] transition-shadow duration-300 hover:border-[#0C6C57]/25 hover:shadow-[0_28px_70px_rgba(12,108,87,.12)]"
                  >

                    <div className="flex items-center gap-5">

                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: `${program.color}20`,
                        }}
                      >
                        <Icon
                          weight="duotone"
                          size={24}
                          color={program.color}
                        />
                      </div>

                      <div>
                        <h3 className="text-2xl font-medium text-[#1C3322]">
                          {program.title}
                        </h3>

                        <p className="mt-2 text-[#5B746E]">
                          {program.duration}
                        </p>
                      </div>

                    </div>

                    <div className="text-right">
                      <p
                        className="text-3xl font-light"
                        style={{
                          color: program.color,
                        }}
                      >
                        {program.success}
                      </p>

                      <p className="text-sm text-[#5B746E]">
                        Success Rate
                      </p>
                    </div>

                  </motion.div>
                );
              })}
            </div>

            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: .98,
              }}
              className="group mt-16 flex items-center gap-3 rounded-full bg-[#4A6B53] px-8 py-4 text-white shadow-lg transition-all duration-300 hover:bg-[#3D5A46] hover:shadow-[0_18px_40px_-12px_rgba(74,107,83,.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A6B53]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F5F1]"
            >
              Explore All Programs
              <ArrowRight weight="bold" size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>

          </motion.div>

          {/* PHONE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
            className="relative flex justify-center"
          >

            {/* Floating tint */}
            <div className="absolute h-[420px] w-[420px] rounded-full bg-[#4A6B53]/10 blur-[130px]" />

            {/* Phone */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative h-[620px] w-[290px] rounded-[46px] border-[10px] border-[#0C6C57] bg-[#EAF2EC] shadow-[0_50px_120px_rgba(0,0,0,.12)] sm:h-[700px] sm:w-[340px]"
            >

              {/* Dynamic Island */}
              <div className="absolute left-1/2 top-4 h-7 w-32 -translate-x-1/2 rounded-full bg-[#1C3322]" />

              {/* Screen */}
              <div className="p-7 pt-14">

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#6A827C]">
                      Good Morning,
                    </p>

                    <h3 className="mt-1 text-3xl text-[#1C3322]">
                      Aarav 👋
                    </h3>
                  </div>

                  <Heartbeat
                    weight="duotone"
                    className="text-[#4A6B53]"
                  />
                </div>

                <div className="mt-10 rounded-[28px] bg-white p-7 border border-[#D7E4DF]">
                  <p className="uppercase tracking-[0.3em] text-xs text-[#4A6B53]">
                    TODAY
                  </p>

                  <h3 className="mt-4 text-4xl text-[#1C3322]">
                    Sleep Reset
                  </h3>

                  <p className="mt-4 text-[#5B746E] leading-8">
                    Day 12 of 21
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">

                  {([
                    ["Sleep", "92%", Moon],
                    ["Vitality", "87", Pulse],
                    ["Protected", "100%", ShieldCheck],
                    ["AI Coach", "Live", Sparkle],
                  ] as const).map(([title, value, Icon], i) => {
                    const CardIcon = Icon as React.ElementType;

                    return (
                      <motion.div
                        key={title}
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: .4 + i * .1,
                        }}
                        whileHover={{
                          y: -6,
                          scale: 1.03,
                        }}
                        className="rounded-2xl border border-[#D7E4DF] bg-white p-5"
                      >
                        <CardIcon
                          weight="duotone"
                          className="text-[#4A6B53]"
                          size={22}
                        />

                        <p className="mt-5 text-3xl text-[#1C3322]">
                          {value}
                        </p>

                        <p className="mt-2 text-sm text-[#6A827C]">
                          {title}
                        </p>
                      </motion.div>
                    );
                  })}

                </div>

                {/* Progress */}
                <div className="mt-8 rounded-[26px] bg-white border border-[#D7E4DF] p-6">
                  <div className="flex items-center justify-between">
                    <p className="text-[#1C3322]">
                      Weekly Progress
                    </p>

                    <span className="text-[#4A6B53]">
                      +18%
                    </span>
                  </div>

                  <div className="mt-6 h-[8px] rounded-full bg-[#EAF2EC]">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: "82%",
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1.5,
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-[#4A6B53] to-[#D4B85C]"
                    />
                  </div>
                </div>

              </div>

            </motion.div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -left-8 top-24 hidden rounded-[26px] border border-[#DCE5E1] bg-white p-5 shadow-[0_25px_60px_rgba(0,0,0,.08)] sm:block"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[#6A827C]">
                AI Recommendation
              </p>

              <h4 className="mt-3 text-xl text-[#1C3322]">
                Ashwagandha
              </h4>

              <p className="mt-2 text-[#5B746E]">
                Evening • 500mg
              </p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{
                y: [0, 12, 0],
                rotate: [2, -2, 2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute -right-10 bottom-20 hidden rounded-[26px] border border-[#DCE5E1] bg-white p-6 shadow-[0_25px_60px_rgba(0,0,0,.08)] sm:block"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[#6A827C]">
                Recovery
              </p>

              <h4 className="mt-3 text-4xl text-[#0C6C57]">
                94%
              </h4>

              <p className="mt-2 text-[#5B746E]">
                Excellent Progress
              </p>
            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}