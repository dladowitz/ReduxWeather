import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWeather } from '../actions/index'
import { bindActionCreators } from 'redux'

class WeatherList extends Component {
  constructor(props){
    super(props)
  }

  renderCities(){
    co
    var counter = 0

    return this.props.weather.map((city) => {
      counter = counter + 1;
      return (
        <tr key={counter}>
          <td>{city.city.name}</td>
          <td>{city.list[0].main.temp}</td>
          <td>{city.list[0].main.humidity}</td>
          <td>{city.list[0].main.pressure}</td>
        </tr>
      );
    });
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
          {this.renderCities()}
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


// function mapStateToProps(state){
//   return {
//     books: state.books
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchWeather }, dispatch)
// }
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ selectBook: selectBook}, dispatch);
// }

export default connect(mapStateToProps)(WeatherList);
// export default connect(mapStateToProps, mapDispatchToProps)(BookList);
