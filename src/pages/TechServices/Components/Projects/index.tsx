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
import { ROUTES } from "@/app/resources/routes-constants";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";

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
          link: ROUTES.almuqtadirCaseStudy,
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
        // {
        //   projectImg: projectimg,
        //   category: "Production House",
        //   heading: {
        //     first: "IQRAHUB",
        //     second: "MEDIA STORY",
        //   },
        //   description:
        //     "“Improving the quality of our mitochondria helps us live healthier and longer lives. Improving the quality of our mitochondria helps us live healthier and longer lives.”",
        //   team: [
        //     {
        //       name: "Jack Peet",
        //       role: "(Project Manager)",
        //       image: employee1,
        //     },
        //     {
        //       name: "Smith Watch",
        //       role: "(Web Developer)",
        //       image: employee2,
        //     },
        //     {
        //       name: "Jhon Doe",
        //       role: "(UI/UX Designer)",
        //       image: employee3,
        //     },
        //   ],
        // },
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
          link:"#",
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
const navigate = useNavigate()
  return (
    <>
      <div className="sm:flex flex-col xs:items-start sm:items-center">
        <p className="xs:text-[14px] sm:text-[18px] text-center">
          Web Development Projects
        </p>
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
            <div className="relative xs:-ml-8 sm:ml-0  w-full xs:mt-[80px] sm:mt-[60px]">
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  enabled: true,
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                // style={{ width: "100%", paddingBottom: 100, paddingLeft: 35 }}
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
                  0: { slidesPerView: 1 },
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 1 },
                  1024: { slidesPerView: 1 },
                }}
              >
                {project.slides.map((slide, index) => (
                  <SwiperSlide key={index} className="mx-8">
                    <div className="xs:block md:flex  xs:justify-center sm:justify-between md:justify-start xs:gap-0 sm:gap-8">
                      <img
                        className=" sm:ml-0 xs:h-full sm:h-[350px]  md:h-[250px]  lg:h-[350px] xs:w-[300px] sm:w-[450px]  md:w-[380px] lg:w-[480px]"
                        src={slide.projectImg}
                        alt="projects"
                      />
                      <div className="xs:w-[84%]  md:w-[36%] xl:w-[52%]">
                        <p className="text-yellow text-[18px] mt-4 mb-3">
                          {slide.category}
                        </p>
                        <CustomizableHeading
                          firstTxt={slide.heading.first}
                          secondTxt={slide.heading.second}
                        />
                        <p className="mt-6">{slide.description}</p>
                        <div className="flex flex-wrap gap-4 mt-9">
                          {slide.team.map((member, idx) => (
                            <div key={idx} className="flex flex-wrap gap-3">
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
                        <Button variant="contained" style="mt-[37px]" onClick={()=>navigate(slide.link)}>
                          View Project
                        </Button>
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
        //  position: relative;
        }
        
                @media (max-width: 740px) {
    .swiper-button-next,
    .swiper-button-prev {
      display:none;
    }
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
