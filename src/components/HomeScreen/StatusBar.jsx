import React from 'react'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc)
dayjs.extend(timezone)

export default function StatusBar() {
    const istTime = dayjs().tz('Asia/Kolkata').format('hh:mm');

    return (
        <div className="h-7 flex mt-4 items-center justify-between text-[17px] font-semibold leading-none px-8 z-20 select-none">
            <div className="flex items-center">
                <span className="tracking-tight leading-none flex items-center">{istTime}</span>
            </div>

            <div className="flex items-center gap-2.5 h-full">
                {/* Cellular Signal Icon */}
                <svg className="w-[20px] h-[15px] fill-white block" viewBox="0 0 18 14">
                    <rect x="1" y="9.5" width="2.8" height="4.5" rx="0.8" />
                    <rect x="5.2" y="6.5" width="2.8" height="7.5" rx="0.8" />
                    <rect x="9.4" y="3.5" width="2.8" height="10.5" rx="0.8" />
                    <rect x="13.6" y="0.5" width="2.8" height="13.5" rx="0.8" />
                </svg>

                {/* WiFi Icon */}
                <svg className="w-[20px] h-[15px] fill-white block" viewBox="0 0 16 12">
                    <path d="M8 9.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM2.8 5.7a7.4 7.4 0 0110.4 0 .9.9 0 001.3-1.3 9.2 9.2 0 00-13 0 .9.9 0 001.3 1.3zm2.5 2.5a3.8 3.8 0 015.4 0 .9.9 0 001.3-1.3 5.6 5.6 0 00-8 0 .9.9 0 001.3 1.3z" />
                </svg>

                {/* Battery Icon */}
                <div className="w-[28px] h-[15px] border-[1.5px] border-white rounded-[4.5px] p-[1.5px] flex items-center relative">
                    <div className="w-full h-full bg-white rounded-[2px]" />
                    <div className="w-[2px] h-[5px] bg-white rounded-r-[1px] absolute -right-[3.5px] top-1/2 -translate-y-1/2" />
                </div>
            </div>
        </div>
    )
}
