import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Games from "@/components/Games";
import Founders from "@/components/Founders";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Mission />
        <Games />
        <Founders />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
