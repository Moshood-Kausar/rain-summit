import Image from "next/image";

export default function Ticket() {
  return (
    <main className="flex flex-col gap-10 py-20">
      <section>
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
      </section>

      {/* the ticket images should be here */}
      <section className="flex flex-col md:flex-row gap-5 items-center justify-between">
        <Image src={'/earlyBird.png'} width={600} height={300} alt="ticket-pass" />
        <Image src={'/lateBird.png'} width={600} height={300}  alt='ticket-pass'/>
      </section>

      <div>
        <button className="bg-gold-gradient px-8 py-3 rounded-lg inline-block">
          Get Tickets
        </button>
      </div>
    </main>
  );
}
