import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action){
  switch(action.type) {
    case FETCH_WEATHER:
      console.log("Action Recieved in reducer_weather", action)
      console.log("WeatherReducer: ", [action.payload].concat(state))
      return [action.payload].concat(state);
      // return [ action.payload.data, ...state ]; // ES6 array concat
  }


  return state
}
