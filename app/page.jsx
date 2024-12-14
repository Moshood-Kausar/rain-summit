import { About } from "./components/About";
import Speakers from "./components/Speaker";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Judges from "./components/Judges";
import Magazine from "./components/Magazine";
import Ticket from "./components/Ticket";
import Finalist from "./components/Finalist";

export default function Home() {
  return (
    <>
      <main className="w-full">
        <div className="bg-hero">
          <Navbar />
          <Hero />
        </div>
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <About />
          <Finalist />
          <Speakers />
          <Judges />
          <Ticket />
          <Magazine />
        </div>
      </main>
      <Footer />
    </>
  );
}
