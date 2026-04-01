import Hero from "@/components/Hero";
import Services from "@/components/Services";
import StayInSchool from "@/components/StayInSchool";
import USPs from "@/components/USPs";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <StayInSchool />
        <USPs />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
