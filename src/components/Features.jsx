// import { TiLocationArrow } from "react-icons/ti";

// const BentoCard = ({ src, title, description, isComingSoon }) => {
//     return (
//         <div className="relative size-full 
//         flex flex-col items-center justify-center
//             ">
//                     <video
//                 src={src}
//                 autoPlay
//                  muted
//                 loop
//                 playsInline
//                 className=" absolute left-0 top-0 size-full object-center object-cover"
//             />
//             <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
//                 <div>
//                     <h2 className="bento-title special-font">{title}</h2>
//                     {description &&  (
//                         <p className="mt-2 max-w-64 text-xs md:text-base">{description}</p>
//                     )}
//                     </div>
//             </div>
//             </div>
//     )
// }
// const Features = () => {
//   return (
//     <section className="bg-black pb-50">
//       <div className="container max-auto px-3 md:px-10">
//         <div className="px-5 py-32">
//           <p className="text-4xl font-general text-blue-50">
//             Into the game world.
//           </p>

//           <p className="max-w-2xl text-2xl font-general text-blue-50 opacity-45">
//             Immerse yourself in the world of gaming with our high-quality gaming
//             equipment. From the latest consoles and accessories to the best
//             games, we have got you covered.
//           </p>
//         </div>

//         <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
//           <BentoCard
//             src="videos/feature-1.mp4"
//             title={
//               <>
//                 radi<bt>n</bt>t
//               </>
//             }
//             description="Experience the best in gaming with our high-quality equipment."
//             isComingSoon
//           />
//         </div>
//         <div className="grid h-[135vh] grid-cols-3 grid-rows-2 gap-6">
//           <div className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
//             <BentoCard
//               src="videos/feature-2.mp4"
//               title={<>multiplayer</>}
//               description="Join friends and play together in the gaming world."
//               isComingSoon
//             />
//           </div>
//           <div className="bento-tilt_2 row-span-1 md:col-span-2 md:row-span-1">
//             <BentoCard
//               src="videos/feature-3.mp4"
//               title={
//                 <>
//                   n<b>e</b>xus
//                 </>
//               }
//               description="Get the best gaming experience with our high-quality equipment."
//             />
//           </div>
//           <div className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
//             <BentoCard
//               src="videos/feature-4.mp4"
//               title={
//                 <>
//                   <bt>l</bt>ive
//                 </>
//               }
//               description="Experience the best in gaming with our high-quality equipment."
//             />
//           </div>
//           <div className="bento-tilt_2 ">
//             <div className="flex size-full flex-col justify-between p-5 bg-violet-300">
//                           <h2 className="bento-title special-font max-w-64 
//               ">play</h2>
//               <p className="bento-title special-font max-w-64">
//                 Join friends and play together in the gaming world.
//               </p>
//               <TiLocationArrow className="m-5 scale-[5] self-end" />
//             </div>
//                   </div>
//                   <div className="bento-tilt_2">
//                       <video
//                           src="videos/feature-5.mp4"
//                           autoPlay
//                             muted
//                           loop
//                       className="size-full object-center object-cover"
//                   />
                      
//                   </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Features
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

    const tiltX = (y - 0.5) * 20;
    const tiltY = (x - 0.5) * -20;
    const glowX = (x - 0.5) * 50;
    const glowY = (y - 0.5) * 50;

    setStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`,
      boxShadow: `${glowX}px ${glowY}px 50px rgba(255, 255, 255, 0.2)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `perspective(1000px) scale(1)`,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
    });
  };

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden rounded-lg bg-black text-white transition-transform duration-300"
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
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="relative z-10 p-5">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
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
    <section className="bg-gradient-to-b from-gray-900 to-black py-16">
      <div className="container mx-auto px-5">
        <h1 className="text-4xl font-extrabold text-white mb-12 text-center">
          Discover the Next Level
        </h1>
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

