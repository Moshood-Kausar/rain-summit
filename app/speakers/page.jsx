"use client";
import { Navbar } from "../components/Navbar";
import { speakerList } from "../components/Speaker";
import Image from "next/image";
import Footer from "../components/Footer";
import { useState } from "react";

function truncateBio(bio, wordCount) {
  return (
    bio.split(" ").slice(0, wordCount).join(" ") +
    (bio.split(" ").length > wordCount ? "..." : "")
  );
}

export default function Speakers() {
  const [updateShown, setUpdateShown] = useState(true);
  return (
    <main className={`${updateShown? "pt-[120px] md:pt-[56px]": "pt-0 md:pt-0"}`}>
      <Navbar updateShown={updateShown} setUpdateShown={setUpdateShown} />

      <section
        className="flex flex-col gap-14 max-w-7xl mx-auto p-5 my-20 lg:my-28"
        id="speakers"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-dark mt-2.5 text-lg md:text-3xl font-semibold">
            Speakers Lineup
          </h2>
          <p className="text-center text-sm md:text-lg mt-2">
            We&apos;re bringing together some of the most audacious thinkers and
            doers in African tech, working on everuthing from fintech to
            commerce, energy, Web3 and AI, telco, cloud and more.
          </p>
        </div>

        {speakerList.map((speaker) => (
          <div
            key={speaker.id}
            className="border rounded-xl flex flex-col gap-3 lg:flex-row lg:items-center min-h-80 overflow-hidden"
          >
            <div className="h-80 lg:w-4/12 relative">
              <Image
                src={speaker.profile}
                alt={`Profile of ${speaker.name}`}
                fill
                className="object-cover h-full"
              />
            </div>

            <div className="lg:w-8/12 px-3 md:px-4 lg:px-5">
              <h2 className="font-semibold text-lg">{speaker.name}</h2>
              <p className="text-sm text-gray-500">{speaker.position}</p>
              <p className="text-clip my-5 text-sm">
                {truncateBio(speaker.bio, 100)}
              </p>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
