import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

function ChevronLeft({ className = "h-5 w-5" }) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
    )
}

const DEFAULT_PHOTOS = [
    {
        src: '/photos/15b643dd-9952-400d-beda-392a79ace2d8.jpg',
        title: 'Highlights',
    },
    {
        src: '/photos/232e673a-6011-4be1-a8c1-23a1de862461.jpg',
        title: 'Adventures',
    },
    {
        src: '/photos/4b3e16da-34cb-4f65-96b7-6782937def06.jpg',
        title: 'Lifestyle',
    },
    {
        src: '/photos/4d351a5e-c062-4582-a090-865323457306.jpg',
        title: 'Portraits',
    },
    {
        src: '/photos/55eb0851-6598-4db2-bfbe-adcedf51f331.jpg',
        title: 'Special Moments',
    },
    {
        src: '/photos/6a7b3063-62fd-4051-9302-fd1336caff49.jpg',
        title: 'Outdoors',
    },
    {
        src: '/photos/70e173d4-62d9-451f-9678-2603d9a287b3.jpg',
        title: 'Scenic Views',
    },
    {
        src: '/photos/a3a6e928-804a-4a4f-baac-985c409746ee.jpg',
        title: 'Memories',
    },
    {
        src: '/photos/b2235a23-a64c-465a-9d45-3f6ce6f1f3a7.jpg',
        title: 'Dosa & Delights',
    },
    {
        src: '/photos/dea11491-bc21-46ee-b134-295037dcc451.jpg',
        title: 'Travel & Views',
    },
    {
        src: '/photos/e67b185a-ad62-4e63-9557-f3b7ba66bad2.jpg',
        title: 'Wanderlust',
    },
    {
        src: '/photos/f6410fa3-3093-4c85-823c-1de46d8df978.jpg',
        title: 'Cafe Vibes',
    },
    {
        src: '/photos/ff05b7fe-feba-422d-9c3b-bf6cb36eb1fc.jpg',
        title: 'City Lights',
    },
    {
        src: '/photos/WhatsApp Image 2026-11-20 at 12.40.08 AM.jpeg',
        title: 'Gym & Fitness',
    },
    {
        src: '/photos/WhatsApp Image 2026-11-20 at 12.40.08 AM (1).jpeg',
        title: 'Friends & Memories',
    },
    {
        src: '/photos/WhatsApp Image 2026-11-20 at 12.40.08 AM (2).jpeg',
        title: 'Celebration',
    },
    {
        src: '/photos/WhatsApp Image 2026-11-20 at 12.40.08 AM (3).jpeg',
        title: 'Family & Roots',
    },
    {
        src: '/photos/WhatsApp Image 2026-11-20 at 12.40.09 AM.jpeg',
        title: 'Formal Style',
    },
    {
        src: '/photos/WhatsApp Image 2026-11-20 at 12.40.09 AM (1).jpeg',
        title: 'Casual Vibes',
    },
    {
        src: '/photos/WhatsApp Image 2026-11-20 at 12.40.09 AM (2).jpeg',
        title: 'Gathering',
    },
]
export default function PhotosApp({ onClose, photos = DEFAULT_PHOTOS }) {
    const [selectedIndex, setSelectedIndex] = useState(null)
    const [activeTab, setActiveTab] = useState('library')
    const filmstripRef = useRef(null)
    const thumbnailRefs = useRef([])

    const getPhotoSrc = (item) => (typeof item === 'string' ? item : item.src)
    const getPhotoTitle = (item, index) =>
        typeof item === 'object' && item.title ? item.title : `Photo ${index + 1}`

    const isDetailOpen = selectedIndex !== null && selectedIndex >= 0 && selectedIndex < photos.length

    useEffect(() => {
        if (isDetailOpen && filmstripRef.current && thumbnailRefs.current[selectedIndex]) {
            const container = filmstripRef.current
            const item = thumbnailRefs.current[selectedIndex]
            const targetScroll = item.offsetLeft - container.offsetWidth / 2 + item.offsetWidth / 2
            container.scrollTo({
                left: targetScroll,
                behavior: 'smooth',
            })
        }
    }, [selectedIndex, isDetailOpen])

    return (
        <motion.div
            layoutId="photos-app"
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
            }}
            className="absolute inset-0 z-30 flex h-full w-full select-none flex-col overflow-hidden bg-black text-white rounded-[70px]"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative flex-1 flex flex-col h-full w-full overflow-hidden bg-black"
            >
                {!isDetailOpen ? (
                    <>
                        <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-none pb-28">
                            <div className="sticky top-4 z-20 mt-4 flex justify-between items-center px-6 pt-16 pb-2 bg-black/60 backdrop-blur-md">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="flex items-center justify-center p-3.5 rounded-full bg-neutral-300/20 active:scale-95 transition-transform text-blue-400 cursor-pointer"
                                    aria-label="Back"
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </button>

                                <div className="rounded-full border backdrop-blur-xl border-white/30 bg-neutral-300/10 px-6 py-2 text-center text-[20px] font-semibold text-white">
                                    Photos
                                </div>

                                <div className="w-[48px]" />
                            </div>

                            <div className="px-6 mt-2 mb-4">
                                <div className="text-[42px] font-semibold text-white">
                                    Photos
                                </div>
                                <h4 className="text-neutral-400/80 text-[20px] font-semibold">
                                    {photos.length} {photos.length === 1 ? 'Item' : 'Items'}
                                </h4>
                            </div>

                            <div className="grid grid-cols-3 gap-[2px]">
                                {photos.map((item, index) => {
                                    const src = getPhotoSrc(item)
                                    return (
                                        <div
                                            key={index}
                                            onClick={() => setSelectedIndex(index)}
                                            className="aspect-square w-full overflow-hidden bg-neutral-900 cursor-pointer active:opacity-80 transition-opacity"
                                        >
                                            <img
                                                src={src}
                                                alt={`Photo ${index + 1}`}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="pointer-events-auto absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-7 rounded-full border backdrop-blur-xl border-white/30 bg-neutral-300/10 px-6 py-4 text-center text-[18px] font-semibold text-white shadow-2xl">
                            <button
                                type="button"
                                onClick={() => setActiveTab('library')}
                                className={`flex items-center gap-2.5 transition-colors cursor-pointer ${activeTab === 'library' ? 'text-white' : 'text-neutral-400 hover:text-white'
                                    }`}
                            >
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>Library</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveTab('collections')}
                                className={`flex items-center gap-2.5 transition-colors cursor-pointer ${activeTab === 'collections' ? 'text-white' : 'text-neutral-400 hover:text-white'
                                    }`}
                            >
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                                <span>Collections</span>
                            </button>
                        </div>
                    </>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="relative flex-1 flex flex-col h-full w-full justify-between overflow-hidden bg-black"
                    >
                        <div className="z-30 mt-4 flex items-center justify-between px-6 pt-16 pb-3">
                            <button
                                type="button"
                                onClick={() => setSelectedIndex(null)}
                                className="flex items-center justify-center p-3.5 rounded-full bg-neutral-300/20 active:scale-95 transition-transform text-blue-400 cursor-pointer"
                                aria-label="Back to grid"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>

                            <div className="flex flex-col items-center justify-center rounded-full border backdrop-blur-xl border-white/30 bg-neutral-300/10 px-7 py-2 text-center text-white shadow-lg">
                                <span className="text-[18px] font-semibold text-white leading-tight">
                                    {getPhotoTitle(photos[selectedIndex], selectedIndex)}
                                </span>
                                <span className="text-[16px] text-neutral-300 font-medium leading-tight mt-0.5">
                                    {selectedIndex + 1} of {photos.length}
                                </span>
                            </div>

                            <div className="w-[48px]" />
                        </div>

                        <div className="flex-1 flex items-center justify-center overflow-hidden">
                            <motion.img
                                key={selectedIndex}
                                initial={{ opacity: 0.7, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2 }}
                                src={getPhotoSrc(photos[selectedIndex])}
                                alt={getPhotoTitle(photos[selectedIndex], selectedIndex)}
                                className="w-full max-h-[86%] object-cover shadow-2xl"
                            />
                        </div>

                        <div className="z-30 w-full pb-8 pt-3">
                            <div
                                ref={filmstripRef}
                                style={{ paddingLeft: 'calc(50% - 24px)', paddingRight: 'calc(50% - 24px)' }}
                                className="flex items-center gap-1 overflow-x-auto scrollbar-none py-1.5 scroll-smooth"
                            >
                                {photos.map((item, index) => {
                                    const src = getPhotoSrc(item)
                                    const isCurrent = index === selectedIndex
                                    return (
                                        <button
                                            key={index}
                                            ref={(el) => (thumbnailRefs.current[index] = el)}
                                            type="button"
                                            onClick={() => setSelectedIndex(index)}
                                            className={`relative h-18 w-12 flex-shrink-0 overflow-hidden rounded-lg transition-all cursor-pointer ${isCurrent
                                                ? 'border-4 border-white opacity-100 scale-105 shadow-lg'
                                                : 'opacity-80 hover:opacity-85 border-2 border-transparent'
                                                }`}
                                        >
                                            <img
                                                src={src}
                                                alt={`Thumbnail ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    )
}
