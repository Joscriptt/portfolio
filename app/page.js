"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

import AnimateLetters from "./AnimateLetters";
import { Animations } from "./variants";
import Image from "next/image";

export default function Home() {
  const { theme, systemTheme, setTheme } = useTheme();

  return (
    <div>
      {/* <Hero /> */}
      <div>
        <motion.div
          initial={{
            height: "100%",
          }}
          animate={{
            height: "0%",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 2.5 },
          }}
          className="bg-black dark:bg-purple-800 h-screen absolute z-10 w-full"
        ></motion.div>
        <div className="tt"></div>
        <div className="lg:flex  flex-row lg:justify-between min-h-screen relative">
          <div
            className=" absolute right-3 cursor-pointer lg:flex  rounded-full"
            onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
          >
            {theme == "dark" ? (
              <Image
                className="w-7 h-7 lg:block cursor-pointer hidden"
                src="/ani/moon.png"
                alt="moon"
                width={7}
                height={7}
              />
            ) : (
              <Image
                className="w-7 h-7 lg:block cursor-pointer hidden"
                src="/ani/sun.png"
                alt="sun"
                width={7}
                height={7}
              />
            )}
          </div>
          <div className=" lg:p-14 p-12 lg:pt-[53px] lg:pl-[150px] max-w-[1020px]">
            <motion.div
              initial="hidden"
              animate="visible"
              className="lg:flex  lg:flex-row sm:flex-col sm:justify-center items-center lg:justify-start flex justify-center flex-col gap-7"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: 180 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.3,
                    delay: 0.5,
                    ease: "circOut",
                  },
                  rotate: 0,
                }}
                className=""
              >
                <motion.img
                  className="w-16 h-16 yum rounded-full shadow-md object-contain"
                  src="/ani/pro2.png"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.7 } }}
              >
                <motion.div variants={Animations.container}>
                  <AnimateLetters title="Hi, I'm JoScript" />
                </motion.div>
                <p className="text-[#788585] text-center lg:text-left font-DMSansM text-[18px]">
                  Software Dev
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.7 } }}
              className="mt-12  text-[#B4B2AF] dark:text-[#333] text-lg font-DMSansR"
            >
              <h2>Experience</h2>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.7 } }}
              className="mt-7 "
            >
              <h2 className="text-lg font-bold font-DMSansM text-[#B4B2AF] dark:text-[#333]">
                Designer, Nextjs
              </h2>
              <small className="text-sm font-DMSansM text-[#B4B2AF] dark:text-[#333]">
                2020- Present
              </small>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.7 } }}
              className="my-4 "
            >
              <p className="flex justify-start font-DMSansR text-base">
                From which we spring invent the universe corpus callosum the
                only home we've ever known decipherment dispassionate
                extraterrestrial observer. Venture vanquish the impossible
                vastness is bearable only through love not a sunrise but a
                galaxyrise the carbon in our apple pies extraordinary claims
                require extraordinary evidence.
              </p>
              <motion.div className=" mt-4 font-DMSansM w-fit ">
                <Link href="/project">
                  <motion.span className="text-sm flex items-center gap-2 cursor-pointer group">
                    View work
                    <div className="transition-all group-hover:translate-x-2 duration-300">
                      <ArrowRightIcon className="w-4 h-4" />
                    </div>
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.7, delay: 0.5 },
              }}
              className="mt-7 "
            >
              <h2 className="text-lg font-bold font-DMSansM text-[#B4B2AF] dark:text-[#333]">
                AB, User Interface Designer
              </h2>
              <small className="text-sm font-DMSansM text-[#B4B2AF] ">
                2013 - 2017
              </small>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.7, delay: 0.9 },
              }}
              className="my-4   "
            >
              <p className="flex justify-start font-DMSansR text-base">
                Dream of the mind's eye billions upon billions how far away
                something incredible is waiting to be known a billion trillion
                laws of physics?
              </p>
              <motion.div className=" mt-4 font-DMSansM w-fit ">
                <Link href="/project">
                  <motion.span className="text-sm flex items-center gap-2 cursor-pointer group">
                    View work
                    <div className="transition-all group-hover:translate-x-2 duration-300">
                      <ArrowRightIcon className="w-4 h-4" />
                    </div>
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Divider */}

            <div className="my-12  bg-gray-400  max-w-4xl h-[1px] " />

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.7, delay: 1 },
              }}
              className="mt-12  text-[#B4B2AF] dark:text-[#333] text-lg font-DMSansR"
            >
              <h2>Education</h2>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.7, delay: 0.4 },
              }}
              className="mt-7 "
            >
              <h2 className="text-lg font-bold font-DMSansM text-[#B4B2AF] dark:text-[#333]">
                Amsterdam University of Applied Sciences
              </h2>
              <small className="text-sm font-DMSansM text-[#B4B2AF] dark:text-[#333]">
                2015 - 2017
              </small>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.7, delay: 0.9 },
              }}
              className="my-4 "
            >
              <p className="flex justify-start font-DMSansR text-base">
                Not a sunrise but a galaxyrise rich in heavy atoms rich in
                mystery realm of the galaxies paroxysm of global death Cambrian
                explosion. The carbon in our apple pies vastness is bearable
                only through love star stuff harvesting star light descended
                from astronomers hearts of the stars take root and flourish.
              </p>
            </motion.div>

            {/* Divider */}
            <div className="my-12  bg-gray-400  max-w-4xl h-[1px] " />

            <div className="my-5 ">
              <h3 className="my-97 text-lg font-DMSansM">Links</h3>
              <ul>
                <div className=" mt-2 font-DMSansM w-fit ">
                  <Link href="/">
                    <motion.span className="text-sm flex items-center gap-2 cursor-pointer group">
                      Awwward 2020
                      <div className="transition-all group-hover:translate-x-2 duration-300">
                        <ArrowRightIcon className="w-4 h-4" />
                      </div>
                    </motion.span>
                  </Link>
                </div>
                <div className=" mt-2 font-DMSansM w-fit ">
                  <Link href="/">
                    <motion.span className="text-sm flex items-center gap-2 cursor-pointer group">
                      The Webby 2021
                      <div className="transition-all group-hover:translate-x-2 duration-300">
                        <ArrowRightIcon className="w-4 h-4" />
                      </div>
                    </motion.span>
                  </Link>
                </div>
                <div className=" mt-2 font-DMSansM w-fit ">
                  <Link href="/">
                    <motion.span className="text-sm flex items-center gap-2 cursor-pointer group">
                      VentureBeat
                      <div className="transition-all group-hover:translate-x-2 duration-300">
                        <ArrowRightIcon className="w-4 h-4" />
                      </div>
                    </motion.span>
                  </Link>
                </div>
                <div className=" mt-2 font-DMSansM w-fit ">
                  <Link href="/">
                    <motion.span className="text-sm flex items-center gap-2 cursor-pointer group">
                      TechCrunch
                      <div className="transition-all group-hover:translate-x-2 duration-300">
                        <ArrowRightIcon className="w-4 h-4" />
                      </div>
                    </motion.span>
                  </Link>
                </div>
              </ul>
            </div>
          </div>
          <motion.div
            initial={{ x: 800 }}
            animate={{
              x: 0,
              transition: {
                duration: 0.5,
                delay: 1.4,
                ease: "linear",
              },
            }}
            className=" bg-black lg:w-[420px] md:hidden  lg:p-10 lg:pl-[49px] p-12 lg:pt-[45px]  lg:block"
          >
            <h2 className="text-[#808080]  text-lg font-DMSansR mb-4">About</h2>
            <p className="text-white font-DMSansR">
              Web fanatic. Pop culture aficionado. Unapologetic introvert.
              Analyst. Incurable coffee fan. General beer enthusiast.
            </p>

            <h2 className="text-[#808080] mt-11 mb-4 text-lg font-DMSansM">
              Skills
            </h2>

            <div className="text-white font-DMSansR space-y-[2px] pl-4">
              <li>UI Design</li>
              <li>Web Design</li>
              <li>Framer</li>
              <li>Framer Motion</li>
              <li>ScreenFlow</li>
              <li>After Effects</li>
            </div>
            <h2 className="text-[#808080]  mt-11 mb-6 text-lg font-DMSansM ">
              Contact
            </h2>

            <div className="text-white">
              <div className=" mt-2 font-DMSansM w-fit  ">
                <Link href="/">
                  <motion.span className="text-sm flex items-center gap-2 cursor-pointer group">
                    LinkedIn
                    <div className="transition-all group-hover:translate-x-2 duration-300">
                      <ArrowRightIcon className="w-4 h-4" />
                    </div>
                  </motion.span>
                </Link>
              </div>
              <div className=" mt-2 font-DMSansM w-fit ">
                <Link href="/">
                  <motion.span className="text-sm flex items-center gap-2 cursor-pointer group">
                    Twittter
                    <div className="transition-all group-hover:translate-x-2 duration-300">
                      <ArrowRightIcon className="w-4 h-4" />
                    </div>
                  </motion.span>
                </Link>
              </div>
              <div className=" mt-2 font-DMSansM w-fit ">
                <Link href="/">
                  <motion.span className="text-sm flex items-center gap-2 cursor-pointer group">
                    Email
                    <div className="transition-all group-hover:translate-x-2 duration-300">
                      <ArrowRightIcon className="w-4 h-4" />
                    </div>
                  </motion.span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
