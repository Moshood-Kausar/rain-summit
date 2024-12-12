import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import Speakers from "./components/Speaker";
import Footer from "./components/Footer";
import Judges from "./components/Judges";
import Magazine from "./components/Magazine";
import Ticket from "./components/Ticket";

export default function Home() {
  return (
    <>
      <main className="w-full">
        <div className="bg-hero">
          <div className="">
            <Navbar />
            <Hero />
          </div>
        </div>
        <div className="">
          <div className="container mx-auto">
            <Speakers />
            <Judges />
            <Ticket />
            <Magazine />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
