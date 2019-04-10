import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = ()=>{
    return (<div>
        <WeatherExtraInfo humidity={20} wind={12}/>
        <WeatherTemperature temp={23}/>
    </div>)
}

export default WeatherData;