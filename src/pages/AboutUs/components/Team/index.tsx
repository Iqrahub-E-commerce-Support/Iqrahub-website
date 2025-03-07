import CustomizableHeading from "@/components/CustomizableHeading";
// import HeroSection from "../HeroSection";
// import bg from "@/assets/images/aboutus/aboutusCal.png";
import melissa from "@/assets/images/aboutus/Melissa.png";
import razi from "@/assets/images/aboutus/razi.png";
import sayed from "@/assets/images/aboutus/sayed.png";
import althaf from "@/assets/images/aboutus/althaf.png";
import abhijith from "@/assets/images/aboutus/abhijith.png";
import maisam from "@/assets/images/aboutus/maisam.png";
import vaisakh from "@/assets/images/aboutus/vaisakh.png";
import sufiyan from "@/assets/images/aboutus/sufiyan.png";
import abrar from "@/assets/images/aboutus/abrar.png";
import jithin from "@/assets/images/aboutus/Jithin.png";
import Aboutusfacebook from "../Aboutusfacebook";
import Aboutusgithub from "../Aboutusgithub";
import Aboutuslinkedin from "../Aboutuslinkedin";
const Team = () => {
  return (
    <>
      {/* <section
        className="w-full h-full xl:h-[400px] bg-cover bg-center flex flex-col justify-start items-center gap-9 xs:pt-[7.5rem] md:pt-[15%] lg:pt-[13%] 2xl:pt-[7%] xs:px-5 3xl:container 3xl:mx-auto"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <HeroSection />
      </section> */}
      <div className="relative z-20 flex justify-between items-center">
        <div>
          <CustomizableHeading
            firstTxt="our expert"
            secondTxt="team"
            MainStyle="md:text-[48px] text-yellow uppercase z-20"
            SpecialCharacterStyle="text-white font-thin"
          />
          <p className="text-[18px] mt-[10px]">
            Al Muqtadir Jewelry grew from one to seven showrooms (2020–2022),
            building a strong market presence <br /> and loyal customers. Its 0%
            making charge and advance booking offers drew crowds.
          </p>
        </div>
        <div className="-mt-[39px]">
          <p className="text-end text-[24px] font-black mb-[39px]">2023-2024</p>
          <CustomizableHeading
            firstTxt="2025"
            secondTxt=""
            MainStyle="md:text-[48px] text-yellow uppercase"
            SpecialCharacterStyle="text-white font-thin"
          />
        </div>
      </div>
      <div className=" grid gap-[16px] mt-[80px]">
        <div className="grid grid-cols-2 gap-[16px]">
          <div className="flex border-2 rounded-[12px] hover:border-yellow transition-all duration-300">
            <img
              src={melissa}
              alt="melissa"
              className="h-[208px] w-[208px] place-self-end"
            />
            <div className="py-[30px] pr-[10px]">
              <h5 className="text-[18px] font-bold">
                Melissa Elizabath Varghese
              </h5>
              <h6 className="text-[14px] text-yellow capitalize mt-2">
                chief Operations Manager
              </h6>
              <p className="mr-[42px] mt-[16px]">
                The role involves managing schedules, resources, progress, and
                delays to ensure timely completion of all assigned creative
                work.
              </p>
              <div className="flex mt-[16px] gap-[16px]">
                <Aboutusfacebook />
                <Aboutusgithub />
                <Aboutuslinkedin />
              </div>
            </div>
          </div>
          <div className="flex border-2 rounded-[12px] hover:border-yellow transition-all duration-300">
            <img
              src={razi}
              alt="razi"
              className="h-[208px] w-[208px] place-self-end"
            />
            <div className="py-[30px] pr-[10px]">
              <h5 className="text-[18px] font-bold">Mohammed Razi</h5>
              <h6 className="text-[14px] text-yellow capitalize mt-2">
                Senior Creative manager
              </h6>
              <p className="mr-[42px] mt-[16px]">
                Overseeing timely completion of creative tasks while
                participating in graphic design, logo creation, and video
                editing.
              </p>
              <div className="flex mt-[16px] gap-[16px]">
                <Aboutusfacebook />
                <Aboutusgithub />
                <Aboutuslinkedin />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[16px]">
          <div className="flex border-2 rounded-[12px] hover:border-yellow transition-all duration-300">
            <img
              src={sayed}
              alt="sayed"
              className="h-[208px] w-[208px] place-self-end"
            />
            <div className="py-[22px]">
              <h5 className="text-[18px] font-bold">Said Ali</h5>
              <h6 className="text-[14px] text-yellow capitalize mt-1">
                digital marketing lead
              </h6>
              <p className="mr-[42px] mt-[12px]">
                Manages social media content, posting schedules, paid media
                campaigns, and influencer collaborations.
              </p>
              <div className="flex mt-[12px] gap-[16px]">
                <Aboutusfacebook />
                <Aboutusgithub />
                <Aboutuslinkedin />
              </div>
            </div>
          </div>
          <div className="flex border-2 rounded-[12px] hover:border-yellow transition-all duration-300">
            <img
              src={althaf}
              alt="althaf"
              className="h-[208px] w-[208px] place-self-end"
            />
            <div className="py-[22px] place-self-center">
              <h5 className="text-[18px] font-bold">Mohammed Althaf</h5>
              <h6 className="text-[14px] text-yellow capitalize mt-1">
                SEO & PPC Specialist
              </h6>
              <p className="mr-[42px] mt-[12px]">
                Bridges organic and paid search to drive traffic, conversions,
                and revenue.
              </p>
              <div className="flex mt-[12px] gap-[16px]">
                <Aboutusfacebook />
                <Aboutusgithub />
                <Aboutuslinkedin />
              </div>
            </div>
          </div>
          <div className="flex border-2 rounded-[12px] hover:border-yellow transition-all duration-300">
            <img
              src={abhijith}
              alt="abhijith"
              className="h-[208px] w-[208px] place-self-end"
            />
            <div className="py-[22px]">
              <h5 className="text-[18px] font-bold">Abhijith</h5>
              <h6 className="text-[14px] text-yellow capitalize mt-1">
                Motion Graphics designer
              </h6>
              <p className="mr-[42px] mt-[12px]">
                Creates dynamic, visually engaging content with motion graphics,
                3D rendering, and video work.
              </p>
              <div className="flex mt-[12px] gap-[16px]">
                <Aboutusfacebook />
                <Aboutusgithub />
                <Aboutuslinkedin />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[16px]">
          <div className="flex border-2 rounded-[12px] hover:border-yellow transition-all duration-300">
            <img
              src={maisam}
              alt="maisam"
              className="h-[208px] w-[208px] place-self-end"
            />
            <div className="py-[30px] pr-[10px]">
              <h5 className="text-[18px] font-bold">Maisam Abbas</h5>
              <h6 className="text-[14px] text-yellow capitalize mt-2">
                Lead UI/UX Designer
              </h6>
              <p className="mr-[42px] mt-[16px]">
                Manages visual quality, oversees front-end developers,
                coordinates with the creative team, and contributes to creative
                work.
              </p>
              <div className="flex mt-[16px] gap-[16px]">
                <Aboutusfacebook />
                <Aboutusgithub />
                <Aboutuslinkedin />
              </div>
            </div>
          </div>
          <div className="flex border-2 rounded-[12px] hover:border-yellow transition-all duration-300">
            <img
              src={vaisakh}
              alt="vaisakh"
              className="h-[208px] w-[208px] place-self-end"
            />
            <div className="py-[30px] pr-[10px]">
              <h5 className="text-[18px] font-bold">Vaisakh</h5>
              <h6 className="text-[14px] text-yellow capitalize mt-2">
                Multimedia Designer
              </h6>
              <p className="mr-[42px] mt-[16px]">
                Combines timely work completion with active participation in
                graphic design, logo creation, and video editing for a hybrid
                creative production role.
              </p>
              <div className="flex mt-[16px] gap-[16px]">
                <Aboutusfacebook />
                <Aboutusgithub />
                <Aboutuslinkedin />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[16px]">
          <div className="flex border-2 rounded-[12px] hover:border-yellow transition-all duration-300">
            <img
              src={sufiyan}
              alt="sufiyan"
              className="h-[208px] w-[208px] place-self-end"
            />
            <div className="py-[22px]">
              <h5 className="text-[18px] font-bold">Muhammed Sufiyan</h5>
              <h6 className="text-[14px] text-yellow capitalize mt-1">
                Junior Video Editor
              </h6>
              <p className="mr-[42px] mt-[12px]">
                Hands-on editing while developing technical skills and
                understanding the brand's style and standards.
              </p>
              <div className="flex mt-[12px] gap-[16px]">
                <Aboutusfacebook />
                <Aboutusgithub />
                <Aboutuslinkedin />
              </div>
            </div>
          </div>
          <div className="flex border-2 rounded-[12px] hover:border-yellow transition-all duration-300">
            <img
              src={abrar}
              alt="abrar"
              className="h-[208px] w-[208px] place-self-end"
            />
            <div className="py-[22px] place-self-center">
              <h5 className="text-[18px] font-bold">Abrar Aboobacker</h5>
              <h6 className="text-[14px] text-yellow capitalize mt-1">
                Associate Full-Stack Developer
              </h6>
              <p className="mr-[42px] mt-[12px]">
                Handles front-end and back-end development for web applications.
              </p>
              <div className="flex mt-[12px] gap-[16px]">
                <Aboutusfacebook />
                <Aboutusgithub />
                <Aboutuslinkedin />
              </div>
            </div>
          </div>
          <div className="flex border-2 rounded-[12px] hover:border-yellow transition-all duration-300">
            <img
              src={jithin}
              alt="jithin"
              className="h-[208px] w-[208px] place-self-end"
            />
            <div className="py-[22px]">
              <h5 className="text-[18px] font-bold">Jithin Murugan</h5>
              <h6 className="text-[14px] text-yellow capitalize mt-1">
                AD of Video Production
              </h6>
              <p className="mr-[42px] mt-[12px]">
                Leads video content creation, writes scripts, directs shoots,
                and manages production logistics.
              </p>
              <div className="flex mt-[12px] gap-[16px]">
                <Aboutusfacebook />
                <Aboutusgithub />
                <Aboutuslinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
