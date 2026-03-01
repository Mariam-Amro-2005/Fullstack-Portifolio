"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";

const sections = [
    "about",
    "education",
    "experience",
    "projects",
    "skills",
    "achievements",
    "contact",
];

export default function Navbar() {
    const [active, setActive] = useState("");
    const { theme } = useTheme();

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (!element) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActive(id);
                    }
                },
                { threshold: 0.6 }
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => observers.forEach((obs) => obs.disconnect());
    }, []);

    const linkStyle = (id: string) =>
        `transition hover:text-indigo-600 underline-offset-8 decoration-2
        ${active === id
            ? `underline  decoration-2 underline-offset-2  ${theme == "dark" ? "decoration-blue-600 hover:decoration-indigo-400" : "decoration-pink-600 hover:decoration-indigo-500"}`
            : "no-underline hover:underline hover:decoration-indigo-500"
        }`;

    return (
        <nav className="flex justify-center mt-6 mb-6 sticky top-4 z-50">
            <div className="flex items-center border border-slate-300 backdrop-blur-md shadow-sm rounded-full px-6 py-3 gap-6">

                <div className="cursor-pointer hover:text-indigo-600 transition">
                    Portfolio
                </div>

                {sections.map((id) => (
                    <Link key={id} href={`#${id}`} className={linkStyle(id)}>
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                    </Link>
                ))}

                <ThemeToggle />
            </div>
        </nav>
    );
}