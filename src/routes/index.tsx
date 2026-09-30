import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Instagram, MapPin, Menu, Sparkles, Star, X,
  Scissors, Palette, Heart, Flower2, Gem, Clock
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({ component: AriaHome });

const services = [
  { icon: Scissors, title: "Corte & Styling", text: "Cortes personalizados, escova e finalização que respeitam sua identidade." },
  { icon: Palette, title: "Coloração", text: "Cores sofisticadas e técnicas personalizadas para iluminar o seu visual." },
  { icon: Sparkles, title: "Mechas & Balayage", text: "Iluminação natural, morena iluminada e resultados delicados." },
  { icon: Heart, title: "Tratamentos", text: "Rituais de cuidado para devolver força, movimento e brilho aos fios." },
  { icon: Flower2, title: "Sobrancelhas", text: "Design delicado e personalizado para valorizar o seu olhar." },
  { icon: Gem, title: "Manicure", text: "Um cuidado completo para você sair se sentindo ainda mais especial." },
];

const testimonials = [
  { name: "Mariana", text: "O atendimento é acolhedor e o resultado ficou exatamente como eu imaginava." },
  { name: "Camila", text: "Um lugar lindo, tranquilo e com uma equipe que realmente escuta o que você quer." },
  { name: "Juliana", text: "Amei cada detalhe. Saí renovada e já estou planejando a próxima visita." },
];

function AriaHome() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="aria-page">
      <header className="site-header">
        <a className="brand" href="#inicio" onClick={() => scrollTo("inicio")}>
          <span className="brand-mark">a</span>
          <span>aria</span>
        </a>

        <nav className={open ? "nav open" : "nav"}>
          <button onClick={() => scrollTo("sobre")}>O estúdio</button>
          <button onClick={() => scrollTo("servicos")}>Serviços</button>
          <button onClick={() => scrollTo("experiencia")}>Experiência</button>
          <button onClick={() => scrollTo("contato")}>Contato</button>
        </nav>

        <div className="header-actions">
          <a className="instagram" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram size={17} />
          </a>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Abrir menu">
            {open ? <X /> : <Menu />}
          </button>
          <button className="header-cta" onClick={() => scrollTo("agendar")}>Agendar <ArrowRight size={16} /></button>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={14} /> ESTÚDIO DE BELEZA</p>
            <h1>Beleza que<br /><em>começa em você.</em></h1>
            <p className="hero-text">
              Um espaço criado para desacelerar, cuidar de você e revelar uma beleza autêntica, leve e atemporal.
            </p>
            <div className="hero-buttons">
              <button className="button dark" onClick={() => scrollTo("agendar")}>Agendar meu horário <ArrowRight size={17} /></button>
              <button className="text-button" onClick={() => scrollTo("sobre")}>Conhecer o Aria</button>
            </div>
            <div className="hero-note"><span className="dot" /> Atendimento com hora marcada</div>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85" alt="Interior sofisticado de um estúdio de beleza" />
            <div className="hero-card">
              <span>Seu momento</span>
              <strong>merece ser só seu.</strong>
            </div>
          </div>
        </section>

        <section className="intro-strip">
          <p>cuidado</p><span>✦</span><p>beleza</p><span>✦</span><p>presença</p><span>✦</span><p>essência</p>
        </section>

        <section id="sobre" className="about section">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85" alt="Mulher em momento de autocuidado" />
            <div className="vertical-label">ARIA ESTÚDIO</div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">SOBRE O ARIA</p>
            <h2>Mais do que beleza.<br /><em>Um ritual para você.</em></h2>
            <p>O Aria nasceu da vontade de transformar o cuidado em uma experiência. Aqui, cada detalhe foi pensado para que você se sinta acolhida, ouvida e verdadeiramente presente.</p>
            <p>Unimos técnica, sensibilidade e um olhar contemporâneo para criar resultados que combinam com quem você é.</p>
            <div className="signature">aria<span>✦</span></div>
          </div>
        </section>

        <section id="servicos" className="services section">
          <div className="section-heading center">
            <p className="eyebrow">NOSSOS SERVIÇOS</p>
            <h2>Seu cuidado,<br /><em>do seu jeito.</em></h2>
            <p>Escolha seu momento. A gente cuida do resto.</p>
          </div>
          <div className="services-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="service-card" key={title}>
                <Icon size={25} strokeWidth={1.25} />
                <h3>{title}</h3>
                <p>{text}</p>
                <button onClick={() => scrollTo("agendar")}>Saiba mais <ArrowRight size={15} /></button>
              </article>
            ))}
          </div>
        </section>

        <section id="experiencia" className="experience">
          <div className="experience-image">
            <img src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=85" alt="Profissional realizando um tratamento de beleza" />
          </div>
          <div className="experience-copy">
            <p className="eyebrow">A EXPERIÊNCIA ARIA</p>
            <h2>Entre.<br /><em>Respire.</em><br />Reconecte-se.</h2>
            <p>Você não precisa esperar uma ocasião especial para se cuidar. No Aria, o momento especial é o momento em que você escolhe parar e olhar para si.</p>
            <div className="experience-points">
              <span><Clock size={18} /> Horário reservado para você</span>
              <span><Sparkles size={18} /> Atendimento personalizado</span>
              <span><Heart size={18} /> Produtos selecionados</span>
            </div>
          </div>
        </section>

        <section className="testimonials section">
          <div className="section-heading center">
            <p className="eyebrow">QUEM VIVE O ARIA</p>
            <h2>Palavras que <em>ficam.</em></h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="testimonial" key={item.name}>
                <div className="stars">{[1,2,3,4,5].map((n) => <Star key={n} size={14} fill="currentColor" />)}</div>
                <p>“{item.text}”</p>
                <strong>{item.name}</strong>
              </article>
            ))}
          </div>
        </section>

        <section id="agendar" className="booking">
          <div>
            <p className="eyebrow">SEU PRÓXIMO MOMENTO</p>
            <h2>Vamos reservar<br /><em>um tempo para você?</em></h2>
            <p>Escolha seu serviço e venha viver a experiência Aria.</p>
          </div>
          <a className="button light" href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">Agendar pelo WhatsApp <ArrowRight size={17} /></a>
        </section>

        <section id="contato" className="contact section">
          <div>
            <p className="eyebrow">ONDE ESTAMOS</p>
            <h2>Seu lugar de<br /><em>pausa.</em></h2>
            <p className="contact-line"><MapPin size={18} /> Rua Exemplo, 123 — Rio de Janeiro, RJ</p>
            <p className="contact-line"><Clock size={18} /> Terça a sábado · 9h às 19h</p>
          </div>
          <div className="map-placeholder">
            <span>ARIA</span>
            <small>Rio de Janeiro · RJ</small>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="brand"><span className="brand-mark">a</span><span>aria</span></div>
        <p>Beleza com intenção.</p>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={17} /> @aria.estudio</a>
        <small>© 2026 Aria Estúdio de Beleza</small>
      </footer>
    </div>
  );
}
