import CustomizableHeaderContainer from "@/components/CustomizableHeaderContainer";
import sample1 from "@/assets/images/AppDevelopment/samplepic1.png";
import sample2 from "@/assets/images/AppDevelopment/samplepic2.png";
import sample3 from "@/assets/images/AppDevelopment/sample3.png";
import ArrowIcon from "@/components/icons/ArrowIcon";
const RelatedWorks = () => {
  const content = [
    { backroundImg: sample1, title: "Meedgo.com", link: "" },
    { backroundImg: sample2, title: "GES Solution", link: "" },
    { backroundImg: sample3, title: "SP-Travel Website", link: "" },
  ];

  return (
    <>
      <CustomizableHeaderContainer
        heading1="RELATED WORK"
        heading2="APP DESIGN & BUILD"
        subHeading="We artfully design and build unique, custom apps for brands and agencies that seek innovative and original solutions."
        button="All Projects"
      />
      <div className="pt-[75px] relative w-full overflow-hidden xs:mt-7 md:mt-0">
        <div className="flex gap-5 items-end w-full overflow-x-auto pb-4 scrollbar-none">
          {content.map((content, index) => (
            <div
              className={`relative ${
                index === 0 ? "w-[480px] h-[350px]" : "w-[300px] h-[350px]"
              } flex-shrink-0 border-2 rounded-lg bg-cover p-4`}
              style={{ backgroundImage: `url(${content.backroundImg}) ` }}
            >
              <div className="flex flex-col justify-between h-full ">
                <div>
                  <h6 className="text-[24px] font-bold">{content.title}</h6>
                </div>
                <div className="flex justify-between items-center">
                  <h6 className="bg-white text-black hover:bg-black hover:text-white transition-all duration-300 py-1 px-3 rounded-full cursor-pointer">
                    View Project
                  </h6>
                  <ArrowIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedWorks;
