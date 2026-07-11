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
  { title: "Sleep Reset", duration: "21 Days", success: "94%", icon: Moon, color: "#7FA6C4" },
  { title: "Stress Balance", duration: "28 Days", success: "91%", icon: Brain, color: "#4A6B53" },
  { title: "Gut Restore", duration: "30 Days", success: "96%", icon: Leaf, color: "#D4B85C" },
];

export default function ProgramsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F1] py-16 lg:py-24">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#F9F9F6] to-[#F5F5F1] pointer-events-none z-10" />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [.08, .15, .08] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute right-0 top-32 h-[500px] w-[500px] rounded-full bg-[#4A6B53]/10 blur-[150px]"
      />

      <div className="relative z-20 mx-auto max-w-7xl px-5 sm:px-6 lg:px-6">

        {/* Heading — shared */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-center font-serif text-3xl leading-tight text-[#1C3322] sm:text-4xl md:text-5xl lg:text-left lg:text-6xl">
            Personalized
            <span className="block bg-gradient-to-r from-[#0C6C57] to-[#D4B85C] bg-clip-text text-transparent">
              Wellness Programs
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-7 text-[#48635D] sm:text-lg sm:leading-9 lg:mx-0 lg:mt-8 lg:text-left">
            Every recommendation adapts to your body, habits and goals.
            Our AI continuously improves each wellness program based on your progress.
          </p>
        </motion.div>

        {/* ============ MOBILE / TABLET (below lg) ============ */}
        <div className="lg:hidden mt-8">

          {/* Compact today's snapshot card — replaces the giant phone frame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[26px] border border-[#DCE5E1] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,.05)]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[#4A6B53] to-[#D4B85C]" />
                <div>
                  <p className="text-sm text-[#5B746E]">Good Morning,</p>
                  <h3 className="text-lg text-[#09231E]">Aarav 👋</h3>
                </div>
              </div>
              <Heartbeat weight="duotone" className="text-[#0C6C57]" size={22} />
            </div>

            <div className="mt-5 rounded-[20px] bg-[#EAF2EC] p-5">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#4A6B53]">Today</p>
              <h3 className="mt-2 text-2xl text-[#09231E]">Sleep Reset</h3>
              <p className="mt-1 text-sm text-[#5B746E]">Day 12 of 21</p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {([
                ["Sleep", "92%", Moon],
                ["Vitality", "87", Pulse],
                ["Protected", "100%", ShieldCheck],
                ["AI Coach", "Live", Sparkle],
              ] as const).map(([title, value, Icon]) => {
                const CardIcon = Icon as React.ElementType;
                return (
                  <div key={title} className="rounded-xl border border-[#E7EEEB] bg-[#FDFCFA] p-3.5">
                    <CardIcon weight="duotone" className="text-[#4A6B53]" size={18} />
                    <p className="mt-2 text-xl text-[#09231E]">{value}</p>
                    <p className="text-[11px] text-[#5B746E]">{title}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 flex items-center justify-between">
              <p className="text-sm text-[#09231E]">Weekly Progress</p>
              <span className="text-sm text-[#4A6B53]">+18%</span>
            </div>
            <div className="mt-3 h-[6px] rounded-full bg-[#EAF2EC]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "82%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.3 }}
                className="h-full rounded-full bg-gradient-to-r from-[#4A6B53] to-[#D4B85C]"
              />
            </div>
          </motion.div>

          {/* Program list */}
          <div className="mt-8 space-y-4">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * .1 }}
                  className="flex items-center justify-between rounded-[22px] border border-[#D7E4DF] bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl shrink-0"
                      style={{ background: `${program.color}20` }}
                    >
                      <Icon weight="duotone" size={20} color={program.color} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-[#09231E]">{program.title}</h3>
                      <p className="text-sm text-[#5B746E]">{program.duration}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xl font-light" style={{ color: program.color }}>{program.success}</p>
                    <p className="text-[11px] text-[#5B746E]">Success</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button className="group mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#4A6B53] py-4 text-white font-medium active:scale-[0.98] transition-transform">
            Explore All Programs
            <ArrowRight weight="bold" size={16} />
          </button>
        </div>

        {/* ============ DESKTOP (lg and up) — unchanged ============ */}
        <div className="hidden lg:grid mt-16 items-center gap-16 lg:grid-cols-[1fr_560px]">

          <div>
            <div className="space-y-8">
              {programs.map((program, index) => {
                const Icon = program.icon;
                return (
                  <motion.div
                    key={program.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * .15 }}
                    whileHover={{ x: 12 }}
                    className="group flex items-center justify-between rounded-[28px] border border-[#D7E4DF] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,.05)] transition-shadow duration-300 hover:border-[#0C6C57]/25 hover:shadow-[0_28px_70px_rgba(12,108,87,.12)]"
                  >
                    <div className="flex items-center gap-5">
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                        style={{ background: `${program.color}20` }}
                      >
                        <Icon weight="duotone" size={24} color={program.color} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-medium text-[#09231E]">{program.title}</h3>
                        <p className="mt-2 text-[#5B746E]">{program.duration}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-light" style={{ color: program.color }}>{program.success}</p>
                      <p className="text-sm text-[#5B746E]">Success Rate</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: .98 }}
              className="group mt-16 flex items-center gap-3 rounded-full bg-[#4A6B53] px-8 py-4 text-white shadow-lg transition-all duration-300 hover:bg-[#3D5A46] hover:shadow-[0_18px_40px_-12px_rgba(74,107,83,.35)]"
            >
              Explore All Programs
              <ArrowRight weight="bold" size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <div className="absolute h-[420px] w-[420px] rounded-full bg-[#4A6B53]/10 blur-[130px]" />

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative h-[700px] w-[340px] rounded-[46px] border-[10px] border-[#111] bg-[#081816] shadow-[0_50px_120px_rgba(0,0,0,.25)]"
            >
              <div className="absolute left-1/2 top-4 h-7 w-32 -translate-x-1/2 rounded-full bg-black" />

              <div className="p-7 pt-14">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/50">Good Morning,</p>
                    <h3 className="mt-1 text-3xl text-white">Aarav 👋</h3>
                  </div>
                  <Heartbeat weight="duotone" className="text-[#7EF2C8]" />
                </div>

                <div className="mt-10 rounded-[28px] bg-gradient-to-br from-[#0D4035] to-[#0B2B25] p-7">
                  <p className="uppercase tracking-[0.3em] text-xs text-[#7EF2C8]">TODAY</p>
                  <h3 className="mt-4 text-4xl text-white">Sleep Reset</h3>
                  <p className="mt-4 text-white/60 leading-8">Day 12 of 21</p>
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
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: .4 + i * .1 }}
                        whileHover={{ y: -6, scale: 1.03 }}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                      >
                        <CardIcon weight="duotone" className="text-[#7EF2C8]" size={22} />
                        <p className="mt-5 text-3xl text-white">{value}</p>
                        <p className="mt-2 text-sm text-white/55">{title}</p>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-8 rounded-[26px] bg-white/[0.04] p-6">
                  <div className="flex items-center justify-between">
                    <p className="text-white">Weekly Progress</p>
                    <span className="text-[#7EF2C8]">+18%</span>
                  </div>
                  <div className="mt-6 h-[8px] rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "82%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5 }}
                      className="h-full rounded-full bg-gradient-to-r from-[#7EF2C8] to-[#EFD98B]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -left-8 top-24 rounded-[26px] border border-[#DCE5E1] bg-white p-5 shadow-[0_25px_60px_rgba(0,0,0,.08)]"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[#6A827C]">AI Recommendation</p>
              <h4 className="mt-3 text-xl text-[#09231E]">Ashwagandha</h4>
              <p className="mt-2 text-[#5B746E]">Evening • 500mg</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0], rotate: [2, -2, 2] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -right-10 bottom-20 rounded-[26px] border border-[#DCE5E1] bg-white p-6 shadow-[0_25px_60px_rgba(0,0,0,.08)]"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[#6A827C]">Recovery</p>
              <h4 className="mt-3 text-4xl text-[#0C6C57]">94%</h4>
              <p className="mt-2 text-[#5B746E]">Excellent Progress</p>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}