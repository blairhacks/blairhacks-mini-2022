import Head from 'next/head';
import Image from 'next/image';

import { Mail, Instagram, Twitter, GitHub, Tool, Users, Smile } from 'react-feather';

export default function Home() {
  return <>
    <Head>
      <title>BlairHacks Mini &#39;22 – BlairHacks</title>
      <meta name="description" content="An IRL day of coding and making for high-schoolers in MoCo. Join us on December 10, 2022 10AM-6PM @ Rockville Memorial Library" />
    </Head>

    {/* <header className="h-screen relative"> */}
    <header className="h-screen relative bg-[url('/assets/blairhacks_4.jpg')] bg-cover bg-center">
      {/* <Image
        src="/assets/blairhacks_4.jpg"
        alt="Image of BlairHacks_4 participants"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      /> */}

      <div className="w-full h-full relative bg-black/75">
        <div className="p-8 h-full container max-w-5xl flex flex-col justify-center">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-1 sm:gap-6">
            <h1 className="text-5xl md:text-6xl font-extrabold">
              BlairHacks Mini &#39;22
            </h1>
            <a href="https://poolesvillehacks.tech" target="_blank" rel="noopener noreferrer">
              <div className="px-2 pt-1.5 pb-0.5 rounded-lg bg-neutral-500/30">
                <p className="text-sm whitespace-nowrap -mb-1.5">
                  in collaboration with
                </p>
                <p className="text-md md:text-xl font-medium">
                  poolesville_hacks
                </p>
              </div>
            </a>
          </div>
          <p className="text-xl md:text-2xl font-semibold mt-4 sm:mt-0.5">
            An IRL day of coding and making for high-schoolers in MoCo
          </p>

          <ul className="flex flex-col sm:flex-row items-start gap-4 mt-6">
            <div className="flex gap-4">
              <li className="w-20 aspect-square px-3 py-1 border-2 border-white rounded-xl flex flex-col justify-center items-center">
                <span className="text-lg font-semibold -mb-2">DEC</span>
                <span className="text-4xl font-extrabold">10</span>
              </li>

              <a href="https://g.page/mcplRockvilleMemorial" target="_blank" rel="noopener noreferrer">
                <li className="px-3 py-1.5 border-2 border-white rounded-xl flex flex-col justify-center">
                  <span className="text-md">📌</span>
                  <span className="text-lg font-extrabold leading-5">Rockville Memorial Library</span>
                  <span className="text-xs">@ Rockville Town Square</span>
                </li>
              </a>
            </div>

            <li className="px-3 py-1.5 border-2 border-white rounded-xl flex flex-col justify-center">
              <span className="text-md">🕑</span>
              <span className="text-2xl font-extrabold">10AM-6PM</span>
            </li>
          </ul>

          {/* <div className="self-start px-4 py-2 bg-emerald-500 rounded-xl text-2xl font-extrabold mt-6">
            Register (free!)
          </div> */}
          <div className="text-xl font-thin mt-6">
            Registrations start <span className="text-emerald-400 font-semibold">November</span>
          </div>
        </div>
      </div>
    </header>

    <main className="px-8 py-28 container max-w-5xl flex flex-col gap-20">
      <section>
        <h2 className="text-4xl font-bold">
         8 hours of coding, workshops, and fun!
        </h2>

        <p className="text-2xl font-thin mt-4">
          Introducing BlairHacks&#39; newest event (and first IRL event since 2020)!
          BlairHacks Mini is a day-long event where high school students around Montgomery County will come together to build apps, games, and hardware.
          Look forward to a day of hands-on coding + tech workshops, fun activities, and more!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-16">
          <div className="order-1">
            <p className="text-emerald-400">
              <Tool size={60}/>
            </p>
            <h3 className="text-3xl font-bold mt-5">
              Build stuff!
            </h3>
            <p className="text-xl font-thin mt-2">
              Hardware, software, and you name it! You&#39;ll learn how to build something new and unique.
            </p>
          </div>

          <div className="order-2 self-center flex items-center justify-center rounded-xl overflow-hidden">
            {/* <Image
              src="/assets/assemble.jpg"
              alt="Hackers at Hack Club Assemble 2022"
              width={4000}
              height={2250}
              className="w-full"
            /> */}
            <img
              src="/assets/assemble.jpg"
              alt="Hackers at Hack Club Assemble 2022"
              className="w-full"
            />
          </div>

          <div className="order-4 sm:order-3 self-center flex items-center justify-center rounded-xl overflow-hidden">
            {/* <Image
              src="/assets/hackers.jpeg"
              alt="Hackers at BlairHacks MLH Local Hack Day 2017"
              width={680}
              height={453}
              className="w-full"
            /> */}
            <img
              src="/assets/hackers.jpeg"
              alt="Hackers at BlairHacks MLH Local Hack Day 2017"
              className="w-full"
            />
          </div>

          <div className="order-3 sm:order-4">
            <p className="text-emerald-400">
              <Users size={60}/>
            </p>
            <h3 className="text-3xl font-bold mt-5">
              Make connections
            </h3>
            <p className="text-xl font-thin mt-2">
              Meet fellow hackers in MoCo and make amazing things together!
            </p>
          </div>

          <div className="order-5">
            <p className="text-emerald-400">
              <Smile size={60}/>
            </p>
            <h3 className="text-3xl font-bold mt-5">
              Have fun
            </h3>
            <p className="text-xl font-thin mt-2">
              We have a day of fun activities and workshops planned. No competition, no stress, just fun!
            </p>
          </div>

          <div className="order-6 self-center flex items-center justify-center rounded-xl overflow-hidden">
            {/* <Image
              src="/assets/obama.jpeg"
              alt="Obama at BlairHacks_3"
              width={680}
              height={453}
              className="w-full"
            /> */}
            <img
              src="/assets/obama.jpeg"
              alt="Obama at BlairHacks_3"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="p-4 border-2 border-emerald-400 rounded-xl">
            <h3 className="text-xl font-bold">
              Do you guys actually hack?
            </h3>
            <p className="text-lg font-thin leading-6 mt-1.5">
              No, that&#39;s not what we mean by &quot;hack&quot;! Hacking is a general term for finding creative solutions with code to solve problems we see around us.
            </p>
          </div>

          <div className="p-4 border-2 border-emerald-400 rounded-xl">
            <h3 className="text-xl font-bold">
              Who is eligible to participate?
            </h3>
            <p className="text-lg font-thin leading-6 mt-1.5">
              All high school students are welcome to attend. Bring your friends!
            </p>
          </div>

          <div className="p-4 border-2 border-emerald-400 rounded-xl">
            <h3 className="text-xl font-bold">
              What should I bring?
            </h3>
            <p className="text-lg font-thin leading-6 mt-1.5">
              Bring a laptop and a charger. Also, make sure to bring your own lunch, or money to buy food. There will be plenty of nearby restaurants and stores.
            </p>
          </div>

          <div className="p-4 border-2 border-emerald-400 rounded-xl">
            <h3 className="text-xl font-bold">
              I&#39;m new to coding. Can I still participate?
            </h3>
            <p className="text-lg font-thin leading-6 mt-1.5">
              Yes! If you are a beginner, you can attend our workshops that we run throughout the event. They&#39;ll cover the basics of different tools you can use to build your hack.
            </p>
          </div>

          <div className="p-4 border-2 border-emerald-400 rounded-xl">
            <h3 className="text-xl font-bold">
              How much will it cost?
            </h3>
            <p className="text-lg font-thin leading-6 mt-1.5">
              Nothing at all! This event is completely free to attend.
            </p>
          </div>

          <div className="p-4 border-2 border-emerald-400 rounded-xl">
            <h3 className="text-xl font-bold">
              I have another question!
            </h3>
            <p className="text-lg font-thin leading-6 mt-1.5">
              Send us an email at <a className="text-emerald-500 font-medium underline cursor-pointer" href="mailto:team@blairhacks.com">team@blairhacks.com</a> and we&#39;ll get back to you ASAP!
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-bold">
          Sponsors
        </h2>

        <p className="text-2xl font-thin mt-4">
          Our partners and supporters that are making this event free and possible!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          <div className="h-48 p-4 flex justify-center items-center rounded-xl bg-neutral-400/20">
            {/* <Image
              src="/assets/bank_grant.png"
              alt="Hack Club x FIRST grant"
              width="667"
              height="328"
            /> */}
            <img
              src="/assets/bank_grant.png"
              alt="Hack Club x FIRST grant"
            />
          </div>

          <div className="h-48 p-4 flex justify-center items-center rounded-xl bg-neutral-400/20">
            {/* <Image
              src="/assets/cupf.png"
              alt="MoCo Community Use of Pubic Facilities Logo"
              width="535"
              height="94"
            /> */}
            <img
              src="/assets/cupf.png"
              alt="MoCo Community Use of Pubic Facilities Logo"
            />
          </div>
        </div>

        <p className="text-2xl font-thin mt-4">
          Want to sponsor this and future BlairHacks events? <a className="text-emerald-500 font-medium underline cursor-pointer" href="mailto:team@blairhacks.com">Get in touch →</a>
        </p>
        <p className="text-xl font-thin mt-2">
          (or make a <a className="text-emerald-500 font-medium underline cursor-pointer" href="https://blairhacks.com/donate" target="_blank" rel="noopener noreferrer">tax-deductible donation</a>)
        </p>
      </section>
    </main>

    <footer className="bg-emerald-400 text-black">
      <div className="px-8 py-6 container max-w-7xl flex flex-col md:flex-row gap-8 justify-between">
        <div className="pt-4">
          <div className="flex items-end gap-3">
            <h2 className="text-2xl lg:text-3xl font-extrabold">
              BlairHacks Mini &#39;22
            </h2>
            <a href="https://poolesvillehacks.tech" target="_blank" rel="noopener noreferrer">
              <div className="px-2 pt-1.5 pb-0.5 rounded-lg bg-neutral-500/10">
                <p className="text-xs whitespace-nowrap -mb-1.5">
                  in collaboration with
                </p>
                <p className="text-md md:text-lg font-medium">
                  poolesville_hacks
                </p>
              </div>
            </a>
          </div>
          <p className="text-sm mt-2">
            Fiscally sponsored by The Hack Foundation<br/>
            Nonprofit EIN: 81-2908499
          </p>
        </div>

        <div className="flex flex-col justify-end">
          <ul className="flex gap-4 text-lg">
            <li>
              <a href="https://instagram.com/blairhacks" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <Instagram size={20}/>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/blairhacks" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <Twitter size={20}/>
              </a>
            </li>
            <li>
              <a href="https://github.com/blairhacks" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <GitHub size={20}/>
              </a>
            </li>
            <li>
              <a href="mailto:team@blairhacks.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <Mail size={20}/>
              </a>
            </li>
          </ul>

          <h3 className="text-xl font-extrabold mt-3">
            Learn more
          </h3>
          <ul className="flex gap-4">
            <li>
              <a href="https://bank.hackclub.com/blairhacks" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Our finances
              </a>
            </li>
            <li>
              <a href="https://blairhacks.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                BlairHacks
              </a>
            </li>
            <li>
              <a href="https://poolesvillehacks.tech" target="_blank" rel="noopener noreferrer" className="hover:underline">
                poolesville_hacks
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </>;
}
