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

function Download({ className = "h-5 w-5" }) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
        </svg>
    )
}

const DEFAULT_EXPERIENCE = [
    {
        company: "Frontend & Creative Developer",
        role: "Software Engineer",
        period: "2024 - Present",
        description: "Designing and building high-performance 3D interactive web experiences using Three.js, React Three Fiber, and Framer Motion.",
        short: "FE",
        accent: "bg-blue-600 text-white",
    },
    {
        company: "Web & UI Engineering",
        role: "Frontend Developer",
        period: "2023 - 2024",
        description: "Architected responsive interfaces, optimized client bundle performance, and integrated fluid animations and micro-interactions.",
        short: "UI",
        accent: "bg-emerald-600 text-white",
    },
    {
        company: "Open Source & Projects",
        role: "Fullstack Contributor",
        period: "2022 - 2023",
        description: "Built developer portfolio showcases, component libraries, and collaborated on open source tooling.",
        short: "OS",
        accent: "bg-purple-600 text-white",
    },
]

const DEFAULT_EDUCATION = [
    {
        degree: "Bachelor of Technology - Computer Science",
        school: "APJ Abdul Kalam Technical University",
        period: "2020 - 2024",
    },
]

const DEFAULT_SKILLS = [
    "React.js & Next.js",
    "Three.js & React Three Fiber",
    "Tailwind CSS",
    "Framer Motion / Motion",
    "JavaScript (ES6+) & TypeScript",
    "WebGL & 3D Shaders",
    "Git & GitHub",
    "UI/UX Prototyping",
]

export default function SettingsApp({
    onClose,
    experience = DEFAULT_EXPERIENCE,
    education = DEFAULT_EDUCATION,
    skills = DEFAULT_SKILLS,
}) {
    const handleDownload = () => {
        window.open('https://github.com/rohitgautam409', '_blank')
    }

    const handleClose = () => {
        onClose?.()
    }

    return (
        <motion.div
            layoutId="settings-app"
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
                className="flex-1 flex flex-col h-full w-full overflow-hidden"
            >
                <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-none">
                    <div className="sticky top-10 z-20 flex items-center px-6 pb-3 pt-12 border-b border-white/5">
                        <div className="w-[90px] flex items-center justify-start">
                            <button
                                type="button"
                                onClick={handleClose}
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
                                Resume
                            </div>
                        </div>

                        <div className="w-[90px] flex items-center justify-end">
                            <button
                                type="button"
                                onClick={handleDownload}
                                className="flex cursor-pointer items-center justify-center rounded-full bg-neutral-800 p-2 text-blue-400 ring-1 ring-white/10 active:scale-95 transition-all hover:bg-neutral-700"
                                title="Download Resume"
                            >
                                <Download className="h-5 w-5" />
                            </button>
                        </div>
                    </div>



                </div>
            </motion.div>
        </motion.div>
    )
}
