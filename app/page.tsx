import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Menu from "@/components/menu";
import Contact from "@/components/contact";
import MapSection from "@/components/map-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Menu />
      <Contact />
      <MapSection />
      <Footer />
    </main>
  );
}
