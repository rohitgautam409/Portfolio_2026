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

export default function NotesApp({ onClose }) {
    return (
        <motion.div
            layoutId="notes-app"
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
                                <ChevronLeft className="h-5 w-5 text-amber-400" />
                            </div>
                            <span className="text-white text-[15px]">Back</span>
                        </button>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                        <div className="rounded-full border border-white/10 bg-neutral-800/80 px-5 py-1.5 text-center text-[15px] font-medium text-white shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                            Notes
                        </div>
                    </div>

                    <div className="w-[90px] flex items-center justify-end">
                        <span className="text-xs font-semibold text-amber-400">Edit</span>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-none px-6 py-4">
                    <div className="w-full bg-neutral-900/80 border border-white/10 rounded-2xl px-4 py-2.5 flex items-center gap-3 mb-5">
                        <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 1114 0z" />
                        </svg>
                        <span className="text-sm text-white/40">Search notes...</span>
                    </div>

                    <div className="text-xs font-bold text-white/40 uppercase tracking-widest px-2 mb-3">Pinned</div>

                    <div className="space-y-3 mb-6">
                        <div className="p-4 rounded-2xl bg-neutral-900 border border-white/10">
                            <h4 className="text-[16px] font-bold text-white">Portfolio Architecture & 3D WebGL</h4>
                            <div className="flex items-center gap-2 text-xs text-amber-400 font-medium mt-1 mb-2">
                                <span>Today</span>
                                <span>•</span>
                                <span>Three.js + CSS3D Projection</span>
                            </div>
                            <p className="text-xs text-white/60 leading-relaxed">
                                Built real-time mathematical perspective synchronization between WebGL camera and CSS3D matrix3d projections for sub-pixel screen alignment.
                            </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-neutral-900 border border-white/10">
                            <h4 className="text-[16px] font-bold text-white">Core Tech Stack</h4>
                            <div className="flex items-center gap-2 text-xs text-amber-400 font-medium mt-1 mb-2">
                                <span>Yesterday</span>
                                <span>•</span>
                                <span>Engineering</span>
                            </div>
                            <p className="text-xs text-white/60 leading-relaxed">
                                React 19, Tailwind CSS v4, Three.js, React Three Fiber, Framer Motion shared layoutId animations.
                            </p>
                        </div>
                    </div>

                    <div className="text-xs font-bold text-white/40 uppercase tracking-widest px-2 mb-3">Previous</div>

                    <div className="space-y-3">
                        <div className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5">
                            <h4 className="text-[15px] font-bold text-white">Creative Development Principles</h4>
                            <p className="text-xs text-white/50 mt-1">60fps smoothness, tactile spring dynamics, clean design systems.</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5">
                            <h4 className="text-[15px] font-bold text-white">Upcoming Features</h4>
                            <p className="text-xs text-white/50 mt-1">Interactive widgets, sound effects, expanded app ecosystem.</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}
