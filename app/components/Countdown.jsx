'use client'
import { useState, useEffect } from "react";
import { poppins } from "@/app/fonts";

// The target date in a string format, e.g., '2024-12-31T00:00:00'

const Countdown = ({ targetDate }) => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [isCountdownVisible, setIsCountdownVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setIsCountdownVisible(false);
      } else {
        setIsCountdownVisible(true)
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setDays(String(days).padStart(2, "0"));
        setHours(String(hours).padStart(2, "0"));
        setMinutes(String(minutes).padStart(2, "0"));
        setSeconds(String(seconds).padStart(2, "0"));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!isCountdownVisible) {
    return null;
  }

  return (
    <div
      className={`${poppins.className} flex justify-between shrink-0 w-fit gap-4`}
    >
      <div className="flex items-center gap-1">
        <h4 className="flex items-center justify-center text-xs md:text-xl mb-0.5">{days}</h4>
        <p className="text-xs md:text-sm text-center">d</p>
      </div>
      
      <div className="flex items-center gap-1">
        <h4 className="flex items-center justify-center text-xs md:text-xl mb-0.5">{hours}</h4>
        <p className="text-xs md:text-sm text-center">h</p>
      </div>
      
      <div className="flex items-center gap-1">
        <h4 className="flex items-center justify-center text-xs md:text-xl mb-0.5">{minutes}</h4>
        <p className="text-xs md:text-sm text-center">m</p>
      </div>
      
      <div className="flex items-center gap-1">
        <h4 className="flex items-center justify-center text-xs md:text-xl mb-0.5">{seconds}</h4>
        <p className="text-xs md:text-sm text-center">s.</p>
      </div>
    </div>
  );
};

export default Countdown;
