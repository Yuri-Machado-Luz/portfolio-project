import { AnimatedSection, FadeIn } from "@components/animation";
import { Container, Section } from "@components/layout";
import { Badge, Card } from "@components/ui";
import { Briefcase, GraduationCap } from "lucide-react";
import { EDUCATION, EXPERIENCES, SKILL_CATEGORIES } from "./const.env.js";

const Skills = () => {
  // Function reserved for future use
  // const getLevelColor = (level) => {
  //   const colors = {
  //     avançado: "bg-pri/20 text-pri border-pri/30",
  //     intermediário: "bg-sec/20 text-sec border-sec/30",
  //     básico: "bg-main-gray/40 text-main-white/70 border-main-gray/30",
  //   };
  //   return colors[level] || colors.básico;
  // };

  return (
    <Section id="skills">
      <Container size="lg">
        {/* Header */}
        <AnimatedSection animation="fadeUp">
          <h2 className="text-main-white mb-4 text-3xl font-bold">
            SKILLS & EXPERIÊNCIA<span className="text-sec">.</span>
          </h2>
          <p className="text-main-white/70 mb-12 max-w-2xl">
            Stack técnico + experiência em processos e gestão. Background
            híbrido que permite entender tanto o código quanto as pessoas que
            vão usar.
          </p>
        </AnimatedSection>

        {/* Grid de Skills por Categoria */}
        <div className="mb-16">
          <AnimatedSection animation="fadeUp" delay={0.1}>
            <h3 className="text-main-white mb-6 text-xl font-semibold">
              Competências Técnicas
            </h3>
          </AnimatedSection>

          <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
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
                          variant={skill.primary ? "primary" : "default"}
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
        </div>

        {/* Timeline de Experiências */}
        <div className="mb-16">
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <div className="mb-6 flex items-center gap-3">
              <Briefcase className="text-pri" size={24} />
              <h3 className="text-main-white text-xl font-semibold">
                Experiência Profissional
              </h3>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {EXPERIENCES.map((exp, index) => (
              <FadeIn key={index} delay={0.3 + index * 0.1}>
                <Card variant="glass" hover className="p-6">
                  <div className="flex flex-col gap-4 md:flex-row">
                    {/* Período (lado esquerdo em desktop) */}
                    <div className="shrink-0 md:w-48">
                      <p className="text-sec text-sm font-semibold">
                        {exp.period}
                      </p>
                      <p className="text-main-white/50 mt-1 text-xs">
                        {exp.type}
                      </p>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1">
                      <h4 className="text-main-white mb-1 text-lg font-semibold">
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

                      {/* Highlights */}
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

                      {/* Technologies */}
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
        </div>

        {/* Formação */}
        <div>
          <AnimatedSection animation="fadeUp" delay={0.4}>
            <div className="mb-6 flex items-center gap-3">
              <GraduationCap className="text-sec" size={24} />
              <h3 className="text-main-white text-xl font-semibold">
                Formação
              </h3>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {EDUCATION.map((edu, index) => (
              <FadeIn key={index} delay={0.5 + index * 0.1}>
                <Card variant="glass" className="p-6">
                  <Card.Body>
                    <h4 className="text-main-white mb-2 text-base font-semibold">
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
        </div>
      </Container>
    </Section>
  );
};

export default Skills;
