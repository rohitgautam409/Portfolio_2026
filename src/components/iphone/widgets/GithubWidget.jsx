import React from 'react'
import { motion } from 'framer-motion'

export default function GithubWidget() {
    const grid = [
        [4, 0, 0, 0, 3, 4, 0],
        [3, 4, 4, 0, 1, 4, 3],
        [1, 4, 4, 4, 3, 4, 4],
        [3, 4, 0, 0, 3, 1, 0],
        [4, 4, 0, 0, 4, 4, 0],
        [4, 0, 0, 4, 4, 3, 0],
        [0, 1, 0, 0, 1, 1, 1],
    ];

    const getCellColor = (level) => {
        switch (level) {
            case 4: return 'bg-[#9BE9A8]';
            case 3: return 'bg-[#40C463]';
            case 1: return 'bg-[#216E39]';
            default: return 'bg-[#28282b]';
        }
    };

    return (
        <motion.a
            href="https://github.com/rohitgautam409"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ opacity: 0.90, scale: 0.95 }}
            transition={{ duration: 0.12 }}
            className="flex flex-col items-center gap-1.5 cursor-pointer select-none no-underline"
        >
            <div className="w-[188px] h-[188px] rounded-[26px] bg-[#1f1f22] border border-white/10 p-4 flex items-center justify-center shadow-lg shadow-black/40">
                <div className="grid grid-cols-7 rounded-[26px] overflow-hidden gap-1 w-full h-full p-0.5">
                    {grid.map((row, rIdx) =>
                        row.map((val, cIdx) => (
                            <div
                                key={`${rIdx}-${cIdx}`}
                                className={` rounded-[4px] transition-all duration-300 ${getCellColor(val)}`}
                            />
                        ))
                    )}
                </div>
            </div>

            <span className="text-[16px] font-bold text-white/95 tracking-tight drop-shadow-md">
                GitHub
            </span>
        </motion.a>
    )
}
