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

export function AppStoreIcon({ onClick }) {
    return (
        <motion.div
            layoutId="appstore-app"
            onClick={onClick}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="w-[80px] h-[80px] rounded-[17px] overflow-hidden cursor-pointer select-none shadow-md shadow-black/20"
        >
            <img
                src="/Icons/ios_appstore.png"
                alt="App Store"
                onError={handleImgError}
                className="w-full h-full object-contain scale-125 pointer-events-none"
                draggable={false}
            />
        </motion.div>
    )
}

export function PhotosIcon({ onClick }) {
    return (
        <motion.div
            layoutId="photos-app"
            onClick={onClick}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="w-[80px] h-[80px] rounded-[17px] overflow-hidden cursor-pointer select-none shadow-md shadow-black/20 bg-white"
        >
            <img
                src="/Icons/ios_photos.png"
                alt="Photos"
                onError={handleImgError}
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
            />
        </motion.div>
    )
}

export function MailIcon({ onClick }) {
    return (
        <motion.div
            layoutId="mail-app"
            onClick={onClick}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="w-[80px] h-[80px] rounded-[17px] overflow-hidden cursor-pointer select-none shadow-md shadow-blue-500/20"
        >
            <img
                src="/Icons/Mail_(iOS).svg"
                alt="Mail"
                onError={handleImgError}
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
            />
        </motion.div>
    )
}

export function FilesIcon({ onClick }) {
    return (
        <motion.div
            layoutId="files-app"
            onClick={onClick}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="w-[80px] h-[80px] rounded-[17px] overflow-hidden cursor-pointer select-none shadow-md shadow-black/20 bg-white"
        >
            <img
                src="/Icons/ios_file.png"
                alt="Files"
                onError={handleImgError}
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
            />
        </motion.div>
    )
}


