import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component {
  constructor(props){
    super(props)
  }

  renderCity(city){
    const name = city.city.name
    const temps = city.list.map(weatherData => weatherData.main.temp)
    const humidity = city.list.map(weatherData => weatherData.main.humidity)
    const pressure = city.list.map(weatherData => weatherData.main.pressure)

    console.log("Temps: ", temps);

    return (
      <tr>
      //   <td>{name}</td>
        // <td>
        //   Weather
          // <Sparklines height={120} width={180} data={temps}>
          //   <SparklinesLine color={red} />
          // </Sparklines
        // </td>
        // <td>{city.list[0].main.temp}</td>
        // <td>{city.list[0].main.humidity}</td>
        // <td>{city.list[0].main.pressure}</td>
      </tr>
    )
  }

  render (){
    console.log("Props:", this.props)
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temp</th>
            <th>Humidity</th>
            <th>Pressure</th>
          </tr>
        </thead >
        <tbody>
          {this.props.weather.map(city => this.renderCity(city)) }
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
// ES6
// function mapStateToProps({weather}){
//   return { weather }
// }

export default connect(mapStateToProps)(WeatherList);
