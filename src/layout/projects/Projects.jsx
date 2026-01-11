import { AnimatedSection, FadeIn } from "@components/animation";
import { Container, Section } from "@components/layout";
import { Badge, Button, Card } from "@components/ui";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Portfólio Pessoal",
      description:
        "Este site. \n\nStack: React + Vite + Tailwind CSS 4 + Framer Motion + Canvas API para animações. Otimizado para performance, sem bloat.",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "Canvas",
      ],
      github: "https://github.com/Yuri-Machado-Luz/portfolio-projects",
      demo: "#hero",
      type: "frontend",
    },
    {
      title: "Design System & Component Library",
      description:
        "Biblioteca de componentes React reutilizáveis com Atomic Design, acessibilidade WCAG 2.1, e documentação Storybook. Base para projetos frontend escaláveis e consistentes.",
      technologies: ["React", "Tailwind CSS", "Storybook", "Framer Motion"],
      github: "Em breve",
      demo: "Em Desenvolvimento",
      type: "frontend",
    },
    {
      title: "Dashboard Analytics SaaS",
      description:
        "Plataforma de análise de dados com visualizações em tempo real, filtros avançados e integração multi-plataforma. Arquitetura React + Node.js com APIs REST, atingindo 95+ no Core Web Vitals e 99.8% uptime.",
      technologies: ["React", "Node.js", "Python", "PostgreSQL", "WebSocket"],
      github: "Em breve",
      demo: "Em Desenvolvimento",
      type: "fullstack",
    },
    {
      title: "Automação de Onboarding IBM",
      description:
        "Sistema de automação end-to-end para processos de onboarding e integração de colaboradores. Reduziu o tempo de integração de 7 para 3 dias (-57%), processando 1.200+ casos mensais com scripts Python integrados ao Microsoft 365 Cloud.",
      technologies: ["Python", "Microsoft 365", "Power Automate", "ETL"],
      github: null,
      demo: null,
      type: "enterprise",
    },
    {
      title: "Pipeline de Dados & APIs",
      description:
        "Sistema de ETL e integração de APIs para sincronização de dados entre plataformas CRM, marketing e analytics. Processamento automatizado com Pandas, conectando 5+ plataformas externas.",
      technologies: ["Python", "Pandas", "FastAPI", "Selenium", "APIs REST"],
      github: null,
      demo: null,
      type: "backend",
    },
    {
      title: "Sistema de Triagem Automatizada",
      description:
        "Automação de triagem de e-mails e documentos via Power Automate para operações de backoffice financeiro. Implementado na Cielo, otimizando o fluxo de comunicação interdepartamental.",
      technologies: ["Power Automate", "Microsoft 365", "VBA", "Outlook"],
      github: null,
      demo: null,
      type: "automation",
    },
  ];

  const getTypeColor = (type) => {
    const colors = {
      enterprise: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      fullstack: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      backend: "bg-green-500/20 text-green-400 border-green-500/30",
      frontend: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      automation: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    };
    return colors[type] || "";
  };

  const getTypeLabel = (type) => {
    const labels = {
      enterprise: "Enterprise",
      fullstack: "Full-Stack",
      backend: "Back-end",
      frontend: "Front-end",
      automation: "Automação",
    };
    return labels[type] || type;
  };

  return (
    <Section id="projects">
      <Container size="lg">
        <AnimatedSection animation="fadeUp">
          <h2 className="text-main-white mb-4 text-3xl font-bold">
            PROJETOS<span className="text-sec">.</span>
          </h2>
          <p className="text-main-white/70 mb-12 max-w-2xl">
            Desenvolvimento full-stack, automação de processos e pipelines de
            dados. Projetos com resultados mensuráveis: uptime, performance e
            redução de tempo comprovados.
          </p>
        </AnimatedSection>

        <div
          className="grid w-full grid-cols-1 gap-6 md:grid-cols-2
            xl:grid-cols-3"
        >
          {projects.map((project, index) => (
            <FadeIn key={index} delay={0.1 + index * 0.08}>
              <Card variant="glass" hover className="flex h-full flex-col">
                <Card.Header className="flex items-start justify-between gap-2">
                  <h3
                    className="text-main-white text-xl leading-tight
                      font-semibold"
                  >
                    {project.title}
                  </h3>
                  <span
                    className={`rounded border px-2 py-1 text-xs
                    whitespace-nowrap ${getTypeColor(project.type)}`}
                  >
                    {getTypeLabel(project.type)}
                  </span>
                </Card.Header>

                <Card.Body className="flex flex-1 flex-col gap-4">
                  <p
                    className="text-main-white/70 text-justify text-sm
                      leading-relaxed whitespace-pre-wrap"
                  >
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>

                <Card.Footer className="flex gap-2">
                  {project.github ? (
                    project.github === "Em breve" ? (
                      <Button
                        variant="outline"
                        size="sm"
                        disabled
                        className="flex-1 cursor-not-allowed opacity-50"
                        leftIcon={<Github size={16} />}
                      >
                        Em Breve
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        as="a"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        leftIcon={<Github size={16} />}
                        className="flex-1"
                      >
                        Código-fonte
                      </Button>
                    )
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      disabled
                      className="flex-1 cursor-not-allowed opacity-50"
                      leftIcon={<Github size={16} />}
                    >
                      Confidencial
                    </Button>
                  )}
                  {project.demo ? (
                    project.demo === "Em Desenvolvimento" ? (
                      <Button
                        variant="primary"
                        size="xs"
                        disabled
                        className="flex-1 cursor-not-allowed text-nowrap
                          opacity-50"
                        rightIcon={<ExternalLink size={16} />}
                      >
                        Em Desenvolvimento
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        size="sm"
                        as="a"
                        href={project.demo}
                        target={
                          project.demo.startsWith("#") ? "_self" : "_blank"
                        }
                        rel="noopener noreferrer"
                        rightIcon={<ExternalLink size={16} />}
                        className="flex-1"
                      >
                        Ver Projeto
                      </Button>
                    )
                  ) : (
                    <Button
                      variant="primary"
                      size="sm"
                      disabled
                      className="flex-1 cursor-not-allowed opacity-50"
                      rightIcon={<ExternalLink size={16} />}
                    >
                      Implementado
                    </Button>
                  )}
                </Card.Footer>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Projects;
