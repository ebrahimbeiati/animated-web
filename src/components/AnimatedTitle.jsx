import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'




const AnimatedTitle = ({ title, containerClass }) => {
    const containerRef = useRef(null);
    
    useEffect(() => {
        const ctx = gsap.context(() => {
            const titleAnimation = gsap.timeline({ repeat: -1, repeatDelay: 1, scrollTrigger:{
                trigger: containerRef.current,
                start: '100 bottom',
                toggleActions: 'play none none reverse',
                end: 'center bottom',
                onEnter: () => {
                    titleAnimation.play();
                },
                onLeave: () => {
                    titleAnimation.pause();
                }
            } });
            titleAnimation.to('.animated-word', {
                opacity: 1,
               transform: 'translate3d(0, 0, 0) rotateY(0deg), rotateX(0deg)', y: 20, duration: 1, ease: 'power2.inOut', stagger: 0.1
            })
            
        }, containerRef)
        return () => ctx.revert();
    },[])
  return (
      <div ref={containerRef} className={`animated-title ${containerClass}`}>
          {title.split('<br />').map((line, index) => (
              <div key={index} className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
                  {line.split(' ').map((word, i) => (
                      <span key={i} className="animated-word" dangerouslySetInnerHTML={{ __html: word }} />
                          
                  ))}
              </div>
          ))}
      </div>
  );
}

export default AnimatedTitle

//  <div className="">
//      
//     </div>