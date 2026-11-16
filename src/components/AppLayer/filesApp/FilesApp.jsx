import React from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'


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

export default function FilesApp({ onClose }) {
    const folders = [
        { name: 'Projects', items: '12 items', color: 'text-blue-400' },
        { name: '3D Models & Assets', items: '8 items', color: 'text-indigo-400' },
        { name: 'Certifications', items: '4 files', color: 'text-emerald-400' },
        { name: 'Source Code', items: '34 items', color: 'text-purple-400' },
    ]

    return (
        <motion.div
            layoutId="files-app"
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
                transition={{ duration: 0.3 }}
                className=" flex flex-col h-full w-full overflow-hidden bg-black"
            >
                <div className="sticky mt-24 z-20 flex justify-between items-center px-6 py-2">
                    <div
                        className="flex items-center gap-4 font-semibold text-white cursor-pointer" >
                        <button
                            type='button'
                            className="p-4 rounded-full bg-neutral-300/20" onClick={onClose}>
                            <ChevronLeft className="h-6 w-6 text-blue-400" />
                        </button>

                    </div>

                    <div className="rounded-full border border-white/40 bg-neutral-300/10 px-6 py-2 text-center text-[20px] font-semibold text-white ">
                        Resume
                    </div>

                    <button type='button' className="flex cursor-pointer items-center justify-center rounded-full bg-neutral-300/20 p-4 text-blue-400 ring-1 ring-white/10">
                        <Download className="h-6 w-6" />
                    </button>

                </div>

                <div className='mb-12'>
                    <div className='px-6 mt-6'>
                        <div className='relative flex justify-between items-center'>
                            <div className='text-[42px] font-semibold text-white'>
                                Resume
                            </div>

                            <div className="absolute right-0 top-2 w-[120px] h-[120px] rounded-full overflow-hidden">
                                <img
                                    src="/profile-2.jpg"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                        </div>
                        <div className="mt-8">
                            <p className="text-[26px] font-semibold text-white">Rohit Gautam</p>
                            <div className="mt-1 flex items-center gap-2">
                                <p className="text-[18px] text-neutral-400">Software Engineer</p>
                                <span className="h-1 w-1 rounded-full bg-neutral-400"></span>
                                <p className="text-[18px] text-neutral-400">Occasionally Designer</p>
                            </div>
                            <p className="mt-1 text-[18px] text-neutral-400">New Delhi, India</p>
                        </div>
                    </div>
                </div>




            </motion.div>
        </motion.div>
    )
}
