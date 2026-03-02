"use client";
import Container from "../ui/Container";
import { useTheme } from "next-themes";
import { ContactProps } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact(data: ContactProps) {
    const { theme } = useTheme();
    return (
        <Container>
            <section id="contact" className="max-w-6xl relative w-full h-auto py-20 flex flex-col items-center justify-center text-center font-sans">
                <div className="flex flex-col w-full items-center justify-center mb-16">
                    <h1 className={`
                        absolute uppercase font-extrabold top-12.75 lg:-top-10 -z-10
                        ${theme === 'dark' ? 'text-white/5' : 'text-black/5'}
                        transition-colors duration-300 width-full max-w-full break-all
                        text-7xl md:text-8xl lg:text-[10rem]
                    `}>
                        Contact
                    </h1>

                    <h2 className="relative text-6xl font-semibold dark:text-white">Contact</h2>

                    <div className="flex justify-center items-center gap-2">
                        <span className="inline-block w-15 h-1 bg-linear-to-r from-indigo-600 to-indigo-500"></span>
                        <span className="text-indigo-600 text-3xl">•</span>
                        <span className="inline-block w-15 h-1 bg-linear-to-r from-indigo-500 to-indigo-600"></span>
                    </div>

                </div>
                <div className="w-full flex md:flex-row flex-col items-center justify-around gap-15">
                    <div className="w-fit md:max-w-1/2 flex flex-col align-start justify-start gap-10">

                        <p className={`text-left ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}
                            font-medium leading-relaxed text-lg text-balance
                            pr-5 transition-colors duration-300`}>
                            "Building innovative solutions through clean code, creative problem-solving, and seamless collaboration. Let's turn ideas into impact."
                        </p>

                        <div className="flex flex-col justify-start gap-5 max-w-3/4  md:max-w-full lg:max-w-2/3">
                            <h1 className="text-start w-full text-xl font-bold">Let's Connect</h1>
                            <div className="flex flex-row w-full justify-between max-w-sm">
                                <Link href={`${data.linkedin}`} target="_blank" rel="noopener noreferrer" >
                                    <div className={`border border-gray-300 w-fit h-fit rounded-full hover:bg-linear-to-tr ${theme == "dark" ? " shadow-gray-600 hover:from-indigo-800 hover:via-indigo-600 hover:to-blue-950" : "shadow-gray-500 hover:from-purple-600 hover:via-violet-400 hover:to-indigo-500 hover:border-purple-600"} hover:border-gray-400 p-3 transition duration-300 hover:shadow-md`}>
                                        <Image
                                            src={`${theme == "dark" ? "/icons/icons8-linkedin-white-100.png" : "/icons/icons8-linkedin-100.png"}`}
                                            alt="LinkedIn"
                                            width={25}
                                            height={25}
                                            className="hover:scale-110">
                                        </Image>
                                    </div>
                                </Link>

                                <Link href={`${data.github}`} target="_blank" rel="noopener noreferrer">
                                    <div className={`border border-gray-300 w-fit h-fit rounded-full hover:bg-linear-to-tr ${theme == "dark" ? " shadow-gray-600 hover:from-indigo-800 hover:via-indigo-600 hover:to-blue-950" : "shadow-gray-500 hover:from-purple-600 hover:via-violet-400 hover:to-indigo-500 hover:border-purple-600"} hover:border-gray-400 p-3 transition duration-300 hover:shadow-md`}>
                                        <Image
                                            src={`${theme == "dark" ? "/icons/icons8-github-white-100.png" : "/icons/icons8-github-100.png"}`}
                                            alt="GitHub"
                                            width={25}
                                            height={25}
                                            className="hover:scale-110">
                                        </Image>
                                    </div>
                                </Link>

                                <Link href={`mailto:${data.email}`} >
                                    <div className={`border border-gray-300 w-fit h-fit rounded-full hover:bg-linear-to-tr ${theme == "dark" ? " shadow-gray-600 hover:from-indigo-800 hover:via-indigo-600 hover:to-blue-950" : "shadow-gray-500 hover:from-purple-600 hover:via-violet-400 hover:to-indigo-500 hover:border-purple-600"} hover:border-gray-400 p-3 transition duration-300 hover:shadow-md`}>
                                        <Image
                                            src={`${theme == "dark" ? "/icons/icons8-email-100 (1).png" : "/icons/icons8-email-100.png"}`}
                                            alt="Email"
                                            width={25}
                                            height={25}
                                            className="hover:scale-110">
                                        </Image>
                                    </div>
                                </Link>

                                <Link href={`tel:${data.phone}`}>
                                    <div className={`border border-gray-300 w-fit h-fit rounded-full hover:bg-linear-to-tr ${theme == "dark" ? " shadow-gray-600 hover:from-indigo-800 hover:via-indigo-600 hover:to-blue-950" : "shadow-gray-500 hover:from-purple-600 hover:via-violet-400 hover:to-indigo-500 hover:border-purple-600"} hover:border-gray-400 p-3 transition duration-300 hover:shadow-md`}>
                                        <Image
                                            src={`${theme == "dark" ? "/icons/icons8-phone-white-100.png" : "/icons/icons8-phone-100.png"}`}
                                            alt="Phone Number"
                                            width={25}
                                            height={25}
                                            className="hover:scale-110">
                                        </Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col items-start md:items-center justify-center gap-8">
                        <div className="w-full md:max-w-md flex flex-col items-center">
                            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Ready to Collaborate?</h3>
                            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed text-base mb-6`}>
                                I'm always excited to hear about new opportunities and interesting projects. Whether you have a question or just want to say hi, feel free to reach out. I'll try my best to get back to you!
                            </p>

                            <Link
                                href={`mailto:${data.email}`}
                                className={`flex w-fit bg-linear-to-tr justify-center border ${theme == "dark" ? "border-indigo-700 shadow-gray-700 from-indigo-800 via-indigo-600 to-blue-950" : " shadow-gray-400 from-purple-600 via-violet-500 to-indigo-600 border-purple-500"} rounded-full py-2 px-4 text-white text-lg font-semibold align-center justify-center items-center gap-3 shadow-md hover:scale-105 transition duration-400 cursor-pointer`}
                            >
                                Send me an Email
                            </Link>
                        </div>

                        <div className={`w-full md:max-w-md p-6 rounded-lg border ${theme === 'dark' ? 'hover:border-blue-800 border-gray-700 text-white hover:text-blue-600 bg-linear-to-br from-gray-800/90 from-15% via-black/10 to-gray-900 to-90%' : 'border-gray-200 bg-gray-50'} transition-colors`}>
                            <h4 className={`font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Quick Response Time</h4>
                            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                I typically respond to inquiries within 24-48 hours. Let's discuss how we can work together!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}