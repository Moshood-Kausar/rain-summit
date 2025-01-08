"use client";

import { Navbar } from "../components/Navbar";
import { speakerList } from "../components/Speaker";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Speakers() {
  return (
    <main>
      <Navbar />

      <section
        className="flex flex-col gap-10 py-5 md:px-20 md:py-48"
        id="speakers"
      >
        {speakerList.map((speaker) => (
          <div key={speaker.id} className="border rounded-xl flex min-h-40">
            <div className="h-full w-4/12 relative">
              <Image
                src={speaker.profile}
                alt={`Profile of ${speaker.name}`}
                fill
                className="object-cover h-full"
              />
            </div>

            <div className="w-8/12">
              <h2>{speaker.name}</h2>
              <p>{speaker.position}</p>
              <p>{speaker.bio}</p>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
