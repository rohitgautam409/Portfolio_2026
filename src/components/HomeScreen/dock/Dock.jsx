import React from 'react'
import { AppStoreIcon, PhotosIcon, MailIcon, FilesIcon } from './DockIcons'

export default function Dock({ onOpenApp }) {
    return (
        <div className="w-full h-[116px] rounded-[36px] bg-neutral-900/30 backdrop-blur-xl border border-white/40 flex items-center justify-between px-4 mb-4 shadow-2xl shadow-black/30">
            <AppStoreIcon onClick={() => onOpenApp?.('appstore')} />
            <PhotosIcon onClick={() => onOpenApp?.('photos')} />
            <MailIcon onClick={() => onOpenApp?.('email')} />
            <FilesIcon onClick={() => onOpenApp?.('filestorage')} />
        </div>
    )
}
