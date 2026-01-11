/**
 * Skills & Experience Data
 * Fonte: CLAUDE.md do desenvolvedor
 */

export const SKILL_CATEGORIES = [
  {
    title: "Linguagens",
    skills: [
      { name: "JavaScript", level: "intermediário", primary: true },
      { name: "Python", level: "intermediário", primary: true },
      { name: "HTML/CSS", level: "avançado", primary: true },
      { name: "TypeScript", level: "intermediário", primary: false },
      { name: "PHP", level: "básico", primary: false },
      { name: "C", level: "básico", primary: false },
    ],
  },
  {
    title: "Frameworks & Libs",
    skills: [
      { name: "React", level: "intermediário", primary: true },
      { name: "Node.js", level: "intermediário", primary: true },
      { name: "Tailwind CSS", level: "avançado", primary: true },
      { name: "Framer Motion", level: "intermediário", primary: true },
      { name: "Sass", level: "intermediário", primary: true },
      { name: "Express", level: "intermediário", primary: false },
      { name: "Pandas", level: "intermediário", primary: false },
      { name: "Selenium", level: "intermediário", primary: false },
      { name: "Playwright", level: "básico", primary: false },
    ],
  },
  {
    title: "Ferramentas",
    skills: [
      { name: "Git", level: "intermediário", primary: true },
      { name: "VSCode", level: "avançado", primary: true },
      { name: "Power Automate", level: "intermediário", primary: true },
      { name: "NPM/PNPM", level: "intermediário", primary: false },
      { name: "VBA (Excel)", level: "intermediário", primary: false },
      { name: "SAP", level: "básico", primary: false },
    ],
  },
  {
    title: "Metodologias",
    skills: [
      { name: "Scrum", level: "intermediário", primary: true },
      { name: "Kanban", level: "intermediário", primary: true },
      { name: "BPMN", level: "intermediário", primary: true },
      { name: "Lean", level: "intermediário", primary: false },
      { name: "OKRs", level: "básico", primary: false },
      { name: "CI/CD", level: "básico", primary: false },
    ],
  },
];

export const EXPERIENCES = [
  {
    role: "Desenvolvedor Full-Stack",
    company: "Freelancer",
    period: "Jul 2022 – Atual",
    type: "Autônomo",
    description:
      "Criação de aplicações web completas, desde landing pages até sistemas SaaS em produção com 99.8% de uptime. Foco em automação de processos empresariais, integração de APIs, pipelines de dados e interfaces centradas no usuário. Clientes incluem clínicas, escritórios de advocacia e PMEs.",
    highlights: [
      "Sistemas SaaS em produção",
      "99.8% uptime",
      "+50 automações entregues",
    ],
    technologies: ["React", "Node.js", "Python", "PostgreSQL", "APIs REST"],
  },
  {
    role: "Designer & Redator",
    company: "Freelancer",
    period: "Jan 2020 – Atual",
    type: "Autônomo",
    description:
      "Projetos de identidade visual, design UX/UI e redação técnica especializada. Atendimento a clínicas, empresas e projetos acadêmicos. Desenvolvimento de logos, materiais promocionais, wireframes e documentação técnica clara e objetiva.",
    highlights: [
      "Design de Identidade Visual e Branding",
      "UX/UI Design e Prototipagem",
      "Redação Técnica e Acadêmica (ABNT)",
      "Materiais Institucionais e Marketing",
    ],
    technologies: [
      "Figma",
      "Adobe Suite",
      "Illustrator",
      "Photoshop",
      "Canva",
      "InDesign",
    ],
  },
  {
    role: "Assistente Administrativo Pleno",
    company: "IBM",
    period: "Dez 2024 – Abr 2025",
    type: "BPO Decision",
    description:
      "Processo end-to-end de onboarding e integração (1.200 processos/mês). Redesenho de fluxo: redução de 7 para 3 dias (-57%). Automação com Python + Microsoft 365.",
    highlights: [
      "1.200+ processos mensais",
      "Redução de 57% no tempo",
      "Scripts Python automatizados",
    ],
    technologies: ["Python", "Microsoft 365", "Power Automate"],
  },
  {
    role: "Analista de Backoffice",
    company: "Cielo",
    period: "Jul 2021 – Abr 2022",
    type: "BPO Atento Brasil",
    description:
      "Garantia de conformidade regulatória no processamento de recebíveis. Ponto focal para Ouvidoria e Jurídico. Automações de triagem via Power Automate.",
    highlights: [
      "Conformidade regulatória",
      "Interface Ouvidoria/Jurídico",
      "Automação de triagem",
    ],
    technologies: ["Power Automate", "Microsoft 365", "VBA"],
  },
  {
    role: "Analista de Suporte Técnico",
    company: "Santander",
    period: "Mai 2020 – Fev 2021",
    type: "BPO Atma/Liq",
    description:
      "Suporte técnico de 2º nível. Manutenção de bases de dados. Protocolos de segurança da informação em atendimentos bancários.",
    highlights: [
      "Suporte L2",
      "Manutenção de bases",
      "Segurança da informação",
    ],
    technologies: ["SQL", "SAP", "Protocolos de Segurança"],
  },
];

export const EDUCATION = [
  {
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "Universidade Cidade de São Paulo",
    status: "Em andamento",
    period: "Conclusão prevista: 2º sem/2027",
  },
  {
    degree: "Psicologia",
    institution: "Universidade Nove de Julho",
    status: "Interrompido (8º semestre)",
    period: "4 anos completos",
  },
];
