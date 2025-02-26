import CustomerReviewBar from "../CustomerReviewBar";

const Hero = () => {
  return (
    <>
      <CustomerReviewBar />
      <div>
        <h1 className="font-gabarito font-bold xs:text-5xl md:text-6xl text-center ">
          Get Professional Fast <br />
          Branding, <span className="text-yellow"> Website,</span> Messaging
        </h1>
        <h1 className="xs:mt-2 sm:mt-5 text-center xs:text-[15px] sm:text-[18px]  leading-[20px] ">
          Time is money. get professional website and messaging done in days not
          months.
        </h1>
      </div>
    </>
  );
};

export default Hero;
