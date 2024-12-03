import { useState, useRef } from "react";

const InteractiveCard = ({ src, title, description }) => {
  const [style, setStyle] = useState({});
  const cardRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = (event.clientX - left) / width;
    const y = (event.clientY - top) / height;

    // Calculating tilt and glow effects for mouse movement
    const tiltX = (y - 0.5) * 30;
    const tiltY = (x - 0.5) * -30;
    const glowX = (x - 0.5) * 100;
    const glowY = (y - 0.5) * 100;

    setStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.1)`,
      boxShadow: `${glowX}px ${glowY}px 50px rgba(255, 255, 255, 0.4)`,
      background: `radial-gradient(circle at ${x * 100}% ${
        y * 100
      }%, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.5))`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `perspective(1000px) scale(1)`,
      boxShadow: "0px 10px 50px rgba(0, 0, 0, 0.3)",
      background: "none",
    });
  };

  return (
    <div
     
      ref={cardRef}
      className="relative overflow-hidden rounded-xl bg-black text-white transition-transform duration-300"
      style={{
        height: "400px",
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="relative z-10 p-5 text-center">
        <h2 className="text-3xl font-bold text-gradient bg-clip-text">
          {title}
        </h2>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
      </div>
    </div>
  );
};

const Features = () => {
  const cards = [
    {
      src: "videos/feature-1.mp4",
      title: "Dynamic Adventures",
      description: "Explore thrilling quests and engaging stories.",
    },
    {
      src: "videos/feature-2.mp4",
      title: "Multiplayer Realm",
      description: "Connect and play with gamers worldwide.",
    },
    {
      src: "videos/feature-3.mp4",
      title: "AI Companions",
      description: "Experience the next-gen of smart gameplay assistants.",
    },
    {
      src: "videos/feature-4.mp4",
      title: "Radiant Nexus",
      description: "Your gateway to limitless exploration and connections.",
    },
    {
      src: "videos/feature-5.mp4",
      title: "Epic Battlegrounds",
      description: "Engage in epic battles and achieve glory.",
    },
    {
      src: "videos/feature-6.mp4",
      title: "Future Awaits",
      description: "Step into the next evolution of gaming experiences.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-16" id="features">
      <div className="container mx-auto px-5">
        <h1 className="text-5xl font-extrabold text-white mb-12 text-center tracking-wider">
          Discover the Next Level
        </h1>
        <p className="text-xl text-center text-gray-300 mb-12">
          Immerse yourself in a universe where creativity meets cutting-edge
          technology. Our interactive cards present a glimpse into the future of
          immersive experiences.
        </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <InteractiveCard
              key={index}
              src={card.src}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
