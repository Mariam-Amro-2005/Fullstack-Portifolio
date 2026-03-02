"use client";
import Container from "../ui/Container";
import { useTheme } from "next-themes";
import { SkillsProps } from "@/lib/types";
import Image from "next/image"

export default function Skills(data: SkillsProps) {
    const { theme } = useTheme();

    return (
        <Container>
            <section id="skills" className="max-w-6xl relative w-full h-auto py-20 flex flex-col items-center justify-center text-center font-sans">
                <div className="flex flex-col items-center justify-center mb-10">
                    <h1 className={`
                        absolute text-7xl md:text-8xl lg:text-[10rem] uppercase font-extrabold top-12.75 lg:-top-10 -z-10
                        ${theme === 'dark' ? 'text-white/5' : 'text-black/5'}
                        transition-colors duration-300 
                    `}>
                        Technical Skills
                    </h1>

                    <h2 className="relative text-6xl font-semibold dark:text-white">Technical Skills</h2>

                    <div className="flex justify-center items-center gap-2">
                        <span className="inline-block w-15 h-1 bg-linear-to-r from-indigo-600 to-indigo-500"></span>
                        <span className="text-indigo-600 text-3xl">•</span>
                        <span className="inline-block w-15 h-1 bg-linear-to-r from-indigo-500 to-indigo-600"></span>
                    </div>

                    <div className="uppercase text-gray-500 dark:text-gray-400 text-sm font-medium">
                        I constantly strive to improve
                    </div>
                </div>

                <div>
                    {data.skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-start gap-3 mb-6">
                            <div className="flex flex-row gap-3 items-end w-full ">
                                <div className={`rounded-lg p-2 ${theme == "dark" ? "bg-blue-200": "bg-purple-200"}`}>
                                    <Image
                                        src="/icons/icons8-git-branch-100.png"
                                        alt="Git Branch Icon"
                                        width={20}
                                        height={20}
                                    />
                                </div>
                                <h3 className={`text-lg font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-black'}`}> {skill.category} </h3>
                            </div>
                            <ul className="flex flex-row list-disc list-inside marker:text-indigo-600 marker:text-lg text-gray-500 gap-4 w-fit flex-wrap">
                                {skill.skills.map((item, itemIndex) => (
                                    <li key={itemIndex} className={`w-48 text-start border bg-linear-to-tr rounded-xl py-1.25 px-3 pr-4 mr-0.5 font-medium text-nowrap ${theme === 'dark' ? 'bg-blue-600/20 text-gray-300 border-blue-800' : 'text-black border-indigo-200'} hover:scale-105 transform duration-300 ease-in-out`}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                    }
                </div>
            </section>
        </Container>
    )
}