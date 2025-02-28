import React from "react";
import CustomizableHeading from "@/components/CustomizableHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import sampleImage from "@/assets/images/sampleImage.png";
import sampleVideo from "@/assets/images/video/sample_vid.mp4";
import { PauseIcon, PlayIcon } from "lucide-react";

const reviews = [
  { id: 1, name: "Kalinga P.", title: "Amazing Product!", image: sampleImage },
  { id: 2, name: "Ayesha R.", title: "Highly Recommend!", image: sampleImage },
  {
    id: 3,
    name: "Samuel D.",
    title: "Best purchase ever!",
    image: sampleImage,
  },
  { id: 4, name: "Fatima K.", title: "Worth the price!", image: sampleImage },
  { id: 5, name: "John M.", title: "Absolutely love it!", image: sampleImage },
];

const CustomerReview = () => {
  const videoRefs = React.useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = React.useState<number | null>(null);

  const togglePlayPause = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (playingIndex === index) {
        video.pause();
        setPlayingIndex(null);
      } else {
        videoRefs.current.forEach((vid, i) => {
          if (vid && i !== index) vid.pause();
        });
        video.play();
        setPlayingIndex(index);
      }
    }
  };

  return (
    <div
      className="custom-container border-x-2 border-gold-900 px-9 pt-10 pb-10 mb-[60px]"
      style={{
        boxShadow:
          "4px 0px 0px rgba(193,149,53,0.4), -4px 0px 0px rgba(193,149,53,0.4)",
      }}
    >
      <div className="flex flex-col items-center">
        <CustomizableHeading
          firstTxt="500,000+ happy"
          secondTxt="customers"
          MainStyle="uppercase md:text-[48px] text-gold xs:text-center md:text-start"
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
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          
        }}
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
        {reviews.map((review, index) => (
          <SwiperSlide key={review.id} className="relative">
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={sampleVideo}
              className="w-full h-[480px] object-cover rounded-lg"
              loop
              muted
              playsInline
            />
            <button
              className="absolute bottom-[50%] right-[45%] border-4  p-2 rounded-full"
              onClick={() => togglePlayPause(index)}
            >
              {playingIndex === index ? (
                <PauseIcon className="h-8 w-8 text-white" />
              ) : (
                <PlayIcon className="h-8 w-8 text-white" />
              )}
            </button>
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
                <p className="text-[14px] text-black">{review.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReview;
