export default function Hero() {
  return (
    <section className="container mx-auto pt-[118px] md:pt-[160px] pb-14 md:pb-[105px] px-4 md:px-10 lg:px-20 relative">
      <div>
        <h1 className="text-lg md:text-xl text-center font-semibold mx-auto w-fit h-fit rounded-full px-4 md:px-[33px] py-[10px] leading-normal text-[#4C4E1C] border border-dashed border-[#4C4E1C] mb-[18px] md:mb-10">
          RAIN Summit 1.0
        </h1>
        <h2 className="text-2xl leading-normal md:text-[64px] text-dark max-w-[26ch] mx-auto text-center">
          The RAIN of Transformation is Upon Us: CEOs Arise!
        </h2>
        <p className="text-xs md:text-base text-center mx-auto max-w-[80ch] z-20 relative mt-5 mb-10">
          Are you ready for an event where innovation meets opportunity? With 10
          teams fiercely competing for the top position in RAIN Hackathon 1.0,
          multiple award-winning speakers, and industry leaders with over 10+
          years of experience, we bring you RAIN Summit 1.0 - where the future
          of leadership unfolds.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-[50px]">
          <div className="border-2 border-[#4C4E1C] flex w-fit min-h-[48px] md:min-h-[68px]">
            <div className="hero-stat text-white px-4 md:px-7 flex">
              <p className="my-auto text-sm md:text-xl">Date</p>
            </div>
            <div className="flex px-6">
              <p className="my-auto text-lg md:text-xl">January 25th, 2025</p>
            </div>
          </div>
          <div className="border-2 border-[#4C4E1C] flex w-fit min-h-[48px] md:min-h-[68px]">
            <div className="hero-stat text-white px-2.5 flex">
              <p className="my-auto text-sm md:text-xl">Location</p>
            </div>
            <div className="flex px-3">
              <p className="my-auto text-lg md:text-xl">
                Aweni Arena Event Centre, Oke Ado, Ibadan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
