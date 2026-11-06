import React from 'react'
import SearchPill from './SearchPill'
import Dock from './Dock'
import HomeIndicator from './HomeIndicator'

export default function DockSection() {
    return (
        <div className="flex flex-col items-center gap-6 w-full">
            <SearchPill />
            <Dock />

        </div>
    )
}
