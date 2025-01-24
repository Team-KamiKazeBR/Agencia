"use client";
import React from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  const [currentProject, setCurrentProject] = React.useState(0);
  const [formStep, setFormStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    nome: "",
    email: "",
    telefone: "",
    tipo_servico: "",
    prazo: "",
    orcamento: "",
    descricao_projeto: "",
    publico_alvo: "",
    diferenciais: "",
  });
  const testimonials = React.useMemo(
    () => [
      {
        name: "João Silva",
        role: "CEO, TechStart",
        image: "https://placehold.co/100x100",
        text: "Excelente trabalho! O sistema superou nossas expectativas.",
      },
      {
        name: "Maria Santos",
        role: "Diretora, ModaFashion",
        image: "https://placehold.co/100x100",
        text: "Nossa loja virtual aumentou as vendas em 200% após o lançamento.",
      },
      {
        name: "Pedro Costa",
        role: "Gerente, FoodDelivery",
        image: "https://placehold.co/100x100",
        text: "O app revolucionou nosso sistema de entregas.",
      },
    ],
    []
  );
  const projects = React.useMemo(
    () => [
      {
        title: "Cyberdarko - NewTribal",
        description: "Site de tatuagem e arte digital",
        logo: "https://placehold.co/200x200",
        preview: "https://placehold.co/800x400",
        alt: "Logo da Cyberdarko NewTribal - Estúdio de Tatuagem",
        previewAlt:
          "Página inicial do site Cyberdarko mostrando galeria de tatuagens",
        link: "https://cyberdarko.com",
        text: "Desenvolvemos uma plataforma inovadora que combina portfólio digital com sistema de agendamento online. O site possui uma galeria interativa com zoom em alta resolução e filtros por estilo de tatuagem, além de integração com redes sociais para showcase de trabalhos em tempo real.",
      },
      {
        title: "Subverso - Blog de Tatuagem",
        description: "Blog especializado em tatuagem",
        logo: "https://placehold.co/200x200",
        preview: "https://placehold.co/800x400",
        alt: "Logo do Blog Subverso - Blog sobre tatuagem",
        previewAlt:
          "Página inicial do blog Subverso mostrando artigos sobre tatuagem",
        link: "https://subverso.blog",
        text: "Um blog dinâmico com sistema de categorização inteligente e busca avançada. Implementamos um CMS personalizado para gestão de conteúdo, sistema de newsletters e área de membros com conteúdo exclusivo para assinantes.",
      },
      {
        title: "Brasil Company",
        description: "Empresa de Tecnologia e T.I",
        logo: "https://placehold.co/200x200",
        preview: "https://placehold.co/800x400",
        alt: "Logo da Brasil Company - Empresa de TI",
        previewAlt:
          "Página inicial do site Brasil Company mostrando serviços de TI",
        link: "https://brasilcompany.com.br",
        text: "Portal corporativo com área de clientes integrada, sistema de ticketing para suporte e dashboard personalizado. Inclui integração com CRM, automação de processos internos e análise em tempo real de métricas de atendimento.",
      },
      {
        title: "Villetec",
        description: "Empresa de T.I",
        logo: "https://placehold.co/200x200",
        preview: "https://placehold.co/800x400",
        alt: "Logo da Villetec - Soluções em TI",
        previewAlt:
          "Página inicial do site Villetec mostrando soluções tecnológicas",
        link: "https://villetec.com",
        text: "Site institucional com foco em UX, apresentando cases interativos e calculadora de ROI para prospects. Implementamos chat em tempo real com IA para atendimento 24/7 e sistema de geração de propostas automatizado.",
      },
      {
        title: "Lojas Ecodecor",
        description: "E-commerce de decoração",
        logo: "https://placehold.co/200x200",
        preview: "https://placehold.co/800x400",
        alt: "Logo da Lojas Ecodecor - Decoração sustentável",
        previewAlt:
          "Página inicial do e-commerce Ecodecor mostrando produtos de decoração",
        link: "https://lojasecodecor.com.br",
        text: "E-commerce completo com visualização 3D de produtos, sistema de recomendação baseado em IA e integração com marketplaces. Inclui gestão de estoque multicanal e logística automatizada para dropshipping.",
      },
      {
        title: "Adesiva Impressões",
        description: "Gráfica digital",
        logo: "https://placehold.co/200x200",
        preview: "https://placehold.co/800x400",
        alt: "Logo da Adesiva Impressões - Gráfica Digital",
        previewAlt:
          "Página inicial do site Adesiva mostrando serviços de impressão",
        link: "https://adesiva.ind.br",
        text: "Plataforma de e-commerce B2B com sistema de orçamento automatizado e preview em tempo real dos materiais. Possui integração com sistemas de produção e acompanhamento de pedidos via API.",
      },
    ],
    []
  );
  const nextTestimonial = React.useCallback(() => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  }, [testimonials.length]);
  const prevTestimonial = React.useCallback(() => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  }, [testimonials.length]);
  const nextProject = React.useCallback(() => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }, [projects.length]);
  const prevProject = React.useCallback(() => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  }, [projects.length]);

  return (
    <>
      <head>
        <title>Agência Redfield - Desenvolvimento Web e Mobile</title>
        <meta
          name="description"
          content="Agência especializada em desenvolvimento de sites, aplicativos, e-commerce e sistemas"
        />
      </head>
      <div className="bg-[#0a0a0a]">
        <div className="fixed bottom-4 right-4 z-50">
          <a
            href="https://wa.me/5511979993534"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[#25D366] text-white px-4 py-2 rounded-full hover:bg-[#128C7E] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <i className="fab fa-whatsapp text-2xl mr-2"></i>
            <span className="font-poppins">Fale Conosco</span>
          </a>
        </div>
        <nav className="fixed w-full bg-[#0a0a0a]/95 backdrop-blur-sm z-50 px-4 py-4 transition-all duration-300">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-[#ff3333] text-2xl font-bold font-poppins animate-float">
              Redfield
            </div>

            <button
              className="md:hidden text-white transition-transform duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
            </button>

            <div className="hidden md:flex space-x-8">
              <a
                href="#inicio"
                className="text-white hover:text-[#ff3333] font-poppins transition-colors duration-300 hover:scale-105 transform"
              >
                Início
              </a>
              <a
                href="#servicos"
                className="text-white hover:text-[#ff3333] font-poppins transition-colors duration-300 hover:scale-105 transform"
              >
                Serviços
              </a>
              <a
                href="#projetos"
                className="text-white hover:text-[#ff3333] font-poppins transition-colors duration-300 hover:scale-105 transform"
              >
                Projetos
              </a>
              <a
                href="#depoimentos"
                className="text-white hover:text-[#ff3333] font-poppins transition-colors duration-300 hover:scale-105 transform"
              >
                Depoimentos
              </a>
              <a
                href="#contato"
                className="text-white hover:text-[#ff3333] font-poppins transition-colors duration-300 hover:scale-105 transform"
              >
                Contato
              </a>
              <a
                href="https://wa.me/5511979993534"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-4 py-2 rounded-full hover:bg-[#128C7E] transition-all duration-300"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                WhatsApp
              </a>
            </div>
          </div>

          <div
            className={`${
              isMenuOpen ? "animate-fade-in" : "hidden"
            } md:hidden absolute top-16 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-sm p-4`}
          >
            <div className="flex flex-col space-y-4">
              <a
                href="#inicio"
                className="text-white hover:text-[#ff3333] font-poppins transition-colors duration-300"
              >
                Início
              </a>
              <a
                href="#servicos"
                className="text-white hover:text-[#ff3333] font-poppins transition-colors duration-300"
              >
                Serviços
              </a>
              <a
                href="#projetos"
                className="text-white hover:text-[#ff3333] font-poppins transition-colors duration-300"
              >
                Projetos
              </a>
              <a
                href="#depoimentos"
                className="text-white hover:text-[#ff3333] font-poppins transition-colors duration-300"
              >
                Depoimentos
              </a>
              <a
                href="#contato"
                className="text-white hover:text-[#ff3333] font-poppins transition-colors duration-300"
              >
                Contato
              </a>
              <a
                href="https://wa.me/5511979993534"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-4 py-2 rounded-full hover:bg-[#128C7E] transition-all duration-300 text-center"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                WhatsApp
              </a>
            </div>
          </div>
        </nav>
        <section id="inicio" className="pt-24 pb-12 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-6 animate-slide-in">
              Transformando Ideias em{" "}
              <span className="text-[#ff3333] animate-float inline-block">
                Realidade Digital
              </span>
            </h1>
            <p
              className="text-gray-300 text-lg md:text-xl mb-8 font-poppins animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Especialistas em desenvolvimento de Sites, Apps, E-commerce e
              Sistemas
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <a
                href="https://wa.me/5511979993534"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#25D366] text-white px-8 py-3 rounded-full hover:bg-[#128C7E] font-poppins transition-all duration-300 hover:scale-105 transform animate-scale-in shadow-lg hover:shadow-xl"
                style={{ animationDelay: "0.6s" }}
              >
                <i className="fab fa-whatsapp mr-2"></i>
                Fale no WhatsApp
              </a>
              <a
                href="#contato"
                className="inline-block bg-[#ff3333] text-white px-8 py-3 rounded-full hover:bg-[#cc0000] font-poppins transition-all duration-300 hover:scale-105 transform animate-scale-in shadow-lg hover:shadow-xl"
                style={{ animationDelay: "0.8s" }}
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </section>
        <section id="servicos" className="py-16 px-4 bg-[#111111]">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 font-poppins animate-slide-in">
              Nossos Serviços
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div
                className="bg-[#0a0a0a] p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in relative group"
                style={{ animationDelay: "0.2s" }}
              >
                <i className="fa-solid fa-globe text-[#ff3333] text-3xl mb-4 animate-float"></i>
                <h3 className="text-white text-xl font-bold mb-2 font-poppins">
                  Sites
                </h3>
                <p className="text-gray-400 font-poppins">
                  Desenvolvimento de sites responsivos e modernos
                </p>
                <a
                  href="https://wa.me/5511979993534?text=Olá! Gostaria de saber mais sobre o desenvolvimento de sites."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 left-0 right-0 bg-[#25D366] text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-poppins rounded-b-lg"
                >
                  <i className="fa-brands fa-whatsapp mr-2"></i>
                  Saiba Mais
                </a>
              </div>
              <div
                className="bg-[#0a0a0a] p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in relative group"
                style={{ animationDelay: "0.4s" }}
              >
                <i className="fa-solid fa-mobile-screen text-[#ff3333] text-3xl mb-4 animate-float"></i>
                <h3 className="text-white text-xl font-bold mb-2 font-poppins">
                  Apps
                </h3>
                <p className="text-gray-400 font-poppins">
                  Aplicativos mobile iOS e Android
                </p>
                <a
                  href="https://wa.me/5511979993534?text=Olá! Gostaria de saber mais sobre o desenvolvimento de aplicativos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 left-0 right-0 bg-[#25D366] text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-poppins rounded-b-lg"
                >
                  <i className="fa-brands fa-whatsapp mr-2"></i>
                  Saiba Mais
                </a>
              </div>
              <div
                className="bg-[#0a0a0a] p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in relative group"
                style={{ animationDelay: "0.6s" }}
              >
                <i className="fa-solid fa-cart-shopping text-[#ff3333] text-3xl mb-4 animate-float"></i>
                <h3 className="text-white text-xl font-bold mb-2 font-poppins">
                  E-commerce
                </h3>
                <p className="text-gray-400 font-poppins">
                  Lojas virtuais completas e personalizadas
                </p>
                <a
                  href="https://wa.me/5511979993534?text=Olá! Gostaria de saber mais sobre o desenvolvimento de e-commerce."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 left-0 right-0 bg-[#25D366] text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-poppins rounded-b-lg"
                >
                  <i className="fa-brands fa-whatsapp mr-2"></i>
                  Saiba Mais
                </a>
              </div>
              <div
                className="bg-[#0a0a0a] p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in relative group"
                style={{ animationDelay: "0.8s" }}
              >
                <i className="fa-solid fa-robot text-[#ff3333] text-3xl mb-4 animate-float"></i>
                <h3 className="text-white text-xl font-bold mb-2 font-poppins">
                  IA & Automação
                </h3>
                <p className="text-gray-400 font-poppins">
                  Soluções inteligentes para seu negócio
                </p>
                <a
                  href="https://wa.me/5511979993534?text=Olá! Gostaria de saber mais sobre soluções de IA e automação."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 left-0 right-0 bg-[#25D366] text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-poppins rounded-b-lg"
                >
                  <i className="fa-brands fa-whatsapp mr-2"></i>
                  Saiba Mais
                </a>
              </div>
              <div
                className="bg-[#0a0a0a] p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in relative group"
                style={{ animationDelay: "1s" }}
              >
                <i className="fa-solid fa-shield-halved text-[#ff3333] text-3xl mb-4 animate-float"></i>
                <h3 className="text-white text-xl font-bold mb-2 font-poppins">
                  Avaliação LGPD
                </h3>
                <p className="text-gray-400 font-poppins">
                  Consultoria e adequação à Lei Geral de Proteção de Dados
                </p>
                <a
                  href="https://wa.me/5511979993534?text=Olá! Gostaria de saber mais sobre avaliação LGPD."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 left-0 right-0 bg-[#25D366] text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-poppins rounded-b-lg"
                >
                  <i className="fa-brands fa-whatsapp mr-2"></i>
                  Saiba Mais
                </a>
              </div>
              <div
                className="bg-[#0a0a0a] p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in relative group"
                style={{ animationDelay: "1.2s" }}
              >
                <i className="fa-solid fa-headset text-[#ff3333] text-3xl mb-4 animate-float"></i>
                <h3 className="text-white text-xl font-bold mb-2 font-poppins">
                  Suporte Técnico
                </h3>
                <p className="text-gray-400 font-poppins">
                  Assistência especializada 24/7 para sua infraestrutura
                </p>
                <a
                  href="https://wa.me/5511979993534?text=Olá! Gostaria de saber mais sobre suporte técnico."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 left-0 right-0 bg-[#25D366] text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-poppins rounded-b-lg"
                >
                  <i className="fa-brands fa-whatsapp mr-2"></i>
                  Saiba Mais
                </a>
              </div>
              <div
                className="bg-[#0a0a0a] p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in relative group"
                style={{ animationDelay: "1.4s" }}
              >
                <i className="fa-solid fa-landmark-dome text-[#ff3333] text-3xl mb-4 animate-float"></i>
                <h3 className="text-white text-xl font-bold mb-2 font-poppins">
                  Sites para Órgãos Públicos
                </h3>
                <p className="text-gray-400 font-poppins">
                  Portais governamentais com acessibilidade e transparência
                </p>
                <a
                  href="https://wa.me/5511979993534?text=Olá! Gostaria de saber mais sobre desenvolvimento de sites para órgãos públicos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 left-0 right-0 bg-[#25D366] text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-poppins rounded-b-lg"
                >
                  <i className="fa-brands fa-whatsapp mr-2"></i>
                  Saiba Mais
                </a>
              </div>
              <div
                className="bg-[#0a0a0a] p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in relative group"
                style={{ animationDelay: "1.6s" }}
              >
                <i className="fa-solid fa-tv text-[#ff3333] text-3xl mb-4 animate-float"></i>
                <h3 className="text-white text-xl font-bold mb-2 font-poppins">
                  Mídia Indoor
                </h3>
                <p className="text-gray-400 font-poppins">
                  Sistemas de comunicação visual para ambientes internos
                </p>
                <a
                  href="https://wa.me/5511979993534?text=Olá! Gostaria de saber mais sobre mídia indoor."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 left-0 right-0 bg-[#25D366] text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-poppins rounded-b-lg"
                >
                  <i className="fa-brands fa-whatsapp mr-2"></i>
                  Saiba Mais
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="projetos" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 font-poppins">
              Nossos Projetos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-[#111111] rounded-lg p-6 hover:scale-105 transition-all duration-300"
                >
                  <h3 className="text-white text-xl font-bold mb-4 font-poppins">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 font-poppins">
                    {project.description}
                  </p>
                  <div className="text-gray-400 mb-6 font-poppins">
                    <p>{project.text}</p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff3333] hover:text-[#cc0000] font-poppins inline-flex items-center"
                  >
                    Ver projeto <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contato" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 font-poppins">
              Entre em Contato
            </h2>
            <div className="max-w-lg mx-auto">
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const message =
                    `*Novo Briefing*\n\n` +
                    `*Nome:* ${formData.nome}\n` +
                    `*Email:* ${formData.email}\n` +
                    `*Telefone:* ${formData.telefone}\n` +
                    `*Tipo de Serviço:* ${formData.tipo_servico}\n` +
                    `*Prazo:* ${formData.prazo}\n` +
                    `*Orçamento:* ${formData.orcamento}\n\n` +
                    `*Descrição do Projeto:*\n${formData.descricao_projeto}\n\n` +
                    `*Público-alvo:*\n${formData.publico_alvo}\n\n` +
                    `*Diferenciais:*\n${formData.diferenciais}`;

                  const whatsappUrl = `https://wa.me/5511979993534?text=${encodeURIComponent(
                    message
                  )}`;
                  window.open(whatsappUrl, "_blank");
                }}
              >
                {formStep === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <h3 className="text-white text-xl font-bold mb-4 font-poppins">
                      Dados Pessoais
                    </h3>
                    <input
                      type="text"
                      name="nome"
                      placeholder="Seu Nome"
                      value={formData.nome}
                      onChange={(e) =>
                        setFormData({ ...formData, nome: e.target.value })
                      }
                      required
                      className="w-full p-3 rounded-lg bg-[#111111] text-white border border-[#333333] focus:border-[#ff3333] outline-none font-poppins"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Seu E-mail"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="w-full p-3 rounded-lg bg-[#111111] text-white border border-[#333333] focus:border-[#ff3333] outline-none font-poppins"
                    />
                    <input
                      type="tel"
                      name="telefone"
                      placeholder="Seu WhatsApp"
                      value={formData.telefone}
                      onChange={(e) =>
                        setFormData({ ...formData, telefone: e.target.value })
                      }
                      required
                      className="w-full p-3 rounded-lg bg-[#111111] text-white border border-[#333333] focus:border-[#ff3333] outline-none font-poppins"
                    />
                    <button
                      type="button"
                      onClick={() => setFormStep(2)}
                      disabled={
                        !formData.nome || !formData.email || !formData.telefone
                      }
                      className="w-full bg-[#ff3333] text-white px-8 py-3 rounded-lg hover:bg-[#cc0000] font-poppins disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Próximo →
                    </button>
                  </div>
                )}

                {formStep === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <h3 className="text-white text-xl font-bold mb-4 font-poppins">
                      Detalhes do Projeto
                    </h3>
                    <select
                      name="tipo_servico"
                      value={formData.tipo_servico}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          tipo_servico: e.target.value,
                        })
                      }
                      required
                      className="w-full p-3 rounded-lg bg-[#111111] text-white border border-[#333333] focus:border-[#ff3333] outline-none font-poppins"
                    >
                      <option value="">Selecione o Tipo de Serviço</option>
                      <option value="site">Site</option>
                      <option value="app">Aplicativo</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="sistema">Sistema</option>
                      <option value="ia">IA & Automação</option>
                      <option value="lgpd">Avaliação LGPD</option>
                      <option value="suporte">Suporte Técnico</option>
                      <option value="governo">
                        Sites para Órgãos Públicos
                      </option>
                      <option value="midia">Mídia Indoor</option>
                    </select>
                    <input
                      type="text"
                      name="prazo"
                      placeholder="Prazo Desejado"
                      value={formData.prazo}
                      onChange={(e) =>
                        setFormData({ ...formData, prazo: e.target.value })
                      }
                      required
                      className="w-full p-3 rounded-lg bg-[#111111] text-white border border-[#333333] focus:border-[#ff3333] outline-none font-poppins"
                    />
                    <input
                      type="text"
                      name="orcamento"
                      placeholder="Orçamento Previsto"
                      value={formData.orcamento}
                      onChange={(e) =>
                        setFormData({ ...formData, orcamento: e.target.value })
                      }
                      required
                      className="w-full p-3 rounded-lg bg-[#111111] text-white border border-[#333333] focus:border-[#ff3333] outline-none font-poppins"
                    />
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setFormStep(1)}
                        className="w-1/2 bg-[#333333] text-white px-8 py-3 rounded-lg hover:bg-[#444444] font-poppins"
                      >
                        ← Voltar
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormStep(3)}
                        disabled={
                          !formData.tipo_servico ||
                          !formData.prazo ||
                          !formData.orcamento
                        }
                        className="w-1/2 bg-[#ff3333] text-white px-8 py-3 rounded-lg hover:bg-[#cc0000] font-poppins disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Próximo →
                      </button>
                    </div>
                  </div>
                )}

                {formStep === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <h3 className="text-white text-xl font-bold mb-4 font-poppins">
                      Informações Adicionais
                    </h3>
                    <textarea
                      name="descricao_projeto"
                      placeholder="Descreva seu projeto (objetivos, funcionalidades principais, referências...)"
                      rows="4"
                      value={formData.descricao_projeto}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          descricao_projeto: e.target.value,
                        })
                      }
                      required
                      className="w-full p-3 rounded-lg bg-[#111111] text-white border border-[#333333] focus:border-[#ff3333] outline-none font-poppins"
                    ></textarea>
                    <textarea
                      name="publico_alvo"
                      placeholder="Qual é o público-alvo do seu projeto?"
                      rows="2"
                      value={formData.publico_alvo}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          publico_alvo: e.target.value,
                        })
                      }
                      required
                      className="w-full p-3 rounded-lg bg-[#111111] text-white border border-[#333333] focus:border-[#ff3333] outline-none font-poppins"
                    ></textarea>
                    <textarea
                      name="diferenciais"
                      placeholder="Quais são os diferenciais do seu projeto em relação à concorrência?"
                      rows="2"
                      value={formData.diferenciais}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          diferenciais: e.target.value,
                        })
                      }
                      required
                      className="w-full p-3 rounded-lg bg-[#111111] text-white border border-[#333333] focus:border-[#ff3333] outline-none font-poppins"
                    ></textarea>
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setFormStep(2)}
                        className="w-1/2 bg-[#333333] text-white px-8 py-3 rounded-lg hover:bg-[#444444] font-poppins"
                      >
                        ← Voltar
                      </button>
                      <button
                        type="submit"
                        disabled={
                          !formData.descricao_projeto ||
                          !formData.publico_alvo ||
                          !formData.diferenciais
                        }
                        className="w-1/2 bg-[#ff3333] text-white px-8 py-3 rounded-lg hover:bg-[#cc0000] font-poppins disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
        <footer className="bg-[#0a0a0a] py-8 px-4">
          <div className="container mx-auto text-center">
            <p className="text-gray-400 font-poppins">
              © 2025 Agência Redfield. Todos os direitos reservados.
            </p>
          </div>
        </footer>
        <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slide-in {
          animation: slideIn 0.8s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
        <></>
      </div>
    </>
  );
}

export default MainComponent;