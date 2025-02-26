import { useRef, useState } from "react";
import { BiPause, BiPlay } from "react-icons/bi";
import { MdArrowForward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import GradientButton from "@/components/GradientButton";
import Heading from "@/components/Heading";
import StarIcon from "@/components/icons/StarIcon";
import sampleVideo from "@/assets/images/video/sample_vid.mp4";
import { motion, AnimatePresence } from "framer-motion";
const WayOfExecution = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const video = [
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

  const getSlideSize = (index: number) => {
    const isCurrent = index === activeIndex;
    return {
      width: isCurrent ? 432 : 304,
      height: isCurrent ? 438 : 308,
      opacity: isCurrent ? 1 : 0.7,
      transform: isCurrent ? "scale(1)" : "scale(0.95)",
    };
  };

  return (
    <div className="my-14 xs:block md:grid md:grid-cols-[1.5fr_2fr] lg:grid-cols-[1fr_2fr] gap-4">
      {/* Left Section */}
      <div className="md:ml-16 3xl:ml-0">
        <div className="flex gap-2 mb-6 transition-transform duration-300 hover:scale-105">
          {[...Array(5)].map((_, index) => (
            <StarIcon
              key={index}
              className="transition-all duration-300 hover:text-yellow-400 hover:scale-110"
            />
          ))}
        </div>
        <Heading
          normalText="Turning Ideas Into Impactful"
          specialText="Brands."
        />
        <p className="font-extralight mt-3 mb-7 transition-opacity duration-300 hover:opacity-80">
          We empower businesses with branding solutions that resonate and
          inspire, helping you stand out in a competitive world.
        </p>
        <GradientButton className="transition-transform duration-300 hover:scale-105">
          Get in Touch{" "}
          <MdArrowForward className="transition-transform duration-300 group-hover:translate-x-1" />
        </GradientButton>
      </div>

      {/* Video Section */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative w-full overflow-hidden xs:mt-7 md:mt-0"
      >
        <Swiper
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1.8 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3.3 },
          }}
          className="w-full"
          wrapperClass="items-end"
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          onSlideChange={handleSlideChange}
        >
          {video.map((vide, index) => {
            const size = getSlideSize(index);
            const isCurrent = index === activeIndex;

            return (
              <SwiperSlide key={index} className="!w-auto">
                <motion.div
                  className="relative border-2 rounded-lg"
                  style={{
                    width: `${size.width}px`,
                    height: `${size.height}px`,
                  }}
                  animate={{
                    scale: isCurrent ? 1 : 0.95,
                    opacity: isCurrent ? 1 : 0.7,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={vide.url}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    loop
                    muted
                    playsInline
                  />
                  <motion.button
                    onClick={() => togglePlayPause(index)}
                    className={`absolute inset-0 flex items-center justify-center bg-black ${
                      playingIndex === index ? "bg-opacity-40" : "bg-opacity-50"
                    } rounded-lg`}
                    whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="flex border-4 rounded-full items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
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
                            <BiPause size={60} className="text-white" />
                          ) : (
                            <BiPlay size={60} className="text-white" />
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
      </motion.div>
    </div>
  );
};

export default WayOfExecution;
