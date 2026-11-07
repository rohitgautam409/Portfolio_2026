import React from 'react'
import { motion } from 'framer-motion'

const handleImgError = (e) => {
    if (!e.currentTarget.dataset.retried) {
        e.currentTarget.dataset.retried = '1'
        const currentSrc = e.currentTarget.src
        if (currentSrc.includes('/Icons/')) {
            e.currentTarget.src = currentSrc.replace('/Icons/', '/icons/')
        } else if (currentSrc.includes('/icons/')) {
            e.currentTarget.src = currentSrc.replace('/icons/', '/Icons/')
        }
    }
}

const APPS = [
    {
        id: 'spotify',
        name: 'Spotify',
        icon: '/Icons/spotify.png',
        action: () => console.log('Spotify clicked'),
    },
    {
        id: 'notes',
        name: 'Notes',
        icon: '/Icons/ios_notes.png',
        action: () => console.log('Notes clicked'),
    },
    {
        id: 'settings',
        name: 'Settings',
        icon: '/Icons/ios_settings.png',
        action: () => console.log('Settings clicked'),
    },
]

export default function AppGrid({ activeApp, onOpenApp }) {
    return (
        <div className="w-full grid grid-cols-4 justify-items-center gap-y-4">


            <div className="flex flex-col items-center gap-[6px]">
                <motion.button
                    type="button"
                    whileTap={{ scale: 0.92 }}
                    transition={{ duration: 0.12 }}

                    className="w-[72px] h-[72px] rounded-[16px] overflow-hidden cursor-pointer select-none flex items-center justify-centerd outline-none focus:outline-none"
                >
                    <img
                        src='/Icons/spotify.png'
                        alt='spotify'
                        className="w-full h-full object-cover"
                        draggable={false}
                    />
                </motion.button>
                <span
                    className="text-white text-[14px] font-semibold text-center select-none"

                >
                    Spotify
                </span>
            </div>


            <div className="flex flex-col items-center gap-[6px]">
                <motion.button
                    type="button"
                    whileTap={{ scale: 0.92 }}
                    transition={{ duration: 0.12 }}

                    className="w-[72px] h-[72px] rounded-[16px] overflow-hidden cursor-pointer select-none flex items-center justify-centerd outline-none focus:outline-none"
                >
                    <img
                        src='/Icons/ios_notes.png'
                        alt='notes'
                        className="w-full h-full object-contain scale-115"
                        draggable={false}
                    />
                </motion.button>
                <span
                    className="text-white text-[14px] font-semibold text-center select-none"

                >
                    Notes
                </span>
            </div>



            <div className="flex flex-col items-center gap-[6px]">
                <motion.button
                    type="button"
                    onClick={() => onOpenApp?.('settings')}
                    whileTap={{ scale: 0.92 }}
                    transition={{ duration: 0.12 }}
                    className="w-[72px] h-[72px] rounded-[16px] overflow-hidden cursor-pointer select-none flex items-center justify-center outline-none focus:outline-none bg-[#2c2c2e]"
                >
                    <img
                        src='/Icons/ios_settings.png'
                        alt='settings'
                        className="w-full h-full object-contain scale-115 pointer-events-none"
                        draggable={false}
                    />
                </motion.button>
                <span
                    className="text-white text-[14px] font-semibold text-center select-none"
                >
                    Settings
                </span>
            </div>


        </div>
    )
}
