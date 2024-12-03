// import { useEffect, useRef, useState } from "react";
// import Button from "./Button";
// import { TiLocationArrow } from "react-icons/ti";
// import { useWindowScroll } from "react-use";
// import gsap from "gsap";

// const navItems = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact']
// const Navbar = () => {
//     const navContainerRef = useRef(null);
//     const audioElementRef = useRef(null);
//     const [isAudioPlaying, setIsAudioPlaying] = useState(false);
//     const [isIndicatorActive, setIsIndicatorActive] = useState(false);
//     const [lastScrollY, setLastScrollY] = useState(0);
//     const [isNavVisible, setIsNavVisible] = useState(true);


//     const { y:currentScrollY } = useWindowScroll();

//     useEffect(() => {
//         if (currentScrollY === 0) {
//             setIsNavVisible(true);
//             navContainerRef.current.classList.remove('floating-nav');
//         } else if (currentScrollY > lastScrollY) {
//             setIsNavVisible(false);
//             navContainerRef.current.classList.add('floating-nav');
      
//         }else if (currentScrollY < lastScrollY) {
//             setIsNavVisible(true);
//             navContainerRef.current.classList.add('floating-nav');
//         }
//         setLastScrollY(currentScrollY);
//     }, [currentScrollY, lastScrollY])

//     useEffect(() => {
//         gsap.to(navContainerRef.current, {
//             duration: 0.5,
//             y: isNavVisible ? 0 : -100,
//             opacity: isNavVisible ? 1 : 0,
//             ease: 'power2.inOut',
//         });
    

//     },[isNavVisible])

//     const toggleAudioIndicator = () => {
//         setIsIndicatorActive((prev) => !prev);
//         setIsAudioPlaying((prev) => !prev);
//     }

//     useEffect(() => {
//         if (isAudioPlaying) {
//             audioElementRef.current.play();
//         } else {
//             audioElementRef.current.pause();
//         }
//     }, [isAudioPlaying]);
    
//      return (
//        <div
//          ref={navContainerRef}
//          className="fixed top-4 z-50 h-16 border-none transition-all duration-300 ease-in-out sm:inset-x-7"
//        >
//          <header className="absolute top-1/2 w-full -translate-y-1/2">
//            <nav className="flex size-full items-center justify-between p-5">
//              <div className="flex items-center gap-7">
//                <img src="/img/logo.png" alt="logo" className="h-10 w-10" />
//                <Button
//                  title="Products"
//                  id="product-button"
//                  rightIcon={<TiLocationArrow />}
//                  containerClass="bg-blue-50 md:flex hidden items-center gap-2 justify-center"
//                />
//              </div>
//              <div className="flex items-center h-full">
//                <div className="hidden md:block">
//                  {navItems.map((item) => (
//                    <a
//                      key={item}
//                      href={`#${item.toLowerCase()}`}
//                      className="nav-hover-btn"
//                    >
//                      {item}
//                    </a>
//                  ))}
//                </div>
//                <button
//                  className="ml-8 flex items-center space-x-1 rounded-md px-3 py-2"
//                  onClick={toggleAudioIndicator}
//                >
//                  <audio
//                    src="audio/loop.mp3"
//                    ref={audioElementRef}
//                    className="hidden"
//                    loop
//                  />
//                  {[1, 2, 3, 4].map((bar) => (
//                    <div
//                      key={bar}
//                      className={`indicator-line ${
//                        isIndicatorActive ? "active" : ""
//                      }`}
//                      style={{
//                        animationDelay: `${bar * 0.1}s`,
//                        backgroundColor: isIndicatorActive
//                          ? `hsl(${bar * 60}, 70%, 50%)`
//                          : "#ccc",
//                        height: `${bar * 6}px`,
//                        width: "5px",
//                        borderRadius: "2px",
//                      }}
//                    />
//                  ))}
//                </button>
//              </div>
//            </nav>
//          </header>
//        </div>
//      );
// }

// export default Navbar;


import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
  { label: "Story", href: "#story" },
];

const Navbar = () => {
  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    // Show/hide navbar on scroll
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsNavVisible(false);
    } else {
      setIsNavVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      duration: 0.5,
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      ease: "power2.inOut",
    });
  }, [isNavVisible]);

  const toggleAudioIndicator = () => {
    setIsIndicatorActive((prev) => !prev);
    setIsAudioPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(({ href }) => href.slice(1));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={navContainerRef}
      className="fixed top-0 z-50 w-full bg-gradient-to-b from-black via-gray-900 to-transparent transition-transform duration-300 sm:px-7"
    >
      <header className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <img src="/img/logo.png" alt="logo" className="h-10 w-10" />
            <Button
              title="Products"
              id="product-button"
              rightIcon={<TiLocationArrow />}
              containerClass="hidden items-center gap-2 justify-center bg-blue-50 md:flex"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`nav-hover-btn ${
                  activeSection === href.slice(1)
                    ? "text-indigo-500"
                    : "text-gray-300"
                } transition-colors`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Audio Toggle */}
          <button
            className="ml-8 flex items-center space-x-1 rounded-md px-3 py-2"
            onClick={toggleAudioIndicator}
          >
            <audio
              src="audio/loop.mp3"
              ref={audioElementRef}
              className="hidden"
              loop
            />
            {[1, 2, 3, 4].map((bar) => (
              <div
                key={bar}
                className={`indicator-line ${
                  isIndicatorActive ? "active" : ""
                }`}
                style={{
                  animationDelay: `${bar * 0.1}s`,
                  backgroundColor: isIndicatorActive
                    ? `hsl(${bar * 60}, 70%, 50%)`
                    : "#ccc",
                  height: `${bar * 6}px`,
                  width: "5px",
                  borderRadius: "2px",
                }}
              />
            ))}
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
