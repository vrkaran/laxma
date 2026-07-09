import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "@phosphor-icons/react";
import playstoreImg from "../image/icon/playstore.webp";
import appstoreImg from "../image/icon/appstore.webp";

const assurances = [
  "No credit card required",
  "Cancel anytime",
  "Private & secure",
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#F9F9F6] py-28">
  {/* Radial mint-grain texture background */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `radial-gradient(ellipse 60% 55% at 50% 50%, #A9CBB0 0%, #C9DECD 35%, #E9F1EA 65%, #F9F9F6 100%)`,
    }}
  />
  <div
    className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
    }}
  />
      {/* Top transition from Testimonials */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#F5F5F1] to-transparent pointer-events-none z-10" />

      {/* Soft tint */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4A6B53]/10 blur-[160px]"
      />

      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -28, 0], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 6 + (i % 5), delay: i * 0.3, repeat: Infinity }}
          className="absolute h-[3px] w-[3px] rounded-full bg-[#4A6B53]"
          style={{ left: `${8 + i * 9}%`, top: `${20 + (i % 4) * 18}%` }}
        />
      ))}

      <div className="relative z-20 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-5xl leading-tight text-[#1C3322] md:text-7xl">
            Begin Your Journey to
            <span className="block bg-gradient-to-r from-[#D4B85C] via-[#4A6B53] to-[#0C6C57] bg-clip-text text-transparent">
              Effortless Wellness
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-[#55665A]">
            Join thousands who have transformed their health with the world's
            first precision Ayurveda + AI platform. Your body already knows —
            let us help you understand it.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#4A6B53] px-9 py-4 text-white shadow-lg transition-all duration-300 hover:bg-[#3D5A46] hover:shadow-[0_18px_40px_-12px_rgba(74,107,83,.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A6B53]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F9F6] sm:w-auto"
            >
              Start Your Journey
              <ArrowRight weight="bold" size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-full border border-[#D7E4DF] bg-white px-9 py-4 text-[#1C3322] transition-colors duration-300 hover:border-[#4A6B53]/40 hover:bg-[#EAF2EC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A6B53]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F9F6] sm:w-auto"
            >
              Talk to an Expert
            </motion.button>
          </div>

          {/* App badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="transition-transform hover:scale-105">
              <img src={appstoreImg} alt="Download on the App Store" className="h-12 w-auto" />
            </a>
            <a href="#" className="transition-transform hover:scale-105">
              <img src={playstoreImg} alt="Get it on Google Play" className="h-12 w-auto" />
            </a>
          </div>

          {/* Assurances */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[#55665A]">
            {assurances.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <ShieldCheck weight="duotone" className="h-4 w-4 text-[#4A6B53]" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}