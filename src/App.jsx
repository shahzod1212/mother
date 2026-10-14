import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  BROTHERS,
  FILTERS,
  GALLERY,
  HERO_PHOTO,
  LETTER,
  SIDE_PHOTO,
  THANKS,
  WISHES,
  YOUNG,
} from "./data";
import { confetti } from "./confetti";

const hideBroken = (e) => {
  e.currentTarget.style.display = "none";
};

function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function Hero() {
  const petals = useMemo(
    () =>
      Array.from({ length: 22 }, () => ({
        left: Math.random() * 100,
        size: 10 + Math.random() * 16,
        dur: 9 + Math.random() * 10,
        delay: -Math.random() * 18,
        drift: (Math.random() - 0.5) * 220,
      })),
    [],
  );

  useEffect(() => {
    const t = setTimeout(confetti, 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <header className="hero-bg relative flex min-h-screen items-center overflow-hidden">
      {petals.map((q, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: `${q.left}%`,
            width: q.size,
            height: q.size,
            animationDuration: `${q.dur}s`,
            animationDelay: `${q.delay}s`,
            "--drift": `${q.drift}px`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[auto_1fr] md:gap-20">
        <div className="mx-auto">
          <div className="rounded-t-[999px] border border-champagne/60 p-3 shadow-[0_0_80px_rgba(179,41,78,0.55)]">
            <img
              src={HERO_PHOTO}
              alt="Мама"
              className="h-[24rem] w-72 rounded-t-[999px] object-cover object-top md:h-[34rem] md:w-[25rem]"
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="text-3xl italic text-champagne md:text-4xl">
            С Днём Рождения,
          </p>
          <h1 className="glow-title font-script text-[7rem] leading-[0.95] text-peony sm:text-[9rem] md:text-[12rem]">
            Мама!
          </h1>
          <p className="mt-4 max-w-md text-2xl text-champagne/85 md:mx-0">
            От трёх твоих сыновей — с благодарностью, гордостью и огромной
            любовью.
          </p>
          <a
            href="#letter"
            className="mt-10 inline-block rounded-full border border-champagne/70 px-8 py-3 text-xl text-champagne transition hover:bg-champagne hover:text-plum"
          >
            Открыть наше письмо
          </a>
        </div>
      </div>
    </header>
  );
}

function Letter() {
  const last = LETTER.length - 1;
  return (
    <section id="letter" className="bg-blush text-plum">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-[2fr_3fr] md:gap-20">
        <div className="md:sticky md:top-12 md:self-start">
          <img
            src={SIDE_PHOTO}
            alt="Три сына"
            onError={hideBroken}
            className="mx-auto w-full max-w-sm -rotate-2 border-[14px] border-white object-cover shadow-2xl"
          />
        </div>
        <div className="space-y-9">
          {LETTER.map((t, i) => (
            <Reveal key={i}>
              <p
                className={
                  i === 0
                    ? "font-script text-5xl text-pomegranate md:text-6xl"
                    : i === last
                      ? "font-script text-4xl text-pomegranate md:text-5xl"
                      : "text-2xl leading-relaxed md:text-[1.7rem]"
                }
              >
                {t}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Young() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-script text-5xl text-peony md:text-7xl">
          Какой ты была
        </h2>
        <p className="mt-3 max-w-xl text-2xl italic text-champagne/85">
          Молодая, красивая, с мечтами. И с тем же светом в глазах, что и
          сегодня.
        </p>
      </div>
      <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-7 overflow-x-auto px-6 pb-8 md:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
        {YOUNG.map((src) => (
          <div
            key={src}
            className="shrink-0 snap-center rounded-t-[999px] border border-champagne/50 p-2"
          >
            <img
              src={src}
              alt="Мама в молодости"
              loading="lazy"
              onError={hideBroken}
              className="h-[26rem] w-72 rounded-t-[999px] object-cover object-top"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function Brothers() {
  return (
    <section className="bg-plum-2 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-script text-5xl text-peony md:text-7xl">
          Твои три сына
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-2xl italic text-champagne/85">
          Три брата, которых ты вырастила. Каждый хочет сказать тебе своё.
        </p>
        <div className="mt-16 grid gap-14 md:grid-cols-3">
          {BROTHERS.map((b) => (
            <Reveal key={b.name} className="text-center">
              <img
                src={b.photo}
                alt={b.name}
                loading="lazy"
                onError={hideBroken}
                className="mx-auto h-44 w-44 rounded-full border-2 border-champagne object-cover object-top"
              />
              <h3 className="mt-6 font-script text-4xl text-peony">{b.name}</h3>
              <p className="mt-3 text-xl leading-relaxed text-ivory/90">
                {b.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Thanks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-script text-5xl text-peony md:text-7xl">
          Спасибо тебе
        </h2>
        <ul className="mt-12 divide-y divide-champagne/25 border-y border-champagne/25">
          {THANKS.map((t) => (
            <li
              key={t}
              className="py-6 text-2xl leading-snug text-ivory md:text-3xl"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Lightbox({ items, index, onClose, onNav }) {
  const touchX = useRef(0);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNav]);

  const btn =
    "absolute z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white hover:bg-white/25";
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4"
      onClick={onClose}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) onNav(dx < 0 ? 1 : -1);
      }}
    >
      <button
        aria-label="Закрыть"
        className={`${btn} right-4 top-4`}
        onClick={onClose}
      >
        ×
      </button>
      <button
        aria-label="Назад"
        className={`${btn} left-3 top-1/2 -translate-y-1/2`}
        onClick={(e) => {
          e.stopPropagation();
          onNav(-1);
        }}
      >
        ‹
      </button>
      <button
        aria-label="Дальше"
        className={`${btn} right-3 top-1/2 -translate-y-1/2`}
        onClick={(e) => {
          e.stopPropagation();
          onNav(1);
        }}
      >
        ›
      </button>
      <img
        src={items[index].src}
        alt=""
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] max-w-full object-contain shadow-2xl"
      />
      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-base text-white/70">
        {index + 1} / {items.length}
      </span>
    </div>
  );
}

function Gallery() {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(null);
  const items = useMemo(
    () =>
      filter === "all" ? GALLERY : GALLERY.filter((g) => g.cat === filter),
    [filter],
  );
  const close = useCallback(() => setOpen(null), []);
  const nav = useCallback(
    (d) => setOpen((i) => (i + d + items.length) % items.length),
    [items.length],
  );

  return (
    <section className="bg-plum-2 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-script text-5xl text-peony md:text-7xl">
          Наши воспоминания
        </h2>
        <p className="mt-3 max-w-xl text-2xl italic text-champagne/85">
          Каждая фотография — это день, который мы никогда не забудем.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              aria-pressed={filter === f.id}
              className={`rounded-full border px-5 py-1.5 text-lg transition ${
                filter === f.id
                  ? "border-champagne bg-champagne text-plum"
                  : "border-champagne/40 text-champagne hover:border-champagne"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-2 gap-3 md:columns-3 lg:columns-4">
          {items.map((g, i) => (
            <button
              key={g.src}
              onClick={() => setOpen(i)}
              className="mb-3 block w-full overflow-hidden"
              aria-label="Открыть фото"
            >
              <img
                src={g.src}
                alt=""
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.parentElement.style.display = "none";
                }}
                className="w-full transition duration-500 hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>
      {open !== null && (
        <Lightbox items={items} index={open} onClose={close} onNav={nav} />
      )}
    </section>
  );
}

function Finale() {
  return (
    <section className="finale-bg relative overflow-hidden py-28 text-center">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-script text-5xl text-peony md:text-7xl">
          Мы желаем тебе
        </h2>
        <ul className="mx-auto mt-12 grid max-w-3xl gap-x-12 gap-y-5 text-left text-2xl md:grid-cols-2">
          {WISHES.map((w) => (
            <li key={w} className="flex gap-3">
              <span className="text-champagne">✦</span>
              <span>{w}</span>
            </li>
          ))}
        </ul>

        <svg
          viewBox="0 0 24 24"
          className="heartbeat mx-auto mt-20 h-28 w-28 fill-pomegranate drop-shadow-[0_0_30px_rgba(242,161,181,0.7)]"
          aria-hidden="true"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>

        <p className="glow-title mt-8 font-script text-5xl text-champagne md:text-7xl">
          Мы любим тебя, мама
        </p>
        <p className="mx-auto mt-4 max-w-xl text-2xl italic text-ivory/90">
          Спасибо, что ты у нас есть. С днём рождения!
        </p>

        <button
          onClick={confetti}
          className="mt-12 rounded-full bg-champagne px-10 py-4 text-2xl text-plum transition hover:bg-white"
        >
          Нажми, мама
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-plum py-10 text-center text-xl italic text-champagne/80">
      С любовью, твои сыновья
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Hero />
      <Letter />
      <Young />
      <Brothers />
      <Thanks />
      <Gallery />
      <Finale />
      <Footer />
    </>
  );
}
