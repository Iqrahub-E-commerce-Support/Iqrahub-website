import CustomizableHeading from "@/components/CustomizableHeading";
import MagicIcon from "@/components/icons/MagicIcon";
import egpic from "@/assets/images/almuqtadir/egpic.png";
import PenTipIcon from "@/components/icons/PenTipIcon";
import IdeaIcon from "@/components/icons/IdeaIcon";
import gridbg from "@/assets/images/almuqtadir/Outcomegridbg.png";
import { MegaphoneIcon } from "lucide-react";
import DocumentValidationIcon from "@/components/icons/DocumentValidationIcon";

const outcomeData = [
  {
    id: 1,
    icon: <PenTipIcon />,
    description: "Designed distinct visual content. Enhanced brand identity.",
    title: "Brand Identity",
  },
  {
    id: 2,
    icon: <MegaphoneIcon />,
    description:
      "Executed micro and macro campaigns. Sustained engagement and growth.",
    title: "Campaign Execution",
    bgImage: gridbg,
  },
  {
    id: 3,
    icon: <IdeaIcon />,
    description:
      "Optimized digital marketing efforts. Ensured maximum ad performance.",
    title: "Ad Optimization",
  },

  {
    id: 4,
    icon: <DocumentValidationIcon />,
    description: "Consistent brand presentation across all materials.",
    title: "Brand Uniformity",
  },
];

const Outcome = () => {
  return (
    <div
      className="custom-container border-x-2 border-gold-900 px-4 sm:px-9  lg:-mt-[130px] 2xl:-mt-[120px] 3xl:-mt-[90px]"
      style={{
        boxShadow:
          "4px 0px 0px rgba(193,149,53,0.4), -4px 0px 0px rgba(193,149,53,0.4)",
      }}
    >
      <div className="grid xs:grid-cols-1 lg:grid-cols-2  gap-4">
        <div className="grid  grid-rows-[1fr_2fr] ">
          <div className="xs:-mt-[190px] sm:-mt-[180px] md:-mt-[155px] lg:mt-12 z-20">
            <div className="flex xs:justify-center lg:justify-start  gap-3">
              <CustomizableHeading
                firstTxt="the"
                secondTxt="outcome"
                MainStyle="font-thin uppercase md:text-[48px] "
                SpecialCharacterStyle="font-black text-gold"
              />
              <MagicIcon height={40} width={40} />
            </div>
            <p className="mt-2 xs:text-center lg:text-start text-[20px]">
              Over five years, Al Muqtadir Jewellery underwent a complete
              digital transformation
            </p>
          </div>

          <div className="glassy-bg flex flex-col justify-center items-center border-2 rounded-[20px] px-8 py-12 xs:-mt-[170px] lg:-mt-0">
            <img src={egpic} alt="egpic" className="h-40 w-40" />
            <p className="text-[18px] mt-[35px] capitalize text-center">
              Nibh elit lacus mi elit, dui maecenas vestibulum cursus. Aliquet
              quam cursus tortor eu a. Enim, in
            </p>
            <h6 className="font-black text-gold text-[24px] capitalize mt-[35px]">
              Author Name
            </h6>
            <p>CEO Zoomer</p>
          </div>
        </div>

        <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4">
          {outcomeData.map((item) => (
            <div
              key={item.id}
              className={`glassy-bg flex flex-col justify-center border-2 rounded-[20px] px-8 xs:py-8  ${
                item.bgImage ? "bg-cover" : ""
              }`}
              style={
                item.bgImage ? { backgroundImage: `url(${item.bgImage})` } : {}
              }
            >
              {item.icon}
              <p className="text-[18px] mt-[35px] capitalize">
                {item.description}
              </p>
              <div className="w-full border-2 mt-[47px]" />
              <p className="font-bold text-[18px] uppercase mt-5">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Outcome;
