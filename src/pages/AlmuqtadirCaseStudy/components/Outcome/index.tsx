import CustomizableHeading from "@/components/CustomizableHeading";
import MagicIcon from "@/components/icons/MagicIcon";
import egpic from "@/assets/images/almuqtadir/egpic.png";
import PenTipIcon from "@/components/icons/PenTipIcon";
import IdeaIcon from "@/components/icons/IdeaIcon";
import gridbg from "@/assets/images/almuqtadir/Outcomegridbg.png";
import { MegaphoneIcon } from "lucide-react";
import DocumentValidationIcon from "@/components/icons/DocumentValidationIcon";
const Outcome = () => {
  return (
    <div className="custom-container border-x-2 border-gold-900 px-9">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid grid-rows-[1fr_2fr] ">
          <div>
            <div className="flex gap-3">
              <CustomizableHeading
                firstTxt="the"
                secondTxt="outcome"
                MainStyle="font-thin uppercase md:text-[48px]"
                SpecialCharacterStyle="font-black text-gold"
              />
              <MagicIcon height={40} width={40} />
            </div>
            <p className=" mt-2   text-[20px]">
              Over five years, Al Muqtadir Jewellery underwent a complete
              digital transformation
            </p>
          </div>
          <div className="glassy-bg flex flex-col justify-center items-center border-2  rounded-[20px] px-8 py-12 ">
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
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-rows-2 gap-4">
            <div className="glassy-bg flex flex-col justify-center border-2  rounded-[20px] px-8 ">
              <PenTipIcon />
              <p className="text-[18px] mt-[35px] capitalize ">
                Designed distinct visual content. Enhanced brand identity.
              </p>
              <div className="w-full border-2 mt-[47px]" />
              <p className="font-bold text-[18px] uppercase mt-5">
                Brand Identity
              </p>
            </div>
            <div className="glassy-bg flex flex-col justify-center border-2  rounded-[20px] px-8 ">
              <IdeaIcon />
              <p className="text-[18px] mt-[35px] capitalize ">
                Optimized digital marketing efforts. Ensured maximum ad
                performance
              </p>
              <div className="w-full border-2 mt-[47px]" />
              <p className="font-bold text-[18px] uppercase mt-5">
                Ad Optimization
              </p>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div
              className="glassy-bg flex flex-col justify-center border-2  rounded-[20px] px-8 bg-cover "
              style={{ backgroundImage: `url(${gridbg})` }}
            >
              <MegaphoneIcon />
              <p className="text-[18px] mt-[35px] capitalize ">
                Executed micro and macro campaigns. Sustained engagement and
                growth.
              </p>
              <div className="w-full border-2 mt-[47px]" />
              <p className="font-bold text-[18px] uppercase mt-5">
                Campaign Execution
              </p>
            </div>
            <div className="glassy-bg flex flex-col justify-center border-2  rounded-[20px] px-8 ">
              <DocumentValidationIcon />
              <p className="text-[18px] mt-[35px] capitalize ">
                Consistent brand presentation across all materials.
              </p>
              <div className="w-full border-2 mt-[47px]" />
              <p className="font-bold text-[18px] uppercase mt-5">
                Brand Uniformity
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outcome;
