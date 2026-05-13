"use client";

import Link from "next/link";
import { useEffect } from "react";
import "./presentation.css";

const SLIDE_IDS = [
  "slide-cover",
  "slide-principio",
  "slide-entidades",
  "slide-flow",
  "slide-economia",
  "slide-governanca",
  "slide-riscos",
  "slide-roadmap",
  "slide-proximos",
] as const;

const DOTS: { target: (typeof SLIDE_IDS)[number]; label: string }[] = [
  { target: "slide-cover", label: "Capa" },
  { target: "slide-principio", label: "Princípio" },
  { target: "slide-entidades", label: "Entidades" },
  { target: "slide-flow", label: "Fluxo" },
  { target: "slide-economia", label: "Economia" },
  { target: "slide-governanca", label: "Governança" },
  { target: "slide-riscos", label: "Riscos" },
  { target: "slide-roadmap", label: "Roadmap" },
  { target: "slide-proximos", label: "Próximos passos" },
];

export function MasterPlanPresentation() {
  useEffect(() => {
    const dots = document.querySelectorAll<HTMLButtonElement>(
      ".presentation-root .nav-dot",
    );
    const setActive = (id: string) => {
      dots.forEach((d) => {
        d.classList.toggle("active", d.dataset.target === id);
      });
    };

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const id = en.target.id;
          if (SLIDE_IDS.includes(id as (typeof SLIDE_IDS)[number])) {
            setActive(id);
          }
        });
      },
      { root: null, threshold: 0.55 },
    );

    SLIDE_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    const cleanups: Array<() => void> = [];
    dots.forEach((d) => {
      const onClick = () => {
        const t = document.getElementById(d.dataset.target ?? "");
        t?.scrollIntoView({ behavior: "smooth" });
      };
      d.addEventListener("click", onClick);
      cleanups.push(() => d.removeEventListener("click", onClick));
    });

    return () => {
      obs.disconnect();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <div className="presentation-root">
      <Link
        href="/"
        className="fixed left-6 top-6 z-[110] rounded-full border border-white/15 bg-[#2c1f18]/85 px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-white/85 backdrop-blur-sm transition-opacity hover:opacity-90"
      >
        ← atlas
      </Link>
      <nav className="nav-dots" aria-label="Navegação entre slides">
        {DOTS.map(({ target, label }) => (
          <button
            key={target}
            type="button"
            className={`nav-dot${target === SLIDE_IDS[0] ? " active" : ""}`}
            data-target={target}
            aria-label={label}
          />
        ))}
      </nav>

      <section className="slide" id="slide-cover">
        <div className="cover-left">
          <p className="slide-label">Master architecture plan</p>
          <h1 className="display">
            Ecossistema <span className="cdu-name">Casa do Urso</span>
          </h1>
          <p className="lead">
            Visão unificada de produtos, marca, governança e crescimento, para
            alinhar squads, parceiros e narrativa em torno da mesma arquitetura.
          </p>
        </div>
        <div className="cover-visual">
          <div className="lottie-box" aria-hidden>
            <span
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "0.9rem",
                textAlign: "center",
                padding: "1rem",
                display: "block",
              }}
            >
              Área reservada · Lottie
            </span>
          </div>
        </div>
      </section>

      <section className="slide" id="slide-principio">
        <p className="slide-label">Princípio mestre</p>
        <h2 className="section-title">Um ecossistema, muitas portas de entrada</h2>
        <p className="lead">
          Cada frente (escola, clínica, família, tecnologia) compartilha a mesma
          promessa: clareza sobre o desenvolvimento da criança, com profundidade
          clínica e leveza no dia a dia.
        </p>
      </section>

      <section className="slide" id="slide-entidades">
        <p className="slide-label">Entidades</p>
        <h2 className="section-title">Camadas do ecossistema</h2>
        <div className="grid-3">
          <div className="card">
            <h3 className="card-title">Marca &amp; narrativa</h3>
            <p>
              Voz, posicionamento e histórias que conectam todas as unidades de
              negócio.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Produto &amp; dados</h3>
            <p>
              Cadu como camada comum de registro, insights e continuidade entre
              contextos.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Operação &amp; pessoas</h3>
            <p>
              Processos, formação e rituais que mantêm qualidade percebida em
              qualquer toque.
            </p>
          </div>
        </div>
      </section>

      <section className="slide" id="slide-flow">
        <p className="slide-label">Fluxo de valor</p>
        <h2 className="section-title">Da captação à retenção</h2>
        <p className="lead">
          Um funil contínuo onde confiança clínica alimenta adoção de produto e
          expansão orgânica.
        </p>
        <div className="flow-row">
          <span className="flow-step">Descoberta</span>
          <span className="flow-arrow">→</span>
          <span className="flow-step">Experiência guiada</span>
          <span className="flow-arrow">→</span>
          <span className="flow-step">Onboarding Cadu</span>
          <span className="flow-arrow">→</span>
          <span className="flow-step">Hábito &amp; ROI</span>
          <span className="flow-arrow">→</span>
          <span className="flow-step">Advocacy</span>
        </div>
      </section>

      <section className="slide" id="slide-economia">
        <p className="slide-label">Economia</p>
        <h2 className="section-title">Alavancas de receita</h2>
        <div className="grid-2">
          <div className="card">
            <h3 className="card-title">Assinaturas &amp; licenças</h3>
            <p className="metric">MRR + expansão</p>
            <p style={{ marginTop: "0.75rem" }}>
              Planos por cadeira, unidade ou rede, com upsell natural para
              módulos.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Serviços &amp; parcerias</h3>
            <p className="metric">LTV conjunto</p>
            <p style={{ marginTop: "0.75rem" }}>
              Implementação, formação certificada e co-brand com parceiros
              estratégicos.
            </p>
          </div>
        </div>
      </section>

      <section className="slide" id="slide-governanca">
        <p className="slide-label">Governança</p>
        <h2 className="section-title">Como decidimos</h2>
        <p className="lead">
          Fóruns por domínio (produto, clínica, marca) com cadência fixa;
          decisões documentadas e comunicadas ao ecossistema inteiro.
        </p>
        <div className="grid-2" style={{ marginTop: "1rem" }}>
          <div className="card">
            <h3 className="card-title">North Star</h3>
            <p>
              Métricas compartilhadas: adoção, qualidade percebida, retenção e
              saúde da comunidade.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Rituais</h3>
            <p>
              Reviews trimestrais de portfólio, priorização transparente e
              critérios de encerramento de iniciativas.
            </p>
          </div>
        </div>
      </section>

      <section className="slide" id="slide-riscos">
        <p className="slide-label">Riscos</p>
        <h2 className="section-title">O que monitoramos</h2>
        <ul className="risk-list">
          <li>Dispersão de mensagem entre unidades e canais digitais.</li>
          <li>Complexidade técnica que atrase time-to-value do Cadu.</li>
          <li>Dependência excessiva de poucos parceiros ou grandes contas.</li>
          <li>Desalinhamento entre evidência clínica e promessa de marketing.</li>
        </ul>
      </section>

      <section className="slide" id="slide-roadmap">
        <p className="slide-label">Roadmap</p>
        <h2 className="section-title">Onda 0 → 2</h2>
        <div className="timeline">
          <div className="timeline-item">
            <strong>Onda 0: Fundações</strong>
            <span>
              Design system narrativo, contratos de dados entre produtos, piloto
              controlado.
            </span>
          </div>
          <div className="timeline-item">
            <strong>Onda 1: Escala</strong>
            <span>
              Playbooks por segmento, automações de onboarding, métricas em tempo
              real.
            </span>
          </div>
          <div className="timeline-item">
            <strong>Onda 2: Rede</strong>
            <span>
              Marketplace de serviços, integrações profundas, comunidade de
              prática.
            </span>
          </div>
        </div>
      </section>

      <section className="slide" id="slide-proximos">
        <p className="slide-label">Próximos passos</p>
        <h2 className="section-title">Para fechar este plano</h2>
        <p className="lead">
          Validar prioridades com stakeholders, fixar orçamento por onda e nomear
          owners de cada entidade do mapa.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#slide-cover">
            Voltar ao início
          </a>
          <span className="btn btn-ghost" style={{ cursor: "default" }}>
            Edite em{" "}
            <code className="text-[0.85em] opacity-80">
              components/presentation/MasterPlanPresentation.tsx
            </code>
          </span>
        </div>
      </section>
    </div>
  );
}
