"use client";
import Container from "../ui/Container";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <Container>
            <section id="about" className="h-auto w-full relative px-5 py-20 flex flex-col items-center justify-around text-center">
                <div className="flex flex-col items-center justify-center mb-10">
                    <h1 className="absolute text-[10rem] uppercase font-extrabold -top-10 text-black/5 dark:text-white/5 -z-10">About</h1>
                    <h2 className=" relative text-6xl font-semibold">About Me</h2>
                    <div className="flex justify-center items-center gap-2">
                        <span className="inline-block w-15 h-1 bg-linear-to-r from-indigo-600 to-indigo-500"></span>
                        <span className="text-indigo-600 text-3xl">•</span>
                        <span className="inline-block w-15 h-1 bg-linear-to-r from-indigo-500 to-indigo-600"></span>
                    </div>
                    <div className="uppercase text-gray-500 text-sm font-medium">More about me</div>
                </div>

                <div className="flex md:flex-row sm:flex-col items-center justify-around gap-15">
                    <div className="flex flex-row lg:w-80 md:w-150 h-80 rounded-full overflow-hidden bg-linear-to-r from-pink-500 to-indigo-600 p-1.5">
                        <div className="w-full h-full rounded-full overflow-hidden">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="w-full h-full"
                            >
                                <Image
                                    src="/profile1.jpeg"
                                    alt="Profile"
                                    width={400}
                                    height={200}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </motion.div>
                        </div>
                    </div>
                    <p className="text-justify text-gray-500 font-normal font-sans leading-relaxed max-w-1/2">
                        I am a dedicated Computer Science student at Cairo University with hands-on experience in full-stack web development using React, Spring
                        Boot, and Django. Skilled in building responsive applications and collaborating on real-world projects.
                        Seeking a Software Engineering Internship or Junior Developer opportunity to apply my technical skills and
                        contribute to meaningful products. </p>
                </div>
            </section>
        </Container>
    );
}