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
        <h3 className="bg-gold-gradient bg-clip-text text-transparent text-2xl font-medium">
          Speakers
        </h3>

        <div>
          <h4 className="font-semibold text-3xl">Meet the Visionaries</h4>
          <p>{`Thunderous voices of transformation, lightning voices of inspiration. Our lineup of speakers isn't one you want to miss. GUESS WHO?`}</p>
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
