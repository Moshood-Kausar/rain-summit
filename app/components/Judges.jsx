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
    <section className="flex flex-col gap-10 py-11">
      <div className="">
        <h3 className="text-primary text-xs md:text-2xl font-medium">Judges</h3>

        <div>
          <h4 className="text-dark mt-2.5 text-lg md:text-3xl font-semibold">
            The RAIN Makers
          </h4>
          <p className="text-sm md:text-lg mt-1.5">{`we call the the RAIN makers, the storm finest, ready to ensure the strongest ideas rise above the flood. Anricipate the RAIN makers`}</p>
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
    </section>
  );
}
