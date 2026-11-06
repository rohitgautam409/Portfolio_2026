import React from 'react'
import GithubWidget from './GithubWidget'
import WeatherWidget from './WeatherWidget'

export default function WidgetsRow() {
    return (
        <div className="flex items-center justify-between gap-4  w-full mt-2">
            <GithubWidget />
            <WeatherWidget />
        </div>
    )
}
