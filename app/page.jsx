import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

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
            
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
