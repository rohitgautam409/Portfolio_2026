import React from 'react'
import StatusBar from './StatusBar'
import WidgetsRow from './widgets/WidgetsRow'
import DockSection from './dock/DockSection'

export default function IphoneScreen() {
    return (<>

        <div
            className="w-[393px] h-[852px] rounded-[54px] overflow-hidden select-none relative text-white flex flex-col justify-between p-6 pointer-events-auto shadow-2xl [backface-visibility:hidden]"
            style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
            }}
        >
            <div className="flex flex-col gap-6 w-full">
                <StatusBar />
                <WidgetsRow />
            </div>

            <DockSection />
        </div>

    </>
    )
}
