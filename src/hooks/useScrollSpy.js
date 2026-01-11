import { useEffect, useState } from "react";

/**
 * Hook para detectar qual seção está visível no viewport
 * e atualizar automaticamente o hash da URL
 *
 * @param {string[]} sectionIds - Array de IDs das seções a monitorar
 * @param {number} offset - Offset do topo em pixels (padrão: 100)
 * @returns {string} - ID da seção ativa atual
 */
export const useScrollSpy = (sectionIds, offset = 100) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Encontra a seção atualmente visível
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          // Verifica se estamos dentro dos limites da seção
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionIds[i]);

            // Atualiza o hash da URL sem scroll
            if (window.location.hash !== `#${sectionIds[i]}`) {
              window.history.replaceState(null, "", `#${sectionIds[i]}`);
            }

            break;
          }
        }
      }

      // Se estamos no topo da página, remove o hash
      if (scrollPosition < offset) {
        setActiveSection("");
        if (window.location.hash) {
          window.history.replaceState(null, "", window.location.pathname);
        }
      }
    };

    // Executa imediatamente para definir seção inicial
    handleScroll();

    // Adiciona listener de scroll com throttle
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
};
