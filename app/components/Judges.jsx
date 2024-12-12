import Image from "next/image";

export default function Judges() {
  const speakerList = [
    {
      id: 1,
      name: "Ade",
      profile: "/YellowQuestionMark.png",
    },
    {
      id: 2,
      name: "Ade",
      profile: "/GreyQuestionMark.png",
    },
    {
      id: 3,
      name: "Ade",
      profile: "/YellowQuestionMark.png",
    },
  ];

  return (
    <main className="flex flex-col gap-10 py-20">
      <div className="">
        <h3 className="bg-gold-gradient bg-clip-text text-transparent text-2xl font-medium">
          Judges
        </h3>

        <div>
          <h4 className="font-semibold text-3xl">The RAIN Makers</h4>
          <p>{`we call the the RAIN makers, the storm finest, ready to ensure the strongest ideas rise above the flood. Anricipate the RAIN makers`}</p>
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
