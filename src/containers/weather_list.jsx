import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  render_weather (cityData) {
    const name = cityData.city.name;
    let temps = cityData.list.map(day => ((day.main.temp-273.15)*1.8000+32.00));
    let pressures = cityData.list.map(day => day.main.pressure);
    let humidities = cityData.list.map(day => day.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="orange" units="F" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="blue" units="%" /></td>
      </tr>
    );
  }

  render () {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.render_weather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps ({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
