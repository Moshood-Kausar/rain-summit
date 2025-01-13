"use client";
import { Navbar } from "../components/Navbar";
import { speakerList } from "../components/Speaker";
import Image from "next/image";
import Footer from "../components/Footer";
import { useState } from "react";
import { PiDotFill } from "react-icons/pi";

function truncateBio(bio, wordCount) {
  return (
    bio.split(" ").slice(0, wordCount).join(" ") +
    (bio.split(" ").length > wordCount ? "..." : "")
  );
}

// const tagColors = {
//   ai_panelist: "text-blue-500",
//   Speaker: "bg-green-500 text-white py-1 px-3 rounded-full",
//   energy: "text-yellow-500",
//   ai: "text-purple-500",
//   // Add more tags and their corresponding colors as needed
// };

export default function Speakers() {
  const [updateShown, setUpdateShown] = useState(true);
  return (
    <main
      className={`${updateShown ? "pt-[120px] md:pt-[56px]" : "pt-0 md:pt-0"}`}
    >
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

        <div className="flex flex-col gap-10 lg:gap-20">
          {speakerList.map((speaker) => (
            <div
              key={speaker.id}
              className="border border-lightGreen rounded-xl flex flex-col gap-3 lg:flex-row lg:items-center overflow-hidden shadow-sm"
            >
              <div className="h-[450px] lg:w-4/12 relative">
                <Image
                  src={speaker.profile}
                  alt={`Profile of ${speaker.name}`}
                  fill
                  className="object-cover h-full"
                />
              </div>

              <div className="lg:w-8/12 px-3 md:px-4 lg:px-5">
                <div className="flex gap-2 items-center">
                  <h2 className="font-semibold text-lg">{speaker.name}</h2>{" "}
                  <PiDotFill />
                  <p className="text-[12px] py-05 px-3 rounded-full text-white" style={{ background: speaker.tag_color }}>
                    {speaker.tag}
                  </p>{" "}
                </div>

                <p className="text-sm text-gray-500">{speaker.position}</p>
                <p className="text-clip my-5 text-sm">
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
