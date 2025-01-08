"use client";

import { Navbar } from "../components/Navbar";
import { speakerList } from "../components/Speaker";
import Image from "next/image";
import Footer from "../components/Footer";

function truncateBio(bio, wordCount) {
  return (
    bio.split(" ").slice(0, wordCount).join(" ") +
    (bio.split(" ").length > wordCount ? "..." : "")
  );
}

export default function Speakers() {
  return (
    <main>
      <Navbar />

      <section
        className="flex flex-col gap-14 max-w-7xl mx-auto p-5 my-20 lg:my-28"
        id="speakers"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-dark mt-2.5 text-lg md:text-3xl font-semibold">
            Speaker Lineup
          </h2>
          <p className="text-center text-sm md:text-lg mt-1.5">
            We&apos;re bringing together some of the most audacious thinkers and
            doers in African tech, working on everuthing from fintech to
            commerce, energy, Web3 and AI, telco, cloud and more.
          </p>
        </div>

        <div className="flex flex-col gap-10 lg:gap-20">
          {speakerList.map((speaker) => (
            <div
              key={speaker.id}
              className="border border-lightGreen rounded-xl flex flex-col gap-3 lg:flex-row lg:items-center overflow-hidden shadow-sm"
            >
              <div className="h-96 lg:w-4/12 relative">
                <Image
                  src={speaker.profile}
                  alt={`Profile of ${speaker.name}`}
                  fill
                  className="object-cover h-full"
                />
              </div>

              <div className="lg:w-8/12 px-2 lg:px-5">
                <h2 className="font-semibold text-lg">{speaker.name}</h2>
                <p className="text-sm text-gray-500">{speaker.position}</p>
                <p className="text-clip mt-5 text-sm">
                  {truncateBio(speaker.bio, 150)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
