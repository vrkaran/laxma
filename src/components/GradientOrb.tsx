interface GradientOrbProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'blue' | 'green' | 'amber' | 'rose';
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  opacity?: number;
  blur?: boolean;
}

const sizeMap = {
  small: 'w-32 h-32',
  medium: 'w-64 h-64',
  large: 'w-96 h-96',
};

const colorMap = {
  blue: 'from-blue-300 to-cyan-200',
  green: 'from-green-300 to-emerald-200',
  amber: 'from-amber-300 to-yellow-200',
  rose: 'from-rose-300 to-pink-200',
};

export default function GradientOrb({
  size = 'medium',
  color = 'blue',
  position,
  opacity = 0.15,
  blur = true,
}: GradientOrbProps) {
  return (
    <div
      className={`absolute ${sizeMap[size]} rounded-full bg-gradient-to-br ${colorMap[color]} ${
        blur ? 'blur-3xl' : ''
      } pointer-events-none`}
      style={{
        top: position.top,
        bottom: position.bottom,
        left: position.left,
        right: position.right,
        opacity,
      }}
    />
  );
}
