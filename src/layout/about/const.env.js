// Carousel content for the Hero section

const carouselContent = [
  {
    language: "javascript",
    title: "FullStack Developer",
    code: `// Perfil FullStack com Visão End-to-End
class FullStackDeveloper {
  constructor() {
    this.nome = "Yuri Machado Luz";
    this.especialidade = "Soluções Completas & Arquitetura";
    this.foco = "Front-end Moderno + Back-end Sólido + APIs";
  }
  
  entregarProjeto(requisitos) {
    return {
      arquitetura: "Design System + API Layer + Data Pipeline",
      frontend: "React, Componentização, UX/UI",
      backend: "Node.js, Python, Integrações",
      devops: "CI/CD, Automação, Performance"
    };
  }
}

// Stack: React | Node.js | Python | APIs REST | Design System`,
    metrics: ["React", "Node.js", "Python", "APIs"],
  },
  {
    language: "javascript",
    title: "Stack Balanceada FullStack",
    code: `const fullStackBalanceado = {
  frontend: {
    core: ["React", "JSX", "Vite", "Styled Components"],
    especialidades: ["Design System", "Acessibilidade", "UX/UI"],
    metodologias: ["Atomic Design", "Componentização", "Storybook"]
  },
  backend: {
    linguagens: ["Node.js", "Python", "PHP"],
    frameworks: ["Express", "FastAPI", "Pandas", "Selenium"],
    integracoes: ["APIs REST", "Webhooks", "WebSocket", "Multi-plataforma"]
  },
  data: {
    analise: ["Pandas", "ETL Pipelines", "Data Cleaning"],
    visualizacao: ["Dashboards React", "Chart.js", "Realtime"],
    infra: ["PostgreSQL", "MongoDB", "Redis", "APIs"]
  },
  devops: {
    automação: ["CI/CD", "Power Automate", "Python Scripts"],
    monitoramento: ["Performance", "Logging", "Analytics"],
    metodologias: ["Scrum", "Kanban", "BPMN", "Lean"]
  }
};

// Especialista em: Arquitetura FullStack | APIs | Data Flow`,
    metrics: ["React + Node", "Python + APIs", "Data Pipeline"],
  },
  {
    language: "javascript",
    title: "Dashboard SaaS - FullStack",
    code: `// Projeto Real: Plataforma Analytics FullStack
const DashboardFullStack = {
  arquitetura: "Front-end React + Back-end Node.js + APIs Externas",
  
  componentes: {
    frontend: {
      framework: "React com Vite",
      styling: "Styled Components + Design System",
      features: [
        "Componentes reutilizáveis",
        "Acessibilidade WCAG 2.1",
        "Filtros dinâmicos e busca",
        "Exportação CSV/PDF"
      ]
    },
    backend: {
      servidor: "Node.js + Express",
      endpoints: [
        "/api/data/process → Pipeline de dados",
        "/api/analytics/realtime → WebSocket",
        "/api/integrations → HubSpot, Salesforce"
      ],
      autenticação: "JWT + OAuth 2.0"
    },
    integracoes: {
      plataformas: ["API Acelerator", "API Feegow", "Google Analytics"],
      tipo: "REST APIs + Webhooks",
      dados: "Processamento em tempo real"
    }
  },
  
  resultados: {
    performance: "95+ Core Web Vitals",
    escalabilidade: "1.200+ processos/dia",
    confiabilidade: "99.8% uptime"
  }
};`,
    metrics: ["React + Node.js", "APIs Externas", "99.8% uptime"],
  },
  {
    language: "python",
    title: "Back-end & Data Pipeline",
    code: `# Data Pipeline & API Development
class DataPipeline:
    def __init__(self):
        self.role = "Back-end & Data Engineering"
        self.foco = "ETL, APIs, Processamento de Dados"
    
    def criar_pipeline_leads(self):
        """Pipeline completo: Extração → Transformação → Carga"""
        return {
            "extracao": {
                "fontes": ["CRM APIs", "Marketing APIs", "Database"],
                "ferramentas": ["Python Requests", "Selenium", "APIs REST"]
            },
            "transformacao": {
                "processos": ["Data Cleaning", "Normalização", "Enriquecimento"],
                "ferramentas": ["Pandas", "NumPy", "Custom Scripts"]
            },
            "carga": {
                "destinos": ["PostgreSQL", "APIs Internas", "Dashboards"],
                "orquestração": ["Node.js Servers", "Cron Jobs", "Webhooks"]
            }
        }
    
    def metricas_desempenho(self):
        return {
            "tempo_processamento": "↓ 57% (7→3 dias)",
            "volume_dados": "1.200+ registros/dia",
            "confiabilidade": "99.8% success rate",
            "integracao_apis": "5+ plataformas externas"
        }

# Python + Node.js + APIs + Databases`,
    metrics: ["Python + Node", "ETL Pipeline", "↓ 57% tempo"],
  },
  {
    language: "javascript",
    title: "Arquitetura de APIs & Integrações",
    code: `// API Architecture & Microservices
const APIIntegrationLayer = {
  design: "Arquitetura REST + Middleware Pattern",
  
  endpoints: {
    internos: [
      {
        route: "/api/data/process",
        method: "POST",
        descricao: "Processamento de dados multi-fonte",
        tech: "Node.js + Python Integration"
      },
      {
        route: "/api/leads/sync",
        method: "GET",
        descricao: "Sincronização entre plataformas",
        realtime: "WebSocket + Webhooks"
      }
    ],
    externos: {
      crm: ["Salesforce API", "HubSpot API", "Zoho API"],
      marketing: ["Google Analytics", "Meta Business", "ActiveCampaign"],
      pagamentos: ["Stripe", "PayPal", "Mercado Pago"]
    }
  },
  
  performance: {
    responseTime: "< 200ms (p95)",
    throughput: "1.200+ requests/minuto",
    availability: "99.8% SLA",
    errorRate: "< 0.2%"
  },
  
  stack: {
    backend: ["Node.js/Express", "Python/FastAPI", "PHP/Laravel"],
    database: ["PostgreSQL", "MongoDB", "Redis Cache"],
    queue: ["RabbitMQ", "Bull.js", "Background Jobs"],
    monitoring: ["New Relic", "Sentry", "Custom Dashboards"]
  }
};`,
    metrics: ["API Architecture", "< 200ms", "99.8% SLA"],
  },
  {
    language: "javascript",
    title: "Resultados & Impacto FullStack",
    code: `// Métricas de Impacto FullStack
const resultadosMensuraveis = {
  projetoIBM: {
    onboarding: "Redução de 7 para 3 dias (-57%)",
    processos: "1.200/mês com automação Python + APIs",
    arquitetura: "Integração M365 Cloud + Scripts Python"
  },
  
  desenvolvimento: {
    dashboards: "95+ Performance Score (Core Web Vitals)",
    apis: "12+ endpoints desenvolvidos e mantidos",
    integracoes: "5+ plataformas externas conectadas"
  },
  
  habilidadesCruzadas: {
    frontend: "Design System, Acessibilidade, UX/UI",
    backend: "APIs, Data Pipeline, Microservices",
    devops: "CI/CD, Automação, Performance",
    processos: "BPMN, Lean, Otimização"
  },
  
  diferencialUnico: [
    "Visão End-to-End: Design → Front-end → Back-end → Deployment",
    "Perfil Híbrido: Tecnologia + Psicologia + Design + Processos",
    "Comunicação: Tradução entre áreas técnicas e de negócio",
    "Autonomia: Gestão completa de projetos do início ao fim"
  ]
};

// FullStack com Resultados Mensuráveis`,
    metrics: ["-57% tempo", "95+ Performance", "12+ APIs"],
  },
];

const slides = Array.isArray(carouselContent)
  ? carouselContent
  : carouselContent
    ? [carouselContent]
    : [];

export { carouselContent, slides };
