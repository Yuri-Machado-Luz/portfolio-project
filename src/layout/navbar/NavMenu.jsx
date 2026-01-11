import { Icon } from "@components/ui";
import { NAV_ITEMS } from "@constants/routes";
import { cn } from "@utils/cn";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useCallback, useState } from "react";
import { itemVariants, menuVariants } from "./const.env.js";

function NavMenu({ activeLink, handleActiveLink }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleNavClick = useCallback(
    (link) => {
      handleActiveLink(link);
      setIsMenuOpen(false);
    },
    [handleActiveLink]
  );

  const getLinkStyles = (isActive) =>
    cn(
      "block w-full self-center px-2 py-3 transition-colors duration-300",
      "text-base font-bold 2xl:text-xl",
      isActive
        ? "text-hex-pri active-link hover:drop-shadow-md hover:drop-shadow-white/10"
        : "text-hex-main-white hover:drop-shadow-md hover:drop-shadow-pri-light/60"
    );

  return (
    <>
      {/* Mobile Menu Button */}
      <AnimatePresence
        initial={{ opacity: 0, transition: { duration: 0.2 } }}
        animate={{ opacity: 1, transition: { duration: 0.2 } }}
      >
        <Motion.button
          key="menuButton"
          onClick={toggleMenu}
          className="xl:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          <Icon icon={isMenuOpen ? X : Menu} size="lg" />
        </Motion.button>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <Motion.ul
              key="mobileMenu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="bg-main-gray/95 absolute top-24 -right-2 z-50 w-5/12
                -translate-x-1/12 transform rounded-3xl px-6 py-3 shadow-lg
                shadow-black/50 xl:hidden xl:w-3/12"
              role="menu"
            >
              {NAV_ITEMS.map((item) => (
                <Motion.li
                  key={item.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, translateY: -2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 40 }}
                  className="mb-2 flex h-16 w-full justify-center rounded-2xl
                    bg-black/20 text-center"
                  role="menuitem"
                >
                  <a
                    href={item.link}
                    className={getLinkStyles(activeLink === item.link)}
                    onClick={() => handleNavClick(item.link)}
                  >
                    {item.name}
                  </a>
                </Motion.li>
              ))}
            </Motion.ul>
          )}
        </AnimatePresence>
      </AnimatePresence>

      {/* Desktop Navigation */}
      <ul
        className="hidden cursor-pointer flex-row gap-1 xl:flex"
        role="navigation"
        aria-label="Menu principal"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeLink === item.link;
          return (
            <li key={item.name} className="relative">
              <a
                href={item.link}
                className={cn(
                  `relative block px-3 py-2 text-sm font-medium tracking-wide
                  transition-colors duration-200`,
                  isActive
                    ? "text-pri"
                    : "text-main-white/80 hover:text-main-white"
                )}
                onClick={() => handleActiveLink(item.link)}
              >
                {item.name}

                {/* Indicador de link ativo */}
                {isActive && (
                  <Motion.div
                    className="bg-pri absolute right-0 -bottom-1 left-0 h-0.5"
                    layoutId="navIndicator"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default NavMenu;
