"use client";
import Container from "./Container";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ExperienceItem } from "@/lib/types";

export default function EducationCard(data: ExperienceItem) {
    const { theme } = useTheme();

    return (
        <>
            <div id="educationCard" className={`items-center md:items-start w-full border h-auto rounded-2xl p-6 
                flex flex-col md:flex-row justify-start gap-2.5 font-sans transition-all duration-300 
                ease-out hover:-translate-y-3 hover:shadow-2xl transform
                ${theme == "dark" ? "hover:border-blue-800 border-gray-700 text-white hover:text-blue-600 bg-linear-to-br from-gray-800/90 from-15% via-black/10 to-gray-900 to-90%" :
                    "border-gray-300 hover:bg-linear-to-br hover:from-indigo-300/50 hover:border-purple-400/50 hover:text-indigo-600"}`}>
                <div id="dateTag" className="w-full md:w-auto flex flex-col gap-1.5 items-center">
                    <p className={`w-full md:w-fit md:text-start text-sm  font-medium border rounded-full py-1.5 px-4 text-nowrap
                        ${theme == "dark" ? "border-blue-900 bg-linear-to-b from-gray-800 to-blue-900/50 text-gray-300" : "border-purple-400/70 bg-purple-400/20 text-indigo-600/85"}`}>
                        {data.startDate} - {data.endDate}
                    </p>
                    <div className="w-full h-0.5 mx-1.5 bg-linear-to-r from-indigo-500 to-indigo-400 rounded-full" ></div>
                </div>

                <div id="headings" className="w-full md:max-w-3/4 flex flex-col justify-start text-start gap-5 pl-2 ">
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-col gap-2 items-start">
                            <div className="flex flex-row items-center gap-1">
                                <Image
                                    src="/icons/icons8-briefcase-100.png"
                                    alt="Briefcase"
                                    width={20} height={20}
                                    className="rounded-full flex-0 object-contain"
                                >
                                </Image>
                                <p className={`uppercase ${theme == "dark" ? "text-gray-300" : "text-indigo-600"} text-sm`}>Experience</p>
                            </div>
                            <p className={`text-xl font-medium ${theme == "dark" ? "hover:text-blue-600" : "hover:text-indigo-600"}`}>
                                {data.title || "N/A"}
                            </p>
                        </div>

                        <div className="flex gap-5 items-center">
                            <h3 className={`text-lg font-normal max-w-3/4 ${theme == "dark" ? "text-gray-400 hover:text-blue-600" : "hover:text-indigo-600 text-gray-500"}`}>
                                {data.company || "N/A"}
                            </h3>

                            <p className={`text-md font-normal ${theme == "dark" ? "text-gray-400" : "text-gray-500"}`}>
                                {data.location || "N/A"}
                            </p>
                        </div>
                    </div>

                    <div>
                        <ul className="list-disc list-inside marker:text-indigo-600 marker:text-lg text-gray-500">
                            {data.description.map((desc, index) => (
                                <li key={index} className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>{desc}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        {data.tags.map((tag, index) => (
                            <span key={index} className={`inline-block text-sm font-medium rounded-full py-1 px-3 mr-2 mb-2 border
                                ${theme == "dark" ? "bg-blue-600/20 text-gray-300 border-blue-800" : "bg-purple-400/20 text-indigo-600/85 border-purple-400/70"}`}> {tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}