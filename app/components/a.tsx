"use client";

import React, { useState, useEffect } from "react";

const Timer = ({ title }) => {
    const [seconds, setSeconds] = useState(0);

    const [isActive, setIsActive] = useState(false);

    const toggle = () => {
        setIsActive(!isActive);
    }

    const reset = () => {
        setSeconds(0);
        setIsActive(false);
    };

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds((seconds) => (seconds + 1));
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        }
    }, [isActive, seconds])

    return (
        <div>
            <h2>{title}</h2>
            <button onClick={toggle}>{isActive ? "一時停止" : "開始"}</button>
        </div>
    )

}