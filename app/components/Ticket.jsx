import Image from "next/image";
import { Button } from "./shared/Button";

export default function Ticket() {
  return (
    <section className="flex flex-col gap-10 py-20" id="tickets">
      <div>
        <h2 className="bg-gold-gradient bg-clip-text text-transparent text-2xl font-medium">
          Tickets
        </h2>

        <div>
          <h2 className="font-semibold text-3xl">Grab Your Tickets Now</h2>
          <p>
            As the rain revitalises the earth, so can bold leadership rejuvenate
            industries, communities and lives. Will you arise and take the lead?
            Grab your umbrellas and get your tickets!
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-[100px] items-start md:items-center justify-between max-w-7xl">
        <div className="flex">
          <Image
            src={"/earlyBird.png"}
            width={600}
            height={300}
            alt="Early bird ticket"
            className="flex max-h-[150px] md:max-h-full w-auto"
          />
        </div>
        <div className="flex">
          <Image
            src={"/lateBird.png"}
            width={600}
            height={300}
            alt="Late bird ticket"
            className="flex max-h-[150px] md:max-h-full w-auto"
          />
        </div>
      </div>

      <div>
        <Button variant="primary" href="https://eventprime.co/e/rain-summit-1-0" className="!px-8">Get Tickets</Button>
      </div>
    </section>
  );
}
