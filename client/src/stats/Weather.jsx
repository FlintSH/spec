import React, { Component, useEffect, useState } from 'react'
import RainCloud from '../icons/RainCloud';

const Weather = () => {

    const [weather, setWeather] = useState([{}])

    useEffect(() => {
        console.log('Fetching data from backend...')
        fetch('/weather/forecast')
            .then(response => response.json())
            .then(data => {
                console.log('Data fetched:', data)
                setWeather(data.properties.periods[0])
            })
    }, [])

    return (
        <div className=' bg-zinc-900 m-4 p-6 h-52'>
            <h3 className='mb-4'>Weather (D.C.)</h3>
            {(typeof weather.name != 'undefined') ? (
                <div>
                    <div className='max-h-30 min-w-56'>
                        <p className='leading-67 mt-1 text-xl line-clamp-2'>{weather.temperature}° F - {weather.shortForecast}</p>
                        <div className='mt-4 flex-row flex'>
                            <RainCloud />
                            <p className='text-lg opacity-40 ml-2'>{weather.probabilityOfPrecipitation.value != null ? weather.probabilityOfPrecipitation.value : '0'}%</p>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Weather