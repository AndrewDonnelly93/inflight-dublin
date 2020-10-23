import {FlightsActionTypes} from './flights.types';

const INITIAL_STATE = {
  flightsModels: []
};

const flightsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FlightsActionTypes.FETCH_FLIGHTS:
        return {
          ...state,
          flightsModels: action.payload
        };
        default:
            return state;
    }
};

export default flightsReducer;
