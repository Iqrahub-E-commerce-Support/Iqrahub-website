import Icon from "@/assets/images/icon.png";
import Menu from "./components/Menu";
import { MdArrowForward } from "react-icons/md";
import GradientButton from "@/components/GradientButton";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex-space-between">
        <Link to={"/"}>
          <img src={Icon} alt="icon" className="xs:h-8  md:h-10" />
        </Link>
        <Menu />
        <GradientButton>
          Get in Touch <MdArrowForward />
        </GradientButton>
      </header>
    </>
  );
};

export default Header;
