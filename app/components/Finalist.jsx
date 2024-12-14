import Image from "next/image";

export default function Finalist() {
  const teamList = [
    {
      id: 1,
      name: "Ade",
      profile: "/finalist.png",
      price: "₦750,000",
    },
    {
      id: 2,
      name: "Ade",
      profile: "/trophy.png",
      price: "₦1,000,000",
    },
    {
      id: 3,
      name: "Ade",
      profile: "/finalist.png",
      price: "₦500,000",
    },
  ];

  return (
    <main className="flex flex-col gap-10 py-5 md:py-20" id="speakers">
      <div className="">
        <h3 className="text-primary text-xs md:text-2xl font-medium">
          Top 10 Teams
        </h3>

        <div>
          <h4 className="text-dark mt-2.5 text-lg md:text-3xl font-semibold">
            Meet the Innovators
          </h4>
          <p className="text-sm md:text-lg mt-1.5">{`Which 3 teams will rise to the top and claim the cash prize?`}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 place-items-center gap-2">
        {teamList.map((speaker) => (
          <div key={speaker.id} className="flex flex-col items-center gap-2">
            <Image
              src={speaker.profile}
              alt="Speaker-profile"
              width={200}
              height={200}
              className="flex w-auto"
            />

            <p className="text-dark mt-2.5 text-lg md:text-3xl font-semibold">
              {speaker.price}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
