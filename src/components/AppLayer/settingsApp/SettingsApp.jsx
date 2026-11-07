import React, { useState } from 'react'
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
    const [isComplete, setIsComplete] = useState(false)

    const handleDownload = () => {
        window.open('https://github.com/rohitgautam409', '_blank')
    }

    const handleClose = () => {
        setIsComplete(false)
        onClose?.()
    }

    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0.18,
                x: 90,
                y: -150,
                borderRadius: '70px',
            }}
            animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                borderRadius: '70px',
            }}
            exit={{
                opacity: 0,
                scale: 0.22,
                x: 90,
                y: -150,
                transition: { duration: 0.24, ease: [0.32, 0, 0.67, 0] },
            }}
            transition={{
                duration: 0.38,
                ease: [0.16, 1, 0.3, 1],
            }}
            onAnimationComplete={() => setIsComplete(true)}
            className="absolute inset-0 z-30 flex h-full w-full select-none flex-col overflow-hidden bg-black text-white"
            style={{
                transformOrigin: '70% 38%',
                transform: isComplete ? 'none' : undefined,
            }}
        >
            <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-none">
                {/* Sticky Navigation Bar */}
                <div className="sticky top-0 z-20 flex items-center justify-between px-6 pb-3 pt-12 bg-black border-b border-white/5">
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

                    <div className="rounded-full border border-white/10 bg-neutral-800/80 px-5 py-1.5 text-center text-[15px] font-medium text-white shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                        Resume
                    </div>

                    <button
                        type="button"
                        onClick={handleDownload}
                        className="flex cursor-pointer items-center justify-center rounded-full bg-neutral-800 p-2 text-blue-400 ring-1 ring-white/10 active:scale-95 transition-all hover:bg-neutral-700"
                        title="Download Resume"
                    >
                        <Download className="h-5 w-5" />
                    </button>
                </div>

                {/* Resume Content Body */}
                <div className="px-6 pb-16 pt-4">
                    <div className="text-[34px] font-bold text-white tracking-tight">
                        Resume
                    </div>

                    <div className="mt-3">
                        <p className="text-[20px] font-semibold text-white">Rohit Gautam</p>
                        <div className="mt-1 flex items-center gap-2">
                            <p className="text-[14px] text-neutral-400">Software Engineer</p>
                            <span className="h-1 w-1 rounded-full bg-neutral-500"></span>
                            <p className="text-[14px] text-neutral-400">Occasionally Designer</p>
                        </div>
                        <p className="mt-1 text-[13px] text-neutral-400">New Delhi, India</p>
                    </div>

                    {/* Experience Section */}
                    <div className="mt-6">
                        <p className="mb-3 pl-1 text-[13px] font-bold tracking-wider uppercase text-neutral-400">
                            Experience
                        </p>
                        <div className="rounded-[22px] bg-neutral-900/90 border border-white/5 p-4 space-y-4">
                            {experience.map((item, index) => (
                                <div key={item.company} className="relative pl-8">
                                    {index !== experience.length - 1 && (
                                        <div className="absolute left-[11px] top-6 h-[calc(100%+12px)] w-[1.5px] bg-neutral-800" />
                                    )}

                                    <div className={`absolute left-0 top-0.5 flex h-6 w-6 items-center justify-center rounded-md text-[11px] font-bold ${item.accent}`}>
                                        {item.short}
                                    </div>

                                    <div className="ml-2">
                                        <p className="text-[14px] font-semibold text-white">{item.company}</p>
                                        <p className="mt-0.5 text-[12px] text-blue-400 font-medium">{item.role}</p>
                                        <p className="mt-0.5 text-[11px] text-neutral-400">{item.period}</p>
                                        <p className="mt-1.5 text-[12px] leading-relaxed text-neutral-300">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="mt-6">
                        <p className="mb-3 pl-1 text-[13px] font-bold tracking-wider uppercase text-neutral-400">
                            Education
                        </p>
                        <div className="rounded-[22px] bg-neutral-900/90 border border-white/5 p-4 space-y-3">
                            {education.map((item, index) => (
                                <div key={`${item.school}-${index}`} className="flex gap-3">
                                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-md bg-blue-600 text-[11px] font-bold text-white shrink-0">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[13px] font-medium text-white">{item.degree}</p>
                                        <p className="mt-0.5 text-[12px] text-neutral-400">{item.school}</p>
                                        <p className="mt-0.5 text-[11px] text-neutral-400">{item.period}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="mt-6">
                        <p className="mb-3 pl-1 text-[13px] font-bold tracking-wider uppercase text-neutral-400">
                            Skills & Technologies
                        </p>
                        <div className="rounded-[22px] bg-neutral-900/90 border border-white/5 p-4">
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full bg-neutral-800/90 px-3.5 py-1.5 text-[12px] font-medium text-neutral-200 border border-white/5 hover:border-white/10 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
