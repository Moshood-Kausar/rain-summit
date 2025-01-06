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

  const topTen = [
    { name: 'Agro-Alliance', school: 'Ladoke Akintola University of Technology (LAUTECH)', category: 'Food Security' },
    { name: 'Ctrl See', school: 'Redeemer\'s University', category: 'Special Education' },
    { name: 'DermPal', school: 'Covenant University', category: 'Healthcare' },
    { name: 'Feedbag Agrihub', school: 'Lloyd\'s Maritime Institute', category: 'Food Security' }, // Assuming 'Food Security & E-Commerce' is primarily 'Food Security'
    { name: 'Hydrosentinel', school: 'N/A', category: 'National Security' },
    { name: 'ImpactHub', school: 'Ahmadu Bello University Zaria', category: 'Special Education' },
    { name: 'INWANG', school: 'Guru Innovation HUb', category: 'E-Commerce' },
    { name: 'JET Team', school: 'BELLS UNIVERSITY OF TECHNOLOGY', category: 'National Security' },
    { name: 'Team CropSafe', school: 'Ahmadu Bello University Zaria', category: 'Food Security' },
    { name: 'VITAL LINK', school: 'Bells University Of Technology', category: 'Healthcare' }
  ];

  return (
    <main className="flex flex-col gap-10 py-5 md:py-20" id="top-ten">
      <div className="">
        <h3 className="text-primary text-xs md:text-2xl font-medium">
          Top 10 Teams
        </h3>

        <div>
          <h4 className="text-dark mt-2.5 text-lg md:text-3xl font-semibold">
            Top 10 Teams Unveiled
          </h4>
          <p className="text-sm md:text-lg mt-1.5">{`Which 3 teams will rise to the top and claim the cash prize?`}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
          {topTen.map((item, index) => (
            <div
              key={index}
              className={`px-6 py-3 rounded-xl w-full min-h-14 md:min-h-[70px] flex flex-col justify-center items-center text-center ${
                index % 3 === 0
                ? "text-white bg-gradient-to-br from-[#95772B] to-[#666828]"
                : index % 3 === 1 ?
                "text-[#4C4E1C] border border-[#4C4E1C] bg-hero"
                  : "bg-[#F8C748]"
              }`}
            >
              <p className="text-sm md:text-lg">Team: {item.name}</p>
              <p className="text-sm md:text-lg">Category: {item.category}</p>
              <p className="text-sm md:text-lg">School: {item.school}</p>
            </div>
          ))}
        </div>
      <div className="pt-5 md:pt-20">
        <h3 className="text-primary text-xs md:text-2xl font-medium">
          Top 3 Teams
        </h3>

        <div>
          <h4 className="text-dark mt-2.5 text-lg md:text-3xl font-semibold">
            Meet the Innovators
          </h4>
          <p className="text-sm md:text-lg mt-1.5">{`Coming soon!`}</p>
        </div>
      </div>


      <div className="grid grid-cols-3 place-items-center gap-5">
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
