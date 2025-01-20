import { Button } from "./shared/Button";

export const tableData = [
  {
    id: 1,
    time: "08:00 - 08:30",
    duration: "30 mins",
    event: "Arrival, Red Carpet & Accreditation",
  },
  {
    id: 2,
    time: "08:30 - 09:00",
    duration: "30 mins",
    event: "Warm Up Interactions & Networking",
    subtext: "MC",
  },
  {
    id: 3,
    time: "09:00 - 09:05",
    duration: "5 mins",
    event: "House Keeping Rules",
    subtext: "MC",
  },
  {
    id: 4,
    time: "09:05 - 09:10",
    duration: "5 mins",
    event: "National and RAIN Anthem",
  },
  {
    id: 5,
    time: "09:10 - 09:20",
    duration: "10 mins",
    event: "Recognition of Dignitaries",
    subtext: "MC",
  },
  {
    id: 6,
    time: "09:20 - 09:30",
    duration: "10 mins",
    event: "Video Interlude",
    subtext: "RAIN and Sponsors",
  },
  {
    id: 7,
    time: "09:30 - 09:45",
    duration: "15 mins",
    event: "Welcome Speech by the Convener",
    subtext: "Dr. Olusola Ayoola, CEO & Founder, RAIN",
  },
  {
    id: 8,
    time: "09:45 - 10:00",
    duration: "15 mins",
    event: "Summit Opening Speech by Chief Host",
    subtext: "H.E Engr Seyi Makinde, Executive Governor Oyo State",
  },
  {
    id: 9,
    time: "10:00 - 10:10",
    duration: "10 mins",
    event: "Citation of the Keynote Speaker",
  },
  {
    id: 10,
    time: "10:10 - 10:50",
    duration: "40 mins",
    event: "Keynote Address",
    subtext:
      "Dr Bosun Tijani, H.M Communication, Innovation and Digital Economy",
  },
  {
    id: 11,
    time: "10:50 - 11:10",
    duration: "20 mins",
    event: "Goodwill Messages from Guests of Honour",
    subtext: "Hon. Remi Oseni, Dr Adesola Adedutan",
  },
  {
    id: 12,
    time: "11:10 - 11:25",
    duration: "15 mins",
    event: "Presentation of Award of Excellence",
    subtext: "H.E Engr Seyi Makinde, Executive Governor Oyo State",
  },
  {
    id: 13,
    time: "11:25 - 12:00",
    duration: "35 mins",
    event: "Technology Speaker Session",
    subtext: "Prof. Abiodun M. Aibinu",
  },
  {
    id: 14,
    time: "12:00 - 12:10",
    duration: "10 mins",
    event: "Introduction of Hackathon Judges",
    subtext: "Dr Bunmi Ajala et al.",
  },
  {
    id: 15,
    time: "12:10 - 12:50",
    duration: "40 mins",
    event: "Hackathon Presentations (Teams 1-5)",
  },
  {
    id: 16,
    time: "12:50 - 13:40",
    duration: "50 mins",
    event: "Panel Discussion on AIML/Software",
    subtext: "Topic: SWOT Analysis of AI Software Development in Nigeria",
  },
  {
    id: 17,
    time: "13:40 - 13:50",
    duration: "10 mins",
    event: "Video Interlude",
    subtext: "RAIN and Sponsors",
  },
  {
    id: 18,
    time: "13:50 - 14:10",
    duration: "20 mins",
    event: "Lunch & Networking Break",
  },
  {
    id: 19,
    time: "14:10 - 14:45",
    duration: "35 mins",
    event: "Business Speaker Session",
    subtext: "Pharm. Olu Akanmu",
  },
  {
    id: 20,
    time: "14:45 - 15:25",
    duration: "40 mins",
    event: "Hackathon Presentations (Teams 6-10)",
  },
  {
    id: 21,
    time: "15:25 - 16:15",
    duration: "50 mins",
    event: "Panel Discussion on Robotics/Hardware",
    subtext: "Topic: SWOT Analysis of Robotics Hardware Development in Nigeria",
  },
  {
    id: 22,
    time: "16:15 - 16:35",
    duration: "20 mins",
    event: "Enlightening Talks",
    subtext: "Youths Doing Amazing Things in AI and Robotics",
  },
  { id: 23, time: "16:35 - 16:40", duration: "5 mins", event: "Kahoot Game" },
  {
    id: 24,
    time: "16:40 - 16:45",
    duration: "5 mins",
    event: "Announcement of the Winners",
  },
  {
    id: 25,
    time: "16:45 - 16:55",
    duration: "10 mins",
    event: "Presentation of Awards",
  },
  {
    id: 26,
    time: "16:55 - 17:00",
    duration: "5 mins",
    event: "Vote of Thanks",
    subtext: "Mr Nurudeen Adesokan",
  },
  {
    id: 27,
    time: "17:00",
    duration: "End",
    event: "Photo-shoot Sessions and End of Event",
  },
];

export default function Schedule() {
  return (
    <section className="flex flex-col items-center gap-10 py-11">
      <h3 className="text-primary text-xs md:text-2xl font-medium">
        Event Schedule
      </h3>

      <div className="">
        <table className="max-w-6xl lg:w-[800px] border border-gray-300 rounded-xl">
          <thead>
            <tr>
              <th className="w-4/6 text-left border border-gray-300 p-2">
                Event
              </th>
              <th className="w-1/6 text-left border border-gray-300 p-2">
                Time
              </th>
              <th className="w-1/6 text-left border border-gray-300 p-2">
                Duration
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.slice(0, 10).map((data) => (
              <tr key={data.id}>
                <td className="text-dark border border-gray-300 p-2">
                  <h2 className="font-semibold">{data.event}</h2> <p className="font-normal text-sm text-gray-400">{data.subtext}</p>
                </td>
                <td className="text-gray-500 border border-gray-300 p-2">
                  {data.time}
                </td>
                <td className="text-gray-500 border border-gray-300 p-2">
                  {data.duration}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Button variant="primary" href="/schedule" className="!px-8 lg:mt-5">
        Full Event Schedule
      </Button>
    </section>
  );
}
