import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import StatusBar from './StatusBar'
import WidgetsRow from './widgets/WidgetsRow'
import AppGrid from './AppGrid'
import DockSection from './dock/DockSection'
import HomeIndicator from './dock/HomeIndicator'
import SettingsApp from '../AppLayer/settingsApp/SettingsApp'

export default function IphoneScreen() {
    const [activeApp, setActiveApp] = useState(null)

    return (
        <div
            className="relative w-[480px] h-[1042px] rounded-[70px] overflow-hidden select-none text-white shadow-2xl pointer-events-auto bg-black bg-cover bg-center"
            style={{
                backgroundImage: "url('/iphone-17-pro/textures/ios26-silk.avif')",
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
            }}
        >
            {/* SHARED PERSISTENT STATUS BAR */}
            <div className="absolute inset-x-0 top-3.5 z-50 pointer-events-none px-3.5">
                <StatusBar />
            </div>

            {/* HOME SCREEN LAYER */}
            <motion.div
                animate={{
                    opacity: activeApp ? 0 : 1,
                    scale: activeApp ? 0.94 : 1,
                }}
                transition={{
                    duration: 0.28,
                    ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute inset-0 z-0 flex flex-col justify-between p-4 pt-14 pb-2"
                style={{
                    pointerEvents: activeApp ? 'none' : 'auto',
                }}
            >
                <div className="flex flex-col mt-6 w-full">
                    <WidgetsRow />
                </div>

                <div className="h-full w-full mt-6">
                    <AppGrid activeApp={activeApp} onOpenApp={setActiveApp} />
                </div>

                <div className="px-2 flex flex-col items-center">
                    <DockSection />

                </div>
            </motion.div>

            {/* APPLICATION LAYER */}
            <AnimatePresence>
                {activeApp === 'settings' && (
                    <SettingsApp onClose={() => setActiveApp(null)} />
                )}
            </AnimatePresence>
        </div>
    )
}
