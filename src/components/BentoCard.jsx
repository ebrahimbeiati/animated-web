import { useState } from "react";

const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // Horizontal movement
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20; // Vertical movement
    setMousePos({ x, y });
  };

  const resetMousePos = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative group h-[400px] w-full overflow-hidden rounded-xl bg-gray-800 shadow-lg transition-all duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMousePos}
      style={{
        transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        boxShadow: `${mousePos.x * 0.5}px ${
          mousePos.y * 0.5
        }px 20px rgba(0,0,0,0.2)`,
      }}
    >
      {/* Video Background */}
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 group-hover:from-black/30 group-hover:to-black/90 transition-colors duration-300" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white">
        <div>
          <h2 className="text-3xl font-bold uppercase tracking-wide">
            {title}
          </h2>
          {description && (
            <p className="mt-2 text-sm text-gray-300">{description}</p>
          )}
        </div>
        {isComingSoon && (
          <div className="mt-4 inline-block rounded-full bg-red-600 px-3 py-1 text-xs font-semibold uppercase">
            Coming Soon
          </div>
        )}
      </div>
    </div>
  );
};

export default BentoCard;
