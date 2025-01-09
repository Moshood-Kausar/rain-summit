'use client'
import { useState } from "react";
import { Navbar } from "./Navbar";
import Hero from "./Hero";

export default function NavHero () {
    const [updateShown, setUpdateShown] = useState(true);
    return (
        <>
            <Navbar updateShown={updateShown} setUpdateShown={setUpdateShown} />
            <Hero updateShown={updateShown} />
        </>
    )
}