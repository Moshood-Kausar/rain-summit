import Image from "next/image";
import { Button } from "./shared/Button";

export default function Ticket() {
  const ticketsImage = [
    {
      id: 1,
      image: "/earlyTicket.png",
    },
    {
      id: 2,
      image: "/exhibition.png",
      size: true,
    },
    {
      id: 3,
      image: "/lateBird.png",
    },
  ];
  return (
    <section className="flex flex-col gap-10 py-10 py-20" id="tickets">
      <div>
        <h2 className="text-primary text-xs md:text-2xl font-medium">
          Tickets
        </h2>

        <div>
          <h2 className="text-dark mt-2.5 text-lg md:text-3xl font-semibold">
            Grab Your Tickets Now
          </h2>
          <p className="text-sm md:text-lg mt-1.5">
            As the rain revitalises the earth, so can bold leadership rejuvenate
            industries, communities and lives. Will you arise and take the lead?
            Grab your umbrellas and get your tickets!
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-[100px] items-start md:items-center justify-between max-w-7xl">
        {ticketsImage.map((i, idx) => (
          <Image
            key={idx}
            src={i.image}
            alt="tickets"
            width={i.size ? 500 : 320}
            height={i.size ? 200 : 150}
          />
        ))}
      </div>

      <div>
        <Button
          variant="primary"
          href="https://eventprime.co/e/rain-summit-1-0"
          className="!px-8"
        >
          Get Tickets
        </Button>
      </div>
    </section>
  );
}
