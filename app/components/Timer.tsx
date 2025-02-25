"use client";
// src/components/Timer.tsx
import React, { useEffect, useState } from 'react';

const Timer: React.FC = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div className="p-4 bg-gray-100 rounded-md">
            <p className="text-xl font-bold">タイマー: {formatTime(time)}</p>
        </div>
    );
};

export default Timer;
