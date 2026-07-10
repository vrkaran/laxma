import { motion } from "framer-motion";
import {
  Pulse,
  Brain,
  Moon,
  BowlFood,
  ShieldCheck,
  ArrowUpRight,
} from "@phosphor-icons/react";

const cards = [
  { title: "AI Vitality", value: "87", subtitle: "Excellent", icon: Pulse, color: "#4A6B53", score: 87 },
  { title: "Dosha Balance", value: "Balanced", subtitle: "Vata • Pitta • Kapha", icon: Brain, color: "#B8862E", score: 78 },
  { title: "Sleep Score", value: "92%", subtitle: "Recovered", icon: Moon, color: "#7FA6C4", score: 92 },
  { title: "Nutrition", value: "96%", subtitle: "Optimized", icon: BowlFood, color: "#6E9C78", score: 96 },
];

export default function DashboardSection() {
  return (
    <section className="relative overflow-hidden bg-[#F9F9F6] py-24">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#F5F5F1] to-transparent z-10 pointer-events-none" />

      {/* Background tint (glow removed, kept extremely soft) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,107,83,.05),transparent_55%)]" />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [.08, .14, .08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#4A6B53]/10 blur-[140px]"
      />

      <div className="relative z-20 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >
          <h2 className="mt-10 font-serif text-4xl leading-tight text-[#1C3322] sm:text-5xl md:text-6xl">
            Everything Your Body
            <span className="block bg-gradient-to-r from-[#D4B85C] to-[#4A6B53] bg-clip-text text-transparent">
              Needs. One Dashboard.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#55665A]">
            Track your vitality, dosha balance, nutrition,
            sleep and personalized recommendations from one
            intelligent wellness dashboard.
          </p>
        </motion.div>

        {/* Dashboard */}
        <motion.div
          initial={{
            opacity: 0,
            scale: .94,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="relative mt-16"
        >
          {/* Soft shadow instead of glow */}
          <div className="absolute inset-0 rounded-[40px] bg-[#4A6B53]/5 blur-[80px]" />

          {/* Window */}
          <div className="relative overflow-hidden rounded-[36px] border border-[#E0E6E1] bg-white shadow-[0_30px_80px_rgba(28,51,34,.08)]">

            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-[#E0E6E1] px-8 py-5">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-[#E0937D]" />
                <div className="h-3 w-3 rounded-full bg-[#D4B85C]" />
                <div className="h-3 w-3 rounded-full bg-[#4A6B53]" />
              </div>

              <div className="rounded-full bg-[#EAF2EC] px-5 py-2 text-sm text-[#55665A]">
                dashboard.ayurgenx.ai
              </div>

              <ShieldCheck
                weight="duotone"
                className="h-5 w-5 text-[#4A6B53]"
              />
            </div>

            {/* Content */}
            <div className="grid lg:grid-cols-[280px_1fr]">

              {/* Sidebar */}
              <div className="border-b border-[#E0E6E1] bg-[#FDFCFA] p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#4A6B53] to-[#D4B85C]" />
                  <div>
                    <p className="text-xl text-[#1C3322]">
                      Aarav
                    </p>
                    <p className="text-sm text-[#6A827C]">
                      Wellness Score
                    </p>
                  </div>
                </div>

                <div className="mt-14 space-y-5">
                  {[
                    "Dashboard",
                    "Assessment",
                    "Nutrition",
                    "Programs",
                    "AI Coach",
                    "Reports",
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      whileHover={{
                        x: 8,
                      }}
                      className={`flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 transition ${
                        i === 0
                          ? "bg-[#4A6B53]/10 text-[#4A6B53]"
                          : "text-[#55665A] hover:bg-[#EAF2EC]"
                      }`}
                    >
                      <span>
                        {item}
                      </span>
                      <ArrowUpRight
                        weight="bold"
                        size={16}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Main Dashboard */}
              <div className="p-6 sm:p-8">
                <div className="grid gap-6 md:grid-cols-2">
                  {cards.map((card, i) => {
                    const Icon = card.icon;
                    return (
                      <motion.div
                        key={card.title}
                        initial={{
                          opacity: 0,
                          y: 30,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: i * .12,
                        }}
                        whileHover={{
                          y: -6,
                        }}
                        className="group rounded-[28px] border border-[#E0E6E1] bg-white p-6 shadow-sm transition-colors duration-300 hover:border-[#4A6B53]/30 sm:p-7"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="uppercase tracking-[0.28em] text-xs text-[#6A827C]">
                              {card.title}
                            </p>

                            <h3 className="mt-5 text-5xl font-light text-[#1C3322]">
                              {card.value}
                            </h3>

                            <p
                              className="mt-4"
                              style={{
                                color: card.color,
                              }}
                            >
                              {card.subtitle}
                            </p>
                          </div>

                          <div
                            className="flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                            style={{
                              background: `${card.color}18`,
                            }}
                          >
                            <Icon
                              weight="duotone"
                              size={28}
                              color={card.color}
                            />
                          </div>
                        </div>

                        <div className="mt-8 h-[2px] rounded-full bg-[#EAF2EC]">
                          <motion.div
                            initial={{
                              width: 0,
                            }}
                            whileInView={{
                              width: `${card.score}%`,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 1.4,
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-[#4A6B53] to-[#D4B85C]"
                          />
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Analytics Row */}
                <div className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_.9fr]">

                  {/* Weekly Progress */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: .5,
                    }}
                    className="rounded-[30px] border border-[#E0E6E1] bg-white p-6 sm:p-8"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="uppercase tracking-[0.3em] text-xs text-[#6A827C]">
                          Weekly Wellness Trend
                        </p>
                        <h3 className="mt-3 text-3xl text-[#1C3322]">
                          AI Progress
                        </h3>
                      </div>

                      <Pulse
                        weight="duotone"
                        className="text-[#4A6B53]"
                      />
                    </div>

                    <svg
                      viewBox="0 0 600 220"
                      className="mt-10 w-full"
                    >
                      <defs>
                        <linearGradient
                          id="dashboardGraph"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#D4B85C" />
                          <stop offset="100%" stopColor="#4A6B53" />
                        </linearGradient>
                      </defs>

                      {[0, 1, 2, 3].map((i) => (
                        <line
                          key={i}
                          x1="0"
                          x2="600"
                          y1={40 + i * 45}
                          y2={40 + i * 45}
                          stroke="#EAF2EC"
                        />
                      ))}

                      <motion.path
                        d="M0 175 L70 155 L130 165 L205 120 L275 130 L350 92 L425 105 L505 58 L600 38"
                        fill="none"
                        stroke="url(#dashboardGraph)"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{
                          pathLength: 0,
                        }}
                        whileInView={{
                          pathLength: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 2,
                        }}
                      />

                      <motion.circle
                        cx="600"
                        cy="38"
                        r="7"
                        fill="#4A6B53"
                        animate={{
                          scale: [1, 1.6, 1],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.4,
                        }}
                      />
                    </svg>
                  </motion.div>

                  {/* AI Coach */}
<motion.div
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: .7,
                    }}
                    className="relative overflow-hidden rounded-[30px] border border-[#E0E6E1] p-6 sm:p-8"
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(ellipse 80% 70% at 50% 40%, #A9CBB0 0%, #C9DECD 40%, #EAF2EC 75%, #EAF2EC 100%)`,
                      }}
                    />
                    <div
                      className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                      }}
                    />
                    <div className="relative z-10">
                    <Brain
                      weight="duotone"
                      className="text-[#4A6B53]"
                      size={34}
                    />

                    <p className="mt-8 uppercase tracking-[0.3em] text-xs text-[#6A827C]">
                      AI COACH
                    </p>

                    <h3 className="mt-4 text-3xl text-[#1C3322]">
                      Today's Insight
                    </h3>

                    <p className="mt-6 leading-8 text-[#55665A]">
                      Based on your recent sleep,
                      stress and nutrition patterns,
                      increasing hydration and taking
                      a short evening walk may improve
                      tomorrow's recovery score by
                      approximately 12%.
                    </p>

                    <motion.button
                      whileHover={{
                        scale: 1.03,
                      }}
                      whileTap={{
                        scale: .98,
                      }}
                      className="mt-10 w-full rounded-full bg-[#4A6B53] py-4 text-white transition-all duration-300 hover:bg-[#3D5A46] hover:shadow-[0_18px_40px_-12px_rgba(74,107,83,.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A6B53]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#EAF2EC]"
                    >
                      Open AI Coach
                    </motion.button>
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: .3,
          }}
          className="mt-16 grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-4"
        >
          {[
            ["97%", "Prediction Accuracy"],
            ["24/7", "AI Monitoring"],
            ["50+", "Health Biomarkers"],
            ["5000+", "Ayurvedic Knowledge"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-[26px] border border-[#E0E6E1] bg-white p-6 text-center shadow-sm transition-colors duration-300 hover:border-[#4A6B53]/30 sm:p-8"
            >
              <h3 className="text-5xl font-light bg-gradient-to-r from-[#D4B85C] to-[#4A6B53] bg-clip-text text-transparent">
                {value}
              </h3>
              <p className="mt-4 text-[#55665A]">
                {label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}