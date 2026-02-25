"use client";
import Container from "../ui/Container";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

interface AboutProps {
    photo: string
    name: string
    bio: string
    linkedin: string
    github: string
    email: string
    phone: string
    resume: string
}

export default function About(
    { photo="", name = "", bio = "", linkedin = "#", github = "#", email = "#", phone = "#", resume = "#" }: AboutProps
) {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <>
                <Container>
                    <div className="text-9xl text-black text-center">Error Loading Page</div>
                </Container>
            </>
        );
    }

    return (
        <Container>
            <section id="about" className="h-auto w-full relative px-10 py-20 flex flex-col items-center justify-around text-center font-sans">
                <div className="flex flex-col items-center justify-center mb-10">
                    <h1 className={`
                        absolute text-7xl md:text-8xl lg:text-[10rem] uppercase font-extrabold top-12.75 lg:-top-10 -z-10
                        ${theme === 'dark' ? 'text-white/5' : 'text-black/5'}
                        transition-colors duration-300 break-all
                    `}>
                        About
                    </h1>

                    <h2 className="relative text-6xl font-semibold dark:text-white">About Me</h2>

                    <div className="flex justify-center items-center gap-2">
                        <span className="inline-block w-15 h-1 bg-linear-to-r from-indigo-600 to-indigo-500"></span>
                        <span className="text-indigo-600 text-3xl">•</span>
                        <span className="inline-block w-15 h-1 bg-linear-to-r from-indigo-500 to-indigo-600"></span>
                    </div>

                    <div className="uppercase text-gray-500 dark:text-gray-400 text-sm font-medium">
                        More about me
                    </div>
                </div>

                <div className="w-full flex md:flex-row flex-col items-center justify-around gap-15">
                    <div className="flex flex-row lg:w-80 md:w-180 h-80 rounded-full overflow-hidden bg-linear-to-r from-pink-500 to-indigo-600 p-1.5">
                        <div className="w-full h-full rounded-full overflow-hidden">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className={`w-full h-full border-8  ${theme === 'dark' ? 'border-black' : 'border-white'} rounded-full overflow-hidden`}
                            >
                                <Image
                                    src={`${photo}`}
                                    alt="Profile"
                                    width={400}
                                    height={200}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </motion.div>
                        </div>
                    </div>

                    <div className="w-fit md:max-w-1/2 flex flex-col align-start justify-start gap-10">
                        <h2 className="relative w-full text-start text-3xl font-bold ">
                            <span className="relative inline-block
                            after:content-[''] after:absolute 
                            after:-bottom-5 after:left-0 
                            after:w-full after:h-1.5 
                            after:bg-linear-to-r after:from-indigo-500 after:to-indigo-400 after:rounded-full">
                                Hello!
                            </span> I'm {""}
                            <span className="bg-linear-to-r from-indigo-500 to-indigo-600 text-transparent bg-clip-text">
                                {name}
                            </span>
                        </h2>

                        <p className={`text-left ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}
                            font-medium leading-relaxed text-lg text-balance
                            pr-5 transition-colors duration-300`}>
                            {bio}
                        </p>

                        <div className="flex flex-col justify-start gap-5 lg:max-w-2/3">
                            <h1 className="text-start w-full text-xl font-bold">Connect with Me</h1>
                            <div className="flex flex-row w-full justify-between">
                                <Link href={`${linkedin}`} target="_blank" rel="noopener noreferrer" >
                                    <div className="border border-gray-300 w-fit h-fit rounded-full shadow-orange-50 hover:bg-indigo-500 hover:border-gray-400 p-3 transition duration-700 hover:shadow-lg">
                                        <Image
                                            src="/icons/icons8-linkedin-100.png"
                                            alt="LinkedIn"
                                            width={25}
                                            height={25}
                                            className="hover:scale-110">
                                        </Image>
                                    </div>
                                </Link>

                                <Link href={`${github}`} target="_blank" rel="noopener noreferrer">
                                    <div className="border border-gray-300 w-fit h-fit rounded-full shadow-orange-50 hover:bg-indigo-500 hover:border-gray-400 p-3 transition duration-700 hover:shadow-lg">
                                        <Image
                                            src="/icons/icons8-github-100.png"
                                            alt="GitHub"
                                            width={25}
                                            height={25}
                                            className="hover:scale-110">
                                        </Image>
                                    </div>
                                </Link>

                                <Link href={`mailto:${email}`} >
                                    <div className="border border-gray-300 w-fit h-fit rounded-full shadow-orange-50 hover:bg-indigo-500 hover:border-gray-400 p-3 transition duration-700 hover:shadow-lg">
                                        <Image
                                            src="/icons/icons8-email-100.png"
                                            alt="Email"
                                            width={25}
                                            height={25}
                                            className="hover:scale-110">
                                        </Image>
                                    </div>
                                </Link>

                                <Link href={`tel:${phone}`}>
                                    <div className="border border-gray-300 w-fit h-fit rounded-full shadow-orange-50 hover:bg-indigo-500 hover:border-gray-400 p-3 transition duration-700 hover:shadow-lg">
                                        <Image
                                            src="/icons/icons8-phone-100.png"
                                            alt="Phone Number"
                                            width={25}
                                            height={25}
                                            className="hover:scale-110">
                                        </Image>
                                    </div>
                                </Link>
                            </div>

                            <Link href={`${resume}`} target="_blank" rel="noopener noreferrer">
                                <div className="flex w-full bg-linear-to-tr from-indigo-600 to-purple-700 border rounded-full py-2 text-white text-lg font-semibold align-center justify-center items-center gap-3 hover:scale-105 transition duration-400 cursor-pointer">
                                    <span className="flex flex-row">
                                        <Image
                                            src="/icons/icons8-download-100.png"
                                            alt="Resume"
                                            width={30}
                                            height={30}>
                                        </Image>
                                    </span>
                                    Download Resume
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
}