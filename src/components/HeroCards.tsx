import { Activity, Brain, Leaf, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import HUDCard from "./HUDCard";

export default function HeroCards() {
  return (
    <div className="absolute right-2 top-[18%] hidden lg:flex flex-col gap-6 z-30">

      {/* ---------- CARD 1 ---------- */}

<HUDCard className="w-[200px] right-100">

<div className="flex items-center justify-between">

<div>

<p className="text-[10px] uppercase tracking-[.35em] text-white/45">
AI VITALITY
</p>

<h2 className="mt-3 text-6xl font-light text-[#F4F4F4]">
87
</h2>

<p className="mt-2 text-sm text-emerald-300">
Excellent Condition
</p>

</div>

<div className="h-16 w-px bg-white/15"/>

<div>

<Activity
className="h-10 w-10 text-emerald-300"
/>

</div>

</div>

<div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"/>

<div className="mt-4 flex justify-between text-xs text-white/55">

<span>Sleep</span>

<span>92%</span>

</div>

<div className="mt-2 h-[2px] rounded-full bg-white/10">

<motion.div
initial={{width:0}}
animate={{width:"92%"}}
transition={{duration:1.5}}
className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-white"
/>

</div>

</HUDCard>
      {/* ---------- CARD 2 ---------- */}

<HUDCard className="w-[200px]">
  <div className="flex items-center justify-between">
    <p className="text-[11px] uppercase tracking-[0.28em] text-white/50">
      LONGEVITY POTENTIAL
    </p>

    <span className="text-[#86F7D1] text-sm font-medium">
      89%
    </span>
  </div>

  <div className="mt-6 relative h-[130px]">

    {/* Grid */}

    <div className="absolute inset-0 opacity-10">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute left-0 right-0 border-t border-white/30"
          style={{ top: `${i * 25}%` }}
        />
      ))}

      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute top-0 bottom-0 border-l border-white/30"
          style={{ left: `${i * 14}%` }}
        />
      ))}
    </div>

    <svg
      viewBox="0 0 240 120"
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        <linearGradient id="graphFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#82FFD8" stopOpacity=".25" />
          <stop offset="100%" stopColor="#82FFD8" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d="M0 92
           L30 70
           L55 82
           L88 56
           L118 69
           L145 50
           L176 64
           L208 42
           L240 28
           L240 120
           L0 120Z"
        fill="url(#graphFill)"
      />

      <motion.path
        d="M0 92
           L30 70
           L55 82
           L88 56
           L118 69
           L145 50
           L176 64
           L208 42
           L240 28"
        fill="none"
        stroke="#7EF2C8"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
      />

      <motion.circle
        cx="240"
        cy="28"
        r="4"
        fill="#8EF6D0"
        animate={{
          scale: [1, 1.8, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      />
    </svg>
  </div>

  <div className="mt-4 flex justify-between text-sm">
    <span className="text-[#7EF2C8]">
      Increasing
    </span>

    <span className="text-white/60">
      AI Forecast
    </span>
  </div>
</HUDCard>

    </div>
  );
}

function Progress({
  title,
  value,
  icon,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
}) {
  return (
    <div>

      <div className="mb-2 flex items-center justify-between">

        <div className="flex items-center gap-2 text-white/80">
          {icon}
          <span>{title}</span>
        </div>

        <span className="text-white/60">
          {value}%
        </span>

      </div>

      <div className="h-2 rounded-full bg-white/10 overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{
            duration: 1.5,
          }}
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-[#E8D27C] to-emerald-300"
        />

      </div>

    </div>
  );
}
function Row({

title,

value,

}:{

title:string;

value:string;

}){

return(

<div className="flex items-center justify-between">

<span className="text-white/65">
{title}
</span>

<span className="text-[#F2F2F2] font-medium">
{value}
</span>

</div>

)

}