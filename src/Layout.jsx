import React from "react";
import { Outlet } from "react-router-dom";
import { DiscordLogo, Heart, Info, Mailbox } from "@phosphor-icons/react";
import dontOverThinkIt from "./assets/dontOverThinkItTxt.png";

const navBtnBase = "flex items-center gap-1 border-2 border-black px-3 py-1 transition-colors duration-200";

export default function Layout() {
  return (
    <div className="relative mx-auto flex max-w-screen-xl flex-col items-center font-sans text-black leading-relaxed">
      {/* Header with full-width CSS stripes and DO. IT logo */}
      <header className="absolute left-0 top-8 flex w-full items-center">
        <div className="h-16 flex-grow mr-8 md:mr-16 bg-[repeating-linear-gradient(to_bottom,_#000_0_4px,_transparent_4px_8px)]" />
        <img src={dontOverThinkIt} alt="DO. IT logo" className="w-32 md:w-48 mr-6 " />
      </header>

      <Outlet />

      {/* FOOTER */}
      <footer className="w-full bg-black text-white text-xs md:text-sm py-8 px-4 text-center">
        <a href="https://mitchellhynes.com" className="mb-2 underline hover:text-gray-300">
          Made by Mitchell Hynes.
        </a>
        <p className="mb-2">
          The contents of this blog are MIT Licensed unless another License is specified for an artefact, and the code is available on{" "}
          <a href="https://github.com/ecumene/dontoverthinkit" className="underline hover:text-gray-300">
            GitHub
          </a>
          .
        </p>
        <p>You have my consent to train a machine learning model on this data.</p>
      </footer>
    </div>
  );
}
