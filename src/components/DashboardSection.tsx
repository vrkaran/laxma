import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  Moon,
  Salad,
  ShieldCheck,
  Sparkles,
  HeartPulse,
  ArrowUpRight,
} from "lucide-react";

const cards = [
  { title: "AI Vitality", value: "87", subtitle: "Excellent", icon: Activity, color: "#7EF2C8", score: 87 },
  { title: "Dosha Balance", value: "Balanced", subtitle: "Vata • Pitta • Kapha", icon: Brain, color: "#EFD98B", score: 78 },
  { title: "Sleep Score", value: "92%", subtitle: "Recovered", icon: Moon, color: "#84D8FF", score: 92 },
  { title: "Nutrition", value: "96%", subtitle: "Optimized", icon: Salad, color: "#9EF5A5", score: 96 },
];


export default function DashboardSection() {
  return (
    <section className="relative overflow-hidden bg-[#071513] py-24">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#020807] to-transparent z-10 pointer-events-none" />

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(30,255,170,.08),transparent_55%)]" />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [.25, .4, .25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#7EF2C8]/10 blur-[140px]"
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


          <h2 className="mt-10 font-serif text-6xl leading-tight text-white">

            Everything Your Body
            <span className="block bg-gradient-to-r from-[#EFD98B] to-[#7EF2C8] bg-clip-text text-transparent">

              Needs. One Dashboard.

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/60">

            Track your vitality, dosha balance, nutrition,
            sleep and personalized recommendations from one
            intelligent wellness dashboard.

          </p>

        </motion.div>



        {/* Dashboard */}

        <motion.div

          initial={{
            opacity:0,
            scale:.94,
            y:80,
          }}

          whileInView={{
            opacity:1,
            scale:1,
            y:0,
          }}

          viewport={{
            once:true,
          }}

          transition={{
            duration:1,
          }}

          className="relative mt-16"

        >

          {/* Glow */}

          <div className="absolute inset-0 rounded-[40px] bg-[#7EF2C8]/10 blur-[80px]" />

          {/* Window */}

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#091B18]/90 backdrop-blur-xl">

            {/* Top Bar */}

            <div className="flex items-center justify-between border-b border-white/10 px-8 py-5">

              <div className="flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-red-400" />

                <div className="h-3 w-3 rounded-full bg-yellow-400" />

                <div className="h-3 w-3 rounded-full bg-green-400" />

              </div>

              <div className="rounded-full bg-white/5 px-5 py-2 text-sm text-white/60">

                dashboard.ayurgenx.ai

              </div>

              <ShieldCheck
                className="h-5 w-5 text-[#7EF2C8]"
              />

            </div>



            {/* Content */}

            <div className="grid lg:grid-cols-[280px_1fr]">

              {/* Sidebar */}

              <div className="border-r border-white/10 p-8">

                <div className="flex items-center gap-4">

                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#7EF2C8] to-[#EFD98B]" />

                  <div>

                    <p className="text-xl text-white">

                      Aarav

                    </p>

                    <p className="text-sm text-white/50">

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
                  ].map((item,i)=>(
                    <motion.div

                      key={item}

                      whileHover={{
                        x:8,
                      }}

                      className={`flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 transition ${
                        i===0
                          ? "bg-[#7EF2C8]/10 text-[#7EF2C8]"
                          : "text-white/60 hover:bg-white/5"
                      }`}

                    >

                      <span>

                        {item}

                      </span>

                      <ArrowUpRight
                        size={16}
                      />

                    </motion.div>
                  ))}

                </div>

              </div>



              {/* Main Dashboard */}

              <div className="p-8">

                <div className="grid gap-6 md:grid-cols-2">

                  {cards.map((card,i)=>{

                    const Icon=card.icon;

                    return(

                      <motion.div

                        key={card.title}

                        initial={{
                          opacity:0,
                          y:30,
                        }}

                        whileInView={{
                          opacity:1,
                          y:0,
                        }}

                        viewport={{
                          once:true,
                        }}

                        transition={{
                          delay:i*.12,
                        }}

                        whileHover={{
                          y:-6,
                        }}

                        className="group rounded-[28px] border border-white/10 bg-white/[0.03] p-7"

                      >

                        <div className="flex items-center justify-between">

                          <div>

                            <p className="uppercase tracking-[0.28em] text-xs text-white/45">

                              {card.title}

                            </p>

                            <h3 className="mt-5 text-5xl font-light text-white">

                              {card.value}

                            </h3>

                            <p
                              className="mt-4"
                              style={{
                                color:card.color,
                              }}
                            >

                              {card.subtitle}

                            </p>

                          </div>

                          <div
                            className="flex h-16 w-16 items-center justify-center rounded-2xl"
                            style={{
                              background:`${card.color}18`,
                            }}
                          >

                            <Icon
                              size={28}
                              color={card.color}
                            />

                          </div>

                        </div>

                        <div className="mt-8 h-[2px] rounded-full bg-white/10">

                          <motion.div

                            initial={{
                              width:0,
                            }}

                            whileInView={{
                              width:`${card.score}%`,
                            }}

                            viewport={{
                              once:true,
                            }}

                            transition={{
                              duration:1.4,
                            }}

                            className="h-full rounded-full bg-gradient-to-r from-[#7EF2C8] to-[#EFD98B]"

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
                    className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8"
                  >

                    <div className="flex items-center justify-between">

                      <div>

                        <p className="uppercase tracking-[0.3em] text-xs text-white/45">

                          Weekly Wellness Trend

                        </p>

                        <h3 className="mt-3 text-3xl text-white">

                          AI Progress

                        </h3>

                      </div>

                      <Activity
                        className="text-[#7EF2C8]"
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
                          <stop
                            offset="0%"
                            stopColor="#EFD98B"
                          />

                          <stop
                            offset="100%"
                            stopColor="#7EF2C8"
                          />

                        </linearGradient>

                      </defs>

                      {[0, 1, 2, 3].map((i) => (
                        <line
                          key={i}
                          x1="0"
                          x2="600"
                          y1={40 + i * 45}
                          y2={40 + i * 45}
                          stroke="rgba(255,255,255,.08)"
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
                        fill="#7EF2C8"
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
                    className="rounded-[30px] border border-white/10 bg-gradient-to-br from-[#0D2A24] to-[#081816] p-8"
                  >

                    <Brain
                      className="text-[#7EF2C8]"
                      size={34}
                    />

                    <p className="mt-8 uppercase tracking-[0.3em] text-xs text-white/45">

                      AI COACH

                    </p>

                    <h3 className="mt-4 text-3xl text-white">

                      Today's Insight

                    </h3>

                    <p className="mt-6 leading-8 text-white/60">

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
                      className="mt-10 w-full rounded-full bg-[#0F5A4A] py-4 text-white"
                    >
                      Open AI Coach
                    </motion.button>

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
          className="mt-16 grid gap-8 md:grid-cols-4"
        >

          {[
            ["97%", "Prediction Accuracy"],
            ["24/7", "AI Monitoring"],
            ["50+", "Health Biomarkers"],
            ["5000+", "Ayurvedic Knowledge"],
          ].map(([value, label]) => (

            <div
              key={label}
              className="rounded-[26px] border border-white/10 bg-white/[0.03] p-8 text-center"
            >

              <h3 className="text-5xl font-light bg-gradient-to-r from-[#EFD98B] to-[#7EF2C8] bg-clip-text text-transparent">

                {value}

              </h3>

              <p className="mt-4 text-white/60">

                {label}

              </p>

            </div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}