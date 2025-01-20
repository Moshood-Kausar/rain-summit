import { About } from "./components/About";
import Speakers from "./components/Speaker";
import NavHero from "./components/NavHero";
import Ticket from "./components/Ticket";
import Finalist from "./components/Finalist";
import Footer from "./components/Footer";
import Schedule from "./components/Schedule";

export default function Home() {
  return (
    <>
      <main className="w-full">
        <div className="bg-hero">
          <NavHero />
        </div>
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <Speakers />
          <Ticket />
          <Schedule />
          <Finalist />
          <About />
        </div>
      </main>
      <Footer />
    </>
  );
}
