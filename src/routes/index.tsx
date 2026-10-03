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
            <img src="data:image/jpeg;base64,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" alt="Interior do Meraki Studio" />
            <div className="hero-card"><span>MERAKI</span><strong>Colocar sua essência em tudo o que você faz.</strong></div>
          </div>
        </section>

        <section className="meaning-strip">
          <div className="meaning-logo"><img src="/meraki-logo.svg" alt="" /></div>
          <div><p className="eyebrow">O SIGNIFICADO DE MERAKI</p><p className="meaning-text">“Colocar sua essência em tudo o que você faz.”</p></div>
        </section>

        <section className="intro-strip"><p>cuidado</p><span>✦</span><p>beleza</p><span>✦</span><p>presença</p><span>✦</span><p>essência</p></section>

        <section id="sobre" className="about section">
          <div className="about-image"><img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85" alt="Mulher em momento de autocuidado" /><div className="vertical-label">MERAKI STUDIO</div></div>
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
          <div className="experience-image"><img src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=85" alt="Profissional realizando um tratamento de beleza" /></div>
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

        <section id="contato" className="contact section"><div><p className="eyebrow">FALE COM O MERAKI</p><h2>Seu lugar de<br /><em>pausa.</em></h2><p className="contact-line"><MapPin size={18} /> Rio de Janeiro — RJ</p><p className="contact-line"><Clock size={18} /> Atendimento exclusivamente com hora marcada</p><a className="contact-instagram" href={INSTAGRAM} target="_blank" rel="noopener noreferrer"><Instagram size={17} /> @merakistudiorj</a></div><div className="map-placeholder"><img src="/meraki-logo.svg" alt="Meraki" /><small>Rio de Janeiro · RJ</small></div></section>
      </main>

      <footer className="footer"><div className="brand"><img className="brand-logo" src="/meraki-logo.svg" alt="Meraki Studio" /><span className="brand-name">meraki</span></div><p>Colocar sua essência em tudo o que você faz.</p><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"><Instagram size={17} /> @merakistudiorj</a><small>© 2026 Meraki Studio</small></footer>
    </div>
  );
}
