import { useRef, useState } from "react";
import { BiPlay, BiPause } from "react-icons/bi";
import VideoFrame from "@/assets/images/VideoFrame.png";
import sampleVid from "@/assets/images/video/sample_vid.mp4";
const CustomizedVideoWithFrame = () => {
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
    <div className="relative w-full xs:h-full sm:h-[90vh] 3xl:h-screen">
      {/* Video Container */}
      <div className="relative flex-shrink-0">
        <video
          ref={videoRef}
          src={sampleVid}
          className="absolute inset-0 w-full xs:h-[42vh] sm:h-[89vh] 3xl:h-screen xs:pt-1 sm:pt-3 3xl:pt-[17px] sm:pb-1 3xl:pb-4 xs:px-[2px] sm:px-2 3xl:px-[13px] object-fill xs:rounded-[10px] sm:rounded-[28px] 3xl:rounded-[40px] z-10"
          muted
          loop
          playsInline
        />

        {/* Play/Pause Overlay */}
        <div
          className={`absolute flex justify-center items-center w-full xs:h-[42vh]  sm:h-[89vh] 3xl:h-screen xs:pt-1 sm:pt-3 3xl:pt-[17px] sm:pb-1 3xl:pb-4 xs:px-[2px] sm:px-2 3xl:px-[13px] object-fill xs:rounded-[10px] sm:rounded-[28px] 3xl:rounded-[40px] bg-black ${
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
        src={VideoFrame}
        alt="Video Frame"
        className="absolute inset-0 w-full xs:h-[42vh] sm:h-[90vh] 3xl:h-screen object-fill z-30 pointer-events-none"
      />
    </div>
  );
};

export default CustomizedVideoWithFrame;
