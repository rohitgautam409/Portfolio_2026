import React from 'react'
import { AppStoreIcon, PhotosIcon, MailIcon, FilesIcon } from './DockIcons'

export default function Dock() {
    return (
        <div className="w-full h-[98px] rounded-[36px] bg-neutral-900/30 border border-black/20 flex items-center justify-between px-3.5 shadow-2xl shadow-black/30">
            <AppStoreIcon />
            <PhotosIcon />
            <MailIcon />
            <FilesIcon />
        </div>
    )
}
