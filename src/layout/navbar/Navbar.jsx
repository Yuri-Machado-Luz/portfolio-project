import { NAV_ITEMS } from "@constants/routes";
import { useScrollPosition } from "@hooks/useScrollPosition";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { useState } from "react";
import { itemVariants, menuVariants } from "./const.env.js";
import NavMenu from "./NavMenu.jsx";

function Navbar() {
  const [activeLink, setActiveLink] = useState(NAV_ITEMS[0].link);
  const { scrollY } = useScrollPosition();
  const isScrolled = scrollY > 50;

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <Motion.nav
        className="fixed z-50 flex h-24 w-11/12 max-w-[1400px] items-center
          justify-between rounded-full px-8 md:px-10 lg:px-14 align-middle
          backdrop-blur-xl transition-all duration-300 border-[3px]"
        style={{
          background: isScrolled
            ? "rgba(26, 26, 26, 0.98)"
            : "rgba(26, 26, 26, 0.85)",
          borderColor: isScrolled
            ? "rgba(255, 0, 64, 0.3)"
            : "rgba(140, 140, 140, 0.2)",
          boxShadow: isScrolled
            ? "0 8px 32px rgba(255, 0, 64, 0.2), 0 0 80px rgba(0, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
            : "0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        }}
        initial="hidden"
        animate="visible"
        variants={menuVariants}
      >
        {/* Logo */}
        <Motion.h2
          aria-label="Logomarca"
          className="text-main-white cursor-pointer text-2xl font-bold
            tracking-wider xl:text-3xl relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <a
            href="#hero"
            onClick={() => handleActiveLink("#hero")}
            className="flex items-center gap-1 hover:text-pri transition-colors duration-300"
          >
            YUMA
            <span className="text-pri text-5xl/0 inline-block animate-pulse">.</span>
          </a>
        </Motion.h2>

        {/* Menu */}
        <NavMenu
          className="relative"
          activeLink={activeLink}
          handleActiveLink={handleActiveLink}
        />
      </Motion.nav>
      <div className="h-28" />
    </>
  );
}

export default Navbar;
