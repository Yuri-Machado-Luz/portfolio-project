import { Container, Section } from "@components/layout";
import { Badge, Button } from "@components/ui";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { badgeVariants, titleVariants } from "./const.env.js";

function Hero() {
  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.2,
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  return (
    <AnimatePresence>
      <Section
        as={Motion.section}
        id="hero"
        spacing="none"
        className="mb-40 flex min-h-150 items-center justify-center p-0
          align-top"
      >
        <Container size="lg" className="flex flex-col items-center gap-6">
          <Motion.div
            variants={badgeVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95, translateY: 2 }}
          >
            <Badge variant="outline" size="lg" className="cursor-default">
              FULL-STACK DEVELOPER
            </Badge>
          </Motion.div>

          <Motion.h1
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            className="font-accent cursor-default text-center text-5xl
              lg:text-6xl"
          >
            YURI MACHADO
            <span className="text-sec text-7xl/0 lg:text-7xl/0">.</span>
          </Motion.h1>

          <Motion.p
            variants={descriptionVariants}
            initial="hidden"
            animate="visible"
            className="text-main-white/80 max-w-2xl text-center text-lg
              leading-relaxed lg:text-xl"
          >
            Dev + Psicologia + Design. <br /> Transformando ideias em ideais.
          </Motion.p>

          <Motion.div
            variants={ctaVariants}
            initial="hidden"
            animate="visible"
            className="mt-4 flex flex-wrap justify-center gap-4"
          >
            <Button variant="primary" size="lg" as="a" href="#projects">
              Ver Projetos
            </Button>
            <Button variant="outline" size="lg" as="a" href="#contact">
              Entre em Contato
            </Button>
          </Motion.div>
        </Container>
      </Section>
    </AnimatePresence>
  );
}

export default Hero;
