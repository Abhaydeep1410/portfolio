import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { Episode } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE } from './fx';
import { PosterBackdrop } from './Poster';

/** Detail overlay for an experience / education / project episode (opened from the Experience section). */
export default function EpisodeModal({ episode, onClose }: { episode: Episode; onClose: () => void }) {
  useScrollLock(true);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    closeBtn.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      prevFocus?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  const accent = episode.palette.accent;
  const [season, ep] = episode.code.split(' ');

  return (
    <motion.div className="fixed inset-0 z-[140]" role="dialog" aria-modal="true" aria-label={episode.title}>
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <div data-lenis-prevent className="absolute inset-0 overflow-y-auto overscroll-contain" onClick={onClose}>
        <motion.div
          className="relative mx-auto min-h-full max-w-3xl bg-ink-2 shadow-2xl sm:my-10 sm:min-h-0 sm:rounded-2xl"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } }}
          exit={{ opacity: 0, y: 30, transition: { duration: 0.3 } }}
        >
          <div className="relative h-[34vh] min-h-[240px] overflow-hidden sm:rounded-t-2xl">
            <div className="absolute inset-0">
              <PosterBackdrop palette={episode.palette}>
                <span className="absolute -bottom-8 right-3 font-display text-[10rem] leading-none text-white/[0.09]">{ep}</span>
              </PosterBackdrop>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-ink-2/30 to-transparent" />
            <button
              ref={closeBtn}
              type="button"
              onClick={onClose}
              data-cursor="close"
              aria-label="Close"
              className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-lg text-bone backdrop-blur transition hover:bg-black"
            >
              ✕
            </button>
            <div className="absolute inset-x-0 bottom-0 px-5 pb-5 sm:px-8">
              <p className="mb-2 text-[11px] font-bold tracking-[0.3em] text-bone/80">
                {season} · EPISODE {ep.replace('E', '')}
              </p>
              <h2 className="font-display text-[clamp(2rem,7vw,3.6rem)] leading-[0.9] tracking-wide text-bone">{episode.title}</h2>
            </div>
          </div>

          <div className="px-5 pb-10 pt-4 sm:px-8">
            <p className="text-sm font-semibold" style={{ color: accent }}>
              {episode.runtime}
            </p>
            {episode.subtitle && <p className="mt-1 text-sm text-mist">{episode.subtitle}</p>}
            <p className="mt-4 text-[15px] leading-relaxed text-bone/90">{episode.description}</p>

            {episode.details && episode.details.length > 0 && (
              <section className="mt-8">
                <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">What I did</h3>
                <ul className="space-y-3.5">
                  {episode.details.map((d) => (
                    <li key={d} className="flex gap-3 text-[15px] leading-relaxed text-bone/85">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accent }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section className="mt-8">
              <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">Tech & keywords</h3>
              <div className="flex flex-wrap gap-2">
                {episode.tags.map((t) => (
                  <span key={t} className="glass rounded-full px-3 py-1.5 text-sm font-medium text-bone">
                    {t}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
