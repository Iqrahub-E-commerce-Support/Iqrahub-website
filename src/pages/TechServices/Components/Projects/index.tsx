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
  // Array of objects to hold the dynamic data for projects
  const projectData = [
    {
      tabValue: "iqra",
      tabTitle: "Iqrahub media story",
      slides: [
        {
          projectImg: projectimg,
          category: "Production House",
          heading: {
            first: "IQRAHUB",
            second: "MEDIA STORY",
          },
          description:
            "“Improving the quality of our mitochondria helps us live healthier and longer lives. Improving the quality of our mitochondria helps us live healthier and longer lives.”",
          team: [
            {
              name: "Jack Peet",
              role: "(Project Manager)",
              image: employee1,
            },
            {
              name: "Smith Watch",
              role: "(Web Developer)",
              image: employee2,
            },
            {
              name: "Jhon Doe",
              role: "(UI/UX Designer)",
              image: employee3,
            },
          ],
        },
        {
          projectImg: projectimg,
          category: "Production House",
          heading: {
            first: "IQRAHUB",
            second: "MEDIA STORY",
          },
          description:
            "“Improving the quality of our mitochondria helps us live healthier and longer lives. Improving the quality of our mitochondria helps us live healthier and longer lives.”",
          team: [
            {
              name: "Jack Peet",
              role: "(Project Manager)",
              image: employee1,
            },
            {
              name: "Smith Watch",
              role: "(Web Developer)",
              image: employee2,
            },
            {
              name: "Jhon Doe",
              role: "(UI/UX Designer)",
              image: employee3,
            },
          ],
        },
        // You can add more slides for this project here if needed.
      ],
    },
    {
      tabValue: "laca",
      tabTitle: "LA-Ca Bite Catalogue",
      slides: [
        {
          projectImg: projectimg,
          category: "Production House",
          heading: {
            first: "LA-CA",
            second: "BITE CATALOGUE",
          },
          description:
            "“A distinct description for the LA-Ca Bite Catalogue project goes here. It can be as detailed as needed to highlight the project’s uniqueness.”",
          team: [
            {
              name: "Alice Blue",
              role: "(Project Manager)",
              image: employee1,
            },
            {
              name: "Bob Green",
              role: "(Web Developer)",
              image: employee2,
            },
            {
              name: "Charlie Red",
              role: "(UI/UX Designer)",
              image: employee3,
            },
          ],
        },
      ],
    },
  ];

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
      <Tabs className="mt-5" defaultValue={projectData[0].tabValue}>
        <TabsList className="flex gap-3 bg-black">
          {projectData.map((project) => (
            <TabsTrigger
              key={project.tabValue}
              value={project.tabValue}
              className={`border-2 rounded-full data-[state=active]:border-yellow 
              data-[state=active]:bg-black text-white data-[state=active]:opacity-100 opacity-35
              data-[state=active]:text-yellow`}
            >
              {project.tabTitle}
            </TabsTrigger>
          ))}
        </TabsList>
        {projectData.map((project) => (
          <TabsContent key={project.tabValue} value={project.tabValue}>
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
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 1 },
                  1024: { slidesPerView: 1 },
                }}
              >
                {project.slides.map((slide, index) => (
                  <SwiperSlide key={index} className="mx-8">
                    <div className="flex justify-start gap-2">
                      <img
                        className="h-[350px] w-[480px]"
                        src={slide.projectImg}
                        alt="projects"
                      />
                      <div className="w-[52%]">
                        <p className="text-yellow text-[18px] mt-4 mb-3">
                          {slide.category}
                        </p>
                        <CustomizableHeading
                          firstTxt={slide.heading.first}
                          secondTxt={slide.heading.second}
                        />
                        <p className="mt-6">{slide.description}</p>
                        <div className="flex gap-4 mt-9">
                          {slide.team.map((member, idx) => (
                            <div key={idx} className="flex gap-3">
                              <img
                                className="h-14 w-12"
                                src={member.image}
                                alt={member.name}
                              />
                              <div>
                                <h5 className="text-yellow font-bold text-[20px]">
                                  {member.name}
                                </h5>
                                <h5 className="text-[14px]">{member.role}</h5>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                {/* Navigation buttons */}
                <div className="swiper-button-prev" />
                <div className="swiper-button-next" />
              </Swiper>
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <style>{`
        .testimonial-swiper {
          /* position: relative; */
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
