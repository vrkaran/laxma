import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className={`group relative overflow-hidden rounded-[30px] ${className}`}
    >
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-[30px] p-[1px]">
        <div className="animated-border absolute inset-0 rounded-[30px]" />
      </div>

      {/* Glass */}
<div
  className="
  relative
  rounded-[24px]
  border
  border-[#7EF2C8]/35
  bg-[rgba(5,18,14,.12)]
  backdrop-blur-[2px]
  overflow-hidden
"
>

  {/* HUD Corner Dots */}
  <div className="absolute top-0 left-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8EF6D0] shadow-[0_0_10px_#8EF6D0]" />

  <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-[#8EF6D0] shadow-[0_0_10px_#8EF6D0]" />

  <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 h-2 w-2 rounded-full bg-[#8EF6D0] shadow-[0_0_10px_#8EF6D0]" />

  <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 h-2 w-2 rounded-full bg-[#8EF6D0] shadow-[0_0_10px_#8EF6D0]" />

  <div className="relative z-10 p-7">
    {children}
  </div>

</div>

      <style>{`
        .animated-border{
          background:
          linear-gradient(
          120deg,
          transparent,
          rgba(255,255,255,.6),
          transparent
          );
          background-size:300% 300%;
          animation:borderMove 5s linear infinite;
        }

        @keyframes borderMove{
          0%{background-position:0% 50%;}
          100%{background-position:300% 50%;}
        }

        .shine{
          background:
          linear-gradient(
          110deg,
          transparent 20%,
          rgba(255,255,255,.12) 50%,
          transparent 80%
          );
          transform:translateX(-140%);
          transition:.8s;
        }

        .group:hover .shine{
          transform:translateX(140%);
        }
      `}</style>
    </motion.div>
  );
}