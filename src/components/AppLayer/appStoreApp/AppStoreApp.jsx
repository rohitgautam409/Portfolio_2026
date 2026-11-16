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

export default function AppStoreApp({ onClose }) {
    return (
        <motion.div
            layoutId="appstore-app"
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
                            App Store
                        </div>
                    </div>

                    <div className="w-[90px] flex items-center justify-end">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">
                            RG
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-none px-6 py-6 space-y-6">
                    <div className="rounded-3xl bg-gradient-to-tr from-blue-900 via-indigo-950 to-neutral-900 p-6 border border-blue-500/20 shadow-xl shadow-blue-950/40">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">Featured Showcase</span>
                        <h3 className="text-xl font-bold text-white mt-1 mb-2">Creative Portfolio 3D</h3>
                        <p className="text-xs text-white/70 leading-relaxed mb-4">
                            Interactive iPhone 17 Pro simulation running high performance Three.js WebGL shaders and fluid iOS micro-interactions.
                        </p>
                        <button type="button" className="px-5 py-2 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider shadow-md hover:bg-white/90 active:scale-95 transition-all">
                            Installed
                        </button>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-lg font-bold text-white">Popular Apps</h3>
                            <span className="text-xs font-semibold text-blue-400">See All</span>
                        </div>

                        <div className="space-y-4">
                            {[
                                { name: 'Spotify Music', cat: 'Music & Podcasts', icon: '/Icons/spotify.png', get: 'OPEN' },
                                { name: 'Apple Notes', cat: 'Productivity', icon: '/Icons/ios_notes.png', get: 'OPEN' },
                                { name: 'Settings & Resume', cat: 'System & Profile', icon: '/Icons/ios_settings.png', get: 'OPEN' },
                            ].map((app, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 rounded-2xl bg-neutral-900/60 border border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-[12px] overflow-hidden bg-neutral-800 flex items-center justify-center">
                                            <img src={app.icon} alt={app.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-white">{app.name}</div>
                                            <div className="text-xs text-white/50">{app.cat}</div>
                                        </div>
                                    </div>
                                    <button type="button" className="px-4 py-1.5 rounded-full bg-neutral-800 text-blue-400 font-bold text-xs hover:bg-neutral-700 active:scale-95 transition-all">
                                        {app.get}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}
