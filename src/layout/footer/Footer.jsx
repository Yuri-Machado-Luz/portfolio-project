import { AnimatedSection, FadeIn } from "@components/animation";
import { Container, Section } from "@components/layout";
import { Badge, Button, Icon } from "@components/ui";
import { NAV_ITEMS } from "@constants/routes";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Yuri-Machado-Luz",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yurimachadoluz0311",
      label: "LinkedIn",
    },
    {
      icon: Phone,
      href: "https://wa.me/5511949359394",
      label: "WhatsApp",
    },
    {
      icon: Mail,
      href: "mailto:yurimachadoluz@hotmail.com",
      label: "Email",
    },
  ];

  const techStack = [
    "React",
    "Node.js",
    "Python",
    "TypeScript",
    "Tailwind CSS",
    "PostgreSQL",
  ];

  const services = [
    "Desenvolvimento Full-Stack",
    "Automação de Processos",
    "Integração de APIs",
    "Data Pipeline & ETL",
  ];

  return (
    <Section
      id="footer"
      as="footer"
      spacing="lg"
      className="border-main-gray/30 border-t"
    >
      <Container size="2xl">
        <AnimatedSection animation="fadeUp">
          <div
            className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2
              lg:grid-cols-3"
          >
            {/* Coluna 1: Logo e Descrição */}
            <FadeIn delay={0.1} direction="up">
              <div className="flex flex-col gap-4">
                <h3 className="font-logo text-2xl font-bold">
                  YUMA<span className="text-pri">.</span>
                </h3>
                <p className="text-main-white/70 text-sm leading-relaxed">
                  Desenvolvedor full-stack com visão end-to-end. Combinando
                  expertise técnica com background em Psicologia e Design para
                  criar soluções que fazem sentido.
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      as="a"
                      href={social.href}
                      target="_blank"
                      aria-label={social.label}
                      className="hover:text-pri transition-colors"
                    >
                      <Icon icon={social.icon} size="sm" />
                    </Button>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Coluna 2: Navegação + Serviços */}
            <FadeIn delay={0.2} direction="up">
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-4">
                  <h4 className="text-main-white text-lg font-semibold">
                    Navegação
                  </h4>
                  <nav className="flex flex-col gap-2">
                    {NAV_ITEMS.map((item, index) => (
                      <Button
                        key={index}
                        variant="link"
                        size="sm"
                        as="a"
                        href={item.link}
                        className="hover:text-pri text-main-white/70
                          justify-start p-0 transition-colors"
                      >
                        {item.name}
                      </Button>
                    ))}
                  </nav>
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="text-main-white text-lg font-semibold">
                    Serviços
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {services.map((service, index) => (
                      <li
                        key={index}
                        className="text-main-white/70 hover:text-main-white
                          text-sm transition-colors"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Coluna 3: Tech Stack + CTA */}
            <FadeIn delay={0.3} direction="up">
              <div className="flex flex-col gap-4">
                <h4 className="text-main-white text-lg font-semibold">
                  Tecnologias
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <Badge key={index} variant="outline" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4">
                  <Button
                    variant="primary"
                    size="md"
                    as="a"
                    href="#contact"
                    className="w-full sm:w-auto"
                  >
                    Entre em Contato
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Divider */}
          <div className="border-main-gray/20 my-8 border-t" />

          {/* Copyright e Créditos */}
          <FadeIn delay={0.4} direction="up">
            <div
              className="flex flex-col items-center justify-between gap-4
                sm:flex-row"
            >
              <p className="text-main-white/50 text-center text-sm sm:text-left">
                © {currentYear} Yuri Machado Luz. Todos os direitos reservados.
              </p>
              <p
                className="text-main-white/50 text-center text-sm sm:text-right"
              >
                Desenvolvido com{" "}
                <span className="text-pri inline-block animate-pulse">♥</span>{" "}
                em São Paulo, Brasil
              </p>
            </div>
          </FadeIn>
        </AnimatedSection>
      </Container>
    </Section>
  );
};

export default Footer;
