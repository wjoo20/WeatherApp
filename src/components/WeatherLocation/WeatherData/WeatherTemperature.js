import React from 'react';
import WeatherIcons from 'react-weathericons';

const WeatherTemperature = ({temp})=>{
    return (<div>
        <WeatherIcons name={'day-sunny'} size={"2x"}/>
        <h3>{`Temperatura: ${temp} °C`}</h3>
    </div>)
}

export default WeatherTemperature;