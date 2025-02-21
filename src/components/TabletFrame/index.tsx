import { useRef, useState } from "react";
import { BiPlay, BiPause } from "react-icons/bi";
import tableFrame from "@/assets/images/tabletFrame.png";
import sampleVid from "@/assets/images/video/sample_vid.mp4";

const TabletFrame = () => {
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
    <div className="relative flex justify-center items-center w-full max-w-4xl mx-auto">
      {/* Video Container */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-[3/2] flex-shrink-0">
        <video
          ref={videoRef}
          src={sampleVid}
          className="absolute inset-0 w-full h-full object-cover xs:rounded-[11px] sm:rounded-[25px] md:rounded-[19px] z-10 xs:px-[5px] sm:px-[9px] md:px-2 xs:pt-[5px] sm:pt-[13px] md:pt-[10px] xs:pb-[8px] sm:pb-[22px] md:pb-[15px] "
          muted
          loop
          playsInline
        />

        {/* Play/Pause Overlay */}
        <div
          className={`absolute inset-0 flex justify-center items-center bg-black ${
            isPlaying ? "bg-opacity-40 opacity-0 hover:opacity-100" : "bg-opacity-50"
          } transition-opacity duration-300 z-20 rounded-lg`}
        >
          <button onClick={togglePlayPause} className="relative z-30">
            <div className="flex border-4 border-gold rounded-full items-center justify-center p-4">
              {isPlaying ? (
                <BiPause className="text-gold w-16 h-16" />
              ) : (
                <BiPlay className="text-gold w-16 h-16" />
              )}
            </div>
          </button>
        </div>

        {/* Video Frame Overlay */}
        <img
          src={tableFrame}
          alt="Tablet Frame"
          className="absolute inset-0 w-full h-full object-fill z-30 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default TabletFrame;
