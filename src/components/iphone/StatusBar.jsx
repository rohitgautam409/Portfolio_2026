import React from 'react'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc)
dayjs.extend(timezone)

export default function StatusBar() {
    const istTime = dayjs().tz('Asia/Kolkata').format('hh:mm');

    return (
        <div className="flex items-center mt-3 justify-between text-[16px] font-semibold leading-none  px-8 z-20">
            <div>
                <span className="tracking-tight flex items-center">{istTime}</span>
            </div>

            <div className="flex items-center gap-2">
                <svg className="w-[22px] h-[16px] fill-white block" viewBox="0 0 18 14">
                    <rect x="1" y="9.5" width="2.8" height="4.5" rx="0.8" />
                    <rect x="5.2" y="6.5" width="2.8" height="7.5" rx="0.8" />
                    <rect x="9.4" y="3.5" width="2.8" height="10.5" rx="0.8" />
                    <rect x="13.6" y="0.5" width="2.8" height="13.5" rx="0.8" />
                </svg>

                <svg className="w-[22px] h-[16px] fill-white block" viewBox="0 0 16 12">
                    <path d="M8 9.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM2.8 5.7a7.4 7.4 0 0110.4 0 .9.9 0 001.3-1.3 9.2 9.2 0 00-13 0 .9.9 0 001.3 1.3zm2.5 2.5a3.8 3.8 0 015.4 0 .9.9 0 001.3-1.3 5.6 5.6 0 00-8 0 .9.9 0 001.3 1.3z" />
                </svg>

                <div className="w-[26px] h-[13px] border-[1.5px] border-white rounded-[4px] p-[1.5px] flex items-center relative">
                    <div className="w-full h-full bg-white rounded-[1.8px]" />
                    <div className="w-[1.8px] h-[4.5px] bg-white rounded-r-[1px] absolute -right-[3px] top-1/2 -translate-y-1/2" />
                </div>
            </div>
        </div>
    )
}
