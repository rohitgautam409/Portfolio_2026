import React from 'react'
import StatusBar from './StatusBar'
import WidgetsRow from './widgets/WidgetsRow'
import AppGrid from './AppGrid'
import DockSection from './dock/DockSection'

export default function IphoneScreen() {
    return (<>

        <div
            className="w-[432px] h-[937px] rounded-[54px] overflow-hidden select-none relative text-white flex flex-col justify-between p-4 pointer-events-auto shadow-2xl [backface-visibility:hidden]"
            style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
            }}
        >
            <div className="flex flex-col gap-6 w-full">
                <StatusBar />
                <WidgetsRow />

            </div>
            <div className=' h-full w-full mt-6'>
                <AppGrid />
            </div>

            <div className='px-2'>
                <DockSection />
            </div>
        </div>

    </>
    )
}
