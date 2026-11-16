import React from 'react'
import { motion } from 'framer-motion'

function ChevronLeft({ className = "h-5 w-5" }) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
    )
}

export default function PhotosApp({ onClose }) {
    const photos = [
        { label: 'WebGL Shader', grad: 'from-purple-600 via-pink-600 to-amber-500' },
        { label: '3D Render', grad: 'from-blue-600 via-cyan-500 to-teal-400' },
        { label: 'Cyberpunk Tokyo', grad: 'from-fuchsia-600 via-indigo-600 to-blue-900' },
        { label: 'Minimalist Architecture', grad: 'from-neutral-700 via-neutral-500 to-neutral-400' },
        { label: 'Deep Space', grad: 'from-indigo-950 via-purple-900 to-black' },
        { label: 'Sunset Horizon', grad: 'from-orange-600 via-rose-600 to-purple-800' },
    ]

    return (
        <motion.div
            layoutId="photos-app"
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
            }}
            className="absolute inset-0 z-30 flex h-full w-full select-none flex-col overflow-hidden bg-black text-white rounded-[70px]"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex-1 flex flex-col h-full w-full overflow-hidden bg-black"
            >
                <div className="sticky top-10 z-20 flex items-center px-6 pb-3 pt-12 border-b border-white/5">
                    <div className="w-[90px] flex items-center justify-start">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex items-center gap-2 text-md font-semibold text-white cursor-pointer group active:scale-95 transition-transform"
                        >
                            <div className="p-2 rounded-full bg-neutral-800 group-hover:bg-neutral-700 transition-colors">
                                <ChevronLeft className="h-5 w-5 text-blue-400" />
                            </div>
                            <span className="text-white text-[15px]">Back</span>
                        </button>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                        <div className="rounded-full border border-white/10 bg-neutral-800/80 px-5 py-1.5 text-center text-[15px] font-medium text-white shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                            Photos
                        </div>
                    </div>

                    <div className="w-[90px] flex items-center justify-end">
                        <span className="text-xs font-semibold text-blue-400">Select</span>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-none px-6 py-4">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-semibold text-white">Library</span>
                        <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-semibold text-white/50">Albums</span>
                        <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-semibold text-white/50">Favorites</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pb-8">
                        {photos.map((photo, i) => (
                            <div key={i} className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg border border-white/5 cursor-pointer">
                                <div className={`w-full h-full bg-gradient-to-tr ${photo.grad} group-hover:scale-105 transition-transform duration-300 flex items-end p-3`}>
                                    <span className="text-xs font-bold text-white drop-shadow-md">{photo.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}
