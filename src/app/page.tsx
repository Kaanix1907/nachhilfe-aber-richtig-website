import Hero from "@/components/Hero";
import ReviewsTicker from "@/components/ReviewsTicker";
import Services from "@/components/Services";
import BildungTeilhabe from "@/components/BildungTeilhabe";
import USPs from "@/components/USPs";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ReviewsTicker />
        <Services />
        <BildungTeilhabe />
        <USPs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
