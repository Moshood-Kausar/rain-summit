import Image from "next/image";
import { ListIndicator } from "../../public/svg";
import { Button } from "./shared/Button";

export default function Magazine() {
  const topicInterest = [
    {
      id: 1,
      label: "Robotics and Artificial Intelligence",
    },
    {
      id: 2,
      label: "Research and Discoveries",
    },
    {
      id: 3,
      label: "Career Journey and Experinces",
    },
    {
      id: 4,
      label: "Innovationa and technology Trends",
    },
    {
      id: 5,
      label: "Inspirational Stories",
    },
    {
      id: 6,
      label: "And lots more",
    },
  ];

  const guidelineList = [
    {
      id: 1,
      label: (
        <p className="text-sm md:text-lg mt-1.5">
          {"Articles should be between 1-4 pages,"}
        </p>
      ),
    },
    {
      id: 2,
      label: (
        <p className="text-sm md:text-lg mt-1.5">
          {"Content must be original and authored by you"}
        </p>
      ),
    },
    {
      id: 3,
      label: (
        <p className="text-sm md:text-lg mt-1.5">
          {"All articles are subject to approval"}
        </p>
      ),
    },
    {
      id: 4,
      label: (
        <p className="font-semibold text-sm md:text-lg mt-1.5">
          25,000 Naira will be paid for publication <br /> ( 
          <span className="text-sm md:text-lg mt-1.5 font-normal">
             Exemptions fees apply to RAIN Alumni, Honrarary Professors, and
            other distinguished Individuals and academics
          </span> 
           )
        </p>
      ),
    },
  ];

  return (
    <main className="flex flex-col gap-7 py-11">
      <section className="">
        <h2 className="text-primary text-xs md:text-2xl font-medium">
          Magazine
        </h2>

        <div>
          <h2 className="text-dark mt-2.5 text-lg md:text-3xl font-semibold">
            Call for Article Submissions
          </h2>
          <p className="text-sm md:text-lg mt-1.5">
            Do you have compelling insights, a unique perspective, or an
            inspiring story to share? RAIN Magazine invites professors,
            storytellers, experts, and enthusiasts to contribute to its upcoming
            issue, spotlighting innovation and creativity.This is your chance to
            have your voice heard and ideas shared with a vibrant community
            passionate about Robotics, AI, and beyond.
          </p>
        </div>
      </section>

      <section className="my-5">
        <h2 className="text-dark my-2.5 text-lg md:text-3xl font-semibold">
          Topics of interest
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
          {topicInterest.map((item, index) => (
            <div
              key={index}
              className={`px-6 py-3 rounded-full w-fit min-h-[70px] flex justify-center items-center text-center ${
                item.id % 2 === 1
                  ? "text-white bg-gradient-to-br from-[#95772B] to-[#666828]"
                  : "bg-[#F8C748] "
              }`}
            >
              <p className="text-sm md:text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center gap-10 mb-20">
        <div className="flex flex-col lg:w-1/2">
          <div className="">
            <h2 className="text-dark my-2.5 text-lg md:text-3xl font-semibold mb-3">
              Submission Guidlines
            </h2>

            <div className="flex flex-col gap-3">
              {guidelineList.map((item, index) => (
                <ul key={index} className="flex gap-2">
                  <div className="flex">
                    <ListIndicator />
                  </div>
                  <li className="flex">{item.label}</li>
                </ul>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-dark mt-2.5 text-lg md:text-3xl font-semibold">
              Deadline
            </h2>
            <p className="text-sm md:text-lg my-1.5">
              Submit your entry before 20th December
            </p>
            <Button
              variant={"outlined"}
              href="https://docs.google.com/forms/d/e/1FAIpQLSdit-q9YWzcZojGW_wBaQ_vjO7_CO_scDx1hu4AKy3Dt4Rymw/viewform"
            >
              Submit an article
            </Button>
          </div>
        </div>

        <div className="flex w-full h-full lg:w-1/2">
          <Image
            src={"/ArticleImage.png"}
            alt="#"
            aria-hidden="true"
            width={600}
            height={400}
            className="flex"
          />
        </div>
      </section>
    </main>
  );
}
