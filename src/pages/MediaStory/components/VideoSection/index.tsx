import CustomizableHeaderContainer from "@/components/CustomizableHeaderContainer";
import React from "react";
import { BiPause, BiPlay } from "react-icons/bi";
import sampleVideo from "@/assets/images/video/sample_vid.mp4";
const VideoSection = () => {
  const videoRefs = React.useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = React.useState<number | null>(null);

  const togglePlayPause = (index: number) => {
    const video = videoRefs.current[index];

    if (video) {
      if (playingIndex === index) {
        video.pause();
        setPlayingIndex(null);
      } else {
        // Pause all other videos before playing the selected one
        videoRefs.current.forEach((vid, i) => {
          if (vid && i !== index) vid.pause();
        });

        video.play();
        setPlayingIndex(index);
      }
    }
  };
  return (
    <>
      <div className="mr-16">
        <CustomizableHeaderContainer
          heading1="DISCOVER"
          heading2={`YOUR BRAND'S STORY`}
          subHeading="We artfully craft highly creative, one of a kind work, for brands and
                    agencies that strive for ownableoriginality."
          button="All Projects"
        />
      </div>
      <div className="pt-[75px] relative w-full overflow-hidden xs:mt-7 md:mt-0">
        <div className="flex gap-5 items-end w-full overflow-x-auto pb-4 scrollbar-none">
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`relative ${
                index === 0 ? "w-[480px] h-[350px]" : "w-[300px] h-[350px]"
              } flex-shrink-0 border-2 rounded-lg`}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={sampleVideo}
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                loop
                muted
                playsInline
              />
              <button
                onClick={() => togglePlayPause(index)}
                className={`absolute inset-0 flex items-center justify-center bg-black ${
                  playingIndex === index
                    ? "bg-opacity-40 opacity-0 hover:opacity-100"
                    : "bg-opacity-50"
                } transition-opacity duration-300 rounded-lg`}
              >
                <div className="flex border-4 rounded-full items-center justify-center">
                  {playingIndex === index ? (
                    <BiPause size={60} className="text-white" />
                  ) : (
                    <BiPlay size={60} className="text-white" />
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoSection;
