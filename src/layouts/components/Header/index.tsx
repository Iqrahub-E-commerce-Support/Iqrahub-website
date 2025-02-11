import Icon from "@/assets/images/icon.png";
import Menu from "./components/Menu";
import { MdArrowForward } from "react-icons/md";
import GradientButton from "@/components/GradientButton";
import { Link } from "react-router-dom";
import { Menu as Menus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { ROUTES } from "@/app/resources/routes-constants";
const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuVariants = {
    initial: {
      x: "100%",
      opacity: 0,
      skewX: "5deg",
    },
    animate: {
      x: 0,
      opacity: 1,
      skewX: "0deg",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.8,
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      skewX: "-5deg",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.8,
      },
    },
  };
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
  const itemVariants = {
    initial: {
      x: 50,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };
  return (
    <>
      <header className="flex-space-between">
        <Link to={"/"}>
          <img src={Icon} alt="icon" className="xs:h-8  md:h-10" />
        </Link>
        <Menu />

        {/* Hamburger Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 right-4 z-50 p-3 glassy-bg border rounded-lg shadow-lg hover:shadow-xl focus:outline-none lg:hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={24} /> : <Menus size={24} />}
          </motion.div>
        </motion.button>

        {/* Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed top-0 right-0 h-screen w-screen shadow-2xl z-40"
            >
              <div className="p-6 pt-20 h-screen bg-black flex items-center flex-col overflow-x-hidden overflow-y-auto no-scrollbar scrollbar-thin scrollbar-thumb-black scrollbar-track-black custom-scrollbar">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-10 -mt-10"
                >
                  <Link onClick={() => setIsOpen(false)} to="/">
                    <img src={Icon} alt="icon" className="xs:h-8 md:h-10" />
                  </Link>
                </motion.div>

                <nav className="space-y-2">
                  {menus.map((item, index) => (
                    <motion.a
                      key={index}
                      variants={itemVariants}
                      className="w-screen transition-all duration-1000"
                      whileHover={{ scale: 1.02 }}
                      custom={index}
                    >
                      <motion.div
                        className="w-screen flex justify-center border border-grey p-3 rounded-lg hover:bg-yellow transition-all duration-300 group"
                        whileHover={{
                          y: -5,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <Link onClick={() => setIsOpen(false)} to={item.path}>
                          <span className="font-bold text-[3.1rem] group-hover:text-black">
                            {item.name}
                          </span>
                        </Link>
                      </motion.div>
                    </motion.a>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-10"
                >
                  <GradientButton className="">
                    Get in Touch <MdArrowForward />
                  </GradientButton>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <GradientButton className="xs:hidden lg:block">
          Get in Touch <MdArrowForward />
        </GradientButton>
      </header>
    </>
  );
};

export default Header;
