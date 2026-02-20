"use client";

import { useEffect, useState } from "react";

type Props = {
    words: string[];
    speed?: number;
    deleteSpeed?: number;
    pause?: number;
};

export default function TypingText({
    words,
    speed = 100,
    deleteSpeed = 50,
    pause = 1500,
}: Props) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (index === words.length) setIndex(0);

        if (!deleting && subIndex === words[index].length) {
            const timeout = setTimeout(() => setDeleting(true), pause);
            return () => clearTimeout(timeout);
        }

        if (deleting && subIndex === 0) {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (deleting ? -1 : 1));
        }, deleting ? deleteSpeed : speed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, deleting, words, speed, deleteSpeed, pause]);

    return (
        <span>
            {words[index].substring(0, subIndex)}
            <span className="animate-pulse text-gray-500">|</span>
        </span>
    );
}