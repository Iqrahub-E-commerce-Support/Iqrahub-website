import CustomizableHeading from "@/components/CustomizableHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import projectimg from "@/assets/images/Projects/Projects1.png";
import employee1 from "@/assets/images/Projects/employee1.png";
import employee2 from "@/assets/images/Projects/employee2.png";
import employee3 from "@/assets/images/Projects/employee3.png";
const Projects = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <p className="text-[18px]">Web Development Projects</p>
        <CustomizableHeading
          firstTxt="WE BUILD"
          secondTxt="EXPERIENCES"
          thirdTxt="THAT LASTS"
          MainStyle="text-4xl mt-2 font-bold"
          SpecialCharacterStyle="text-yellow"
          thirdTextStyle="font-thin"
        />
      </div>
      <Tabs className="mt-5" defaultValue="iqra">
        <TabsList className="flex gap-3 bg-black">
          <TabsTrigger
            className={`border-2 rounded-full data-[state=active]:border-yellow 
                  data-[state=active]:bg-black text-white data-[state=active]:opacity-100  opacity-35
                  data-[state=active]:text-yellow`}
            value="iqra"
          >
            Iqrahub media story
          </TabsTrigger>
          <TabsTrigger
            className={`border-2 rounded-full data-[state=active]:border-yellow 
                data-[state=active]:bg-black text-white data-[state=active]:opacity-100  opacity-35
                data-[state=active]:text-yellow`}
            value="iqra2"
          >
            LA-Ca Bite Catalogue
          </TabsTrigger>
        </TabsList>
        <TabsContent value="iqra">
          <div className="relative w-full mt-[80px]">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                enabled: true,
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              style={{ width: "100%", paddingBottom: 100, paddingLeft: 35 }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              className="testimonial-swiper h-full"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide className="mx-8">
                <div className="flex justify-start gap-2">
                  <img
                    className="h-[350px] w-[480px]"
                    src={projectimg}
                    alt="projects"
                  />
                  <div className="w-[52%]">
                    <p className="text-yellow text-[18px] mt-4 mb-3">
                      Production House
                    </p>
                    <CustomizableHeading
                      firstTxt="IQRAHUB"
                      secondTxt="MEDIA STORY"
                    />
                    <p className="mt-6">
                      “Improving the quality of our mitochondria helps us live
                      healthier and longer lives. Improving the quality of our
                      mitochondria helps us live healthier and longer lives.”
                    </p>
                    <div className="flex  gap-4  mt-9">
                      <div className=" flex gap-3">
                        <img
                          className="h-14 w-12"
                          src={employee1}
                          alt="employee1"
                        />
                        <div>
                          <h5 className="text-yellow font-bold text-[20px]">
                            Jack Peet
                          </h5>
                          <h5 className="text-[14px]">(Project Manager)</h5>
                        </div>
                      </div>
                      <div className=" flex gap-3">
                        <img
                          className="h-14 w-12"
                          src={employee2}
                          alt="employee1"
                        />
                        <div>
                          <h5 className="text-yellow font-bold text-[20px]">
                            Smith Watch
                          </h5>
                          <h5 className="text-[14px]">(Web Developer)</h5>
                        </div>
                      </div>
                      <div className=" flex gap-3">
                        <img
                          className="h-14 w-12"
                          src={employee3}
                          alt="employee1"
                        />
                        <div>
                          <h5 className="text-yellow font-bold text-[20px]">
                            Jhon Doe
                          </h5>
                          <h5 className="text-[14px]">(UI/UX Designer)</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <TestimonialCard {...testimonial} /> */}
              </SwiperSlide>
              <SwiperSlide className="mx-8">
                <div className="flex justify-start gap-2">
                  <img
                    className="h-[350px] w-[480px]"
                    src={projectimg}
                    alt="projects"
                  />
                  <div className="w-[52%]">
                    <p className="text-yellow text-[18px] mt-4 mb-3">
                      Production House
                    </p>
                    <CustomizableHeading
                      firstTxt="IQRAHUB"
                      secondTxt="MEDIA STORY"
                    />
                    <p className="mt-6">
                      “Improving the quality of our mitochondria helps us live
                      healthier and longer lives. Improving the quality of our
                      mitochondria helps us live healthier and longer lives.”
                    </p>
                    <div className="flex  gap-4  mt-9">
                      <div className=" flex gap-3">
                        <img
                          className="h-14 w-12"
                          src={employee1}
                          alt="employee1"
                        />
                        <div>
                          <h5 className="text-yellow font-bold text-[20px]">
                            Jack Peet
                          </h5>
                          <h5 className="text-[14px]">(Project Manager)</h5>
                        </div>
                      </div>
                      <div className=" flex gap-3">
                        <img
                          className="h-14 w-12"
                          src={employee2}
                          alt="employee1"
                        />
                        <div>
                          <h5 className="text-yellow font-bold text-[20px]">
                            Smith Watch
                          </h5>
                          <h5 className="text-[14px]">(Web Developer)</h5>
                        </div>
                      </div>
                      <div className=" flex gap-3">
                        <img
                          className="h-14 w-12"
                          src={employee3}
                          alt="employee1"
                        />
                        <div>
                          <h5 className="text-yellow font-bold text-[20px]">
                            Jhon Doe
                          </h5>
                          <h5 className="text-[14px]">(UI/UX Designer)</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div className="swiper-button-prev " />
              <div className="swiper-button-next" />
            </Swiper>
          </div>
        </TabsContent>
      </Tabs>
      <style>{`
        .testimonial-swiper {
          // position: relative;
        }
        
        .testimonial-swiper .swiper-button-next,
        .testimonial-swiper .swiper-button-prev {
          color: white;
          border: 6px solid rgba(255, 255, 255, 0.5);
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        
        .testimonial-swiper .swiper-button-next:after,
        .testimonial-swiper .swiper-button-prev:after {
          font-size: 20px;
        }
        
        .testimonial-swiper .swiper-button-disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }
        
        .testimonial-swiper .swiper-button-next {
          right: 10px;
        }
        
        .testimonial-swiper .swiper-button-prev {
          left: 10px;
        }
      `}</style>
    </>
  );
};

export default Projects;
