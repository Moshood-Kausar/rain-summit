import Image from "next/image";

export default function Speakers() {
  const speakerList = [
    {
      id: 1,
      name: "Ade",
      profile: "/GreyQuestionMark.png",
    },
    {
      id: 2,
      name: "Ade",
      profile: "/YellowQuestionMark.png",
    },
    {
      id: 3,
      name: "Ade",
      profile: "/GreyQuestionMark.png",
    },
  ];

  return (
    <main className="flex flex-col gap-10 py-20" id="speakers">
      <div className="">
        <h3 className="text-primary text-xs md:text-2xl font-medium">
          Speakers
        </h3>

        <div>
          <h4 className="text-dark mt-2.5 text-lg md:text-3xl font-semibold">
            Meet the Visionaries
          </h4>
          <p className="text-sm md:text-lg mt-1.5">{`Thunderous voices of transformation, lightning voices of inspiration. Our lineup of speakers isn't one you want to miss. GUESS WHO?`}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        {speakerList.map((speaker) => (
          <div key={speaker.id} className="">
            <Image
              src={speaker.profile}
              alt="Speaker-profile"
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
