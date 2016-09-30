import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';


class WeatherList extends Component {
  renderWeather(city){
    const name = city.city.name
    const temps = city.list.map(weatherData => weatherData.main.temp)
    const humidity = city.list.map(weatherData => weatherData.main.humidity)
    const pressure = city.list.map(weatherData => weatherData.main.pressure)

    return (
      <tr>
        <td>{name}</td>
        <td>
          <Sparklines height={90} width={180} data={temps}>
            <SparklinesLine color={'red'} />
          </Sparklines>
        </td>
        <td>
          <Sparklines height={120} width={180} data={humidity}>
            <SparklinesLine color={'blue'} />
          </Sparklines>
        </td>
        <td>
          <Sparklines height={120} width={180} data={pressure}>
            <SparklinesLine color={'green'} />
          </Sparklines>
        </td>
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
