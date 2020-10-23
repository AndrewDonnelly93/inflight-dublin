import _ from 'lodash';
import jsonPlaceholder from '../apis/json-placeholder';
import {FlightsActionTypes} from '../flights/flights.types';

export const fetchFlights = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get('/');
    dispatch({
      type: FlightsActionTypes.FETCH_FLIGHTS,
      payload: response.data
    });
  }
};
