import Image from "next/image";
import { SOCIALS } from "@/lib/data";
import { SOCIAL_ICONS } from "./icons";

const NAV = [
  { label: "Philosophy", href: "#mission" },
  { label: "Games", href: "#games" },
  { label: "Founders", href: "#founders" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-brand">
              <Image
                src="/images/vmg-logo-tile.png"
                alt="VividMindGames"
                width={48}
                height={48}
              />
              <span className="nm">VividMindGames</span>
            </div>
            <p className="foot-brand-blurb">
              We design immersive game experiences that make virtual worlds
              feel fun and meaningful.
            </p>
            <div className="foot-socials">
              {SOCIALS.map((s) => {
                const Icon = SOCIAL_ICONS[s.icon];
                return (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="foot-nav">
            <h5>Explore</h5>
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </div>
        </div>
        <div className="foot-bottom">
          <span>
            © {new Date().getFullYear()} VividMindGames. All rights reserved.
          </span>
          <span>Crafted with care 🎮</span>
        </div>
      </div>
    </footer>
  );
}
