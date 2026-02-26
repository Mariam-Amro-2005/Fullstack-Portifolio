"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import TypingText from "@/components/ui/TypingText";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
    name: string;
    typingWords: string[];
    location: string;
    email: string;
}

export default function Hero({ name="", typingWords=[""], location="", email="#" }: HeroProps) {
    const { theme } = useTheme();

    return (
        <section id="home" className="h-[70vh] flex flex-col items-center justify-center text-center font-sans">
            {/* Background Decoration Layer */}
            <div className="absolute inset-0 -z-10">

                {/* Large Circle */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className={`absolute w-125 h-125 border ${theme == "dark" ? "border-indigo-400" : "border-indigo-400/50"} rounded-full top-10 left-10`}
                />

                {/* Small Circle */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className={`absolute w-62.5 h-62.5 border ${theme == "dark" ? "border-pink-500" : "border-pink-500/50"} rounded-full bottom-30 right-10`}
                />

            </div>

            {/* Foreground Content */}
            <div>
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-8xl font-bold mb-6"
                >
                    {name.split(" ")[0]} <span className="bg-linear-to-r from-indigo-500 to-pink-600 text-transparent bg-clip-text">{name.split(" ")[1]}</span> {name.split(" ")[2]} {name.split(" ")[3]} {name.split(" ")[4]}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl text-gray-500 mb-4"
                >
                    <span className="bg-linear-to-r from-indigo-500 to-pink-500 text-2xl text-transparent bg-clip-text">
                        <TypingText
                            words={typingWords}
                            speed={60} deleteSpeed={40} pause={2000}
                        />
                    </span>
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className={`text-xl  mb-8 flex items-center
                        ${theme === 'dark' ? 'text-gray-200' : 'text-gray-500'} justify-center gap-2`}
                >
                    <MapPin size={20} /> {location}
                </motion.p>

                <div className="flex w-full justify-center items-center">
                    <div className={`flex flex-row w-fit bg-linear-to-tr from-indigo-600 to-purple-700 border ${theme == "dark" ? "border-purple-700 shadow-gray-700": "border-gray-500 shadow-gray-400"} rounded-full py-2.5 px-6 text-white text-lg font-semibold align-center justify-center items-center shadow-md  hover:scale-105 transition duration-400 cursor-pointer`}>
                        <Link href={`${email}`} target="_blank" rel="noopener noreferrer" className="flex flex-row gap-3 items-center font-sans">
                            <span className="flex flex-row">
                                <Image
                                    src="/icons/icons8-email-100 (1).png"
                                    alt="Email"
                                    width={30}
                                    height={30}>
                                </Image>
                            </span>
                            Let's Conntect
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
