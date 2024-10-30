"use client";

import { useEffect, useState } from 'react';

const Preloader = () => {
    const chars = ["< a >", "@", " a."];
    const [currentChar, setCurrentChar] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentChar((prev) => (prev + 1) % chars.length);
        }, 1300);

        return () => clearInterval(interval);
    }, [chars.length]);

    return (
        <div className="fixed flex justify-center items-center w-screen h-screen z-20 bg-gray-900 transition-transform animate-fadeOut">
            <div className="overflow-hidden h-20 w-40 relative bg-gray-900">
                {chars.map((char, index) => (
                    <span
                        key={index}
                        className={`absolute inset-0 flex justify-center items-center font-semibold italic text-6xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400
                            transition-transform ${index === currentChar ? "animate-rise" : "translate-y-full"}`}
                    >
                        {char}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Preloader;
