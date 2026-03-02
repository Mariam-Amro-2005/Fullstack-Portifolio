"use client";
import { AchievementsProps } from "@/lib/types";
import Container from "../ui/Container";
import { useTheme } from "next-themes";
import AchievementCard from "../ui/AchievementCard";

export default function Achievements(data: AchievementsProps) {
    const { theme } = useTheme();
    return (
        <Container>
            <section id="achievements" className="relative w-full h-auto py-20 flex flex-col items-center justify-center text-center font-sans">
                <div className="flex flex-col w-full items-center justify-center mb-10">
                    <h1 className={`
                        absolute uppercase font-extrabold top-12.75 lg:-top-10 -z-10
                        ${theme === 'dark' ? 'text-white/5' : 'text-black/5'}
                        transition-colors duration-300 width-full max-w-full break-all
                        text-7xl md:text-8xl lg:text-[10rem]
                    `}>
                        Achievements
                    </h1>

                    <h2 className="relative text-6xl font-semibold dark:text-white">Achievements</h2>

                    <div className="flex justify-center items-center gap-2">
                        <span className="inline-block w-15 h-1 bg-linear-to-r from-indigo-600 to-indigo-500"></span>
                        <span className="text-indigo-600 text-3xl">•</span>
                        <span className="inline-block w-15 h-1 bg-linear-to-r from-indigo-500 to-indigo-600"></span>
                    </div>

                </div>

                <div className="flex flex-col gap-10">
                    {data.achievements.map((ach, index) => (
                        <AchievementCard key={index} {...ach} />
                    ))}
                </div>
            </section>
        </Container>
    )
}