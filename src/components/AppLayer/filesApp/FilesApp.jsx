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


const experience = [
    {
        company: 'CRED',
        role: 'Software Engineer, Frontend',
        period: 'Nov 2022 — Mar 2026',
        description:
            'Spearheaded development across 10+ lines of business and shipped products to 11.6M monthly users,working closely with product design,engineering and QA.',
        accent: 'bg-red-500',
        short: 'C',
    },
    {
        company: 'FrontRow',
        role: 'Software Engineer, Frontend',
        period: 'May 2022 — Oct 2022 · Hybrid',
        description:
            'Built core features like gamification and live class experiences with a strong focus on robust UI systems and smooth user flows.',
        accent: 'bg-white text-black',
        short: 'F',
    },
    {
        company: 'Myntra',
        role: 'Frontend Engineer',
        period: 'Jan 2021 — Apr 2022',
        description:
            'Improved product discoverability and optimized the mobile shopping experience through responsive and performant UI work.',
        accent: 'bg-pink-500',
        short: 'M',
    },
    {
        company: 'Lishash',
        role: 'Mobile Engineer Intern',
        period: 'May 2021 — Nov 2021 · Remote',
        description:
            'Designed and developed critical features in a social networking app, including secure login, profile experience, and interactive user flows.',
        accent: 'bg-cyan-500',
        short: 'L',
    },
    {
        company: '# Studio',
        role: 'UI/UX Developer & Designer',
        period: 'Mar 2020 — Present · Remote',
        description:
            'Designed and shipped Android apps, built product concepts, and created polished user experiences across mobile and web interfaces.',
        accent: 'bg-violet-500',
        short: '#',
    },
]

const education = [
    {
        degree: 'B.Tech, Electronics & Communication Engineering',
        school: 'U.S.I.C.T, GGSIPU',
        period: 'Jun 2018 — Jun 2022 · Delhi',
    },
    {
        degree: 'B.9 CGPA · Gold Medalist',
        school: 'University Rank Holder',
        period: 'Academic Excellence',
    },
]

const skills = [
    'Languages: JavaScript, TypeScript, Python, C++, C#',
    'Frameworks: React, Next.js, Node.js, Express',
    'Databases: PostgreSQL, MongoDB, Firebase, Supabase',
    'Design: Figma, Adobe Illustrator, Photoshop',
]

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
                className="flex flex-col h-full w-full overflow-hidden"
            >


                <div className='overflow-y-auto scrollbar-none'>
                    <div className="sticky top-20 mt-20 z-20 flex justify-between items-center px-6 py-2">
                        <button
                            type='button'
                            className="flex items-center gap-4 font-semibold text-white cursor-pointer" >
                            <button
                                type='button'
                                className="p-4 rounded-full bg-neutral-300/20" onClick={onClose}>
                                <ChevronLeft className="h-6 w-6 text-blue-400" />
                            </button>

                        </button>

                        <div className="rounded-full border border-white/40 bg-neutral-300/10 px-6 py-2 text-center text-[20px] font-semibold text-white ">
                            Resume
                        </div>

                        <button type='button' className="flex cursor-pointer items-center justify-center rounded-full bg-neutral-300/20 p-4 text-blue-400 ring-1 ring-white/10">
                            <Download className="h-6 w-6" />
                        </button>

                    </div>

                    <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-none pb-14">
                        <div className="px-6 mt-6">
                            <div className="relative flex justify-between items-center">
                                <div className="text-[42px] font-semibold text-white">
                                    Resume
                                </div>

                                <div className="absolute right-2 top-2 w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-white/20 shadow-lg">
                                    <img
                                        src="/profile-2.jpg"
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <p className="text-[26px] font-semibold text-white">Rohit Gautam</p>
                                <div className="mt-1 flex items-center gap-2">
                                    <p className="text-[18px] text-neutral-400">Software Engineer</p>
                                    <span className="h-1 w-1 rounded-full bg-neutral-400"></span>
                                    <p className="text-[18px] text-neutral-400">Occasionally Designer</p>
                                </div>
                                <p className="mt-1 text-[18px] text-neutral-400">New Delhi, India</p>
                            </div>

                            <div className="mt-8 mb-4">
                                <p className="pl-1 text-[22px] font-bold text-neutral-400 tracking-tight">Experience</p>
                            </div>



                            <div className="rounded-[26px] bg-neutral-900 border border-white/20 p-5 shadow-xl">
                                <div className="space-y-6">
                                    {experience.map((item, index) => (
                                        <div key={item.company} className="relative">
                                            {index !== experience.length - 1 && (
                                                <div className="absolute left-[19px] top-11 bottom-0 w-[2px] bg-neutral-700/60" />
                                            )}

                                            <div className={`absolute left-0 top-0.5 flex h-10 w-10 items-center justify-center rounded-xl text-[15px] font-black shadow-md ${item.accent}`}>
                                                {item.short}
                                            </div>

                                            <div className="pl-16">
                                                <h4 className="text-[22px] font-bold text-white tracking-tight">{item.company}</h4>
                                                <p className="mt-1 text-[18px] font-semibold text-neutral-300/80">{item.role}</p>
                                                <p className="mt-0.5 text-[16px] font-medium text-neutral-500">{item.period}</p>
                                                <p className="mt-2.5 text-[18px] leading-relaxed text-neutral-300/90">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 mb-4">
                                <p className="pl-1 text-[22px] font-bold text-neutral-400 tracking-tight">Education</p>
                            </div>

                            <div className="rounded-[26px] bg-neutral-900 border border-white/20 p-5 shadow-xl">
                                <div className="space-y-6">
                                    {education.map((item, index) => (
                                        <div key={`${item.school}-${index}`} className="flex items-start gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-[16px] font-black text-white shadow-md">
                                                {index + 1}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-[20px] font-bold text-white tracking-tight leading-snug">{item.degree}</h4>
                                                <p className="mt-1 text-[16px] font-semibold text-neutral-300/80">{item.school}</p>
                                                <p className="mt-0.5 text-[15px] font-medium text-neutral-500">{item.period}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 mb-4">
                                <p className="pl-1 text-[22px] font-bold text-neutral-400 tracking-tight">Skills</p>
                            </div>

                            <div className="rounded-[26px] bg-neutral-900 border border-white/20 p-5 shadow-xl">
                                <div className='flex flex-col'>
                                    <h3 className='text-[16px] text-neutral-400/80'>LANGUAGES</h3>
                                    <p className='text-white font-semibold text-[22px]'>JavaScript,TypeScript, Python, C++, C#</p>
                                    <div className='my-4 border-neutral-600 border-t-2'></div>
                                </div>
                                <div className='flex flex-col'>
                                    <h3 className='text-[16px] text-neutral-400/80'>FRAMEWORKS</h3>
                                    <p className='text-white font-semibold text-[22px]'>React,Tailwind,Threejs,Express</p>
                                    <div className='my-4 border-neutral-600 border-t-2'></div>
                                </div>
                                <div className='flex flex-col'>
                                    <h3 className='text-[16px] text-neutral-400/80'>DATABASES</h3>
                                    <p className='text-white font-semibold text-[22px]'>MongoDB,Postgres,SQL</p>
                                    <div className='my-4 border-neutral-600 border-t-2'></div>
                                </div>
                                <div className='flex flex-col'>
                                    <h3 className='text-[16px] text-neutral-400/80'>LIBRARIES</h3>
                                    <p className='text-white font-semibold text-[22px]'>R3F,Nextjs,Prisma,Mongoose</p>

                                </div>
                            </div>

                            <button
                                type="button"
                                className="mt-8 mb-6 flex w-full items-center justify-center gap-3 rounded-[26px] bg-blue-600 px-6 h-16 text-[22px] font-bold text-white tracking-tight shadow-lg shadow-blue-600/30 hover:bg-blue-500 active:scale-[0.98] transition-all cursor-pointer"
                            >
                                <Download className="h-6 w-6 stroke-[3]" />
                                <span>Download PDF</span>
                            </button>
                        </div>
                    </div>




                </div>





            </motion.div>
        </motion.div>
    )
}
