import bg from "@/assets/images/caligraphy.png";
import CustomerReviewBar from "./components/CustomerReviewBar";
import Button from "@/components/Button";

const Home = () => {
  return (
    <>
      <div
        // className="h-[450px] bg-cover bg-center bg-gradient-to-r from-[#FFC506] to-[#C5261F] "
        className="h-[550px] bg-cover bg-center flex flex-col justify-center items-center gap-9 sm:pt-[6%] xs:pt-[400px]"
        style={{ backgroundImage: `url(${bg}) ` }}
      >
        <CustomerReviewBar />
        <div>
          <h1 className="font-gabarito font-bold text-6xl text-center leading-[67px]">
            Get Professional Fast <br />
            Branding, <span className="text-yellow"> Website,</span> Messaging
          </h1>
          <h6 className="mt-5 text-center text-2xl">
          Time is money. get professional website and messaging done in days not months.
          </h6>
        </div>
        <div>
          <Button/>
        </div>
      </div>
    </>
  );
};

export default Home;
