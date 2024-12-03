// import AnimatedTitle from "./AnimatedTitle"

// const Story = () => {
//   return (
//       <section id="story" className="min-h-screen w-screen bg-black">
//           <div className="flex size-full flex-col items-center py-10 pb-24"> 
//               <p className="font-general text-sm uppercase md:text-[10px] text-blue-50">
//                   Here is our story  
//               </p>
//               <div className="relative size-full">
//                   <AnimatedTitle
//                       title=' The st<b>o</b>ry of <br/> a hidden world'
//                       sectionId='#story'
//                       containerClass='mt-5 pointer-events-none mix-blend-difference relative z-10 '
//                   />
//                   <div className="story-img-container">
//                       <div className="story-img-mask">
//                           <div className="story-img-content">
//                               <img src="/img/entrance.webp" alt="entrance" />
                              
//                           </div>
                          
//                       </div>
                      
//                   </div>
                  
//               </div>
              
//           </div>
          
//     </section>
//   )
// }

// export default Story



// import { useState, useRef } from "react";
// import AnimatedTitle from "./AnimatedTitle";

// const Story = () => {
//   const [parallaxStyle, setParallaxStyle] = useState({});
//   const [hoverGlow, setHoverGlow] = useState(0);
//   const storyRef = useRef(null);

//   const handleMouseMove = (event) => {
//     if (!storyRef.current) return;

//     const { left, top, width, height } =
//       storyRef.current.getBoundingClientRect();
//     const x = (event.clientX - left) / width - 0.5;
//     const y = (event.clientY - top) / height - 0.5;

//     const depthX = x * 40;
//     const depthY = y * 40;

//     setParallaxStyle({
//       transform: `translate(${depthX}px, ${depthY}px) scale(1.02)`,
//       transition: "transform 0.1s ease-out",
//     });
//   };

//   const handleMouseLeave = () => {
//     setParallaxStyle({
//       transform: "translate(0, 0) scale(1)",
//       transition: "transform 0.4s ease-out",
//     });
//   };

//   const handleGlowEnter = () => setHoverGlow(1);
//   const handleGlowLeave = () => setHoverGlow(0);

//   return (
//     <section
//       id="story"
//       className="min-h-screen w-screen bg-gradient-to-tr from-black via-gray-800 to-gray-900 overflow-hidden"
//     >
//       {/* Background Design Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute -top-20 -left-20 h-72 w-72 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 opacity-10 blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 h-80 w-80 bg-gradient-to-t from-pink-400 via-red-400 to-yellow-400 opacity-10 blur-3xl"></div>
//       </div>

//       {/* Content Section */}
//       <div className="relative flex flex-col items-center py-16">
//         {/* Subheader */}
//         <p className="font-light text-sm uppercase tracking-wider text-blue-300">
//           Here is our story
//         </p>

//         {/* Animated Title */}
//         <div className="mt-8">
//           <AnimatedTitle
//             title="The St<b>o</b>ry of <br /> a Hidden World"
//             sectionId="#story"
//             containerClass="pointer-events-none text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
//           />
//         </div>

//         {/* Parallax Image */}
//         <div
//           ref={storyRef}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           className="relative mt-16 w-[90%] max-w-5xl overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
//           style={parallaxStyle}
//         >
//           {/* Image Container */}
//           <div className="relative w-full h-96 overflow-hidden">
//             <img
//               src="/img/entrance.webp"
//               alt="Entrance"
//               className="absolute inset-0 h-full w-full object-cover object-center transform transition-transform duration-500 hover:scale-110"
//             />
//             {/* Overlay Glow */}
//             <div
//               onMouseEnter={handleGlowEnter}
//               onMouseLeave={handleGlowLeave}
//               className="absolute inset-0 pointer-events-none bg-gradient-radial from-white/10 to-transparent opacity-0 transition-opacity duration-500"
//               style={{
//                 opacity: hoverGlow,
//                 mixBlendMode: "overlay",
//               }}
//             />
//           </div>
//           {/* Overlay Text */}
//           <div className="absolute bottom-5 left-5 z-10">
//             <p className="text-xl font-semibold text-white/80 leading-tight">
//               Unlock the Entrance
//             </p>
//             <p className="text-sm font-light text-gray-300">
//               Begin your journey into the unknown.
//             </p>
//           </div>
//         </div>

//         {/* 3D Interactive Text Elements */}
//         <div className="relative mt-16 flex justify-center space-x-10">
//           <div
//             className="cursor-pointer text-xl font-bold text-blue-300 transform transition-transform duration-300 hover:scale-110"
//             onMouseEnter={() => setHoverGlow(1)}
//             onMouseLeave={() => setHoverGlow(0)}
//           >
//             Discover
//           </div>
//           <div
//             className="cursor-pointer text-xl font-bold text-purple-300 transform transition-transform duration-300 hover:scale-110"
//             onMouseEnter={() => setHoverGlow(1)}
//             onMouseLeave={() => setHoverGlow(0)}
//           >
//             Explore
//           </div>
//           <div
//             className="cursor-pointer text-xl font-bold text-teal-300 transform transition-transform duration-300 hover:scale-110"
//             onMouseEnter={() => setHoverGlow(1)}
//             onMouseLeave={() => setHoverGlow(0)}
//           >
//             Begin
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Story;


import gsap from "gsap";
import { useRef } from "react";
import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const FloatingImage = () => {
  const frameRef = useRef(null);
  const backgroundRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;
    const bgElement = backgroundRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 800,
      ease: "power1.inOut",
    });

    if (bgElement) {
      const moveX = (clientX / window.innerWidth - 0.5) * 20;
      const moveY = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(bgElement, {
        duration: 0.5,
        x: moveX,
        y: moveY,
        ease: "power1.out",
      });
    }
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;
    const bgElement = backgroundRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }

    if (bgElement) {
      gsap.to(bgElement, {
        duration: 0.5,
        x: 0,
        y: 0,
        ease: "power1.out",
      });
    }
  };

  return (
    <section
      id="story"
      className="relative min-h-screen w-screen bg-gradient-to-tr from-black via-gray-900 to-black text-blue-50 overflow-hidden"
    >
      {/* Dynamic Background Animation */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <div className="absolute h-full w-full bg-gradient-to-br from-purple-900 via-blue-700 to-indigo-900 opacity-20 blur-3xl" />
        <div className="absolute h-64 w-64 bg-gradient-to-t from-teal-500 to-transparent rounded-full opacity-20 blur-3xl top-20 left-20" />
        <div className="absolute h-64 w-64 bg-gradient-to-t from-yellow-400 to-transparent rounded-full opacity-20 blur-3xl bottom-10 right-20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase tracking-widest md:text-[12px]">
          The multiversal IP world
        </p>

        <div className="relative w-full mt-10">
          <AnimatedTitle
            title="The st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            containerClass="text-center mix-blend-difference relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          />

          {/* Floating Image Container */}
          <div
            className="relative mt-12 w-[90%] max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            ref={frameRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="/img/entrance.webp"
              alt="Entrance to the Realm"
              className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-700"
            />
            {/* Overlay Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
          </div>
        </div>

        {/* Text Section */}
        <div className="relative mt-20 flex w-full justify-center md:justify-end md:me-32">
          <div className="flex flex-col items-center md:items-start">
            <p className="max-w-lg text-center text-violet-50 md:text-start text-lg font-light">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>

            <Button
              id="realm-btn"
              title="Discover Prologue"
              containerClass="mt-8 text-lg font-semibold tracking-wide bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingImage;
