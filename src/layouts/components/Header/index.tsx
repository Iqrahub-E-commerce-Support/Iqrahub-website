import Icon from "@/assets/images/icon.png";
import Menu from "./components/Menu";
import Button from "@/components/Button";
const Header = () => {
  return (
    <>
      <header className="flex-space-between">
        <img src={Icon} alt="" className="xs:h-4 sm:h-3 md:h-10" />
        <Menu />
      <Button/>
      </header>
    </>
  );
};

export default Header;
