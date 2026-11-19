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
                <div className="sticky top-20 mt-20 z-20 flex justify-between items-center px-6 py-2">
                    <button
                        type='button'
                        className="flex items-center gap-4 font-semibold text-white cursor-pointer" >
                        <button
                            type='button'
                            className="p-4 rounded-full bg-neutral-300/20" onClick={onClose}>
                            <ChevronLeft className="h-6 w-6 text-[#E8734A]" />
                        </button>

                    </button>
                </div>
                <div className='px-6 mt-6'>
                    <div className="text-[42px] font-semibold text-white">
                        New Message
                    </div>
                </div>
                <div className='mt-4 px-6'>
                    <div className='h-50 bg-neutral-800 rounded-[28px]'>
                        <div className='flex px-4 py-4 gap-14 items-center'>
                            <p className='text-neutral-500 text-[20px] font-semibold'>To</p>
                            <p className='text-white text-[22px] font-semibold'>Rohit Gautam</p>
                        </div>
                        <div className='border-neutral-600 border-t-2'></div>
                        <div className='flex px-4 py-4 gap-8 items-center'>
                            <p className='text-neutral-500 text-[20px] font-semibold'>Name</p>
                            <input type='text' placeholder='Your name' className='text-white text-[22px] placeholder-neutral-600 font-semibold w-72 overflow-hidden focus:outline-none focus:ring-0' />
                        </div>
                        <div className='border-neutral-600 border-t-2'></div>
                        <div className='flex px-4 py-4 gap-8 items-center'>
                            <p className='text-neutral-500 text-[20px] font-semibold'>Email</p>
                            <input type='text' placeholder='Your email' className='text-white text-[22px] placeholder-neutral-600 font-semibold w-72 overflow-hidden focus:outline-none focus:ring-0' />
                        </div>
                    </div>
                    <div className='mt-4 bg-neutral-800 rounded-[28px] p-4 h-64'>
                        <textarea placeholder='Write your message...' className='text-white text-[22px] resize-none placeholder-neutral-600 font-semibold w-full h-full scrollbar-none focus:outline-none focus:ring-0' />
                    </div>
                    <button
                        type="button"
                        className="mt-4 flex w-full items-center justify-center gap-3 rounded-[26px] bg-[#E8734A] px-6 h-16 text-[22px] font-bold text-white tracking-tight shadow-lg shadow-[#E8734A]-600/30  cursor-pointer"
                    >

                        <span>Download PDF</span>
                    </button>
                </div>


            </motion.div>
        </motion.div>
    )
}
