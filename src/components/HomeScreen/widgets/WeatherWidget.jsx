import React from 'react'
import { motion } from 'framer-motion'


export default function WeatherWidget() {
    return (
        <motion.div
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col items-center gap-1.5 cursor-pointer select-none"
        >
            <div className="w-[188px] h-[188px] rounded-[26px] bg-gradient-to-br from-[#5c7290] to-[#40536c] border border-white/15 p-4 flex flex-col justify-between shadow-lg shadow-black/30 text-white">
                <div className="flex items-center gap-1">
                    <span className="text-[18px] font-semibold tracking-tight text-white drop-shadow-sm">
                        New Delhi
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-navigation preview-icon"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
                </div>

                <div className="text-[48px] font-light leading-none tracking-tighter my-0.5 drop-shadow-sm">
                    23°
                </div>

                <div className="flex flex-col gap-0.5">
                    <div className="flex flex-col text-[16px] font-medium text-white/95">
                        <svg className="w-5 h-5 fill-white/90" viewBox="0 0 24 24">
                            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                        </svg>
                        <span>Cloudy</span>
                    </div>

                    <div className="text-[14px] font-medium text-white/80 tracking-tight">
                        H:29° L:21°
                    </div>
                </div>
            </div>

            <span className="text-[16px] font-bold  text-white/95 tracking-tight drop-shadow-md">
                Weather
            </span>
        </motion.div>
    )
}
