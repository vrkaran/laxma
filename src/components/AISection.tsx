import { motion } from "framer-motion";
import {
  Scan,
  Circuitry,
  Sparkle,
  ArrowsClockwise,
  Dna,
  Pulse,
  ShieldCheck,
} from "@phosphor-icons/react";

const steps = [
  {
    label: "Capture",
    title: "We Listen to Your Body",
    description:
      "Your vitals, lifestyle, dosha profile and 50+ biomarkers are gathered into a single, living health signal.",
    icon: Scan,
    color: "#7FA6C4",
  },
  {
    label: "Analyze",
    title: "Ayurveda Meets AI",
    description:
      "Our hybrid engine fuses 5000+ years of Ayurvedic logic with deep-learning models to find the root cause.",
    icon: Circuitry,
    color: "#4A6B53",
  },
  {
    label: "Personalize",
    title: "A Plan Built for You",
    description:
      "Herbs, nutrition, routines and programs are tailored precisely to your constitution and current state.",
    icon: Sparkle,
    color: "#D4B85C",
  },
  {
    label: "Adapt",
    title: "It Learns Every Day",
    description:
      "As your body responds, the intelligence recalibrates — getting smarter and more personal over time.",
    icon: ArrowsClockwise,
    color: "#6E9C78",
  },
];

const capabilities = [
  { icon: Dna, label: "Genetic & Dosha Mapping" },
  { icon: Pulse, label: "Real-time Biomarker Tracking" },
  { icon: ShieldCheck, label: "Private & Secure by Design" },
];

export default function AISection() {
  return (
    <section className="relative overflow-hidden bg-[#F9F9F6] py-24">
      {/* Top transition (seamless from dashboard) */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#F9F9F6] to-transparent z-10 pointer-events-none" />

      {/* Background tint */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute left-1/2 top-10 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[#4A6B53]/10 blur-[150px]"
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
          <h2 className="font-serif text-4xl leading-tight text-[#1C3322] sm:text-5xl md:text-6xl">
            Intelligence That
            <span className="block bg-gradient-to-r from-[#D4B85C] to-[#4A6B53] bg-clip-text text-transparent">
              Understands You
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#55665A]">
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
            className="absolute left-0 right-0 top-9 hidden h-px origin-left bg-gradient-to-r from-[#7FA6C4] via-[#4A6B53] to-[#D4B85C] lg:block"
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="group relative"
                >
                  {/* Node */}
                  <div className="relative z-10 mx-auto flex h-[72px] w-[72px] items-center justify-center">
                    <div
                      className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full border bg-white shadow-sm transition-transform duration-300 group-hover:scale-110"
                      style={{ borderColor: `${step.color}55` }}
                    >
                      <Icon weight="duotone" size={28} color={step.color} />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="mt-8 rounded-[26px] border border-[#E0E6E1] bg-white p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#4A6B53]/30 hover:shadow-md">
                    <p
                      className="text-xs font-semibold uppercase tracking-[0.32em]"
                      style={{ color: step.color }}
                    >
                      {`0${i + 1} · ${step.label}`}
                    </p>
                    <h3 className="mt-4 font-serif text-2xl text-[#1C3322]">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-7 text-[#55665A]">
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
              className="flex items-center gap-3 rounded-full border border-[#E0E6E1] bg-white px-6 py-3 text-sm text-[#37524C] shadow-sm transition-colors duration-300 hover:border-[#4A6B53]/30"
            >
              <Icon weight="duotone" className="h-4 w-4 text-[#4A6B53]" />
              {label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}