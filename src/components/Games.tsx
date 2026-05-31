import Image from "next/image";
import Reveal from "./Reveal";
import { GAMES } from "@/lib/data";
import { PLATFORM_ICONS } from "./icons";

export default function Games() {
  return (
    <section className="block" id="games">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Our games</span>
          <h2>Worlds we&rsquo;re proud of</h2>
          <p>
            From the throne room to the streets, two very different games, one
            obsession with making them unforgettable.
          </p>
        </Reveal>
        <div className="games-grid">
          {GAMES.map((g) => (
            <Reveal className={`game-card${g.flip ? " flip" : ""}`} key={g.title}>
              <div className="game-art">
                <Image
                  src={g.art}
                  alt={g.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 55vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="game-body">
                <span className={`pill ${g.status}`}>
                  <span className="dot" /> {g.statusLabel}
                </span>
                <h3>{g.title}</h3>
                <p>{g.blurb}</p>
                <div className="platforms">
                  {g.platforms.map((p) => {
                    const Icon = PLATFORM_ICONS[p.icon];
                    return (
                      <a
                        className="plat"
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={p.href}
                      >
                        <Icon />
                        {p.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
