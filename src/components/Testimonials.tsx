import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Marketing Lead, Bengaluru",
    quote:
      "My gut issues vanished within weeks. The AI kept adjusting my plan until my body actually felt balanced — something no doctor managed before.",
    metric: "−9 kg",
    metricLabel: "in 3 months",
    gradient: "from-[#7EF2C8] to-[#0C6C57]",
  },
  {
    name: "Rohan Mehta",
    role: "Software Engineer, Pune",
    quote:
      "I was skeptical about Ayurveda and AI together. But my sleep score went from 60% to 92%, and I finally wake up genuinely rested.",
    metric: "92%",
    metricLabel: "sleep score",
    gradient: "from-[#84D8FF] to-[#1E6FA6]",
  },
  {
    name: "Priya Nair",
    role: "Yoga Instructor, Kochi",
    quote:
      "It feels like a companion that truly knows my body. The dosha insights and daily nudges are scarily accurate and deeply personal.",
    metric: "+34%",
    metricLabel: "vitality",
    gradient: "from-[#EFD98B] to-[#C99B2E]",
  },
];

const stats = [
  ["50,000+", "Lives Transformed"],
  ["4.9/5", "Average Rating"],
  ["94%", "Would Recommend"],
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F1] py-24">
      {/* Background glow */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 11, repeat: Infinity }}
        className="absolute left-0 top-24 h-[460px] w-[460px] rounded-full bg-emerald-300/20 blur-[150px]"
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
          <h2 className="font-serif text-5xl leading-tight text-[#09231E] md:text-6xl">
            Health Journeys
            <span className="block bg-gradient-to-r from-[#0C6C57] to-[#D4B85C] bg-clip-text text-transparent">
              Worth Sharing
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#48635D]">
            Thousands have rebuilt their wellness with AyurGenX. Here are a few of
            their stories.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="relative flex flex-col rounded-[30px] border border-[#D7E4DF] bg-white p-8 shadow-[0_25px_60px_rgba(0,0,0,.06)]"
            >
              <Quote className="h-9 w-9 text-[#0C6C57]/15" />

              {/* Rating */}
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, s) => (
                  <Star
                    key={s}
                    className="h-4 w-4 fill-[#EFB100] text-[#EFB100]"
                  />
                ))}
              </div>

              <p className="mt-6 flex-1 text-[17px] leading-8 text-[#37524C]">
                “{t.quote}”
              </p>

              {/* Metric */}
              <div className="mt-8 flex items-center justify-between border-t border-[#E7EEEB] pt-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-lg font-semibold text-white`}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-[#09231E]">{t.name}</p>
                    <p className="text-sm text-[#5B746E]">{t.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-light text-[#0C6C57]">{t.metric}</p>
                  <p className="text-xs text-[#5B746E]">{t.metricLabel}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-16 grid gap-8 sm:grid-cols-3"
        >
          {stats.map(([value, label]) => (
            <div
              key={label}
              className="rounded-[26px] border border-[#D7E4DF] bg-white p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,.04)]"
            >
              <h3 className="bg-gradient-to-r from-[#0C6C57] to-[#D4B85C] bg-clip-text text-5xl font-light text-transparent">
                {value}
              </h3>
              <p className="mt-4 text-[#5B746E]">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
