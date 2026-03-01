"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";

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
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        const options: IntersectionObserverInit = {
            threshold: 0.2,
            rootMargin: '-80px 0px 0px 0px',
        };

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (!element) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActive(id);
                        // Close mobile menu when navigating to a section
                        setIsMenuOpen(false);
                    }
                },
                options
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => observers.forEach((obs) => obs.disconnect());
    }, []);

    // Close mobile menu when window is resized to desktop size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) { // md breakpoint
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const linkStyle = (id: string) =>
        `transition hover:text-indigo-600 underline-offset-8 decoration-2
        ${active === id
            ? `underline decoration-2 underline-offset-2 ${theme == "dark" ? "decoration-blue-600 hover:decoration-indigo-400" : "decoration-pink-600 hover:decoration-indigo-500"}`
            : "no-underline hover:underline hover:decoration-indigo-500"
        }`;

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className="flex justify-center mt-6 mb-6 sticky top-4 z-50 px-4">
            <div className="relative w-full max-w-6xl">
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center justify-center">
                    <div className="flex items-center border border-slate-300 backdrop-blur-md shadow-sm rounded-full px-6 py-3 gap-6">
                        <div className="cursor-pointer hover:text-indigo-600 transition font-medium">
                            Portfolio
                        </div>

                        {sections.map((id) => (
                            <Link
                                key={id}
                                href={`#${id}`}
                                className={linkStyle(id)}
                                onClick={(e) => handleLinkClick(e, id)}
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </Link>
                        ))}

                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden flex items-center justify-between">
                    <div className="flex items-center border border-slate-300 backdrop-blur-md shadow-sm rounded-full px-4 py-2">
                        <div className="cursor-pointer hover:text-indigo-600 transition font-medium mr-2">
                            Portfolio
                        </div>
                        <ThemeToggle />
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 rounded-full border border-slate-300 backdrop-blur-md shadow-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="absolute top-16 left-0 right-0 md:hidden">
                        <div className="border border-slate-300 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 shadow-lg rounded-2xl py-2 px-2">
                            {sections.map((id) => (
                                <Link
                                    key={id}
                                    href={`#${id}`}
                                    className={`block px-4 py-3 rounded-lg transition ${active === id
                                            ? `bg-slate-100 dark:bg-slate-800 ${theme == "dark" ? "text-blue-400" : "text-pink-600"}`
                                            : "hover:bg-slate-100 dark:hover:bg-slate-800"
                                        }`}
                                    onClick={(e) => handleLinkClick(e, id)}
                                >
                                    {id.charAt(0).toUpperCase() + id.slice(1)}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}