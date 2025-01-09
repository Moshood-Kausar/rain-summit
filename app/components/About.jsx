import { FaRegCheckCircle } from "react-icons/fa";

const whyData = [
  {
    heading: "Engage with Industry Giants",
    body: "From Leaders across fields AI and Robotics , come over to listen and be inspired to start your own revolution.",
  },
  {
    heading: "Expand Your Network",
    body: "Rub Shoulders with innovators like you, CEOs entrepreneurs and perhaps your future co-founder!",
  },
  {
    heading: "Explore Oppurtunities",
    body: "From Scholarships to career-boosting connections, this summit plans to open doors that could change your future.",
  },
  {
    heading: "Advanced Tech Exhibitions",
    body: "Witness groundbreaking innovations and cutting-edge technology as top creators showcase their trailblazing solutions to real-world challenges.",
  },
  {
    heading: "Cheer for the Best ",
    body: "Feel the rush and be inspired as 10 teams compete for top honors in RAIN Hackathon 1.0, winning up to 2 million naira prize up for grabs.",
  },
  {
    heading: "Drone Flight",
    body: "Experience the thrill of advanced drone technology in action, with live demonstrations that showcase precision, speed, and innovation in the skies.",
  },
];
export const About = () => {
  return (
    <section className="py-11" id="about">
      <h2 className="text-primary text-xs md:text-2xl font-medium">About</h2>
      <h3 className="text-dark mt-2.5 text-lg md:text-3xl font-semibold">
        Why You Can&apos;t Miss RAIN Summit 1.0
      </h3>
      <div
        className={`mt-8 md:mt-11 grid grid-cols-1 md:grid-cols-2 gap-y-9 md:gap-y-[50px]`}
      >
        {whyData.map((d, idx) => (
          <div
            key={idx}
            className={`flex gap-2 w-[90%] ${
              idx % 2 === 1 ? "md:justify-self-end" : "md:justify-self-start"
            }`}
          >
            <div>
              <FaRegCheckCircle
                size={20}
                color="#4C4E1C"
                className="mt-[5px]"
              />
            </div>
            <div className="text-[#323232]">
              <h4 className="text-lg md:text-2xl font-medium">{d.heading} </h4>
              <p className="text-sm md:text-lg mt-1.5">{d.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
