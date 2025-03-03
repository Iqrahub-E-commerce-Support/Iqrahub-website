import { useRef, useState, useEffect } from "react";
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
  const [isMobileView, setIsMobileView] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth < 886);
    };

    // Initial check
    checkScreenSize();

    // Listen for resize events
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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

  // Simplified slide size for mobile and tablet
  const getSlideSize = (index: number) => {
    // For mobile and tablet, we don't need animations and different sizes
    if (isMobileView) {
      return {
        width: "100%",
        height: 250,
        opacity: 1,
        transform: "none",
      };
    }

    // For larger screens, keep the original behavior
    const isCurrent = index === activeIndex;
    let width = 304;
    let height = 308;

    if (window.innerWidth >= 1280) {
      width = isCurrent ? 432 : 304;
      height = isCurrent ? 438 : 308;
    } else if (window.innerWidth >= 1024) {
      width = isCurrent ? 400 : 280;
      height = isCurrent ? 410 : 290;
    } else if (window.innerWidth >= 768) {
      width = isCurrent ? 360 : 260;
      height = isCurrent ? 380 : 270;
    }

    return {
      width,
      height,
      opacity: isCurrent ? 1 : 0.7,
      transform: isCurrent ? "scale(1)" : "scale(0.95)",
    };
  };

  // Render video slide based on screen size
  const renderVideoSlide = (videoItem: { url: string }, index: number) => {
    const size = getSlideSize(index);
    const isCurrent = index === activeIndex;

    // Simple version for mobile/tablet
    if (isMobileView) {
      return (
        <div
          className="relative border-2 rounded-lg w-full"
          style={{ height: `${size.height}px` }}
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={videoItem.url}
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            loop
            muted
            playsInline
          />
          <div
            onClick={() => togglePlayPause(index)}
            className={`absolute inset-0 flex items-center justify-center bg-black ${
              playingIndex === index ? "bg-opacity-40" : "bg-opacity-50"
            } rounded-lg`}
          >
            <div className="flex border-4 rounded-full items-center justify-center">
              {playingIndex === index ? (
                <BiPause size={60} className="text-white" />
              ) : (
                <BiPlay size={60} className="text-white" />
              )}
            </div>
          </div>
        </div>
      );
    }

    // Animated version for larger screens
    return (
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
          src={videoItem.url}
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
    );
  };

  return (
    <div className="my-14 xs:block md:grid md:grid-cols-[1.5fr_2fr] lg:grid-cols-[1fr_2fr] gap-[132px]">
      {/* Left Section */}
      <div className="md:ml-[100px] ">
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

      {/* Video Section - Different rendering based on screen size */}
      <div
        className={`relative w-full overflow-hidden xs:mt-7 md:mt-0 ${!isMobileView ? "motion-safe" : ""}`}
      >
        {isMobileView ? (
          // Simple Swiper for mobile without animations
          <Swiper
            spaceBetween={5}
            slidesPerView={1}
            className="w-full"
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            onSlideChange={handleSlideChange}
          >
            {video.map((videoItem, index) => (
              <SwiperSlide key={index}>
                {renderVideoSlide(videoItem, index)}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          // Animated version for larger screens
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full"
          >
            <Swiper
              spaceBetween={20}
              breakpoints={{
                886: { slidesPerView: 1.53 },
                924: { slidesPerView: 1.68 },
                965: { slidesPerView: 1.77 },
                1010: { slidesPerView: 1.86 },
                1024: { slidesPerView: 1.95 },
                1040: { slidesPerView: 2.01 },
                1067: { slidesPerView: 2.1 },
                1088: { slidesPerView: 2.15 },
                1109: { slidesPerView: 2.26 },
                1133: { slidesPerView: 2.34 },
                1159: { slidesPerView: 2.43 },
                1209: { slidesPerView: 2.58 },
                1267: { slidesPerView: 2.67 },
                1313: { slidesPerView: 2.57 },
                1361: { slidesPerView: 2.65 },
                1396: { slidesPerView: 2.75 },
                1442: { slidesPerView: 2.85 },
                1490: { slidesPerView: 2.95 },
                1538: { slidesPerView: 3.1 },
                1613: { slidesPerView: 3.2 },
                1665: { slidesPerView: 3.3 },
                1712: { slidesPerView: 3.4 },
                1760: { slidesPerView: 3.5 },
                1807: { slidesPerView: 3.6 },
                1857: { slidesPerView: 3.7 },
                1900: { slidesPerView: 3.8 },
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
              {video.map((videoItem, index) => (
                <SwiperSlide key={index} className="!w-auto">
                  {renderVideoSlide(videoItem, index)}
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default WayOfExecution;
