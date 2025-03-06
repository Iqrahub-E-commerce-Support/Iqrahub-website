import { useRef, useState, useEffect } from "react";
import { BiPause, BiPlay } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { motion, AnimatePresence } from "framer-motion";
import sampleVideo from "@/assets/images/video/sample_vid.mp4";
import CustomizableHeaderContainer from "@/components/CustomizableHeaderContainer";
import ArrowIcon from "@/components/icons/ArrowIcon";
// Sample videos (Replace with actual URLs)
const videoList = [
  { url: sampleVideo },
  {
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  { url: sampleVideo },
  {
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  { url: sampleVideo },

  {
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
];

const VideoSection = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  // Detect screen size changes
  useEffect(() => {
    const checkScreenSize = () => setIsMobileView(window.innerWidth < 886);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Play/Pause function
  const togglePlayPause = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (playingIndex === index) {
        video.pause();
        setPlayingIndex(null);
      } else {
        videoRefs.current.forEach((vid, i) => {
          if (vid && i !== index) vid.pause();
        });
        video.play();
        setPlayingIndex(index);
      }
    }
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  // Define video slide size based on screen width
  const getSlideSize = (index: number) => {
    if (isMobileView)
      return { width: "100%", height: 250, opacity: 1, scale: 1 };
    const isCurrent = index === activeIndex;

    return {
      width: isCurrent ? 522 : 336,
      height: isCurrent ? 385 : 385,
      opacity: isCurrent ? 1 : 0.7,
      scale: isCurrent ? 1 : 0.95,
      isCurrent,
    };
  };

  return (
    <div className="relative w-full overflow-hidden my-10">
      <div className="mr-16 mb-8">
        <CustomizableHeaderContainer
          heading1="DISCOVER"
          heading2={`YOUR BRAND'S STORY`}
          subHeading="We artfully craft highly creative, one of a kind work, for brands and
                    agencies that strive for ownableoriginality."
          button="All Projects"
        />
      </div>
      <Swiper
        spaceBetween={25} // Add some spacing
        breakpoints={{
          0: { slidesPerView: 1 },
          888: { slidesPerView: 2.3 },
          900: { slidesPerView: 2.4 },
          955: { slidesPerView: 2.5 },
          988: { slidesPerView: 2.6 },
          1016: { slidesPerView: 2.7 },
          1046: { slidesPerView: 2.8 },
          1088: { slidesPerView: 2.9 },
          1117: { slidesPerView: 3 },
          1152: { slidesPerView: 3.1 },
          1206: { slidesPerView: 3.2 },
          1226: { slidesPerView: 3.3 },
          1250: { slidesPerView: 3.4 },
          1300: { slidesPerView: 3.5 },
          1340: { slidesPerView: 3.6 },
          1370: { slidesPerView: 3.7 },
          1410: { slidesPerView: 3.8 },
          1445: { slidesPerView: 3.9 },
          1485: { slidesPerView: 4 },
          1520: { slidesPerView: 4.1 },
          1555: { slidesPerView: 4.2 },
          1595: { slidesPerView: 4.3 },
          1630: { slidesPerView: 4.4 },
          1665: { slidesPerView: 4.5 },
          1700: { slidesPerView: 4.8 },
        }}
        // slidesPerView={isMobileView ? 1 : 4.3}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSlideChange={handleSlideChange}
        modules={[Autoplay]}
        className="w-full"
      >
        {videoList.map((videoItem, index) => {
          const size = getSlideSize(index);
          return (
            <SwiperSlide
              key={index}
              style={{ width: size.width }}
              className="flex justify-center flex-shrink-0 "
            >
              <motion.div
                className="relative border-2 rounded-lg  flex-shrink-0"
                style={{
                  width: size.width,
                  height: size.height,
                  opacity: size.opacity,
                  transform: `scale(${size.scale})`,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={videoItem.url}
                  className="w-full h-full object-cover rounded-lg"
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 flex items-start justify-between text-white z-30 p-4 h-0">
                  <button className="bg-white text-black px-3 py-1 rounded-full cursor-pointer">
                    View Project
                  </button>
                  <div className="cursor-pointer">
                    <ArrowIcon />
                  </div>
                </div>
                <div className="absolute bottom-0 flex items-end justify-between text-white z-30 p-4  h-0">
                  <p className="text-[22px] font-bold">Project Name</p>
                </div>
                <motion.button
                  onClick={() => togglePlayPause(index)}
                  className={`absolute inset-0 flex items-center justify-center bg-black ${
                    playingIndex === index ? "bg-opacity-30" : "bg-opacity-50"
                  } rounded-lg`}
                  whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  style={{ pointerEvents: "none" }} // Prevents blocking the text click
                >
                  <motion.div
                    className={`flex border-4 ${size.isCurrent ? "border-yellow" : ""} rounded-full items-center justify-center`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ pointerEvents: "auto" }} // Allows clicking the play/pause button
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={playingIndex === index ? "pause" : "play"}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {playingIndex === index ? (
                          <BiPause
                            size={60}
                            className={`${size.isCurrent ? "text-yellow" : "text-white"}`}
                          />
                        ) : (
                          <BiPlay
                            size={60}
                            className={`${size.isCurrent ? " text-yellow " : "text-white"}`}
                          />
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                </motion.button>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default VideoSection;
