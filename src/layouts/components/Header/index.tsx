import Icon from "@/assets/images/icon.png";
import Menu from "./components/Menu";
import { MdArrowForward } from "react-icons/md";
import GradientButton from "@/components/GradientButton";
const Header = () => {
  return (
    <>
      <header className="flex-space-between">
        <img src={Icon} alt="" className="xs:h-4 sm:h-3 md:h-10" />
        <Menu />
        <GradientButton >
          Get in Touch <MdArrowForward />
        </GradientButton>
      </header>
    </>
  );
};

export default Header;
