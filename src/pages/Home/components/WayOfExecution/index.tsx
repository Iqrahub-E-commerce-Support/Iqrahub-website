import  { useRef, useState } from "react";
import { BiPause, BiPlay } from "react-icons/bi";
import { MdArrowForward } from "react-icons/md";
import GradientButton from "@/components/GradientButton";
import Heading from "@/components/Heading";
import StarIcon from "@/components/icons/StarIcon";

const WayOfExecution = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

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
    <div className="my-14 xs:block md:grid grid-cols-[1fr_2fr] gap-4">
      {/* Left Section */}
      <div>
        <div className="flex gap-2 mb-6">
          {[...Array(5)].map((_, index) => (
            <StarIcon key={index} />
          ))}
        </div>
        <Heading
          normalText="Turning Ideas Into Impactful"
          specialText="Brands."
        />
        <p className="font-extralight mt-3 mb-7">
          We empower businesses with branding solutions that resonate and
          inspire, helping you stand out in a competitive world.
        </p>
        <GradientButton>
          Get in Touch <MdArrowForward />
        </GradientButton>
      </div>

      {/* Video Section */}
      <div className="relative w-full overflow-hidden xs:mt-7 md:mt-0">
        <div className="flex gap-5 items-end w-full overflow-x-auto pb-4 no-scrollbar scrollbar-thin scrollbar-thumb-yellow scrollbar-track-black custom-scrollbar">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`relative ${
                index === 0 ? "w-[330px] h-[338px]" : "w-[250px] h-[248px]"
              } flex-shrink-0 border-2 rounded-lg`}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                loop
                muted
                playsInline
              />
              <button
                onClick={() => togglePlayPause(index)}
                className={`absolute inset-0 flex items-center justify-center bg-black ${
                  playingIndex === index ? "bg-opacity-40 opacity-0 hover:opacity-100" : "bg-opacity-50"
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
    </div>
  );
};

export default WayOfExecution;
