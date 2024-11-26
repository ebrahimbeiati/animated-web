import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const About = () => {
    useGSAP(() => {
    const clipAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: "#clip",
            start: 'center center',
            end: '+=800 center',
            scrub: 1,
            pin: true,
            pinSpacing: true,
        }
    })
    clipAnimation.to('.mask-clip-path', {
        width: '100vw',
        height: '100vh',
        borderRadius: 0,
    })

})
  return (
      <div className="min-h-screen w-screen">
            <div className="relative mb-8 mt-36  flex flex-col items-center gap-4 bg-violet-100">
              <h1 className="text-4xl font-general text-violet-900">Welcome to the game world</h1>
              <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]">
                  Discover the world of gaming
              </div>
              <div className="about-subtext mt-8 ">
                  <p  >
                      This is a game-focused website that showcases various gaming genres, platforms, and games. 
                  </p>
                  <p >
                      Our website features game reviews, news, and updates. We also have a community forum where you can discuss your favorite games with other gamers.
                    </p>
              </div>
          </div>
          <div className="h-dvh w-screen" id="clip">
              <div className="mask-clip-path about-image">
                  <img src="./img/about.webp" alt="about" className="absolute left-0 top-0  size-full object-cover"/>
                  
              </div>
              
          </div>
          
    </div>
  )
}

export default About