"use client";

import { useEffect, useState } from "react";

const text = "Live The Adventure";

const TypingText = () => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        if (displayText.length === text.length) return;

        const timer = setTimeout(() => {
            setDisplayText(text.slice(0, displayText.length + 1));
        }, 70);

        return () => clearTimeout(timer);
    }, [displayText]);

    const isFinished = displayText.length === text.length;

    return (
        <>
            {displayText}
            {!isFinished && (
                <span className="ml-1 animate-pulse">|</span>
            )}
        </>
    );
};

export default TypingText;