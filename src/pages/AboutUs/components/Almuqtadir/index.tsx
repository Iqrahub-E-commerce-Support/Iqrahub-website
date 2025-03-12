import CustomizableHeading from "@/components/CustomizableHeading";

// const marketData = [
//   { percentage: 90, width: 384 },
//   { percentage: 42, width: 252 },
//   { percentage: 12, width: 138 },
// ];

const revenueData = [
  {
    amount: "$31M",
    description:
      "2020 Uber revenue came to $11.3 billion - a 43% increase on 2018, while gross",
  },
  {
    amount: "$24M",
    description:
      "2022 Uber revenue came to $11.3 billion - a 43% increase on 2018, while gross",
  },
];

const Almuqtadir = () => {
  return (
    <>
      {/* <section
        className="w-full h-full xl:h-[400px] bg-cover bg-center flex flex-col justify-start items-center gap-9 xs:pt-[7.5rem] md:pt-[15%] lg:pt-[13%] 2xl:pt-[8%] xs:px-5 3xl:container 3xl:mx-auto"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <HeroSection />
      </section> */}
      <div className="relative z-20 flex justify-between items-center">
        <div>
          <CustomizableHeading
            firstTxt="Muqtadir"
            secondTxt="Jewelry"
            MainStyle="md:text-[48px] text-yellow uppercase md:leading-[48px]  z-20"
            SpecialCharacterStyle="text-white font-thin"
          />
          <p className="xs:text-[14px] text-[18px] mt-[10px] sm:w-[400px] md:w-full">
            Al Muqtadir Jewelry grew from one to seven showrooms (2020–2022),
            building a strong market <br className="xs:hidden md:block" />{" "}
            presence and loyal customers. Its 0% making charge and advance
            booking offers drew crowds.
          </p>
        </div>

        {/* <p className="text-end text-[24px] font-black mb-[39px]">2019</p> */}
        <CustomizableHeading
          firstTxt="2019-2022"
          secondTxt=""
          MainStyle="md:text-[48px] text-yellow uppercase"
          SpecialCharacterStyle="text-white font-thin"
        />
      </div>
      <div className=" md:flex justify-start xs:mt-[50px]  md:mt-[77px] gap-[33px]">
        <div className="z-30">
          <p className="text-24px">Market Insight</p>
          <div className="border-yellow border-2 w-[200px] mt-[15px] " />
          {/* {marketData.map(({ percentage, width }, index) => (
            <div
              key={index}
              className={`flex gap-[34px] items-center mt-[23px] opacity-${100 - index * 40}`}
            >
              <div
                className={`h-[100px] w-[${width}px] bg-gradient-to-r from-yellow via-yellow-opacity0.8 to-red`}
              />
              <p className="text-[36px]">{percentage}%</p>
            </div>
          ))} */}
          <div className="flex gap-[34px] items-center mt-[23px]">
            <div className="h-[100px] w-[384px] bg-gradient-to-r from-yellow via-yellow-opacity0.8 to-red" />
            <p className="text-[36px]">90 %</p>
          </div>
          <div className="flex gap-[34px] items-center mt-[23px] opacity-80">
            <div className="h-[100px] w-[252px] bg-gradient-to-r from-yellow via-yellow-opacity0.8 to-red" />
            <p className="text-[36px]">42 %</p>
          </div>
          <div className="flex gap-[34px] items-center mt-[23px] opacity-40">
            <div className="h-[100px] w-[138px] bg-gradient-to-r from-yellow via-yellow-opacity0.8 to-red" />
            <p className="text-[36px]">12 %</p>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-[16px] z-30 xs:mt-[23px] md:mt-0">
          {revenueData.map(({ amount, description }, index) => (
            <div
              key={index}
              className="glassy-bg flex flex-col justify-center items-center border-2 rounded-[20px] p-[28px] md:w-[345px] 2xl:w-[445px]"
            >
              <h6 className="font-black text-[104px] capitalize">{amount}</h6>
              <p className="text-[16px] text-[#979797] capitalize text-center">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="flex justify-end mt-[37px]">
        <p className="font-black text-[24px]">2023-2024</p>
      </div> */}
    </>
  );
};

export default Almuqtadir;
