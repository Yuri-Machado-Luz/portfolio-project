import { AnimatedSection, FadeIn } from "@components/animation";
import { Container, Section } from "@components/layout";
import { Button, Card, Icon } from "@components/ui";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yurimachadoluz@hotmail.com",
      href: "mailto:yurimachadoluz@hotmail.com",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (11) 9 4935-9394",
      href: "https://wa.me/5511949359394",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yurimachadoluz0311",
      href: "https://linkedin.com/in/yurimachadoluz0311",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Yuri-Machado-Luz",
      href: "https://github.com/Yuri-Machado-Luz",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, Brasil",
      href: null,
    },
  ];

  return (
    <Section id="contact">
      <Container size="lg">
        <AnimatedSection animation="fadeUp">
          <h2 className="text-main-white mb-4 text-3xl font-bold">
            CONTATO<span className="text-sec">.</span>
          </h2>
          <p className="text-main-white/70 mb-12 max-w-2xl">
            Desenvolvimento full-stack, automação de processos ou consultoria técnica. Entre em contato para discutir seu projeto.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Coluna de informações de contato */}
          <FadeIn delay={0.2} direction="left">
            <Card variant="glass" className="p-8 h-full">
              <Card.Body className="flex flex-col gap-6">
                <h3 className="text-main-white text-xl font-semibold mb-2">
                  Informações de Contato
                </h3>
                <p className="text-main-white/70 text-sm leading-relaxed">
                  Disponível para projetos freelance, contrato CLT/PJ ou consultoria técnica. Resposta em até 24 horas.
                </p>

                <div className="flex flex-col gap-4 mt-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-lg bg-main-gray/50 flex items-center
                          justify-center border border-main-gray/30"
                      >
                        <Icon
                          icon={item.icon}
                          size="sm"
                          className="text-sec"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-main-white/50 text-xs uppercase tracking-wide">
                          {item.label}
                        </span>
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-main-white hover:text-pri transition-colors text-sm"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-main-white text-sm">
                            {item.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </FadeIn>

          {/* Coluna do formulário */}
          <FadeIn delay={0.3} direction="right">
            <Card variant="glass" className="p-8 h-full">
              <Card.Body>
                <form className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-main-white/80 mb-2 block text-sm"
                      >
                        Nome
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="bg-main-gray/50 border-main-gray/30
                          focus:border-pri w-full rounded-lg border px-4 py-3
                          text-white transition-colors outline-none text-sm"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-main-white/80 mb-2 block text-sm"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="bg-main-gray/50 border-main-gray/30
                          focus:border-pri w-full rounded-lg border px-4 py-3
                          text-white transition-colors outline-none text-sm"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="text-main-white/80 mb-2 block text-sm"
                    >
                      Assunto
                    </label>
                    <select
                      id="subject"
                      className="bg-main-gray/50 border-main-gray/30
                        focus:border-pri w-full rounded-lg border px-4 py-3
                        text-white transition-colors outline-none text-sm
                        appearance-none cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled className="text-main-gray">
                        Selecione um assunto
                      </option>
                      <option value="projeto" className="text-main-black">
                        Projeto de Desenvolvimento
                      </option>
                      <option value="automacao" className="text-main-black">
                        Automação / Integração
                      </option>
                      <option value="consultoria" className="text-main-black">
                        Consultoria Técnica
                      </option>
                      <option value="oportunidade" className="text-main-black">
                        Oportunidade de Trabalho
                      </option>
                      <option value="outro" className="text-main-black">
                        Outro
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-main-white/80 mb-2 block text-sm"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="bg-main-gray/50 border-main-gray/30
                        focus:border-pri w-full resize-none rounded-lg border px-4
                        py-3 text-white transition-colors outline-none text-sm"
                      placeholder="Conte mais sobre seu projeto ou proposta..."
                    />
                  </div>

                  <Button variant="primary" size="lg" className="mt-2">
                    Enviar Mensagem
                  </Button>

                  <p className="text-main-white/40 text-xs text-center mt-2">
                    Ou entre em contato diretamente pelo WhatsApp ou LinkedIn
                  </p>
                </form>
              </Card.Body>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
