"use client";
import Container from "./Container";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ProjectItem } from "@/lib/types";

export default function ProjectCard(data: ProjectItem) {
    const { theme } = useTheme();

    return (
        <Container>
            <div id="educationCard" className={`w-full border h-auto rounded-2xl p-6 
                flex flex-col lg:flex-row-reverse justify-start gap-3.5 font-sans transition-all duration-300 
                ease-out hover:-translate-y-3 hover:shadow-2xl transform
                ${theme == "dark" ? "hover:border-blue-800 border-gray-700 text-white hover:text-blue-600 bg-linear-to-b md:bg-linear-to-br from-gray-800/90 from-35% md:from-15% via-black/10 to-gray-900 to-70% md:to-90%" :
                    "border-gray-300 hover:bg-linear-to-br hover:from-indigo-300/50 hover:border-purple-400/50 hover:text-indigo-600"}`}>

                <div id="dateTag" className="w-full lg:w-1/2 flex flex-col gap-3.5 items-end">
                    <p className={`w-fit text-start text-sm font-medium border rounded-full py-1.5 px-4 
                        ${theme == "dark" ? "border-blue-900 bg-linear-to-b from-gray-800 to-blue-900/50 text-gray-300" : "border-purple-400/70 bg-purple-400/20 text-indigo-600"}`}>
                        {data.startDate} - {data.endDate}
                    </p>
                    <Image
                        src={data.image || "/no-image.jpeg"}
                        alt={data.title ? `${data.title} screenshot` : "Project Image"}
                        // fill
                        width={1000} height={1000}
                        className="object-cover rounded-3xl w-full h-auto border border-gray-400 shadow shadow-gray-300 shadow-2xsm"
                        priority={true}
                    />
                </div>

                <div id="headings" className="flex flex-col justify-start text-start gap-3.5 pl-2 w-full lg:w-1/2">
                    <div className="flex flex-col gap-1 items-start">
                        <p className={`text-xl font-medium ${theme == "dark" ? "hover:text-blue-600" : "hover:text-indigo-600"}`}>
                            {data.title || "N/A"}
                        </p>
                    </div>

                    <div>
                        <p className={`max-w-full text-balance text-md font-normal ${theme == "dark" ? "text-gray-300" : "text-gray-500"}`}>
                            {data.description || "N/A"}
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 mb-3">
                        <p className="text-lg font-semibold">Technology Stack</p>
                        <ul className="flex flex-row list-disc list-inside marker:text-indigo-600 marker:text-lg text-gray-500 gap-4 w-fit flex-wrap">
                            {data.tech.map((desc, index) => (
                                <li key={index} className={`border bg-linear-to-tr rounded-full py-1.25 px-3 pr-4 mr-0.5 font-medium text-nowrap ${theme === 'dark' ? 'text-gray-200 border-gray-800 from-gray-800/70 via-gray-500/80 to-gray-800/70' : 'text-black border-purple-400  from-white via-purple-200 to-indigo-200'} hover:scale-105 transform duration-300 ease-in-out`}>{desc}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-row gap-4">
                        <Link href={`${data.githubLink}`} target="_blank" rel="noopener noreferrer">
                            <div className={`flex w-fit bg-linear-to-tr text-nowrap ${theme == "dark" ? "border-indigo-700 shadow-gray-700 from-indigo-800 via-indigo-600 to-blue-950" : "border-gray-500 shadow-gray-400 from-indigo-600 to-purple-700 border"} rounded-full py-2 px-4 text-white text-md font-medium align-center justify-center items-center gap-2 shadow-sm hover:scale-105 transition duration-400 cursor-pointer`}>
                                <div className="flex items-center">
                                    View on GitHub
                                </div>
                                <div className="flex flex-row">
                                    <Image
                                        src="/icons/icons8-open-link-100.png"
                                        alt="Project GitHub Link"
                                        width={20}
                                        height={20}
                                        className="flex items-center"
                                    >
                                    </Image>
                                </div>
                            </div>
                        </Link>

                        {
                            data.liveLink && (
                                <Link href={`${data.liveLink}`} target="_blank" rel="noopener noreferrer">
                                    <div className={`flex w-fit bg-linear-to-tr text-nowrap ${theme == "dark" ? "border-indigo-700 shadow-gray-700 from-indigo-800 via-indigo-600 to-blue-950 border" : "border-gray-500 shadow-gray-400 from-indigo-600 to-purple-700 border"} rounded-full py-2 px-4 text-white text-md font-medium align-center justify-center items-center gap-2 shadow-sm hover:scale-105 transition duration-400 cursor-pointer`}>
                                        <div className="flex items-center">
                                            View Live
                                        </div>
                                        <div className="flex flex-row">
                                            <Image
                                                src="/icons/icons8-open-link-100.png"
                                                alt="Project Live Link"
                                                width={20}
                                                height={20}
                                                className="flex items-center"
                                            >
                                            </Image>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </Container>
    )
}