"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import TypingText from "@/components/ui/TypingText";

export default function Hero() {
    return (
        <section id="home" className="h-[70vh] flex flex-col items-center justify-center text-center">
            {/* Background Decoration Layer */}
            <div className="absolute inset-0 -z-10">

                {/* Large Circle */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute w-125 h-125 border border-indigo-400/50 rounded-full top-10 left-10"
                />

                {/* Small Circle */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute w-62.5 h-62.5 border border-pink-500/50 rounded-full bottom-30 right-10"
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
                    Mariam <span className="bg-gradient-to-r from-indigo-500 to-pink-600 text-transparent bg-clip-text">Amro</span> Ahmed Fathi Seifeldin
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl text-gray-500 mb-4"
                >
                    <span className="bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
                        <TypingText
                            words={[
                                "Full-Stack Developer",
                                "Next.js Specialist",
                                "React Engineer",
                                "Backend API Builder",
                                "Software Engineer"
                            ]}
                            speed={60} deleteSpeed={40} pause={2000}
                        />
                    </span>
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-l text-gray-500 mb-8 flex items-center justify-center gap-2"
                >
                    <MapPin size={18} /> Cairo, Egypt
                </motion.p>

            </div>
        </section>
    );
}
