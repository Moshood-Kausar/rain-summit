"use client";

import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { tableData } from "../components/Schedule";

export default function Schedule() {
  const [updateShown, setUpdateShown] = useState(true);
  return (
    <main
      className={`${updateShown ? "pt-[120px] md:pt-[56px]" : "pt-0 md:pt-0"}`}
    >
      <Navbar updateShown={updateShown} setUpdateShown={setUpdateShown} />

      <section
        className="flex flex-col items-center gap-14 max-w-7xl mx-auto p-5 my-20 lg:my-28"
        id="speakers"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-dark mt-2.5 text-lg md:text-3xl font-semibold">
            Our Event Full Schedule
          </h2>
        </div>

        {/* <div className="w-auto">
          <table className="max-w-7xl w-auto clip lg:w-[1000px] border rounded-xl border-gray-300 overflow-x-scroll">
            <thead>
              <tr>
                <th className="w-5/12  border border-gray-300 p-2">Event</th>
                <th className="w-3/12 border border-gray-300 p-2">Anchor</th>
                <th className="w-2/12  border border-gray-300 p-2">Time</th>
                <th className="w-2/12 border border-gray-300 p-2">Duration</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr key={data.id}>
                  <td className="text-dark border border-gray-300 text-center px-2 py-4">
                    {data.event}
                     <p className="text-gray-500 text-center text-sm lg:hidden">
                      {data.subtext}
                    </p>
                  </td>
                  <td className="text-gray-500 border border-gray-300 text-center px-2 py-4">
                    {data.subtext}
                  </td>
                  <td className="text-gray-500 border border-gray-300 text-center ">
                    {data.time}
                  </td>
                  <td className="text-gray-500 border border-gray-300 text-center">
                    {data.duration}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}

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
              {tableData.map((data) => (
                <tr key={data.id}>
                  <td className="text-dark border border-gray-300 p-2">
                    <h2 className="font-semibold">{data.event}</h2>{" "}
                    <p className="font-normal text-sm text-gray-400">
                      {data.subtext}
                    </p>
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
      </section>

      <Footer />
    </main>
  );
}
