// All editable site content lives here. Update copy, links, and assets in one place.

export const HERO_CHARACTERS = [
  { src: "/images/hero-queen.png", alt: "Battle For Crown queen character" },
  { src: "/images/hero-yellow-mascot.png", alt: "Run Punch yellow mascot" },
  { src: "/images/hero-blue-figure.png", alt: "Blue low-poly character" },
  { src: "/images/hero-soldier.png", alt: "Low-poly soldier character" },
];

export type Game = {
  title: string;
  status: "soon" | "live";
  statusLabel: string;
  blurb: string;
  art: string;
  flip?: boolean;
  platforms: { label: string; href: string; icon: "steam" | "googleplay" | "itch" }[];
};

export const GAMES: Game[] = [
  {
    title: "Battle For Crown",
    status: "soon",
    statusLabel: "Coming Soon",
    blurb:
      "A clash for the throne in a stylized low-poly world. Wishlist now and be there when the crown is up for grabs.",
    art: "/images/game-battle-for-crown.png",
    flip: false,
    platforms: [
      {
        label: "Wishlist on Steam",
        href: "https://store.steampowered.com/app/4581360/Battle_For_Crown/?beta=1",
        icon: "steam",
      },
    ],
  },
  {
    title: "Run Punch",
    status: "live",
    statusLabel: "Released",
    blurb:
      "Run, dodge, and punch your way through chaos. Fast, funny, and endlessly replayable, out now on mobile and PC.",
    art: "/images/game-run-punch.png",
    flip: true,
    platforms: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.VividmindGames.RunPunch",
        icon: "googleplay",
      },
      {
        label: "Play on PC (itch.io)",
        href: "https://vividmindgames.itch.io/punchrun",
        icon: "itch",
      },
    ],
  },
];

export type Founder = {
  name: string;
  role: string;
  initials: string;
  photo?: string; // place founder-richard.jpg / founder-ebuka.jpg in /public/images to enable
  bio: string[];
  links: { label: string; href: string; icon: "linkedin" | "youtube" | "twitch" }[];
};

export const FOUNDERS: Founder[] = [
  {
    name: "Richard Osukwu",
    role: "Founder",
    initials: "RO",
    // To enable: drop founder-richard.jpg into /public/images and set photo below.
    photo: "/images/founder-richard.jpg", // "/images/founder-richard.jpg"
    bio: [
      "Richard started his journey in game development at 16, from makeshift computer setups to awkward PC builds, all just to learn the craft.",
      "Over a decade later, that passion has never left his soul. From scrappy projects to contract gigs, and eventually taking the leap to bring a brimming vision to life. He has the spirit to never Give up",
    ],
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/richardosukwu/", icon: "linkedin" },
    ],
  },
  {
    name: "Ebuka Nzewi",
    role: "Co-Founder",
    initials: "EN",
    // To enable: drop founder-ebuka.jpg into /public/images and set photo below.
    photo: "/images/founder-ebuka.jpg", // "/images/founder-ebuka.jpg"
    bio: [
      "Ebuka had his first gaming console at 8 years old and never let go of that passion, so you can imagine the decades since.",
      "Competitive and casual, adventure and everything in between. Along the way he made friendships, and got into streaming and YouTube. You can still find his history online.",
    ],
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/ebuka-nzewi/", icon: "linkedin" },
      { label: "YouTube", href: "https://www.youtube.com/@ohmeigah", icon: "youtube" },
      { label: "Twitch", href: "https://www.twitch.tv/ohmeigah", icon: "twitch" },
    ],
  },
];

export const SOCIALS = [
  { label: "X", href: "https://x.com/vividmindgames", icon: "x" as const },
  { label: "YouTube", href: "https://www.youtube.com/@VividMindGames", icon: "youtube" as const },
  { label: "Instagram", href: "https://www.instagram.com/vividmindgames", icon: "instagram" as const },
  { label: "Facebook", href: "https://www.facebook.com/vividmindgames", icon: "facebook" as const },
];
