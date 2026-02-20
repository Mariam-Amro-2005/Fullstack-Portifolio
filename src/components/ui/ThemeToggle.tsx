"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition"
            suppressHydrationWarning
        >
            {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}