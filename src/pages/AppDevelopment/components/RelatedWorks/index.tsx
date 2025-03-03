import CustomizableHeaderContainer from "@/components/CustomizableHeaderContainer";
import sample1 from "@/assets/images/AppDevelopment/samplepic1.png";
import sample2 from "@/assets/images/AppDevelopment/samplepic2.png";
import sample3 from "@/assets/images/AppDevelopment/sample3.png";
import ArrowIcon from "@/components/icons/ArrowIcon";
import { useEffect, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const content = [
  { backgroundImg: sample1, title: "Meedgo.com", link: "" },
  { backgroundImg: sample2, title: "GES Solution", link: "" },
  { backgroundImg: sample3, title: "SP-Travel Website", link: "" },
];

const RelatedWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  // Detect screen size changes
  useEffect(() => {
    const checkScreenSize = () => setIsMobileView(window.innerWidth < 886);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const getSlideSize = (index: number) => {
    if (isMobileView) return { width: "100%", height: 250, scale: 1 };

    const isCurrent = index === activeIndex;
    return {
      width: isCurrent ? 500 : 330,
      height: 380,
      scale: isCurrent ? 1 : 0.95,
    };
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <>
      <CustomizableHeaderContainer
        heading1="RELATED WORK"
        heading2="APP DESIGN & BUILD"
        subHeading="We artfully design and build unique, custom apps for brands and agencies that seek innovative and original solutions."
        button="All Projects"
      />
      <Swiper
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          888: { slidesPerView: 2.3 },
          1200: { slidesPerView: 3.5 },
          1440: { slidesPerView: 4 },
        }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSlideChange={handleSlideChange}
        modules={[Autoplay]}
        className="w-full mt-[75px]"
      >
        {content.map((item, index) => {
          const size = getSlideSize(index);
          return (
            <SwiperSlide
              key={index}
              style={{ width: size.width }}
              className="flex justify-center"
            >
              <motion.div
                className="relative flex-shrink-0 border-2 rounded-lg overflow-hidden"
                style={{
                  width: size.width,
                  height: size.height,
                  transform: `scale(${size.scale})`,
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <div
                  className="w-full h-full bg-cover bg-center flex flex-col justify-between p-4"
                  style={{ backgroundImage: `url(${item.backgroundImg})` }}
                >
                  <h6 className="text-white text-2xl font-bold">
                    {item.title}
                  </h6>
                  <div className="flex justify-between items-center">
                    <button className="bg-white text-black hover:bg-black hover:text-white transition-all duration-300 py-2 px-4 rounded-full cursor-pointer">
                      View Project
                    </button>
                    <ArrowIcon />
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default RelatedWorks;
