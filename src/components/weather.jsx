import React from "react";

const Weather = props => {
  return (
    <div className="container">
      {props.city ? <h1 className="py-0">City : {props.city}</h1> : null}
      <h5 className="py-0">
        {props.icon ? (
          <img
            className="img-fluid"
            src={`https://openweathermap.org/img/w/${props.icon}.png`}
          />
        ) : null}
      </h5>
     {props.temp ?  <h1 className="py-0">{props.temp}&deg;</h1> : null}

      {minmaxTemp(props.minTemp, props.maxTemp)}
      <h4 className="py-3">{props.description}</h4>
    </div>
  );
};

function minmaxTemp(min, max) {
  if (min && max) {
    return (
      <h3>
        <span className="px-3">Min : {min}&deg;</span>
        <span className="px-3">Max : {max}&deg;</span>
      </h3>
    );
  }
}

export default Weather;
