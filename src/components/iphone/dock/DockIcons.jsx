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

export function AppStoreIcon() {
    return (
        <motion.div
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.12 }}
            className="w-[72px] h-[72px] rounded-[17px] overflow-hidden cursor-pointer select-none shadow-md shadow-black/20"
        >
            <img
                src="/Icons/ios_appstore.png"
                alt="App Store"
                onError={handleImgError}
                className="w-full h-full object-contain scale-125"
                draggable={false}
            />
        </motion.div>
    )
}

export function PhotosIcon() {
    return (
        <motion.div
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.12 }}
            className="w-[72px] h-[72px] rounded-[17px] overflow-hidden cursor-pointer select-none shadow-md shadow-black/20 bg-white"
        >
            <img
                src="/Icons/ios_photos.png"
                alt="Photos"
                onError={handleImgError}
                className="w-full h-full object-cover"
                draggable={false}
            />
        </motion.div>
    )
}

export function MailIcon() {
    return (
        <motion.div
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.12 }}
            className="w-[72px] h-[72px] rounded-[17px] overflow-hidden cursor-pointer select-none shadow-md shadow-blue-500/20"
        >
            <img
                src="/Icons/Mail_(iOS).svg"
                alt="Mail"
                onError={handleImgError}
                className="w-full h-full object-cover"
                draggable={false}
            />
        </motion.div>
    )
}

export function FilesIcon() {
    return (
        <motion.div
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.12 }}
            className="w-[72px] h-[72px] rounded-[17px] overflow-hidden cursor-pointer select-none shadow-md shadow-black/20 bg-white"
        >
            <img
                src="/Icons/ios_file.png"
                alt="Files"
                onError={handleImgError}
                className="w-full h-full object-cover"
                draggable={false}
            />
        </motion.div>
    )
}

export function NotesIcon() {
    return (
        <motion.div
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.12 }}
            className="w-[68px] h-[68px] rounded-[17px] overflow-hidden cursor-pointer select-none shadow-md shadow-black/20"
        >
            <img
                src="/Icons/ios_notes.png"
                alt="Notes"
                onError={handleImgError}
                className="w-full h-full object-cover"
                draggable={false}
            />
        </motion.div>
    )
}

