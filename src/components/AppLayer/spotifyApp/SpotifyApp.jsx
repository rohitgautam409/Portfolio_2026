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

export default function SpotifyApp({ onClose }) {
    return (
        <motion.div
            layoutId="spotify-app"
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
                className="flex-1 flex flex-col h-full w-full overflow-hidden bg-gradient-to-b from-emerald-950/40 via-black to-black"
            >
                <div className="sticky top-10 z-20 flex items-center px-6 pb-3 pt-12 border-b border-white/5">
                    <div className="w-[90px] flex items-center justify-start">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex items-center gap-2 text-md font-semibold text-white cursor-pointer group active:scale-95 transition-transform"
                        >
                            <div className="p-2 rounded-full bg-neutral-800 group-hover:bg-neutral-700 transition-colors">
                                <ChevronLeft className="h-5 w-5 text-emerald-400" />
                            </div>
                            <span className="text-white text-[15px]">Back</span>
                        </button>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                        <div className="rounded-full border border-white/10 bg-neutral-800/80 px-5 py-1.5 text-center text-[15px] font-medium text-white shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                            Spotify
                        </div>
                    </div>

                    <div className="w-[90px] flex items-center justify-end" />
                </div>

                <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-none px-6 py-6 flex flex-col items-center">
                    <div className="w-[260px] h-[260px] rounded-[28px] overflow-hidden shadow-2xl shadow-emerald-950/60 mt-4 mb-6 relative group">
                        <div className="w-full h-full bg-gradient-to-tr from-emerald-700 via-teal-900 to-neutral-900 flex flex-col items-center justify-center p-6 text-center">
                            <div className="w-20 h-20 rounded-full bg-black/40 flex items-center justify-center mb-3 backdrop-blur-md">
                                <svg className="w-10 h-10 fill-emerald-400" viewBox="0 0 24 24">
                                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                                </svg>
                            </div>
                            <span className="font-bold text-lg text-white">Focus & Create</span>
                            <span className="text-xs text-white/60">Developer Beats</span>
                        </div>
                    </div>

                    <div className="w-full text-center mb-6">
                        <h2 className="text-2xl font-bold text-white tracking-tight">Midnight City</h2>
                        <p className="text-sm font-medium text-white/60 mt-1">M83 • Hurry Up, We're Dreaming</p>
                    </div>

                    <div className="w-full max-w-[340px] mb-6">
                        <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                            <div className="w-2/5 h-full bg-emerald-400 rounded-full" />
                        </div>
                        <div className="flex justify-between text-[11px] font-medium text-white/50 mt-2">
                            <span>1:42</span>
                            <span>4:03</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-7 mb-8">
                        <button type="button" className="text-white/60 hover:text-white transition-colors cursor-pointer">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
                        </button>
                        <button type="button" className="w-16 h-16 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black flex items-center justify-center shadow-lg shadow-emerald-500/40 active:scale-95 transition-all cursor-pointer">
                            <svg className="w-7 h-7 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </button>
                        <button type="button" className="text-white/60 hover:text-white transition-colors cursor-pointer">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M16 6h2v12h-2zm-10.5 12l8.5-6-8.5-6z"/></svg>
                        </button>
                    </div>

                    <div className="w-full text-left">
                        <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest px-2 mb-3">Up Next</h3>
                        <div className="space-y-2">
                            {[
                                { title: 'Starboy', artist: 'The Weeknd, Daft Punk', duration: '3:50' },
                                { title: 'Something About Us', artist: 'Daft Punk', duration: '3:52' },
                                { title: 'Resonance', artist: 'HOME', duration: '3:32' },
                            ].map((track, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-bold text-white/40 w-4">{i + 1}</span>
                                        <div>
                                            <div className="text-sm font-semibold text-white">{track.title}</div>
                                            <div className="text-xs text-white/50">{track.artist}</div>
                                        </div>
                                    </div>
                                    <span className="text-xs text-white/40">{track.duration}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}
