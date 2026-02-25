import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import DevStatus from "@/components/DevStatus";
import Contact from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Providers>
      <main>
        <Navbar />
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <DevStatus />
        <Contact />
        <Footer />
      </main>
    </Providers>
  );
}
