import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./components/weather";
import "weather-icons/css/weather-icons.css";
import Form from "./components/Form";

const API_KEY = "43e4df9629837bac0fdd76602989698d";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      temp: undefined,
      description: "",
      minTemp: undefined,
      maxTemp: undefined,
      icon: undefined,
      error: false,
      notFound: false
    };
  }

  calCell(temp) {
    let cel = Math.floor(temp - 273.15);
    return cel;
  }

  getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    if (city) {
      const api_call = await fetch(`
      http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

      const response = await api_call.json();

      console.log(response);

        if(response.cod === '404'){
          this.setState({ notFound: true });
          setTimeout(() => {
            this.setState({ notFound: false });
          }, 3000);
        }else{
          this.setState({
            city: response.name,
            temp: this.calCell(response.main.temp),
            description: response.weather[0].description,
            minTemp: this.calCell(response.main.temp_min),
            maxTemp: this.calCell(response.main.temp_max),
            icon: response.weather[0].icon
          });
        } 
      }
    else {
      this.setState({ error: true });
      setTimeout(() => {
        this.setState({ error: false });
      }, 3000);
    }
  };

  render() {
    return (
      <div className="App">
        <Form loadWeather={this.getWeather} error={this.state.error} notFound={this.state.notFound} />
        <Weather
          city={this.state.city}
          temp={this.state.temp}
          minTemp={this.state.minTemp}
          maxTemp={this.state.maxTemp}
          description={this.state.description}
          icon={this.state.icon}
        />
      </div>
    );
  }
}

export default App;
