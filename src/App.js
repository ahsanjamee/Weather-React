import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './components/weather';
import 'weather-icons/css/weather-icons.css';

const API_KEY = "43e4df9629837bac0fdd76602989698d"

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      city : undefined,
      temp : undefined,
      description : undefined,
      minTemp : undefined,
      maxTemp : undefined,
      icon : undefined
    };
    this.getWeather();
  }

  calCell(temp) {
    let cel = Math.floor(temp - 273.15);
    return cel;
  }

  getWeather = async() => {
    const api_call = await fetch (`
    http://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=${API_KEY}`);

    const response = await api_call.json();

    console.log(response);

    this.setState({
      city : response.name,
      temp : this.calCell(response.main.temp),
      description : response.weather[0].description,
      minTemp : this.calCell(response.main.temp_min),
      maxTemp : this.calCell(response.main.temp_max),
      icon : response.weather[0].icon
    })
  };

  

  render(){
    return(
      <div className="App">
      
        <Weather 
        city={this.state.city}
        temp={this.state.temp}
        minTemp = {this.state.minTemp}
        maxTemp = {this.state.maxTemp}
        description = {this.state.description}
        icon = {this.state.icon}
        />
      
    </div>
    );
  }

}

export default App;
