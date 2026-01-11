import { AnimatedSection, FadeIn } from "@components/animation";
import { Container, Section } from "@components/layout";
import { Badge, Card } from "@components/ui";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Briefcase, Code, GraduationCap, User } from "lucide-react";
import { useState } from "react";
import {
  EDUCATION,
  EXPERIENCES,
  SKILL_CATEGORIES,
} from "../skills/const.env.js";

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: "Perfil",
      icon: User,
    },
    {
      id: 1,
      label: "Competências",
      icon: Code,
    },
    {
      id: 2,
      label: "Experiência",
      icon: Briefcase,
    },
    {
      id: 3,
      label: "Formação",
      icon: GraduationCap,
    },
  ];

  return (
    <Section id="about" spacing="sm">
      <Container size="xl">
        <AnimatedSection animation="fadeUp">
          <h2 className="mb-6 text-center text-3xl font-bold">
            SOBRE<span className="text-sec">.</span>
          </h2>
        </AnimatedSection>

        {/* Navegação de Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 rounded-lg px-6
                  py-3 font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-pri/20 text-pri border-pri/50 border-2"
                      : `bg-main-gray/30 text-main-white/60 border-main-gray/30
                        hover:text-main-white hover:border-main-gray/50
                        border-2`
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Conteúdo do Carrossel */}
        <AnimatePresence mode="wait">
          <Motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Tab 0: Perfil */}
            {activeTab === 0 && (
              <div className="mx-auto max-w-4xl">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-main-white mb-3 text-xl font-semibold">
                      Desenvolvedor Full-Stack
                    </h3>
                    <p
                      className="text-main-white/80 text-justify text-lg
                        leading-relaxed"
                    >
                      Desenvolvedor full-stack em formação, cursando Análise e
                      Desenvolvimento de Sistemas. Atuo no desenvolvimento de
                      soluções completas, desde a interface do usuário até a
                      lógica e infraestrutura de back-end. Tenho experiência
                      prática na aplicação de boas práticas de engenharia de
                      software, como código limpo, testes automatizados e
                      versionamento, e trabalho com metodologias ágeis
                      (Scrum/Kanban). Busco constantemente integrar
                      conhecimentos em arquitetura escalável, modelagem de
                      processos (BPMN) e pipelines de CI/CD para garantir a
                      qualidade e a eficiência dos projetos.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-main-white mb-3 text-xl font-semibold">
                      Background Híbrido
                    </h3>
                    <p
                      className="text-main-white/70 text-justify text-lg
                        leading-relaxed"
                    >
                      Formação multidisciplinar combinando Análise e
                      Desenvolvimento de Sistemas (em andamento) com quatro anos
                      de Psicologia. Esta intersecção permite desenvolver
                      soluções tecnicamente robustas e centradas na experiência
                      do usuário, integrando aspectos funcionais e
                      comportamentais do design de interfaces.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 1: Competências */}
            {activeTab === 1 && (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {SKILL_CATEGORIES.map((category, catIndex) => (
                  <FadeIn key={catIndex} delay={0.1 + catIndex * 0.1}>
                    <Card variant="glass" className="h-full p-6">
                      <Card.Header className="mb-4">
                        <h4 className="text-main-white text-lg font-semibold">
                          {category.title}
                        </h4>
                      </Card.Header>
                      <Card.Body>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="outline"
                              size="sm"
                              className={`${skill.primary ? "opacity-100" : "opacity-70"}`}
                            >
                              {skill.name}
                            </Badge>
                          ))}
                        </div>
                      </Card.Body>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            )}

            {/* Tab 2: Experiência */}
            {activeTab === 2 && (
              <div className="space-y-6">
                {EXPERIENCES.map((exp, index) => (
                  <FadeIn key={index} delay={0.1 + index * 0.1}>
                    <Card variant="glass" hover className="p-6">
                      <div className="flex flex-col gap-4 md:flex-row">
                        <div className="shrink-0 md:w-48">
                          <p className="text-sec text-sm font-semibold">
                            {exp.period}
                          </p>
                          <p className="text-main-white/50 mt-1 text-xs">
                            {exp.type}
                          </p>
                        </div>

                        <div className="flex-1">
                          <h4
                            className="text-main-white mb-1 text-lg
                              font-semibold"
                          >
                            {exp.role}
                          </h4>
                          <p className="text-main-white/70 mb-3 text-sm">
                            {exp.company}
                          </p>
                          <p
                            className="text-main-white/60 mb-4 text-sm
                              leading-relaxed"
                          >
                            {exp.description}
                          </p>

                          <div className="mb-3 flex flex-wrap gap-2">
                            {exp.highlights.map((highlight, hIndex) => (
                              <Badge
                                key={hIndex}
                                variant="secondary"
                                size="xs"
                                className="opacity-80"
                              >
                                {highlight}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, tIndex) => (
                              <Badge
                                key={tIndex}
                                variant="outline"
                                size="xs"
                                className="opacity-60"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            )}

            {/* Tab 3: Formação */}
            {activeTab === 3 && (
              <div
                className="mx-auto grid max-w-4xl grid-cols-1 gap-6
                  lg:grid-cols-2"
              >
                {EDUCATION.map((edu, index) => (
                  <FadeIn key={index} delay={0.1 + index * 0.1}>
                    <Card variant="glass" className="p-6">
                      <Card.Body>
                        <h4
                          className="text-main-white mb-2 text-base
                            font-semibold"
                        >
                          {edu.degree}
                        </h4>
                        <p className="text-main-white/70 mb-2 text-sm">
                          {edu.institution}
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge
                            variant={
                              edu.status.includes("andamento")
                                ? "primary"
                                : "outline"
                            }
                            size="xs"
                          >
                            {edu.status}
                          </Badge>
                          <span className="text-main-white/50 text-xs">
                            {edu.period}
                          </span>
                        </div>
                      </Card.Body>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            )}
          </Motion.div>
        </AnimatePresence>
      </Container>
    </Section>
  );
};

export default About;
