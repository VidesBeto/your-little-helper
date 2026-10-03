import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Instagram, MapPin, Menu, Sparkles, Star, X,
  Scissors, Palette, Heart, Flower2, Clock, Droplets,
  WandSparkles, Brush, CircleHelp, ChevronDown
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({ component: MerakiHome });

const WHATSAPP = "https://wa.link/tmu856";
const INSTAGRAM = "https://www.instagram.com/merakistudiorj/";

const services = [
  { icon: Sparkles, title: "Mechas — Luz e Sombra" },
  { icon: Sparkles, title: "Mechas — Morena Iluminada" },
  { icon: Sparkles, title: "Mechas — Mega Blonde" },
  { icon: WandSparkles, title: "Topo e Contorno" },
  { icon: Droplets, title: "Progressiva" },
  { icon: Heart, title: "Botox" },
  { icon: Heart, title: "Cronograma Capilar — 4 sessões" },
  { icon: Brush, title: "Escova c/ Chapinha" },
  { icon: Palette, title: "Camuflagem de Fios Brancos" },
  { icon: Palette, title: "Coloração Simples" },
  { icon: Palette, title: "Coloração Chocolate / Ruivo" },
  { icon: Brush, title: "Escova c/ Babyliss" },
  { icon: Droplets, title: "Detox com Argila" },
  { icon: Flower2, title: "Penteado Simples" },
  { icon: Scissors, title: "Trança" },
  { icon: Scissors, title: "Corte" },
];

const faqs = [
  ["Qual o valor das mechas?", "A partir de R$399. O valor pode variar conforme o comprimento e volume do cabelo."],
  ["Quanto tempo demora o processo de mechas?", "Não há um tempo exato, pois cada cabelo responde de uma forma. Recomendamos reservar o dia para o procedimento."],
  ["Meu cabelo tem progressiva, posso fazer mechas?", "Sim! É necessário respeitar o intervalo de pelo menos 1 mês e realizar o teste de mecha."],
  ["Tenho tinta escura. Consigo chegar a um tom mais claro?", "Depende da resposta do cabelo. O teste de mecha é indispensável para avaliarmos a possibilidade."],
  ["O tratamento está incluso no serviço de mechas?", "Sim! O serviço inclui tratamento reconstrutor."],
  ["A progressiva é com ou sem formol?", "Trabalhamos exclusivamente com progressiva sem formol e sem glioxílico, com ativos importados."],
  ["Quanto tempo preciso esperar para fazer outra química?", "Recomendamos um intervalo mínimo de 1 mês, sempre avaliando a saúde do cabelo."],
  ["De quanto em quanto tempo preciso retocar as mechas ou a progressiva?", "Depende do crescimento e da necessidade de cada cabelo."],
  ["O atendimento é somente com hora marcada?", "Sim! Nosso atendimento é exclusivamente com hora marcada."],
] as const;

const testimonials = [
  { name: "Mariana", text: "O atendimento é acolhedor e o resultado ficou exatamente como eu imaginava." },
  { name: "Camila", text: "Um lugar lindo, tranquilo e com uma equipe que realmente escuta o que você quer." },
  { name: "Juliana", text: "Amei cada detalhe. Saí renovada e já estou planejando a próxima visita." },
];

function MerakiHome() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpenMenu(false);
  };

  return (
    <div className="meraki-page">
      <header className="site-header">
        <a className="brand" href="#inicio" onClick={() => scrollTo("inicio")}>
          <img className="brand-logo" src="/meraki-logo.svg" alt="Meraki Studio" />
          <span className="brand-name">meraki</span>
        </a>
        <nav className={openMenu ? "nav open" : "nav"}>
          <button onClick={() => scrollTo("sobre")}>O estúdio</button>
          <button onClick={() => scrollTo("servicos")}>Serviços</button>
          <button onClick={() => scrollTo("faq")}>Dúvidas</button>
          <button onClick={() => scrollTo("contato")}>Contato</button>
        </nav>
        <div className="header-actions">
          <a className="instagram" href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram Meraki"><Instagram size={17} /></a>
          <button className="menu-button" onClick={() => setOpenMenu(!openMenu)} aria-label="Abrir menu">{openMenu ? <X /> : <Menu />}</button>
          <a className="header-cta" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Agendar <ArrowRight size={16} /></a>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={14} /> MERAKI STUDIO</p>
            <h1>Beleza que<br /><em>carrega essência.</em></h1>
            <p className="hero-text">Um espaço pensado para cuidar dos seus cabelos com técnica, atenção aos detalhes e resultados que respeitam a sua identidade.</p>
            <div className="hero-buttons">
              <a className="button dark" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Agendar meu horário <ArrowRight size={17} /></a>
              <button className="text-button" onClick={() => scrollTo("sobre")}>Conhecer o Meraki</button>
            </div>
            <div className="hero-note"><span className="dot" /> Atendimento exclusivamente com hora marcada</div>
          </div>
          <div className="hero-image">
            <img src="/meraki-hero-generated.jpg" alt="Interior do Meraki Studio" />
            
          </div>
        </section>

        <section className="meaning-strip">
          <div className="meaning-logo"><img src="/meraki-logo.svg" alt="" /></div>
          <div><p className="eyebrow">O SIGNIFICADO DE MERAKI</p><p className="meaning-text">“Colocar sua essência em tudo o que você faz.”</p></div>
        </section>

        <section className="intro-strip"><p>cuidado</p><span>✦</span><p>beleza</p><span>✦</span><p>presença</p><span>✦</span><p>essência</p></section>

        <section id="sobre" className="about section">
          <div className="about-image"><img src="/meraki-02.png" alt="Meraki Studio" /><div className="vertical-label">MERAKI STUDIO</div></div>
          <div className="about-copy">
            <p className="eyebrow">SOBRE O MERAKI</p>
            <h2>Mais do que um serviço.<br /><em>Um cuidado com intenção.</em></h2>
            <p>O Meraki acredita que beleza também é expressão. Cada atendimento é pensado para entender o seu cabelo, respeitar sua individualidade e entregar um resultado que faça sentido para você.</p>
            <p>Do diagnóstico ao acabamento, técnica e cuidado caminham juntos para que você viva uma experiência especial do início ao fim.</p>
            <div className="signature">meraki<span>✦</span></div>
          </div>
        </section>

        <section id="servicos" className="services section">
          <div className="section-heading center"><p className="eyebrow">SERVIÇOS DO ESTÚDIO</p><h2>Seu cabelo,<br /><em>do seu jeito.</em></h2><p>Escolha seu cuidado. A equipe Meraki cuida do resto.</p></div>
          <div className="services-grid">
            {services.map(({ icon: Icon, title }) => <article className="service-card" key={title}><Icon size={24} strokeWidth={1.25} /><h3>{title}</h3><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">Agendar este serviço <ArrowRight size={15} /></a></article>)}
          </div>
        </section>

        <section id="experiencia" className="experience">
          <div className="experience-image"><img src="/meraki-03.png" alt="Profissional realizando um tratamento de beleza" /></div>
          <div className="experience-copy">
            <p className="eyebrow">A EXPERIÊNCIA MERAKI</p><h2>Entre.<br /><em>Respire.</em><br />Cuide-se.</h2>
            <p>Seu horário é reservado para você. Um atendimento com calma, conversa, diagnóstico e atenção aos detalhes — porque cada cabelo tem uma história diferente.</p>
            <div className="experience-points"><span><Clock size={18} /> Atendimento com hora marcada</span><span><Sparkles size={18} /> Avaliação individual</span><span><Heart size={18} /> Tratamento reconstrutor nas mechas</span></div>
          </div>
        </section>

        <section id="faq" className="faq section">
          <div className="faq-intro"><p className="eyebrow"><CircleHelp size={14} /> PERGUNTAS FREQUENTES</p><h2>Antes de marcar,<br /><em>tire suas dúvidas.</em></h2><p>Reunimos as perguntas que mais recebemos para deixar sua experiência ainda mais tranquila.</p></div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => { const isOpen = openFaq === index; return <div className={isOpen ? "faq-item active" : "faq-item"} key={question}><button className="faq-question" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen}><span>{question}</span><ChevronDown size={18} /></button><div className="faq-answer" aria-hidden={!isOpen}><p>{answer}</p></div></div>; })}
          </div>
        </section>

        <section className="testimonials section"><div className="section-heading center"><p className="eyebrow">QUEM VIVE O MERAKI</p><h2>Palavras que <em>ficam.</em></h2></div><div className="testimonial-grid">{testimonials.map((item) => <article className="testimonial" key={item.name}><div className="stars">{[1,2,3,4,5].map((n) => <Star key={n} size={14} fill="currentColor" />)}</div><p>“{item.text}”</p><strong>{item.name}</strong></article>)}</div></section>

        <section id="agendar" className="booking"><div><p className="eyebrow">SEU PRÓXIMO MOMENTO</p><h2>Vamos reservar<br /><em>um tempo para você?</em></h2><p>Fale com o Meraki pelo WhatsApp e agende seu horário.</p></div><a className="button light" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Agendar pelo WhatsApp <ArrowRight size={17} /></a></section>

        <section id="contato" className="contact section"><div><p className="eyebrow">FALE COM O MERAKI</p><h2>Seu lugar de<br /><em>pausa.</em></h2><p className="contact-line"><MapPin size={18} /> Rua Antônio João Mendonça, nº 1050, Centro — Nilópolis — RJ</p><p className="contact-line"><Clock size={18} /> Atendimento exclusivamente com hora marcada</p><a className="contact-instagram" href={INSTAGRAM} target="_blank" rel="noopener noreferrer"><Instagram size={17} /> @merakistudiorj</a></div><div className="map-placeholder"><img src="/meraki-logo.svg" alt="Meraki" /><small>Nilópolis · RJ</small></div></section>
      </main>

      <footer className="footer"><div className="brand"><img className="brand-logo" src="/meraki-logo.svg" alt="Meraki Studio" /><span className="brand-name">meraki</span></div><p>Colocar sua essência em tudo o que você faz.</p><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"><Instagram size={17} /> @merakistudiorj</a><small>© 2026 Meraki Studio</small></footer>
    </div>
  );
}
