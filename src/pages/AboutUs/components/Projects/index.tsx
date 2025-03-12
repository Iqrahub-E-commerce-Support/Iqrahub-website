import CustomizableHeading from "@/components/CustomizableHeading";
// import HeroSection from "../HeroSection";
// import bg from "@/assets/images/aboutus/aboutusCal.png";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import sample1 from "@/assets/images/AppDevelopment/samplepic1.png";
import sample2 from "@/assets/images/AppDevelopment/samplepic2.png";
import sample3 from "@/assets/images/AppDevelopment/sample3.png";
import { useEffect, useState } from "react";
import ArrowIcon from "@/components/icons/ArrowIcon";

const content = [
  { backgroundImg: sample1, title: "Meedgo.com", link: "" },
  { backgroundImg: sample2, title: "GES Solution", link: "" },
  { backgroundImg: sample3, title: "SP-Travel Website", link: "" },
  { backgroundImg: sample1, title: "Meedgo.com", link: "" },
  { backgroundImg: sample2, title: "GES Solution", link: "" },
  { backgroundImg: sample3, title: "SP-Travel Website", link: "" },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

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
      {/* <section
        className="w-full h-full xl:h-[400px] bg-cover bg-center flex flex-col justify-start items-center gap-9 xs:pt-[7.5rem] md:pt-[15%] lg:pt-[13%] 2xl:pt-[6%] xs:px-5 3xl:container 3xl:mx-auto"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <HeroSection />
      </section> */}
      <div className="relative z-20 flex justify-between items-center custom-container">
        <div>
          <CustomizableHeading
            firstTxt="our recent"
            secondTxt="projects"
            MainStyle="md:text-[48px] text-yellow uppercase md:leading-[48px]  z-20"
            SpecialCharacterStyle="text-white font-thin"
          />
          <p className="xs:text-[14px] text-[18px] mt-[10px] sm:w-[400px] md:w-full">
            Al Muqtadir Jewelry grew from one to seven showrooms (2020–2022),
            building a strong market presence{" "}
            <br className="xs:hidden lg:block" /> and loyal customers. Its 0%
            making charge and advance booking offers drew crowds.
          </p>
        </div>

        {/* <p className="text-end text-[24px] font-black mb-[39px]">2020-2022</p> */}
        <CustomizableHeading
          firstTxt="2023-2024"
          secondTxt=""
          MainStyle="md:text-[48px] text-yellow uppercase"
          SpecialCharacterStyle="text-white font-thin"
        />
      </div>
      <div className=" xs:mx-6 sm:mx-7 md:mx-0 md:pl-[90px]">
        <Swiper
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            888: { slidesPerView: 2.37 },
            923: { slidesPerView: 2.47 },
            950: { slidesPerView: 2.56 },
            980: { slidesPerView: 2.64 },
            1007: { slidesPerView: 2.72 },
            1042: { slidesPerView: 2.82 },
            1074: { slidesPerView: 2.91 },
            1108: { slidesPerView: 3.05 },
            1152: { slidesPerView: 3.1 },
            1170: { slidesPerView: 3.24 },
            1220: { slidesPerView: 3.39 },
            1280: { slidesPerView: 3.57 },
            1317: { slidesPerView: 3.68 },
            1345: { slidesPerView: 3.76 },
            1386: { slidesPerView: 3.88 },
            1449: { slidesPerView: 4.15 },
            1488: { slidesPerView: 4.38 },
            1522: { slidesPerView: 4.48 },
            1658: { slidesPerView: 4.9 },
            1803: { slidesPerView: 5 },
            1843: { slidesPerView: 5.05 },
          }}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSlideChange={handleSlideChange}
          modules={[Autoplay]}
          className="w-full mt-[80px] "
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
      </div>
      {/* <div className="flex justify-end mt-[112px] mr-[100px]">
        <p className="font-black text-[24px]">2025</p>
      </div> */}
    </>
  );
};

export default Projects;
