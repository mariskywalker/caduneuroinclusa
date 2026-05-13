export type NeuroSystemPillar = {
  slug: string;
  title: string;
  subtitle: string;
  thesis: string;
  scope: string[];
  bridges: string;
};

export const sistemasPage = {
  hero: {
    eyebrow: "Framework",
    title: "Sistemas Neuroafetivos",
    lead:
      "Redes interdependentes de condições emocionais, sensoriais, comunicacionais, tecnológicas, educacionais, de governança e de pesquisa que sustentam o desenvolvimento humano ao longo do tempo, com clareza, continuidade e segurança. O conceito integra o que acontece no corpo, na família, na escola, na clínica e nas decisões institucionais, sem reduzir pessoas a diagnósticos ou usuários a métricas.",
    note: "Design é uma aplicação. A tese é sistémica: importa compor infraestruturas inteiras, não apenas interfaces. Quando o desenho de produto avança sem alinhar cuidado, comunicação e governança, cria-se fricção que recai sobre famílias e profissionais.",
  },
  introduction: {
    title: "Por que sistemas, não slogans",
    paragraphs: [
      "Neuroafetividade descreve a qualidade das relações entre corpo, emoção, ambiente e outros sujeitos. Quando essa qualidade é intencionalmente desenhada em múltiplas camadas (clínica, pedagógica, institucional, digital), falamos em sistemas: conjuntos estáveis de práticas, políticas e artefatos que se reforçam mutuamente.",
      "Cada pilar abaixo pode ser lido como um conjunto de perguntas operacionais. Juntos, compõem uma linguagem institucional compartilhada entre Casa do Urso, CADU e parceiros, para que prioridades e contratos possam ser discutidos com precisão.",
      "O mapa não é fechado: novos temas (por exemplo, sustentabilidade financeira do cuidado ou mediação comunitária) podem ser acoplados sem quebrar a lógica, desde que mantenham foco em segurança emocional, continuidade e redução de carga cognitiva.",
    ],
  },
  pillars: [
    {
      slug: "cuidado",
      title: "Sistemas de Cuidado",
      subtitle: "Continuidade, coerência terapêutica e segurança relacional.",
      thesis:
        "O cuidado neuroafetivo organiza ritmos, transições e responsabilidades entre profissionais, famílias e tecnologias de suporte, minimizando rupturas que geram sobrecarga. Inclui acordos claros sobre quem responde em cada fase, como se documenta o que importa para a família e como se preserva tempo de escuta.",
      scope: [
        "Protocolos clínicos sensíveis à regulação emocional e à tolerância sensorial",
        "Handoffs entre disciplinas e entre níveis de atenção, com checklist humano",
        "Indicadores de segurança emocional, pertencimento e continuidade percebida",
        "Planos compartilhados com linguagem acessível para famílias e educadores",
      ],
      bridges:
        "Conecta-se diretamente à Casa do Urso e aos fluxos longitudinais orquestrados pelo CADU, garantindo que a tecnologia sirva ao plano terapêutico e não o contrário.",
    },
    {
      slug: "design",
      title: "Sistemas de Design",
      subtitle: "Forma, materialidade e serviços que respiram.",
      thesis:
        "Design aqui é infraestrutura de atenção: hierarquia visual calma, linguagem consistente, espaços físicos e digitais que reduzem ruído sensorial sem empobrecer a informação. Abrange identidade, sinalização, documentos clínicos, salas de espera e produtos digitais que convivem com fadiga e ansiedade.",
      scope: [
        "Design systems institucionais e editoriais com tokens e padrões de acessibilidade",
        "Arquitetura de informação para baixa carga cognitiva em fluxos longos",
        "Padrões de espaço físico, luz e acústica em contextos clínicos e escolares",
        "Revisão de formulários e comunicações recorrentes para reduzir perguntas duplicadas",
      ],
      bridges:
        "Traduz pesquisa e políticas em artefatos utilizáveis por equipes e famílias, aproximando evidência do cotidiano de quem cuida e de quem é cuidado.",
    },
    {
      slug: "comunicacao",
      title: "Sistemas de Comunicação",
      subtitle: "Ritmo, tom e previsibilidade simbólica.",
      thesis:
        "Comunicação neuroafetiva evita urgência artificial, mantém coerência entre canais e protege a agência de quem está em situação de vulnerabilidade. Define como dar notícias difíceis, como usar lembretes sem culpabilizar e como alinhar marketing institucional com a experiência real em sala.",
      scope: [
        "Voz editorial, guias de tom e exemplos de mensagens por contexto",
        "Protocolos de crise, transparência e correção pública quando algo falha",
        "Narrativas que não medicalizam identidades nem exploram sensibilidade para engajamento",
        "Rotinas de feedback entre comunicação, clínica e suporte para ajustar linguagem",
      ],
      bridges:
        "Alinha Instituto, clínica e plataforma com uma mesma gramática de respeito, para que nenhum canal contradiga o que a família ouviu em consulta.",
    },
    {
      slug: "governanca",
      title: "Sistemas de Governança",
      subtitle: "Políticas, acordos e accountability distribuída.",
      thesis:
        "Governança neuroafetiva explicita trade-offs, protege dados sensíveis, define limites éticos para automação e mantém decisões auditáveis. Inclui papéis, consents, retenção, revisão de algoritmos e canais de contestação compreensíveis para não especialistas.",
      scope: [
        "Comitês de ética em dados longitudinais com participação de famílias quando possível",
        "Contratos e SLAs sensíveis a contexto clínico e a janelas de resposta humanas",
        "Indicadores de equidade, acesso e continuidade, não apenas volume ou velocidade",
        "Políticas de uso de IA assistiva com supervisão e registro de exceções",
      ],
      bridges:
        "Permite que tecnologia e cuidado escalem sem perder legitimidade pública, porque critérios e responsabilidades ficam explícitos.",
    },
    {
      slug: "tecnologia",
      title: "Sistemas de Tecnologia",
      subtitle: "Tecnologia calma, interoperável e orientada a continuidade.",
      thesis:
        "Tecnologia deve reduzir fragmentação entre educação, saúde e família, não aumentar pingos de atenção. Interfaces lentas, claras e recuperáveis; notificações escassas e previsíveis; estados vazios e erros explicados em linguagem humana. Integração significa eventos e APIs que respeitam consentimento e contexto.",
      scope: [
        "Identidade, consentimento, portabilidade e histórico auditável de acessos",
        "Telemetria ética, explicabilidade e revisão periódica de regras automatizadas",
        "APIs e eventos para coordenação institucional sem acoplar silos invisíveis",
        "Padrões de desempenho que não penalizam conexões lentas ou dispositivos antigos",
      ],
      bridges:
        "É o território principal do CADU, em diálogo constante com o Instituto sobre o que medir, o que publicar e o que deve permanecer clínico e local.",
    },
    {
      slug: "educacao",
      title: "Sistemas de Educação",
      subtitle: "Formação que integra teoria, prática e instituição.",
      thesis:
        "Programas educacionais neuroafetivos conectam evidência, simulação supervisionada e transformação de processos reais de trabalho. O objetivo é que cada participante saia com instrumentos (roteiros, rubricas, modelos de reunião) que possam levar para a próxima segunda-feira.",
      scope: [
        "Trilhas para profissionais de saúde e educação, com avaliação formativa",
        "Microcredenciais alinhadas a frameworks e a casos reais anonimizados",
        "Mentorias em desenho de serviços com observação de fluxo e entrevistas com usuários",
        "Materiais de sensibilização para gestores sem formação clínica",
      ],
      bridges:
        "Distribui o conhecimento do Instituto para sistemas que atendem milhões, sem diluir a exigência ética nem a profundidade clínica.",
    },
    {
      slug: "pesquisa",
      title: "Sistemas de Pesquisa",
      subtitle: "Geração e curadoria de evidência com tradução pública.",
      thesis:
        "Pesquisa neuroafetiva combina métodos quantitativos longitudinais, etnografias institucionais e revisão por pares, sempre com rota de aplicação. Perguntamos não só “o que funciona”, mas “para quem, em que contexto, com que custo emocional e com que governança”.",
      scope: [
        "Agendas colaborativas com clínicas, escolas e universidades",
        "Pré-registro, dados abertos quando possível e replicação incentivada",
        "Biblioteca editorial, revisões sistemáticas e sínteses para decisores",
        "Comunicação de incerteza e limitações com a mesma clareza dos resultados positivos",
      ],
      bridges:
        "Alimenta todos os pilares com atualização contínua e humildade epistémica, evitando que o discurso institucional corra à frente da evidência.",
    },
  ] satisfies NeuroSystemPillar[],
  closing: {
    title: "Como usamos este framework internamente",
    body:
      "Cada entrega do Instituto (ensaio, curso, consultoria ou artefato de política pública) é classificada pelos pilares que atravessa. Isso permite auditoria editorial, priorização de roadmap e comunicação transparente com parceiros. Quando um tema novo surge, primeiro perguntamos quais pilares ele tensiona e que riscos emergem para segurança emocional e continuidade antes de decidir formato e prazo.",
  },
} as const;
