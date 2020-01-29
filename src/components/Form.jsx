import React from "react";
import "../components/form.css";

class Form extends React.Component {
  error() {
    return (
      <div className="alert alert-danger" role="alert">
        Please provide City name.{" "}
      </div>
    );
  }
  render() {
    return (
      <form className="mt-5 mb-5" onSubmit={this.props.loadWeather}>
        <div>{this.props.error ? this.error() : null}</div>
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-4">
              <input
                type="text"
                autoComplete="off"
                className="form-control"
                name="city"
                placeholder="Enter City"
              />
            </div>
            <div className="col-md-2 button-mobile">
              <button className="btn btn-warning">Get Weather</button>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </form>
    );
  }
}
export default Form;
