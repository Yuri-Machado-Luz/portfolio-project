import { NAV_ITEMS } from "@constants/routes";
import { useScrollPosition, useScrollSpy } from "@hooks";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { menuVariants } from "./const.env.js";
import NavMenu from "./NavMenu.jsx";

function Navbar() {
  const { scrollY } = useScrollPosition();
  const isScrolled = scrollY > 50;

  // Extrai os IDs das seções para monitorar
  const sectionIds = NAV_ITEMS.map((item) => item.link.replace("#", ""));

  // Hook que detecta automaticamente a seção ativa e atualiza a URL
  const activeSectionId = useScrollSpy(sectionIds, 150);
  const activeLink = activeSectionId
    ? `#${activeSectionId}`
    : NAV_ITEMS[0].link;

  const handleActiveLink = (link) => {
    // Scroll suave para a seção
    const targetId = link.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = 100;
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Motion.nav
        className="fixed z-50 flex h-26 w-11/12 max-w-420 items-center
          justify-between rounded-full border px-8 align-middle backdrop-blur-xl
          transition-all duration-300 md:px-10 lg:px-14"
        style={{
          background: isScrolled
            ? "rgba(26, 26, 26, 0.48)"
            : "rgba(26, 26, 26, 0.80)",
          borderColor: isScrolled
            ? "rgba(255, 0, 64, 0.2)"
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
          className="text-main-white relative cursor-pointer text-2xl font-bold
            tracking-wider xl:text-3xl"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <a
            href="#hero"
            onClick={() => handleActiveLink("#hero")}
            className="hover:text-pri flex items-center gap-1 transition-colors
              duration-300"
          >
            YUMA
            <span className="text-pri inline-block animate-pulse text-5xl/0">
              .
            </span>
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
