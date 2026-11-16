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
        <div className="w-full grid grid-cols-4 justify-items-center gap-y-4 ">


            <div className="flex flex-col items-center gap-[6px]">
                <motion.button
                    type="button"
                    layoutId="spotify-app"
                    onClick={() => onOpenApp?.('spotify')}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="w-[80px] h-[80px] rounded-[16px] overflow-hidden cursor-pointer select-none flex items-center justify-center outline-none focus:outline-none"
                >
                    <img
                        src='/Icons/spotify.png'
                        alt='spotify'
                        className="w-full h-full object-cover"
                        draggable={false}
                    />
                </motion.button>
                <span
                    className="text-[16px] font-bold text-white/95 tracking-tight drop-shadow-md"
                >
                    Spotify
                </span>
            </div>

            <div className="flex flex-col items-center gap-[6px]">
                <motion.button
                    type="button"
                    layoutId="notes-app"
                    onClick={() => onOpenApp?.('notes')}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="w-[80px] h-[80px] rounded-[16px] overflow-hidden cursor-pointer select-none flex items-center justify-center outline-none focus:outline-none"
                >
                    <img
                        src='/Icons/ios_notes.png'
                        alt='notes'
                        className="w-full h-full object-contain scale-115"
                        draggable={false}
                    />
                </motion.button>
                <span
                    className="text-[16px] font-bold text-white/95 tracking-tight drop-shadow-md"
                >
                    Notes
                </span>
            </div>



            <div className="flex flex-col items-center gap-[6px]">
                <motion.button
                    type="button"
                    layoutId="settings-app"
                    onClick={() => onOpenApp?.('settings')}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="w-[80px] h-[80px] rounded-[16px] overflow-hidden cursor-pointer select-none flex items-center justify-center outline-none focus:outline-none bg-[#2c2c2e]"
                >
                    <img
                        src='/Icons/ios_settings.png'
                        alt='settings'
                        className="w-full h-full object-contain scale-115 pointer-events-none"
                        draggable={false}
                    />
                </motion.button>
                <span
                    className="text-[16px] font-bold text-white/95 tracking-tight drop-shadow-md"
                >
                    Settings
                </span>
            </div>


        </div>
    )
}
