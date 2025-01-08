"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./shared/Button";
import { CloseMenu, Menu } from "@/app/assets/svg";
import logo from "@/app/assets/rain_logo2.png";
import mobileLogo from "@/app/assets/rain-logo-sm.png";
import Countdown from '@/app/components/Countdown';

export const Navbar = () => {
  const [isNavOpened, setIsNavOpened] = useState(false);
  const [updateShown, setUpdateShown] = useState(true);

  const navLinks = [
    { label: "About", href: "/#about", type: "link", variant: "text" },
    { label: "Speakers", href: "/#speakers", type: "link", variant: "text" },
    { label: "Tickets", href: "/#tickets", type: "link", variant: "text" },
    { label: "Get Tickets", href: "https://eventprime.co/e/rain-summit-1-0", type: "button", variant: "primary" },
    { label: "Top Ten", href: "https://hackathon.rainigeria.com/#top-ten", type: "button", variant: "outlined" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition duration-200 bg-white md:bg-transparent`}
    >
     <div style={updateShown? {display: 'flex'} : {display: 'none'}} className="relative flex-col md:flex-row justify-center items-center text-center px-4 md:px-10 lg:px-20 py-4 hero-stat text-white min-h-10 font-medium gap-2">
        The wait is almost over! Tick tock: <Countdown targetDate={'2025-01-25T00:00:00'} /> <Link href={'https://eventprime.co/e/rain-summit-1-0'} target="_blank" className="underline underline-offset-4">
          Get Your Ticket Now.
        </Link> 
        <button onClick={()=>setUpdateShown(false)} className="scale-125 hover:scale-110 absolute right-4 text-2xl font-medium leading-none transition duration-200">&times;</button>
      </div> 
      <nav
      className={`relative flex justify-between items-center h-16 md:h-[88px] transition duration-200 w-full max-w-screen-2xl px-4 md:px-10 lg:px-20 mx-auto`}
      >
        <Link href={"/"} className="flex items-center gap-1 z-50 w-fit md:w-1/5">
          <Image
            src={logo}
            width={1944}
            height={728}
            alt="Rain Logo"
            className="h-10 w-auto hidden md:block"
          />

          <Image
            src={mobileLogo}
            alt="RAIN-IN logo"
            width={814}
            height={728}
            className="h-10 w-auto md:hidden"
          />
        </Link>
        <ul
          className={`${
            isNavOpened ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition duration-200 bg-white md:bg-transparent text-[#171412] flex flex-col md:flex-row justify-center items-center gap-8 sm:gap-14 md:gap-5 fixed md:relative top-0 left-0 w-full sm:w-4/5 lg:w-[70%] h-screen md:h-fit`}
        >

          {/* Center the first 3 links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-12 md:gap-10 lg:gap-20 bg-white md:shadow md:px-8 lg:px-14 h-fit min-h-10 rounded-full">
          {navLinks.slice(0, 3).map((link, idx) =>
            link.type === "button" ? (
              <Button
                variant={link.variant}
                className="h-fit min-h-10 text-[28px] md:text-base"
                key={idx}
              >
                {link.label}
              </Button>
            ) : link.type === "dropdown" ? (
              <Button
                variant={"text"}
                className="h-fit min-h-fit !p-0"
                key={idx}
                ariaLabel="USA Flag dropdown"
              >
                Hi
              </Button>
            ) : (
              <li
                key={idx}
                onClick={() => setIsNavOpened(!isNavOpened)}
                className={`text-[#171412] text-2xl md:text-sm hover:underline underline-offset-4 transition duration-200 whitespace-nowrap`}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            )
          )}
          </div>
          {/* Render the last 2 buttons at the end */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-end w-full md:w-[45%] lg:w-full gap-6 sm:gap-12 md:gap-5">
            {navLinks.slice(3).map((link, idx) => (
              <Button
                variant={link.variant}
                className="h-fit min-h-10 text-2xl md:text-base whitespace-nowrap"
                key={idx}
                href={link.href}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </ul>
        <button
          onClick={() => setIsNavOpened(!isNavOpened)}
          className="flex md:hidden hover:scale-90 active:scale-90 transition duration-200 p-2.5 z-50"
        >
          {isNavOpened ? <CloseMenu /> : <Menu />}
        </button>
      </nav>
    </header>
  );
};
