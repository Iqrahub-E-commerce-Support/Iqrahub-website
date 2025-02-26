import CustomizableHeading from "@/components/CustomizableHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import sampleImage from "@/assets/images/sampleImage.png";

const reviews = [
  {
    id: 1,
    name: "Kalinga P.",
    title: "Amazing Product!",
    image: sampleImage,
    productImage: sampleImage,
  },
  {
    id: 2,
    name: "Ayesha R.",
    title: "Highly Recommend!",
    image: sampleImage,
    productImage: sampleImage,
  },
  {
    id: 3,
    name: "Samuel D.",
    title: "Best purchase ever!",
    image: sampleImage,
    productImage: sampleImage,
  },
  {
    id: 4,
    name: "Fatima K.",
    title: "Worth the price!",
    image: sampleImage,
    productImage: sampleImage,
  },
  {
    id: 5,
    name: "John M.",
    title: "Absolutely love it!",
    image: sampleImage,
    productImage: sampleImage,
  },
];

const CustomerReview = () => {
  return (
    <div
      className="custom-container border-x-2 border-gold-900 px-9 xs:-mt-[50px] sm:mt-0 lg:-mt-[70px] xl:mt-0 lg pt-[100px] md:pt-0 xl:pt-[100px]  pb-10 mb-[60px]"
      style={{
        boxShadow:
          "4px 0px 0px rgba(193,149,53,0.4), -4px 0px 0px rgba(193,149,53,0.4)",
      }}
    >
      <div className="flex flex-col items-center">
        <CustomizableHeading
          firstTxt="500,000+ happy"
          secondTxt="customers"
          MainStyle="uppercase md:text-[48px] text-gold"
          SpecialCharacterStyle="font-thin text-white"
        />
        <p className="mt-2 capitalize text-[18px] z-10 mb-8">
          {reviews.length} reviews | Average of 4.9 stars
        </p>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <img src={review.productImage} alt={review.title} />
            <div className="bg-white flex items-center gap-4 p-3 rounded-bl-[10px] rounded-br-[10px]">
              <img
                src={review.image}
                alt={review.name}
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <h6 className="font-bold text-[14px] text-black">
                  {review.name}
                </h6>
                <p className="text-[14px] text-black">
                  Title Product Goes Here
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReview;
