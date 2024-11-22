import { useState, useRef } from "react";
const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoadig] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);
    const totalVideos = 3;
    const nextVideoRef = useRef(null);

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    }
const upcomingVideoIndex =(currentIndex % totalVideos) + 1;
    const handleMiniVdClick = () => {
        setHasClicked(true);

        setCurrentIndex(upcomingVideoIndex); 
    }
    const getVideoSrc = (index)=> `videos/hero-${index}.mp4`;


  return (
      <div className="relative h-dvh w-screen overflow-x-hidden">
          <div id="video-frame" className="relative h-dvh w-screen z-10 overflow-hidden rounded-lg bg-blue-75">
              <div>
                  <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                      <div onClick={handleMiniVdClick} className="origin-center scale-50 opacity-0 transition-all duration-300 ease-in hover:scale-100 hover:opacity-100">
                          <video autoPlay loop muted ref={nextVideoRef}src={getVideoSrc(upcomingVideoIndex)} id="current-video" className="size-64 origin-center scale-150 object-cover object-center" onLoadedData={handleVideoLoad}  />
                          
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
                  <video src={getVideoSrc(currentIndex === totalVideos -1 ? 1 : currentIndex)} autoPlay loop muted className="absolute left-0 top-0 size-full  object-cover object-center" onLoadedData={handleVideoLoad} />
              </div>
              <h1 className="special-font absolute  hero-heading bottom-5 right-5 z-40 text-blue-75">G<b>A</b>MING</h1>
              <div className="absolute left-0 top-0 size-full">
                  <div className="mt-24 px-5 sm">
                      
                  </div>
              </div>
              
          </div>
    </div>
  )
}

export default Hero