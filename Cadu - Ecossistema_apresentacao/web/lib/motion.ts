/**
 * Neuroinclusive motion defaults: low arousal, spatial clarity, optional reduction.
 */

export const EASE_CALM = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  instant: 0.12,
  fast: 0.22,
  base: 0.38,
  slow: 0.55,
  editorial: 0.72,
} as const;

export const transitionCalm = {
  duration: DURATION.base,
  ease: EASE_CALM,
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: transitionCalm,
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: DURATION.slow, ease: EASE_CALM },
  },
};

export const staggerContainer = (stagger = 0.06) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: 0.04 },
  },
});
