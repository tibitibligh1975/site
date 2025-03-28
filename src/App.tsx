import React, { useEffect, useRef, useState } from "react";
import {
  Code,
  Shield,
  CheckCircle,
  ArrowRight,
  Globe,
  Wallet,
  Lock,
  ChevronRight,
  CreditCard,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPartnerPopup, setShowPartnerPopup] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } =
        heroRef.current.getBoundingClientRect();

      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      heroRef.current.style.setProperty("--x", `${x * 100}%`);
      heroRef.current.style.setProperty("--y", `${y * 100}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Partner Popup */}
      {showPartnerPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative">
            <button
              onClick={() => setShowPartnerPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Parceiro Oficial
              </h3>
              <p className="text-gray-600">
                Para implementação e suporte, utilize nosso parceiro oficial:
              </p>
            </div>
            <a
              href="https://www.checkoutinho.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border-light p-4 flex items-center justify-between group hover:scale-105 transition-transform"
            >
              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Checkoutinho
                </h4>
                <p className="text-gray-600 text-sm">www.checkoutinho.com</p>
              </div>
              <ExternalLink className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="mt-6">
              <button
                onClick={() =>
                  window.open("https://www.checkoutinho.com/", "_blank")
                }
                className="relative group w-full"
              >
                <div className="absolute -inset-0.5 bg-brand-gradient rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                <div className="relative px-8 py-4 bg-white rounded-full leading-none flex items-center justify-center">
                  <span className="brand-gradient-text font-medium">
                    Acessar o Checkoutinho
                  </span>
                  <ArrowRight className="ml-2 h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed w-full z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-gradient blur-xl opacity-50 animate-pulse-slow"></div>
                <img
                  src="/logo.png"
                  alt="Inside Tech Logo"
                  className="h-12 w-12 sm:h-14 sm:w-14 relative"
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold brand-gradient-text">
                Inside Tech
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-primary transition-all hover:scale-105"
              >
                Recursos
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-primary transition-all hover:scale-105"
              >
                Preços
              </a>
              <a
                href="#developers"
                className="text-gray-600 hover:text-primary transition-all hover:scale-105"
              >
                Desenvolvedores
              </a>
              <button
                className="relative group"
                onClick={() => setShowPartnerPopup(true)}
              >
                <div className="absolute -inset-0.5 bg-brand-gradient rounded-full blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
                <div className="relative px-7 py-3 bg-white rounded-full leading-none">
                  <span className="brand-gradient-text">Começar Agora</span>
                </div>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                className="text-gray-600 hover:text-primary"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-600 hover:text-primary transition-all py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Recursos
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-primary transition-all py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Preços
              </a>
              <a
                href="#developers"
                className="text-gray-600 hover:text-primary transition-all py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Desenvolvedores
              </a>
              <button
                className="relative group w-full py-3"
                onClick={() => setShowPartnerPopup(true)}
              >
                <div className="absolute -inset-0.5 bg-brand-gradient rounded-full blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
                <div className="relative px-7 py-3 bg-white rounded-full leading-none flex items-center justify-center">
                  <span className="brand-gradient-text">Começar Agora</span>
                </div>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50"
            style={{
              background: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(0, 230, 194, 0.15), transparent 50%)`,
              transition: "all 0.2s ease",
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="pt-32 pb-24 text-center">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-8">
              <span className="block mb-4 text-gray-900">Pagamentos do</span>
              <span className="brand-gradient-text animate-gradient">
                futuro hoje
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transforme sua empresa com nossa plataforma de pagamentos de
              última geração. Segurança avançada, APIs intuitivas e checkout
              personalizado.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="#"
                className="group relative w-full sm:w-auto"
                onClick={(e) => {
                  e.preventDefault();
                  setShowPartnerPopup(true);
                }}
              >
                <div className="absolute -inset-0.5 bg-brand-gradient rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                <div className="relative px-8 py-4 bg-white rounded-full flex items-center justify-center sm:justify-start">
                  <span className="brand-gradient-text font-medium">
                    Criar Conta Grátis
                  </span>
                  <ArrowRight className="ml-2 h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gray-50 text-gray-900 font-medium hover:bg-gray-100 transition-all border border-gray-200 hover:border-gray-300 w-full sm:w-auto"
              >
                Falar com Vendas
              </a>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { number: "10M+", label: "Transações/mês" },
                { number: "99.99%", label: "Uptime garantido" },
                { number: "2.5s", label: "Tempo médio de checkout" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="gradient-border-light p-6 backdrop-blur-xl"
                >
                  <div className="text-3xl sm:text-4xl font-bold brand-gradient-text">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 sm:py-32 bg-gray-50" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold brand-gradient-text mb-6">
              Tecnologia de ponta para seu negócio
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções avançadas que transformam a maneira como você processa
              pagamentos, com segurança e eficiência incomparáveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Checkout Próprio",
                description:
                  "Interface personalizável e segura integrada ao seu site, mantendo sua identidade visual.",
              },
              {
                icon: <Code className="h-6 w-6" />,
                title: "API Moderna",
                description:
                  "REST API robusta com SDKs atualizados para todas as principais linguagens de programação.",
              },
              {
                icon: <Lock className="h-6 w-6" />,
                title: "Segurança Avançada",
                description:
                  "Proteção contra fraudes em tempo real com machine learning e criptografia de ponta.",
              },
              {
                icon: <Globe className="h-6 w-6" />,
                title: "Pagamentos Globais",
                description:
                  "Aceite pagamentos em múltiplas moedas com conversão automática e taxas competitivas.",
              },
              {
                icon: <Wallet className="h-6 w-6" />,
                title: "Split de Pagamentos",
                description:
                  "Distribua pagamentos automaticamente entre múltiplos recebedores com regras flexíveis.",
              },
              {
                icon: <CreditCard className="h-6 w-6" />,
                title: "Dashboard Inteligente",
                description:
                  "Análises detalhadas e insights em tempo real sobre suas transações e clientes.",
              },
            ].map((feature, index) => (
              <div key={index} className="group card-hover-light">
                <div className="gradient-border-light p-6 sm:p-8 backdrop-blur-xl h-full bg-white">
                  <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                    {feature.icon}
                  </div>
                  <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-primary transition-all">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 sm:py-32 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold brand-gradient-text mb-6">
              Preços transparentes e competitivos
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Sem mensalidades ou taxas ocultas. Apenas um preço justo por cada
              transação realizada.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="gradient-border-light p-8 sm:p-12 backdrop-blur-xl bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
                      <CreditCard className="h-6 w-6" />
                    </div>
                    <h3 className="ml-4 text-2xl font-bold text-gray-900">
                      Modelo simples
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-8">
                    Nossa precificação é transparente e direta, projetada para
                    ajudar seu negócio a crescer sem complicações.
                  </p>

                  <div className="flex items-baseline mb-2">
                    <span className="text-5xl font-bold text-gray-900">
                      R$3,99
                    </span>
                    <span className="ml-2 text-gray-600">taxa fixa</span>
                  </div>
                  <div className="flex items-baseline mb-8">
                    <span className="text-3xl font-bold text-gray-900">+</span>
                    <span className="ml-2 text-3xl font-bold text-gray-900">
                      R$2,49
                    </span>
                    <span className="ml-2 text-gray-600">por venda</span>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="group relative inline-flex w-full sm:w-auto"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowPartnerPopup(true);
                      }}
                    >
                      <div className="absolute -inset-0.5 bg-brand-gradient rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                      <div className="relative px-8 py-4 bg-white rounded-full flex items-center justify-center sm:justify-start w-full">
                        <span className="brand-gradient-text font-medium">
                          Comece Agora
                        </span>
                        <ChevronRight className="ml-2 h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-6">
                    Incluso em todos os planos:
                  </h4>
                  <div className="space-y-4">
                    {[
                      "Processamento de pagamentos via Pix",
                      "Checkout personalizado com sua marca",
                      "Análise avançada de fraude",
                      "Integrações com principais plataformas",
                      "Suporte técnico especializado",
                      "Dashboard completo e relatórios",
                      "Split de pagamentos",
                      "API moderna e SDKs atualizados",
                    ].map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-4 group"
                      >
                        <div className="relative">
                          <div className="absolute inset-0 bg-brand-gradient rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <CheckCircle className="h-6 w-6 text-primary relative" />
                        </div>
                        <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Section */}
      <div className="py-20 sm:py-32 bg-white" id="developers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold brand-gradient-text mb-6 sm:mb-8">
                Desenvolvido para desenvolvedores
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed">
                APIs intuitivas, documentação clara e ferramentas modernas para
                uma integração sem complicações. Construa a experiência perfeita
                para seus clientes.
              </p>
              <div className="space-y-4 sm:space-y-6">
                {[
                  "SDKs para todas as principais linguagens",
                  "Webhooks para eventos em tempo real",
                  "Ambiente de sandbox completo",
                  "Documentação interativa com exemplos",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-brand-gradient rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <CheckCircle className="h-6 w-6 text-primary relative" />
                    </div>
                    <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl transform rotate-1 blur-xl"></div>
                <pre className="relative rounded-3xl bg-gray-50 p-4 sm:p-8 font-mono text-xs sm:text-sm leading-6 text-gray-700 overflow-x-auto border border-gray-200">
                  <code className="language-javascript">{`// Crie um pagamento em segundos
const payment = await insidetech.payments.create({
  amount: 1000,
  currency: 'BRL',
  description: 'Pedido #1234',
  customer: {
    email: 'cliente@email.com',
    name: 'João Silva'
  },
  payment_method: {
    type: 'pix'
  }
});

// Webhook para confirmação
insidetech.on('payment.confirmed', (event) => {
  console.log('Pagamento confirmado:', event.data);
});`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 sm:py-32 bg-gray-50">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 backdrop-blur-3xl opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="gradient-border-light p-8 sm:p-16 backdrop-blur-xl bg-white">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Pronto para revolucionar seus pagamentos?
                </h2>
                <p className="text-lg sm:text-xl text-gray-600">
                  Comece gratuitamente hoje e descubra por que milhares de
                  empresas confiam na Inside Tech.
                </p>
              </div>
              <div className="mt-12 lg:mt-0 flex flex-col sm:flex-row gap-6 justify-end">
                <a
                  href="#"
                  className="group relative inline-flex w-full sm:w-auto"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPartnerPopup(true);
                  }}
                >
                  <div className="absolute -inset-0.5 bg-brand-gradient rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                  <div className="relative px-8 py-4 bg-white rounded-full flex items-center justify-center sm:justify-start">
                    <span className="brand-gradient-text font-medium">
                      Começar Agora
                    </span>
                    <ChevronRight className="ml-2 h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 sm:py-16 lg:py-24 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Produto
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    Recursos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    Preços
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    Segurança
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Desenvolvedores
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    Documentação
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    API Reference
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Empresa
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    Carreiras
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    Termos
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img
                src="/logo.png"
                alt="Inside Tech Logo"
                className="h-10 w-10 sm:h-12 sm:w-12"
              />
              <span className="brand-gradient-text font-semibold">
                Inside Tech
              </span>
            </div>
            <p className="text-gray-600 text-center md:text-right">
              &copy; 2025 Inside Tech. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
