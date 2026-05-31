import Reveal from "./Reveal";

const BELIEFS = [
  {
    icon: "🌍",
    title: "A portal to new realities",
    body: "Every world we build is an invitation to feel something real inside something imagined.",
  },
  {
    icon: "✨",
    title: "Sparking imagination",
    body: "We want to inspire the next generation of gamers and ignite beautiful, boundless imagination.",
  },
  {
    icon: "🤝",
    title: "Meaningful for the community",
    body: "Games made with heart, built to create entertainment that genuinely matters to the people who play them.",
  },
];

export default function Mission() {
  return (
    <section className="block mission" id="mission">
      <div className="wrap">
        <div className="mission-grid">
          <Reveal>
            <span className="eyebrow">Why we make games</span>
            <p className="mission-statement" style={{ marginTop: 18 }}>
  <strong>We believe games are more than entertainment,</strong>{" "}
  <span className="ms-rest">{" "}
    <span className="grad-text portal">Its Humanity&rsquo;s PortaL</span>{" "}
    to new realities, emotional journeys, and transformative
    experiences that stay with players long after they put down the
    controller.
  </span>
</p>
          </Reveal>
          <Reveal className="belief-list">
            {BELIEFS.map((b) => (
              <div className="belief" key={b.title}>
                <span className="ic">{b.icon}</span>
                <div>
                  <h4>{b.title}</h4>
                  <p>{b.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
