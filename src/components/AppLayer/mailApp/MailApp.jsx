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

export default function MailApp({ onClose }) {
    return (
        <motion.div
            layoutId="mail-app"
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
                            Mail
                        </div>
                    </div>

                    <div className="w-[90px] flex items-center justify-end">
                        <a href="mailto:rohitgautam409@gmail.com" className="p-2 rounded-full bg-blue-600 text-white cursor-pointer hover:bg-blue-500 transition-colors">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-none px-6 py-4">
                    <div className="mb-4">
                        <h2 className="text-2xl font-bold text-white tracking-tight">All Inboxes</h2>
                        <span className="text-xs text-white/50">3 Unread Messages</span>
                    </div>

                    <div className="space-y-3">
                        {[
                            {
                                from: 'Engineering Recruiting',
                                subject: 'Frontend & 3D Interactive Role',
                                preview: 'Hi Rohit, We were impressed by your Three.js interactive portfolio experience...',
                                time: '10:30 AM',
                                unread: true,
                            },
                            {
                                from: 'GitHub Notifications',
                                subject: 'Starred: rohitgautam409/Portfolio',
                                preview: 'Your repository has reached a new milestone. Keep building great web experiences!',
                                time: 'Yesterday',
                                unread: true,
                            },
                            {
                                from: 'Collaborator',
                                subject: 'Design System & Micro-animations',
                                preview: 'The spring physics on the iOS 17 Pro model look incredible. Are you available for a chat?',
                                time: 'Nov 14',
                                unread: false,
                            },
                        ].map((mail, idx) => (
                            <div key={idx} className="p-4 rounded-2xl bg-neutral-900 border border-white/10 relative cursor-pointer hover:bg-neutral-800/80 transition-colors">
                                {mail.unread && (
                                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-500" />
                                )}
                                <div className="text-sm font-bold text-white mb-0.5">{mail.from}</div>
                                <div className="text-xs font-semibold text-white/90 mb-1">{mail.subject}</div>
                                <div className="text-xs text-white/50 line-clamp-2 leading-relaxed">{mail.preview}</div>
                                <div className="text-[10px] text-white/40 mt-2 font-medium">{mail.time}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}
