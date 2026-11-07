import React from 'react'
import GithubWidget from './GithubWidget'
import WeatherWidget from './WeatherWidget'

export default function WidgetsRow() {
    return (
        <div className="flex items-center justify-center gap-3.5 w-full">
            <GithubWidget />
            <WeatherWidget />
        </div>
    )
}
