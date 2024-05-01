import React, { useEffect, useState, useRef } from "react";

import point from "./assets/point.gif";
import computaSmash from "./assets/computaSmash.gif";
import question from "./assets/question.gif";
import canada from "./assets/canada.gif";
import love from "./assets/love.gif";
import underConstruction from "./assets/underConstruction.gif";
import dontOverThinkIt from "./assets/dontOverThinkItTxt.png";
import trophy from "./assets/trophy.gif";
import lanPary from "./assets/lanparty.jpg";
import hackathonTxt from "./assets/hackathonTxt.png";
import hug from "./assets/hug.gif";
import computer from "./assets/computer.png";
import pizza from "./assets/pizza.gif";
import spellbook from "./assets/spellbook.png";
import pizzaCut from "./assets/pizzaCut.gif";

import { AnimatePresence, motion } from "framer-motion";
import { DiscordLogo } from "@phosphor-icons/react/dist/ssr";
import { Bird, Heart, Info, Mailbox, Money, ThumbsUp } from "@phosphor-icons/react";

function App() {
  const [showEmoji, setShowEmoji] = useState(true);
  const faqRef = useRef(null);
  const sponsorRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmoji(false);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToFAQ = () => {
    faqRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSponsor = () => {
    sponsorRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center overflow-hidden font-merriweather text-white">
      <div className="relative mx-10 my-20 flex max-w-[500px] items-center">
        <div className="absolute left-[28%] top-[10%] z-[-1] w-[39%] bg-black">
          <motion.img
            animate={{ opacity: [1, 0.5, 0.2, 0.8, 0.8, 0.4, 0, 0, 0, 0, 0, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 1] }}
            transition={{ duration: 1.5 }}
            src={lanPary}
            className="w-full"
          />
        </div>
        <motion.img
          initial={{ x: -100, scale: 0.7, opacity: 0 }}
          animate={{ x: 0, scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.2 }}
          src={dontOverThinkIt}
          className="absolute left-[62%] top-[10%] w-1/2"
        />
        <motion.img
          initial={{ scale: 0.8, opacity: 0, y: -100 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.2 }}
          src={hackathonTxt}
          className="absolute bottom-[-20%] w-full"
        />
        <img src={computer} />
      </div>
      <div className="flex items-center gap-4">
        Visionary Sponsors:
        <img className="w-48" src={spellbook} />
      </div>
      <div className="mx-2 my-8 text-center text-sm italic">
        <div className="text-xs">
          May 17th, 2024 - <b>Core Science Facility</b> @ Memorial University, St. John&apos;s, NL
        </div>
        <div>--</div>
        Build a <b className="font-bold">solution</b> to your <b className="font-bold">problem</b> over a weekend of pizza fueled hacking.
        <div className="mt-4 flex w-full justify-center gap-8 font-sedan text-lg">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-2">
            <Money weight="bold" /> free of charge
          </motion.span>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex items-center gap-2">
            <Bird weight="bold" /> no prompt
          </motion.span>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex items-center gap-2">
            <ThumbsUp weight="bold" /> all vibes
          </motion.span>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <a href="#" onClick={scrollToFAQ} className="flex items-center gap-2 border-2 border-black border-l-white border-t-white bg-green-600 px-2 text-white">
          <Info weight="bold" />
          Information
        </a>
        <a href="mailto:mitch@spellbook.legal" className="flex items-center gap-2 border-2 border-black border-l-white border-t-white bg-orange-500 px-2 text-white">
          <Mailbox weight="bold" />
          Contact
        </a>
        <a href="https://discord.gg/r8mSmykurU" className="flex items-center gap-2 border-2 border-black border-l-white border-t-white bg-blue-800 px-2  text-white">
          <DiscordLogo weight="bold" />
          Discord
        </a>
        <a href="#" onClick={scrollToSponsor} className="flex items-center gap-2 border-2 border-black border-l-white border-t-white bg-red-500 px-2 text-white">
          <Heart weight="bold" />
          Become a sponsor
        </a>
      </div>
      <hr className="my-12 h-0.5 w-full max-w-2xl border border-b-gray-400 border-t-black" />
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <div className="flex flex-col items-center">
          <div className="relative mb-4" onMouseOver={() => setShowEmoji(false)}>
            <AnimatePresence>
              {showEmoji && (
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, exit: { duration: 0.2 } }}
                  className="absolute -left-12 -top-8 text-4xl"
                >
                  <img src={point} className="w-12" />
                </motion.div>
              )}
            </AnimatePresence>
            <a
              href="https://share.hsforms.com/1Xt665hUURr6e9EFAq1H0hAqf935"
              className="border-2 border-black border-l-white border-t-white bg-[#ffffcc] px-4 py-2 text-xl font-bold text-[#223a58]"
            >
              {showEmoji && <div className="absolute -right-1 -top-4 inline-block size-4 animate-ping rounded-lg bg-red-500"></div>}
              REGISTER NOW
            </a>
          </div>
          <div className="mb-4 italic">
            <div className="font-bold">* registration required</div>
            <div>* registration closes May 10th, 2024</div>
          </div>
        </div>
        <div className="relative border-2 border-black border-b-white border-r-white bg-[#ffffcc] p-4 text-[#223a58]">
          <div className="text-lg font-bold">May 17th, 2024</div>
          <div className="mb-2">Core Science Facility @ Memorial University</div>
          <table className="text-center text-lg">
            <tr>
              <td className="pr-4 text-left font-bold">Friday</td>
              <td className="text-right">6:00pm - 11pm</td>
            </tr>
            <tr>
              <td className="pr-4 text-left font-bold">Saturday</td>
              <td className="text-right">9:00am - 11pm</td>
            </tr>
            <tr>
              <td className="pr-4 text-left font-bold">Sundary</td>
              <td className="text-right">9:00am - 11pm</td>
            </tr>
          </table>
          <img src={pizza} className="absolute bottom-[-5%] right-[-30%] scale-x-[-100%]" />
        </div>
      </div>
      <hr className="my-12 h-0.5 w-full max-w-2xl border border-b-gray-400 border-t-black" />
      <div ref={sponsorRef} className="relative">
        <img src={question} className="w-12 absolute left-[-25%] bottom-0" />
        <div className="mb-2 font-mono text-xl">:-)</div>
        <div className="font-sedan text-4xl font-bold">F.A.Q. Wall</div>
      </div>
      <div className="mx-auto my-4 flex max-w-2xl flex-col px-8">
        <div className="my-8 bg-[#050268] px-4 py-1 text-xl tracking-widest">&gt; What kind of Hackathon is DO. IT?</div>
        <div>
          DO. IT is a groundbreaking event brought to life by Sister and Brother duo Madison Emshey and Mitchell Hynes. It&apos;s not just an event; it&apos;s a movement towards
          simplification, a rebellion against the over- complication of technology, and a call to arms for those who dare to build, tinker, and create.
        </div>
        <div>
          <div className="my-4 bg-gradient-to-r from-[#ffffcc] to-transparent px-2  font-sedan text-black">DO. IT is different</div>
          DO. IT is a free-form hackathon, meaning there is no prompt. Participants are encouraged to build whatever they want, however they want, over the course of the weekend.
          The event is free of charge and open to all skill levels, from beginners to seasoned developers. The only requirement is a desire to build something awesome.
          <div className="my-4 bg-gradient-to-r from-[#ffffcc] to-transparent px-2  font-sedan text-black">Practicality trumps complexity</div>
          At DO. IT, we believe that the best solutions are often the simplest. We encourage participants to focus on practicality and usability, rather than complexity and to do
          the bare minimum to get the job done. So don&apos;t overthink it - just DO. IT!
        </div>
        <div className="my-8 bg-[#050268] px-4 py-1 text-xl tracking-widest">&gt; How will prizes be judged?</div>
        <div className="relative">
          Prizes will be awarded based on the following categories:
          <img src={trophy} className="absolute left-72 top-16 w-12" />
          <ul className="my-4 ml-8 list-disc space-y-2 pl-5">
            <li>Best Overall</li>
            <li>Best Design</li>
            <li>Best Use of Technology</li>
            <li>Best Use of Data</li>
          </ul>
          Winners will be selected by a panel of judges, with the Best Overall prize being awarded to the team that demonstrates the most creativity, innovation, and technical
          skill.
          <div className="my-4 bg-gradient-to-r from-[#ffffcc] to-transparent px-2  font-sedan text-black">Demos vs. Pitches</div>
          <div>
            At DO. IT, we believe that the best way to showcase your project is through a live demo. Pitches are great, but we want to see your project in action. So get ready to
            show off your hard work and impress the judges with a live demo of your project!
          </div>
        </div>
        <div className="relative">
          <div className="my-8 bg-[#050268] px-4 py-1 text-xl tracking-widest">&gt; What if I can&apos;t code?</div>
          <div className="mr-12 flex gap-2">
            Well, you&apos;re in luck! DO. IT is not just for coders - it&apos;s for anyone who loves to build, create, and innovate. If you can&apos;t code, that&apos;s okay - you
            can:
            <img src={computaSmash} className="absolute right-[-10%] size-24" />
          </div>
          <div className="my-4 bg-gradient-to-r from-[#ffffcc] to-transparent px-2  font-sedan text-black">Bring a problem instead</div>
          <div>
            DO. IT is open to everyone, regardless of skill level. If you can&apos;t code, that&apos;s okay - bring a problem instead. You can still participate in the event by
            sharing your problem with the other participants and helping them come up with a solution. Who knows - you might just inspire the next big idea!
          </div>
          <div className="my-4 bg-gradient-to-r from-[#ffffcc] to-transparent px-2  font-sedan text-black">Participate in CLC - Canada Learning Code</div>
          On Saturday morning, CLC will be hosting a workshop for beginners to learn the basics of coding. If you&apos;ve never coded before, this is a great opportunity to get
          started and learn some new skills. Our mentors will be on hand to help you out and answer any questions you may have.
        </div>
        <div className="my-8 bg-[#050268] px-4 py-1 text-xl tracking-widest">&gt; What if I don&apos;t have a team?</div>
        <div>
          No problem! We&apos;ll have a team formation session at the beginning of the event, where you can meet other participants and form a team. You can also join our Discord
          server before the event to start networking and find potential teammates.
        </div>
        <div className="flex w-full flex-col items-center">
          <img src={hug} className="mt-8 w-32" />
          <a href="https://discord.gg/r8mSmykurU" className="my-8 flex items-center gap-2 border-2 border-black border-l-white border-t-white bg-blue-800 px-2 text-lg text-white">
            <DiscordLogo weight="bold" />
            Join us on Discord
          </a>
        </div>
      </div>
      <hr className="my-12 h-0.5 w-full max-w-2xl border border-b-gray-400 border-t-black" />
      <div ref={sponsorRef} className="relative">
        <img src={love} className="w-12 absolute left-[-25%] bottom-0" />
        <div className="mb-2 font-mono text-xl">&lt;3</div>
        <div className="font-sedan text-4xl font-bold">Sponsor DO. IT</div>
      </div>
      <div className="mx-auto my-4 flex max-w-2xl flex-col px-8">
        <div className="my-8 bg-[#050268] px-4 py-1 text-xl tracking-widest">&gt; Why should you DO. IT?</div>
        <div>
          Joining DO. IT as a sponsor means more than just logo placement. It's about becoming part of a movement that values action over words. Your support empowers a diverse
          group of problem-solvers, ready to dive into the tech scene with fresh ideas.
        </div>
        <div>
          <div className="my-4 bg-gradient-to-r from-[#ffffcc] to-transparent px-2  font-sedan text-black">Your Benefits Include</div>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <b>Enriching the Talent Pipeline:</b> Connect with passionate individuals across various disciplines, ready to bring new perspectives to your team.
            </li>
            <li>
              <b>Engage the Community:</b> Show your commitment to fostering innovation and support the growth of Newfoundland and Labrador&apos;s tech ecosystem.
            </li>
            <li>
              <b>Much, much more:</b> Download our Sponsor package to learn more about the benefits of sponsoring DO. IT and how you can get involved.
            </li>
          </ul>
        </div>
        <div className="my-4 bg-gradient-to-r from-[#ffffcc] to-transparent px-2  font-sedan text-black">Download here:</div>
        <div className="flex w-full flex-col items-center">
          <a
            href="/dontoverthinkit/JoinTheRebellion.pdf"
            className="my-8 flex items-center gap-2 border-2 border-black border-l-white border-t-white bg-red-700 px-2 text-lg text-white"
          >
            <Heart weight="bold" />
            Download our Sponsor package
          </a>
        </div>
        <hr className="my-12 h-0.5 w-full max-w-2xl border border-b-gray-400 border-t-black" />
        <img src={pizzaCut} className="w-1/2 mx-auto" />
        <div className="flex gap-2 mt-32">
          <img src={underConstruction} className="h-12" />
          <img src={canada} className="h-12" />
        </div>
      </div>
    </div>
  );
}

export default App;
