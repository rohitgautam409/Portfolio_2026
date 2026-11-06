import React from 'react'
import { motion } from 'framer-motion'

export default function SearchPill() {
    return (
        <motion.div
            whileTap={{ scale: 0.95, opacity: 0.85 }}
            transition={{ duration: 0.12 }}
            className="flex items-center justify-center gap-1 px-3 py-1 rounded-full bg-gray-900/25 border border-white/20 shadow-md shadow-black/20  cursor-pointer select-none"
        >
            <svg
                className="w-4 h-4 fill-none stroke-white stroke-2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span className="text-[16px] font-semibold  text-white/95 tracking-tight">
                Search
            </span>
        </motion.div>
    )
}
