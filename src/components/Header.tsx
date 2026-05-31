"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const NAV = [
  { label: "Philosophy", href: "#mission" },
  { label: "Games", href: "#games" },
  { label: "Founders", href: "#founders" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="wrap nav">
        <a className="brand" href="#top">
          <Image
            src="/images/vmg-logo-tile.png"
            alt="VividMindGames logo"
            width={42}
            height={42}
            priority
          />
          <span className="nm">
            Vivid<b>Mind</b>Games
          </span>
        </a>
        <nav>
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#games" className="btn btn-primary nav-cta">
          Explore Our Games
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /> <span /> <span />
        </button>
      </div>
      {open && (
        <div className="mobile-menu">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a
            href="#games"
            className="btn btn-primary"
            onClick={() => setOpen(false)}
          >
            Explore Our Games
          </a>
        </div>
      )}
    </header>
  );
}
