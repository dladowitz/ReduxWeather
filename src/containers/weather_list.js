import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'
import GMap from '../components/gmap'


class WeatherList extends Component {
  renderWeather(city){
    const name = city.city.name
    const temps = city.list.map(weatherData => weatherData.main.temp)
    const humidities = city.list.map(weatherData => weatherData.main.humidity)
    const pressures = city.list.map(weatherData => weatherData.main.pressure)
    const {lat, lon} = city.city.coord


    return (
      <tr>
        <td><GMap lon={lon} lat={lat}></GMap></td>
        <td><Chart data={temps} color={'orange'} units={'kelvin'} /></td>
        <td><Chart data={humidities} color={'blue'} units={'aHa'} /></td>
        <td><Chart data={pressures} color={'purple'} units={'bar'} /></td>
      </tr>
    )
  }

  render (){
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Pressure</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(city => this.renderWeather(city))}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state){
  return {
    weather: state.weather
  }
}
export default connect(mapStateToProps)(WeatherList);
