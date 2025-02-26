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
    <div className="relative flex justify-center items-center xs:h-[360px] sm:h-[750px] 3xl:h-screen overflow-hidden">
      {/* Grouped Container */}
      <div className="relative flex justify-center items-center xs:w-[240px] sm:w-[98.8%] xs:h-[355px] sm:h-[750px] md:h-[600px] xl:h-full  ">
        {/* Video */}
        <video
          ref={videoRef}
          src={sampleVid}
          className="absolute inset-0 object-cover xs:w-full xs:h-full sm:w-full sm:h-full rounded-[20px] z-10 xs:px-[3px] "
          muted
          loop
          playsInline
        />

        {/* Play/Pause Overlay */}
        <div
          className={`absolute flex justify-center items-center xs:w-full xs:h-full sm:w-full sm:h-full bg-black rounded-[20px]  ${
            isPlaying
              ? "bg-opacity-40 opacity-0 hover:opacity-100"
              : "bg-opacity-50"
          } transition-all duration-300 z-20`}
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

        {/* Mobile Frame Overlay */}
        <img
          src={mobileFrame}
          alt="Mobile Frame"
          className="absolute inset-0 xs:w-full xs:h-full sm:w-full sm:h-full object-fill z-30 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default CustomizableMobileFrame;
