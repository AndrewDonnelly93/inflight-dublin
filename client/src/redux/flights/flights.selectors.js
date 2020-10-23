import { createSelector } from 'reselect';

const selectFlights = state => state.flights;

export const selectFlightsModels = createSelector(
    [selectFlights],
    properties => properties.flightsModels
);
