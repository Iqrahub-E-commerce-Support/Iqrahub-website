import Heading from "@/components/Heading";
import StarIcon from "@/components/icons/StarIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import almuqtadir from "@/assets/images/testimonial/almuqtadir.png";
import clientImg from "@/assets/images/testimonial/almuqtadir_client_pic.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import TestimonialCard from "../TestimonialCard";

const Testimonial = () => {
  const testimonials = [
    {
      img: almuqtadir,
      clientImg: clientImg,
      name: "Dr. Mohammed Manzoor",
      designation: "Chairman Al Muqtadir Jewellery Group",
      content:
        "Mohammad and his team transformed our online strategy, driving a 3x boost in sales and maintaining a steady 3% monthly growth in orders.",
    },
    {
      img: almuqtadir,
      clientImg: clientImg,
      name: "Dr. Mohammed Manzoor",
      designation: "Chairman Al Muqtadir Jewellery Group",
      content:
        "Mohammad and his team transformed our online strategy, driving a 3x boost in sales and maintaining a steady 3% monthly growth in orders.",
    },
  ];

  return (
    <div className=" sm:block md:grid item grid-cols-[1.1fr_2fr] gap-1">
      <div className="flex flex-col justify-center md:ml-16 ">
        <div className="flex gap-2 mb-6">
          {[...Array(5)].map((_, index) => (
            <StarIcon color="white" key={index} />
          ))}
        </div>
        <Heading
          normalText="SEE WHAT"
          specialText="MEMBERS ARE SAYING"
          optionalNormalText=" ABOUT US"
        />
        <p className="font-extralight mt-3 mb-7 text-gray-300">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          enabled: true,
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        // style={{ width: "100%", paddingBottom: 100, paddingLeft: 35 }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        className="testimonial-swiper"
        breakpoints={{
          140: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide className="xs:mx -0 xl:mx-20" key={index}>
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev -ml-[8px] " />
        <div className="swiper-button-next xs:-mr-3 sm:-mr-0" />
      </Swiper>

      <style>{`
        .testimonial-swiper {
        width:100%;
        padding-bottom:100px;
        padding-left:35px;
          // position: relative;
        }
          @media (max-width: 540px) {
    .testimonial-swiper {
      padding-bottom: 180px;
      padding-left: 0px;
    }
  }
          @media (max-width: 900px) {
    .testimonial-swiper {
      padding-bottom: 140px;
      padding-left: 0px;
      margin-left:10px;
    }
  }
  //         @media (max-width: 1280px) {
  //   .testimonial-swiper {
  //     padding-bottom: 140px;
  //     padding-left: 40px;
  //     margin-left:10px;
  //   }
  // }
          @media (min-width: 1280px) {
    .testimonial-swiper {
      padding-bottom: 140px;
      padding-left: 85px;
      margin-left:10px;
    }
  }

        .testimonial-swiper .swiper-button-next,
        .testimonial-swiper .swiper-button-prev {
          color: white;
          border: 6px solid rgba(255, 255, 255, 0.5);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          transform: translateY(-180%);
          // transform: translateX(1%);
        }
        
        .testimonial-swiper .swiper-button-next:after,
        .testimonial-swiper .swiper-button-prev:after {
          font-size: 20px;
        }
        
        .testimonial-swiper .swiper-button-disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }
        
        .testimonial-swiper .swiper-button-next {
          // right: 10px;
        }
        
        .testimonial-swiper .swiper-button-prev {
          // left: 10px;
        }
      `}</style>
    </div>
  );
};

export default Testimonial;
