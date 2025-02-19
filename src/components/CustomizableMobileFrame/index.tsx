import { useRef, useState } from "react";
import { BiPlay, BiPause } from "react-icons/bi";
import mobileFrame from "@/assets/images/mobile-frame.png";
import sampleVid from "@/assets/images/video/sample_vid.mp4";
const CustomizableMobileFrame = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative xs:h-full sm:h-[100vh] 3xl:h-screen">
      {/* Video Container */}
      <div className="relative flex-shrink-0 ">
        <video
          ref={videoRef}
          src={sampleVid}
          className="absolute inset-0 object-cover w-[98.8%]  xs:h-[247px] sm:h-[99vh] 3xl:h-screen xs:pt-0 sm:pt-0 lg:pt-2 3xl:pt-[17px] sm:pb-1 lg:pb-1 3xl:pb-4 xs:px-[2px] sm:px-2 lg:px-2 3xl:px-[13px]  xs:rounded-[10px] sm:rounded-[28px] lg:rounded-[20px] 3xl:rounded-[40px] z-10"
          muted
          loop
          playsInline
        />

        {/* Play/Pause Overlay */}
        <div
          className={`absolute flex justify-center items-center w-[98.8%]   xs:h-[250px]  sm:h-[99vh] 3xl:h-screen xs:pt-0 sm:pt-0 lg:pt-2 3xl:pt-[17px] sm:pb-1 lg:pb-0 3xl:pb-4 xs:px-[2px] sm:px-2 lg:px-2 3xl:px-[13px]  xs:rounded-[10px] sm:rounded-[28px] lg:rounded-[20px] 3xl:rounded-[40px] bg-black ${
            isPlaying
              ? "bg-opacity-40 opacity-0 hover:opacity-100"
              : "bg-opacity-50"
          }  transition-all duration-300 z-20`}
        >
          <button onClick={togglePlayPause} className="relative z-30">
            <div className="flex border-4 border-yellow rounded-full items-center justify-center xs:p-1 sm:p-4">
              {isPlaying ? (
                <BiPause className="text-yellow w-16 h-16" />
              ) : (
                <BiPlay className="text-yellow w-16 h-16" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Video Frame Overlay */}
      <img
        src={mobileFrame}
        alt="Mobile Frame"
        className="absolute inset-0   xs:h-[250px] sm:h-[100vh] 3xl:h-screen object-fill z-30 pointer-events-none "
      />
    </div>
  );
};

export default CustomizableMobileFrame;
