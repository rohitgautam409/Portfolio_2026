import React from 'react'
import { AppStoreIcon, PhotosIcon, MailIcon, FilesIcon } from './DockIcons'

export default function Dock() {
    return (
        <div className="w-full h-[108px] rounded-[36px] bg-neutral-900/30 border border-white/30 flex items-center justify-between px-4 shadow-2xl shadow-black/30">
            <AppStoreIcon />
            <PhotosIcon />
            <MailIcon />
            <FilesIcon />
        </div>
    )
}
