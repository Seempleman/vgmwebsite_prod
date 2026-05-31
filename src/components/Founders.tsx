import Image from "next/image";
import Reveal from "./Reveal";
import { FOUNDERS } from "@/lib/data";
import { FOUNDER_ICONS } from "./icons";

export default function Founders() {
  return (
    <section className="block founders" id="founders">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">The people behind it</span>
          <h2>Meet Our Founders</h2>
        </Reveal>
        <div className="founder-grid">
          {FOUNDERS.map((f) => (
            <Reveal className="founder-card" key={f.name}>
              <div className="founder-top">
                <div className="avatar">
                  {f.photo ? (
                    <Image
                      src={f.photo}
                      alt={f.name}
                      fill
                      sizes="168px"
                      quality={90}
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <>
                      {f.initials}
                      <small>PHOTO</small>
                    </>
                  )}
                </div>
                <div>
                  <div className="role">{f.role}</div>
                  <h3>{f.name}</h3>
                </div>
              </div>
              {f.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <div className="founder-links">
                {f.links.map((l) => {
                  const Icon = FOUNDER_ICONS[l.icon];
                  return (
                    <a
                      className="slink"
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={l.href}
                    >
                      <Icon />
                      {l.label}
                    </a>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
