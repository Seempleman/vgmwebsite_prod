"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_CHARACTERS } from "@/lib/data";

export default function Hero() {
  const [cur, setCur] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const baseTransform = "scale(1.07) translateY(-10px)";

  // auto-advance + Ken Burns on the active character
  useEffect(() => {
    const start = () => {
      timer.current = setInterval(
        () => setCur((c) => (c + 1) % HERO_CHARACTERS.length),
        4200
      );
    };
    start();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  // Ken Burns drift when active index changes
  useEffect(() => {
    const im = imgRefs.current[cur];
    if (!im) return;
    im.style.transition = "opacity 1.1s ease, transform 5s ease";
    im.style.transform = "scale(1.0) translateY(0)";
    const raf = requestAnimationFrame(() => {
      im.style.transform = baseTransform;
    });
    return () => cancelAnimationFrame(raf);
  }, [cur]);

  const go = (n: number) => {
    setCur(n);
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(
      () => setCur((c) => (c + 1) % HERO_CHARACTERS.length),
      4200
    );
  };

  const onMove = (e: React.MouseEvent) => {
    const stage = stageRef.current;
    const im = imgRefs.current[cur];
    if (!stage || !im) return;
    const r = stage.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    im.style.transition = "transform .2s ease";
    im.style.transform = `${baseTransform} rotateY(${x * 12}deg) rotateX(${-y * 8}deg) translateX(${x * 16}px)`;
  };

  const onLeave = () => {
    const im = imgRefs.current[cur];
    if (im) {
      im.style.transition = "transform .5s ease";
      im.style.transform = baseTransform;
    }
  };

  return (
    <section className="hero">
      <div className="hero-bg-orb orb1" />
      <div className="hero-bg-orb orb2" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">An indie game studio</span>
          <h1>
            We design{" "}
            <span className="hl">
              <span>Immersive</span>
            </span>{" "}
            game experiences that make virtual worlds feel{" "}
            <span className="fun">
              <span className="grad-text">FUN</span>
            </span>{" "}
            and{" "}
            <span className="hl">
              <span>Meaningful</span>
            </span>
          </h1>
          <p className="lead">
            A studio obsessed with crafting worlds that stay with you long
            after you put down the controller.
          </p>
          <div className="hero-cta">
            <a href="#games" className="btn btn-primary">
              Explore Our Games →
            </a>
            <span className="scroll-hint">Scroll to explore ↓</span>
          </div>
        </div>

        <div
          className="stage"
          ref={stageRef}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
        >
          <div className="stage-pedestal" />
          <div className="stage-ring" />
          <div className="char-layer">
            {HERO_CHARACTERS.map((c, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={c.src}
                ref={(el) => {
                  imgRefs.current[i] = el;
                }}
                src={c.src}
                alt={c.alt}
                className={`char${i === cur ? " active" : ""}`}
              />
            ))}
          </div>
          <div className="stage-dots">
            {HERO_CHARACTERS.map((c, i) => (
              <button
                key={c.src}
                className={i === cur ? "on" : ""}
                aria-label={`Show character ${i + 1}`}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
