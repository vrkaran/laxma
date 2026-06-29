import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import playstoreImg from "../image/icon/playstore.webp";
import appstoreImg from "../image/icon/appstore.webp";

const assurances = [
  "No credit card required",
  "Cancel anytime",
  "Private & secure",
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#071513] via-[#06120F] to-slate-950 py-28">
      {/* Top transition from light Testimonials */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#F5F5F1] to-transparent pointer-events-none z-10" />

      {/* Glows */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7EF2C8]/12 blur-[160px]"
      />

      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -28, 0], opacity: [0.15, 0.7, 0.15] }}
          transition={{ duration: 6 + (i % 5), delay: i * 0.3, repeat: Infinity }}
          className="absolute h-[3px] w-[3px] rounded-full bg-emerald-300"
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
          <h2 className="font-serif text-5xl leading-tight text-white md:text-7xl">
            Begin Your Journey to
            <span className="block bg-gradient-to-r from-[#EFD98B] via-white to-[#7EF2C8] bg-clip-text text-transparent">
              Effortless Wellness
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-white/65">
            Join thousands who have transformed their health with the world's
            first precision Ayurveda + AI platform. Your body already knows —
            let us help you understand it.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 rounded-full bg-[#0F5A4A] px-9 py-4 text-white shadow-lg transition-all duration-300 hover:bg-[#126654]"
            >
              Start Your Journey
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border border-white/25 bg-white/10 px-9 py-4 text-white backdrop-blur-md"
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
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/55">
            {assurances.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
