import React from 'react'
import SearchPill from './SearchPill'
import Dock from './Dock'
import HomeIndicator from './HomeIndicator'

export default function DockSection({ onOpenApp }) {
    return (
        <div className="flex flex-col items-center gap-5 w-full">
            <SearchPill />
            <Dock onOpenApp={onOpenApp} />
        </div>
    )
}
