import { createSelector } from 'reselect';

const selectFlights = state => state.flights;

export const selectFlightsModels = createSelector(
    [selectFlights],
    properties => properties.flightsModels
);
//
// export const selectCurrentProperty = createSelector(
//         [selectProperties],
//         properties => properties.currentProperty
//     );
//
// export const selectModalHidden = createSelector(
//     [selectProperties],
//     properties => properties.modalHidden
// );
//
// export const selectCurrentFilters = createSelector(
//     [selectProperties],
//     properties => properties.currentFilters
// );
