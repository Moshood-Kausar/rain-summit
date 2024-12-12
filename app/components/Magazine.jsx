import Image from "next/image";
import { ListIndicator } from "../../public/svg";

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
      label: "Articles should be between 1-4 pages",
    },
    {
      id: 2,
      label: "Content must be original and authored by you",
    },
    {
      id: 3,
      label: "All articles are subject to approval",
    },
    {
      id: 4,
      label: <p className="font-semibold"> 25,000 Naira will be paid for publication (<p className="font-normal"> Exemptions fees apply to RAIN Alumni, Honrarary Professors, and other distinguished Individuals and academics</p> )</p>,
    },
  ];

  return (
    <main className="flex flex-col gap-8">
      <section>
        <h2 className="bg-gold-gradient bg-clip-text text-transparent text-2xl font-medium mb-5">
          Magazine
        </h2>

        <div>
          <h2 className="font-semibold text-3xl">
            Call for Article Submissions
          </h2>
          <p>
            Do you have compelling insights, a unique perspective, or an
            inspiring story to share? RAIN Magazine invites professors,
            storytellers, experts, and enthusiasts to contribute to its upcoming
            issue, spotlighting innovation and creativity.This is your chance to
            have your voice heard and ideas shared with a vibrant community
            passionate about Robotics, AI, and beyond.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-semibold text-2xl">Topic Interest</h2>
        <div className="grid grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
          {topicInterest.map((item, index) => (
            <div
              key={index}
              className={`px-5 py-3 rounded-md max-w-[420px] ${
                item.id % 2 === 1
                  ? "text-white bg-gradient-to-br from-[#95772B] to-[#666828]"
                  : "bg-[#F8C748] "
              }`}
            >
              <p className="text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-10">
        <div className="w-1/2">
          <div>
            <h2 className="font-semibold text-2xl">Submission Guidlines</h2>

            <div>
              {guidelineList.map((item, index) => (
                <ul key={index} className="flex gap-2">
                  <ListIndicator />
                  <li>{item.label}</li>
                </ul>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-2xl">Deadline</h2>
            <p>Submit your entry before 20th December</p>
            <button>Submit</button>
          </div>
        </div>

        <div>
          <Image
            src={"/ArticleImage.png"}
            alt="image-placeholder"
            width={700}
            height={400}
          />
        </div>
      </section>
    </main>
  );
}
