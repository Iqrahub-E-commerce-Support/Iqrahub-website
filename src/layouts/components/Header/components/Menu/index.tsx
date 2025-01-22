import { MdKeyboardArrowDown } from "react-icons/md";
import { useLocation, Link } from "react-router-dom";

const Menu = () => {
  const location = useLocation(); 
  console.log(location.pathname,"location")
  const menus = [
    { name: "Home", path: "/", isMenu: false },
    { name: "Karrak Stories", path: "/karrak-stories", isMenu: false },
    { name: "Our Work", path: "/our-work", isMenu: false },
    { name: "Services", path: "/services", isMenu: true },
    { name: "About Us", path: "/about-us", isMenu: false },
  ];

  return (
    <div className="lg:flex-space-between mt-1 xs:hidden">
      {menus.map((menu, index) => (
        <Link to={menu.path} key={index}>
          <p
            className={`nav-hover-btn font-gabarito  flex items-center cursor-pointer  ${
              location.pathname === menu.path ? "active text-yellow" : "hover:text-yellow"
            }`}
          >
            {menu.name} {menu.isMenu && <MdKeyboardArrowDown />}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
