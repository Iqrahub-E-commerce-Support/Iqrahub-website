import Icon from "@/assets/images/icon.png";
import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import YoutubeIcon from "@/components/icons/YoutubeIcon";

const FirstSection = () => {
  return (
    <div className="flex flex-col gap-6 items-start">
      <img src={Icon} alt="icon" className="xs:h-8  md:h-10" />
      <p className="w-[290px]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, amet,
        quod sequi
      </p>
      <div className="flex gap-3">
        <a href="">
          <FacebookIcon />
        </a>
        <a href="">
          <TwitterIcon />
        </a>
        <a href="">
          <InstagramIcon />
        </a>
        <a href="">
          <LinkedInIcon />
        </a>
        <a href="">
          <YoutubeIcon />
        </a>
      </div>
    </div>
  );
};

export default FirstSection;
