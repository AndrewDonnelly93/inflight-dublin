import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {fetchFlights} from '../../redux/actions';
import {selectFlightsModels} from '../../redux/flights/flights.selectors'
import Flights from './flights.component';

export const FlightsContainer = ({
  fetchFlightsModels,
  flightsModels
 }) => {
  React.useEffect(() => {
    if (fetchFlightsModels) {
      fetchFlightsModels();
    }
  }, [fetchFlightsModels]);

    return (
      <Flights flightsModels={flightsModels}/>
    );
};

export const mapStateToProps = createStructuredSelector({
    flightsModels: selectFlightsModels
});

export const mapDispatchToProps = (dispatch) => ({
  fetchFlightsModels: () => dispatch(fetchFlights())
});

export default connect(mapStateToProps, mapDispatchToProps)(FlightsContainer);
