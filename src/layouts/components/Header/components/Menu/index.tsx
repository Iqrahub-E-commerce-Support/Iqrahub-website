import { ROUTES } from "@/app/resources/routes-constants";
import { useLocation, Link } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const path = location.pathname;
  // const segments = location.pathname.split(" ");
  // const firstSegment = segments[0];
  // console.log(segments, "segments");
  const menus = [
    { name: "Home", path: ROUTES.home, isMenu: false },
    { name: "Karrak Stories", path: "#", isMenu: false },
    { name: "Media Story", path: ROUTES.mediaStory, isMenu: false },
    {
      name: "Tech Services",
      path: `${ROUTES.techServices}${ROUTES.webdesign}`,
      isMenu: true,
    },
    { name: "About Us", path: "#", isMenu: false },
  ];

  return (
    <div className="lg:flex-space-between xs:hidden">
      {menus.map((menu, index) => (
        <div
          className={`nav-hover-btn font-gabarito  flex items-center cursor-pointer  ${
            path === `${menu.path}` ? "active text-yellow" : "hover:text-yellow"
          }`}
        >
          <Link to={menu.path} key={index}>
            {menu.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
