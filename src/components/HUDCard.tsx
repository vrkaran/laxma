import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useState, MouseEvent } from "react";

interface HUDCardProps {
  children: ReactNode;
  className?: string;
  tilt?: boolean;   // 3D mouse-tracked tilt
  status?: boolean; // live blinking status dot
}

export default function HUDCard({
  children,
  className = "",
  tilt = true,
  status = true,
}: HUDCardProps) {
  const [hovered, setHovered] = useState(false);

  // 0–1 normalized mouse position over the card
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [7, -7]), {
    stiffness: 150,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-7, 7]), {
    stiffness: 150,
    damping: 15,
  });

  const spotlightX = useTransform(mouseX, (v) => `${v * 100}%`);
  const spotlightY = useTransform(mouseY, (v) => `${v * 100}%`);
  const spotlightBg = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) => `radial-gradient(220px circle at ${x} ${y}, rgba(142,246,208,0.14), transparent 70%)`
  );

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
    setHovered(false);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={tilt ? { rotateX, rotateY, transformPerspective: 800 } : undefined}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.25 }}
      className={`group relative overflow-hidden rounded-[24px] ${className}`}
    >
      {/* Traveling light orbiting the border */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="hudTravel" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8EF6D0" stopOpacity="0" />
            <stop offset="50%" stopColor="#8EF6D0" stopOpacity="1" />
            <stop offset="100%" stopColor="#8EF6D0" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.rect
          x="1.5"
          y="1.5"
          width="97"
          height="97"
          rx="10"
          fill="none"
          stroke="url(#hudTravel)"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0.18, pathOffset: 0 }}
          animate={{ pathOffset: 1 }}
          transition={{
            duration: hovered ? 1.6 : 3.2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      {/* Animated Border */}
      <div className="absolute inset-0 rounded-[24px] border border-[#8EF6D0]/30 pointer-events-none" />

      {/* Glow Corners — breathing + pop on hover */}
      <div className="absolute left-0 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8EF6D0] shadow-[0_0_12px_#8EF6D0] animate-pulse transition-transform duration-300 group-hover:scale-125" />
      <div className="absolute right-0 top-0 h-2 w-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8EF6D0] shadow-[0_0_12px_#8EF6D0] animate-pulse transition-transform duration-300 group-hover:scale-125" />
      <div className="absolute left-0 bottom-0 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#8EF6D0] shadow-[0_0_12px_#8EF6D0] animate-pulse transition-transform duration-300 group-hover:scale-125" />
      <div className="absolute right-0 bottom-0 h-2 w-2 translate-x-1/2 translate-y-1/2 rounded-full bg-[#8EF6D0] shadow-[0_0_12px_#8EF6D0] animate-pulse transition-transform duration-300 group-hover:scale-125" />

      {/* Corner Lines — extend on hover */}
      <div className="absolute left-0 top-0 h-px w-10 bg-[#8EF6D0]/60 transition-all duration-300 group-hover:w-14" />
      <div className="absolute left-0 top-0 h-10 w-px bg-[#8EF6D0]/60 transition-all duration-300 group-hover:h-14" />

      <div className="absolute right-0 top-0 h-px w-10 bg-[#8EF6D0]/60 transition-all duration-300 group-hover:w-14" />
      <div className="absolute right-0 top-0 h-10 w-px bg-[#8EF6D0]/60 transition-all duration-300 group-hover:h-14" />

      <div className="absolute left-0 bottom-0 h-px w-10 bg-[#8EF6D0]/60 transition-all duration-300 group-hover:w-14" />
      <div className="absolute left-0 bottom-0 h-10 w-px bg-[#8EF6D0]/60 transition-all duration-300 group-hover:h-14" />

      <div className="absolute right-0 bottom-0 h-px w-10 bg-[#8EF6D0]/60 transition-all duration-300 group-hover:w-14" />
      <div className="absolute right-0 bottom-0 h-10 w-px bg-[#8EF6D0]/60 transition-all duration-300 group-hover:h-14" />

      {/* Glass */}
      <div
        className="
        relative
        rounded-[24px]
        border
        border-transparent
        bg-[rgba(3,15,12,.08)]
        backdrop-blur-[2px]
        p-6
        overflow-hidden
        transition-colors
        duration-300
        group-hover:bg-[rgba(3,15,12,.13)]
        "
      >
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,.35) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,.35) 1px, transparent 1px)
            `,
            backgroundSize: "26px 26px",
          }}
        />

        {/* Cursor spotlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlightBg }}
        />

        {/* Live status ping */}
        {status && (
          <div className="absolute right-4 top-4 z-30 flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8EF6D0] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8EF6D0]" />
          </div>
        )}

        {/* Animated Scanner — speeds up on hover */}
        <motion.div
          animate={{ y: ["-120%", "220%"] }}
          transition={{
            duration: hovered ? 2 : 4,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
          absolute
          left-0
          w-full
          h-12
          bg-gradient-to-b
          from-transparent
          via-[#8EF6D0]/10
          to-transparent
          pointer-events-none
          "
        />

        {/* Shine — speeds up on hover */}
        <motion.div
          animate={{ x: ["-120%", "220%"] }}
          transition={{
            duration: hovered ? 2.5 : 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
          absolute
          top-0
          left-0
          h-full
          w-16
          -skew-x-12
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
          "
        />

        <div className="relative z-20 text-[#EEF3F1]">{children}</div>
      </div>
    </motion.div>
  );
}