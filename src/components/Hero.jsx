import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);
    const totalVideos = 4;
    const nextVideoRef = useRef(null);

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    }
const upcomingVideoIndex =(currentIndex % totalVideos) + 1;
    const handleMiniVdClick = () => {
        setHasClicked(true);

        setCurrentIndex(upcomingVideoIndex); 
    }
    useEffect(() => {
        if (loadedVideos === totalVideos - 1) {
            setIsLoading(false);
        }
        },[loadedVideos]);
    //gsap
    useGSAP(() => {
        if (hasClicked) {
            gsap.set(' #next-video', { visibility: 'visible' });
            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                opacity: 1,
                ease: 'power2.inOut',
                delay: 0.5,
                duration: 1,
                onStart: () => nextVideoRef.current.play(),
            });
            gsap.from('#current-video', {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power2.inOut',
               
            })
        }

    }, { dependencies: [currentIndex], revertOnUpdate: true });
    useGSAP(() => { 
        gsap.set('#video-frame', { 
            clipPath: 'polygon(18% 0%, 75% 0%, 90% 90%, 0% 100%)',
            borderRadius: '0 0 40% 10%'
        })
          gsap.from("#video-frame", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              borderRadius: "0 0 0 0",
                duration: 2,
              ease: "power2.inOut",
                scrollTrigger: {
                  trigger: "#video-frame",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
          });
    })

            const getVideoSrc = (index) => `videos/hero-${index}.mp4`;


            return (
                <section className="relative h-dvh w-screen overflow-x-hidden " id='home'>
                    {
                        isLoading && (
                            <div className="flex-center absolute z-[100] h-dvh overflow-hidden bg-violet-100">
                                <div className="three-body">
                                    <div className="three-body__dot"/>
                                    <div className="three-body__dot"/>
                                    <div className="three-body__dot"/>

                                </div>
                            </div>
                        )
                    }
                    <div
                        id="video-frame"
                        className="relative h-dvh w-screen z-10 overflow-hidden rounded-lg bg-blue-75"
                    >
                        <div>
                            <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                                <div
                                    onClick={handleMiniVdClick}
                                    className="origin-center scale-50 opacity-0 transition-all duration-300 ease-in hover:scale-100 hover:opacity-100"
                                >
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        ref={nextVideoRef}
                                        src={getVideoSrc(upcomingVideoIndex)}
                                        id="current-video"
                                        className="size-64 origin-center scale-150 object-cover object-center"
                                        onLoadedData={handleVideoLoad}
                                    />
                                </div>
                            </div>
                            <video
                                ref={nextVideoRef}
                                src={getVideoSrc(currentIndex)}
                                loop
                                muted
                                id="next-video"
                                className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                                onLoadedData={handleVideoLoad}
                            />
                            <video
                                src={getVideoSrc(
                                    currentIndex === totalVideos - 1 ? 1 : currentIndex
                                )}
                                autoPlay
                                loop
                                muted
                                className="absolute left-0 top-0 size-full  object-cover object-center"
                                onLoadedData={handleVideoLoad}
                            />
                        </div>
                        <h1 className="special-font absolute  hero-heading bottom-5 right-5 z-40 text-blue-75">
                            G<b>A</b>MING
                        </h1>
                        <div className="absolute left-0 top-0 size-full">
                            <div className="mt-24 px-5 sm:px-10">
                                <h1 className="special-font hero-heading text-blue-100 ">
                                    REDEFINE
                                </h1>
                                <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
                                    <span className="text-blue-100">YOUR</span> GAMING EXPERIENCE
                                </p>
                                <Button
                                    id="watch-trailer"
                                    title="WATCH TRAILER"
                                    leftIcon={<TiLocationArrow />}
                                    containerClass="flex-center !bg-yellow-300"
                                />
                            </div>
                        </div>
                    </div>
                    <h1 className="special-font absolute  hero-heading bottom-5 right-5 5">
                        G<b>A</b>MING
                    </h1>
                </section>
            )
}
        

export default Hero



