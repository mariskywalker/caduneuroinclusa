"use client";

import { motion } from "framer-motion";

type Props = {
  onDismiss: () => void;
};

export function IntroOverlay({ onDismiss }: Props) {
  return (
    <motion.div
      className="pointer-events-auto fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#032e4d]/92 px-8 backdrop-blur-[3px]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-xl text-center"
      >
        <p className="font-serif text-[clamp(1.35rem,3.2vw,1.85rem)] font-light leading-snug tracking-tight text-[#e8e4dc]">
          Um ecossistema para que o cuidado não se perca.
        </p>
        <p className="mt-6 text-[13px] font-normal leading-relaxed text-[#8f8a80]">
          CADU, Instituto, Casa do Urso e CareWing como camadas complementares
          de uma mesma infraestrutura de neurodesenvolvimento.
        </p>
        <p className="mt-10 text-[11px] font-normal italic tracking-wide text-[#6b665c]">
          Projetos diferentes. Missão compartilhada.
        </p>
      </motion.div>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.55 }}
        className="pointer-events-auto mt-14 text-[10px] uppercase tracking-[0.35em] text-[#9a948a] underline decoration-white/15 underline-offset-4 transition-colors hover:text-[#c9c2b4]"
        onClick={onDismiss}
      >
        entrar no mapa
      </motion.button>
    </motion.div>
  );
}
