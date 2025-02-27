import CustomizableHeading from "@/components/CustomizableHeading";
import conclusion from "@/assets/images/vionex/conclusion.png";

const conclusionCards = [
  {
    title: "SkySwift project",
    description:
      "The SkySwift project successfully envisioned a future where drone delivery plays a pivotal role in logistics. Through compelling visuals and strategic storytelling, we demonstrated the transformative potential of drone technology. By reducing costs, improving efficiency, and offering a sustainable alternative, SkySwift presents a bold outlook on what the future of delivery could be.",
  },
  {
    title: "conceptual brand",
    description:
      "As a conceptual brand, SkySwift serves as a tribute to the limitless possibilities of drone applications across industries—from retail and medical supply chains to military operations. With the drone industry poised to exceed $5 billion**, this project stands as a testament to how technology can reshape the way goods are transported, setting the stage for a more efficient, connected, and sustainable future.",
  },
];

const Conclusion = () => {
  return (
    <section className="w-full">
      <p className="font-bold text-base sm:text-lg md:text-[20px]">
        Through Extensive Research
      </p>

      <CustomizableHeading
        firstTxt="Conclusion"
        MainStyle="xs:text-[35px] sm:text-[45px] md:text-[64px] text-yellow xs:mt-0 sm:mt-4 md:mt-0"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 sm:mt-8 md:mt-10 gap-4 sm:gap-6">
        <div className="flex flex-col gap-4 sm:gap-6">
          {conclusionCards.map((card, index) => (
            <div
              key={index}
              className="bg-grey rounded-[20px] sm:rounded-[34px] p-4 sm:p-6 md:p-8 flex-1"
            >
              <h6 className="font-bold text-base sm:text-lg md:text-[25px] mb-3 sm:mb-4 capitalize">
                {card.title}
              </h6>
              <p className="font-medium text-sm sm:text-base md:text-[16px] leading-relaxed text-[#FFFFFFCC]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="order-first lg:order-last">
          <img
            src={conclusion}
            alt="Drone Delivery System"
            className="w-full h-full xl:h-[580px] rounded-[20px] sm:rounded-[34px] object-contain sm:object-fill lg:object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
