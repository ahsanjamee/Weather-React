import React from 'react';

const Weather = (props) =>{
    return(
        <div className="container">
            <h1 className="py-2">City : {props.city}</h1>
            <h5 className="py-4 mt-8">
                <img className="img-fluid" src={`http://openweathermap.org/img/w/${props.icon}.png`}/>
            </h5>
            <h1 className="py-2">{props.temp}&deg;</h1>

            {minmaxTemp(props.minTemp, props.maxTemp)}
    <h4 className="py-3">{props.description}</h4>
        </div>
    );
}

function minmaxTemp(min, max){
    return(
        <h3>
            <span className="px-4">Min : {min}&deg;</span>
            <span className="px-4">Max : {max}&deg;</span>
        </h3>
    );
    
}

export default Weather;