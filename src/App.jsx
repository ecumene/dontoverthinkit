import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Bird, DiscordLogo, Heart, Info, Mailbox, Money, ThumbsUp, Trophy } from "@phosphor-icons/react";

// Assets – logos & static imagery only (no GIFs)
import dontOverThinkIt from "./assets/dontOverThinkItTxt.png";
import spellbook from "./assets/spellbook.svg";
import trophi from "./assets/trophi.png";
import technl from "./assets/technl.png";
import colab from "./assets/colab.png";

// Collage photos – static PNGs pulled from sponsorship package
import collage1 from "./assets/collage/collage1.png";
import collage2 from "./assets/collage/collage2.png";
import collage3 from "./assets/collage/collage3.png";
import collage4 from "./assets/collage/collage4.png";
import collage5 from "./assets/collage/collage5.png";

// Tailwind helper – button base
const navBtnBase = "flex items-center gap-1 border-2 border-black px-3 py-1 transition-colors duration-200";

/** ------------------------------------------------------------------
 *  Collage — simple responsive flexbox (column → row)
 *  ------------------------------------------------------------------*/
function Collage() {
  const photos = [collage1, collage2, collage3, collage4, collage5];

  return (
    <div className="flex overflow-x-auto pb-4 justify-between">
      {photos.map((src, idx) => (
        <motion.img
          key={idx}
          src={src}
          alt={`Hackathon collage ${idx + 1}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          className="h-72 w-[220px] flex-shrink-0 border-4 border-black bg-white object-cover shadow-lg filter grayscale transition duration-300 hover:grayscale-0 hover:scale-105"
        />
      ))}
    </div>
  );
}

/** ------------------------------------------------------------------
 *  App – primary page layout
 *  ------------------------------------------------------------------*/
export default function App() {
  const faqRef = useRef(null);
  const sponsorRef = useRef(null);

  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="relative mx-auto flex max-w-screen-xl flex-col items-center font-sans text-black leading-relaxed overflow-hidden">
      {/* ----------------------------------------------------------------
          HERO
      ----------------------------------------------------------------*/}
      {/* Header with full-width CSS stripes and DO. IT logo */}
      <header className="absolute left-0 top-8 flex w-full items-center">
        <div className="h-16 flex-grow mr-8 md:mr-16 bg-[repeating-linear-gradient(to_bottom,_#000_0_4px,_transparent_4px_8px)]" />
        <img src={dontOverThinkIt} alt="DO. IT logo" className="w-32 md:w-48 mr-6 " />
      </header>
      <section className="relative flex w-full flex-col items-center pt-40 md:pt-48 pb-12">
        <p className="mt-4 text-lg italic text-gray-700">(don't&nbsp;over&nbsp;think&nbsp;it)</p>
        <h1 className="mt-8 max-w-2xl text-4xl font-black md:text-5xl lg:text-6xl">Hardware&nbsp;Hackathon</h1>
        <p className="mt-6 text-sm md:text-base flex flex-wrap justify-center">
          <span className="mr-1">June 20&nbsp;–&nbsp;22, 2025</span>
          <span className="mx-1">·</span>
          <span className="mr-1">Core Science Facility, Memorial&nbsp;University</span>
          <span className="mx-1">·</span>
          <span>St.&nbsp;John's, NL</span>
        </p>

        <div className="mt-16 flex flex-wrap justify-center gap-12">
          <img src={spellbook} alt="Spellbook logo" className="h-8 filter grayscale" />
          <img src={colab} alt="Co-Lab logo" className="h-10 filter grayscale" />
          <img src={trophi} alt="Trophi logo" className="h-10 filter grayscale" />
          <img src={technl} alt="TechNL logo" className="h-10 filter grayscale" />
        </div>

        <p className="mt-16 max-w-2xl text-lg border-l-4 border-black pl-4">
          Build a <strong>solution</strong> to your <strong>problem</strong> over a weekend of collaboration and hands-on creation. DO. IT is <strong>free of charge</strong>, has{" "}
          <strong>no prompt</strong>, and is open to all disciplines &amp; experience levels.
        </p>

        <motion.a
          href="https://share.hsforms.com/1xN45tod3Qx2JruCntnR4gwqf935"
          whileHover={{ scale: 1.05 }}
          className="mt-12 inline-block rounded-none border-2 border-black bg-yellow-300 px-8 py-4 text-xl font-bold uppercase tracking-wider hover:bg-yellow-400"
        >
          Register Now
        </motion.a>

        {/* Quick-nav CTA buttons */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 text-base">
          <button onClick={() => scrollTo(faqRef)} className={`${navBtnBase} bg-green-100 hover:bg-green-500`}>
            <Info weight="bold" size={18} /> Information
          </button>
          <a href="mailto:mitch@spellbook.legal" className={`${navBtnBase} bg-orange-100 hover:bg-orange-400`}>
            <Mailbox weight="bold" size={18} /> Contact
          </a>
          <a href="https://discord.gg/r8mSmykurU" className={`${navBtnBase} bg-blue-100 hover:bg-blue-600 hover:text-white`}>
            <DiscordLogo weight="bold" size={18} /> Discord
          </a>
          <button onClick={() => scrollTo(sponsorRef)} className={`${navBtnBase} bg-red-100 hover:bg-red-500 hover:text-white`}>
            <Heart weight="bold" size={18} /> Sponsor
          </button>
        </div>
        {/* (logos moved to top) */}
        {/* Collage container */}
        <div className="mt-20 w-full overflow-hidden">
          <Collage />
        </div>
      </section>

      <section className="mt-24 w-full max-w-2xl px-4 md:px-0">
        <div className="relative mb-12 flex items-center justify-center">
          <div className="absolute left-0 right-0 h-[2px] bg-[repeating-linear-gradient(to_right,_#000_0_4px,_transparent_4px_8px)]"></div>
          <div className="absolute w-20 h-20 rounded-full border-2 border-black bg-white flex items-center justify-center z-10">
            <span className="font-black text-lg tracking-widest">DO IT</span>
          </div>
        </div>

        <h2 className="mb-8 text-3xl font-bold text-center">Event Schedule</h2>

        <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
          <div className="border-b border-black p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold tracking-tight">Day 1: Opening Ceremony</h3>
              <span className="text-xs border border-black px-2 py-1 bg-white font-mono">June 20th</span>
            </div>
            <p className="mb-6 text-sm text-gray-700">The Breezeway, Memorial University</p>
            <div className="border-t border-gray-300 pt-4">
              <div className="flex justify-between font-mono py-2 border-b border-dashed border-gray-200 hover:bg-gray-50">
                <span className="font-medium">Check-in & Networking</span>
                <span className="text-right tabular-nums">6:00 pm — 7:00 pm</span>
              </div>
              <div className="flex justify-between font-mono py-2 border-b border-dashed border-gray-200 hover:bg-gray-50">
                <span className="font-medium">Opening Remarks</span>
                <span className="text-right tabular-nums">7:00 pm — 7:30 pm</span>
              </div>
              <div className="flex justify-between font-mono py-2 hover:bg-gray-50">
                <span className="font-medium">Team Formation</span>
                <span className="text-right tabular-nums">7:30 pm — 11:00 pm</span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold tracking-tight">Days 2-3: Hacking Weekend</h3>
              <span className="text-xs border border-black px-2 py-1 bg-white font-mono">June 21–22</span>
            </div>
            <p className="mb-6 text-sm text-gray-700">Core Science Facility, Memorial University</p>

            <div className="border-t border-gray-300 pt-4">
              <div className="flex mb-6">
                <div className="w-14 font-bold text-sm uppercase tracking-wider pt-2">Sat</div>
                <div className="flex-1 border-l border-gray-200 pl-4 space-y-0">
                  <div className="flex justify-between font-mono py-2 border-b border-dashed border-gray-200 hover:bg-gray-50">
                    <span className="font-medium">Doors Open</span>
                    <span className="text-right tabular-nums">9:00 am</span>
                  </div>
                  <div className="flex justify-between font-mono py-2 hover:bg-gray-50">
                    <span className="font-medium">Hacking Session</span>
                    <span className="text-right tabular-nums">9:30 am — 5:00 pm</span>
                  </div>
                </div>
              </div>

              <div className="flex pt-2 border-t border-gray-200">
                <div className="w-14 font-bold text-sm uppercase tracking-wider pt-2">Sun</div>
                <div className="flex-1 border-l border-gray-200 pl-4 space-y-0">
                  <div className="flex justify-between font-mono py-2 border-b border-dashed border-gray-200 hover:bg-gray-50">
                    <span className="font-medium">Doors Open</span>
                    <span className="text-right tabular-nums">9:00 am</span>
                  </div>
                  <div className="flex justify-between font-mono py-2 border-b border-dashed border-gray-200 hover:bg-gray-50">
                    <span className="font-medium">Hacking Deadline</span>
                    <span className="text-right tabular-nums">5:00 pm</span>
                  </div>
                  <div className="flex justify-between font-mono py-2 hover:bg-gray-50">
                    <span className="font-medium">Project Demos & Awards</span>
                    <span className="text-right tabular-nums">6:00 pm — 11:00 pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------
          F.A.Q. SECTION
      ----------------------------------------------------------------*/}
      <section ref={faqRef} className="mt-24 w-full max-w-2xl px-4 md:px-0">
        <div className="relative mb-12 flex items-center justify-center">
          <div className="absolute left-0 right-0 h-[2px] bg-[repeating-linear-gradient(to_right,_#000_0_4px,_transparent_4px_8px)]"></div>
          <div className="absolute w-20 h-20 rounded-full border-2 border-black bg-white flex items-center justify-center z-10">
            <Info weight="bold" size={32} className="text-green-500" />
          </div>
        </div>
        <h2 className="text-center text-sm font-mono uppercase tracking-wider text-green-500 mb-8">Got questions?</h2>
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-black">F.A.Q. Wall</h2>

        {/* Each FAQ item */}
        <article className="mb-8 rounded-none border-2 border-black bg-white p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900">What kind of Hackathon is DO. IT?</h3>
          <p className="mb-4 text-sm text-gray-700">
            DO. IT is a groundbreaking event brought to life by sister-and-brother duo Madison Emshey and Mitchell Hynes. It's not just an event; it's a movement towards
            simplification, a rebellion against the over-complication of technology, and a call to arms for those who dare to build, tinker, and create.
          </p>
          <p className="mb-4 text-sm text-gray-700">
            <span className="block font-medium italic text-gray-800">DO.&nbsp;IT is different</span>
            It's a free-form hackathon with no preset prompt. Participants are encouraged to build whatever they want, however they want, over the course of the weekend.
          </p>
          <p className="text-sm text-gray-700">
            <span className="block font-medium italic text-gray-800">Practicality trumps complexity</span>
            At DO.&nbsp;IT, we believe the best solutions are often the simplest. Don't overthink it — just DO.&nbsp;IT!
          </p>
        </article>

        {/**TBD -- This is stale from last year. */}
        {/* <article className="mb-8 rounded-none border-2 border-black bg-white p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900">How will prizes be judged?</h3>
          <p className="mb-4 text-sm text-gray-700">Prizes will be awarded in the following categories:</p>
          <ul className="mb-4 ml-5 list-disc space-y-1 text-sm text-gray-700">
            <li>Best Overall</li>
            <li>Best Design</li>
            <li>Best Use of Technology</li>
            <li>Best Use of Data</li>
          </ul>
          <p className="mb-4 text-sm text-gray-700">
            Winners will be selected by a panel of judges, with the Best Overall prize awarded to the team that demonstrates the most creativity, innovation, and technical skill.
          </p>
          <p className="mb-4 text-sm text-gray-700">
            <span className="block font-medium italic text-gray-800">Demos vs. Pitches</span>
            We believe the best way to showcase your project is through a live demo. Get ready to show off your hard work!
          </p>
          <a
            href="/dontoverthinkit/JudgingCriteria.pdf"
            className="inline-flex items-center gap-2 rounded-none border-2 border-black bg-green-100 px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-green-500 hover:text-black"
          >
            <Trophy weight="bold" size={18} /> See our judging criteria
          </a>
        </article> */}

        <article className="mb-8 rounded-none border-2 border-black bg-white p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900">What if I can't code?</h3>
          <p className="mb-4 text-sm text-gray-700">DO. IT is for anyone who loves to build, create, and innovate. If you're not a coder, bring a problem instead!</p>
          <p className="text-sm text-gray-700">
            <span className="block font-medium text-gray-800">Participate in CLC – Canada Learning Code</span>
            Saturday morning, CLC will host a workshop for beginners to learn the basics of coding.
          </p>
        </article>

        <article className="rounded-none border-2 border-black bg-white p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900">What if I don't have a team?</h3>
          <p className="mb-4 text-sm text-gray-700">We'll have a team-formation session at the beginning of the event. Join our Discord beforehand to meet potential teammates.</p>
          <a
            href="https://discord.gg/r8mSmykurU"
            className="inline-flex items-center gap-2 rounded-none border-2 border-black bg-blue-100 px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-blue-600 hover:text-white"
          >
            <DiscordLogo weight="bold" size={18} /> Join us on Discord
          </a>
        </article>
      </section>

      {/* ----------------------------------------------------------------
          SPONSOR SECTION
      ----------------------------------------------------------------*/}
      <section ref={sponsorRef} className="mt-24 w-full max-w-2xl px-4 md:px-0 pb-24">
        <div className="relative mb-12 flex items-center justify-center">
          <div className="absolute left-0 right-0 h-[2px] bg-[repeating-linear-gradient(to_right,_#000_0_4px,_transparent_4px_8px)]"></div>
          <div className="absolute w-20 h-20 rounded-full border-2 border-black bg-white flex items-center justify-center z-10">
            <Heart weight="bold" size={32} className="text-red-500" />
          </div>
        </div>
        <h2 className="text-center text-sm font-mono uppercase tracking-wider text-red-600 mb-4">Become a Partner</h2>
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-black">Sponsor DO. IT</h2>
        <div className="rounded-none border-2 border-black bg-white p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="mb-6 text-sm text-gray-700">
            Joining DO. IT as a sponsor means more than just logo placement. Your support empowers a diverse group of problem-solvers, ready to dive into the tech scene with fresh
            ideas.
          </p>
          <p className="mb-4 text-sm text-gray-700">
            <span className="block text-lg font-semibold text-gray-900">Your Benefits Include:</span>
          </p>
          <ul className="mb-8 ml-5 list-disc space-y-2 text-sm text-gray-700">
            <li>
              <strong>Enriching the Talent Pipeline:</strong> Connect with passionate individuals across various disciplines.
            </li>
            <li>
              <strong>Engage the Community:</strong> Show your commitment to fostering innovation in NL's tech ecosystem.
            </li>
            <li>
              <strong>Much, much more:</strong> Download our sponsor package for full details.
            </li>
          </ul>
          <motion.a
            href="/dontoverthinkit/JoinTheRebellion.pdf"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 rounded-none border-2 border-black bg-red-100 px-6 py-3 font-bold tracking-wider text-black transition-colors hover:bg-red-500 hover:text-white"
          >
            <Heart weight="bold" size={20} /> Download Sponsor Package
          </motion.a>
        </div>
      </section>
    </div>
  );
}
