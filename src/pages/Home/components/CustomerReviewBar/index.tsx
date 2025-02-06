import { colors } from "@/constants/color";
import { MdOutlineStar } from "react-icons/md";
import profile from "@/assets/images/profile-picture.jpg";
const CustomerReviewBar = () => {
  const propic = [
    { img: profile, alt: "profile-1" },
    { img: profile, alt: "profile-2" },
    { img: profile, alt: "profile-3" },
    { img: profile, alt: "profile-4" },
    { img: profile, alt: "profile-5" },
  ];
  return (
    <div className="glassy-bg flex space-between xs:gap-2 gap-12   border rounded-full xs:px-2 md:px-5 xs:py-2 md:py-2 xs:mx-8 sm:mx-0 ">
      <div className="flex-space-between gap-2 xs:gap-1 ">
        <span className="text-yellow xs:text-[12px] sm:text-[15px]">5.0</span>
        <MdOutlineStar color={colors.yellow} size={15} />
        <p className="xs:text-[10px] sm:text-[15px]">Recommended by 500k</p>
      </div>
      <div className="flex -space-x-4 rtl:space-x-reverse">
        {propic.map((pro, index) => (
          <img
            className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
            src={pro.img}
            alt={pro.alt}
          />
        ))}

        <a
          className="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-black border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
          href="#"
        >
          +99
        </a>
      </div>
    </div>
  );
};

export default CustomerReviewBar;
