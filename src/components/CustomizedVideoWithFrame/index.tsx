import { useRef, useState } from "react";
import { BiPlay, BiPause } from "react-icons/bi";
import VideoFrame from "@/assets/images/VideoFrame.png";

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
    <div className="relative w-full h-[90vh]">
      {/* Video Container */}
      <div className="relative flex-shrink-0">
        <video
          ref={videoRef}
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          className="absolute inset-0 w-full h-[89vh] pt-3 pb-1 px-2 object-fill rounded-[28px] z-10"
          muted
          loop
          playsInline
        />

        {/* Play/Pause Overlay */}
        <div
          className={`absolute flex justify-center items-center w-full h-[89vh] pt-3 pb-1 px-2 rounded-[28px] bg-black ${
            isPlaying
              ? "bg-opacity-40 opacity-0 hover:opacity-100"
              : "bg-opacity-50"
          }  transition-all duration-300 z-20`}
        >
          <button onClick={togglePlayPause} className="relative z-30">
            <div className="flex border-4 border-yellow rounded-full items-center justify-center p-4">
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
        className="absolute inset-0 w-full h-[90vh] object-fill z-30 pointer-events-none"
      />
    </div>
  );
};

export default CustomizedVideoWithFrame;
