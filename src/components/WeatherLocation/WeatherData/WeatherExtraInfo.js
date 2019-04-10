import React from 'react';

const WeatherExtraInfo = ({humidity,wind})=>{
    return (<div>
        <h3>{`Humedad: ${humidity}% h`}</h3>
        <h3>{`Viento: ${wind}m/s`}</h3>
    </div>)
}

export default WeatherExtraInfo;