import {FlightsActionTypes} from './flights.types';
import {setCurrentProperty, filterProperties} from './flights.utils';

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
        // case PropertiesActionTypes.SET_CURRENT_PROPERTY:
        //     return {
        //         ...state,
        //         currentProperty: setCurrentProperty(state.collections, action.payload)
        //     };
        // case PropertiesActionTypes.TOGGLE_PROPERTY_MODAL:
        //     return {
        //         ...state,
        //         modalHidden: !!action.payload
        //     };
        // case PropertiesActionTypes.FILTER_PROPERTIES:
        //     const {filterType, filterValue} = action.payload;
        //     const updatedFilters = Object.entries(state.currentFilters).map((filter) =>
        //         filter[0] === filterType ? [filter[0], filterValue] : [filter[0], filter[1]]);
        //     const newFilters = {};
        //     updatedFilters.forEach(filter => {
        //        newFilters[filter[0]] = filter[1];
        //     });
        //
        //     return {
        //         ...state,
        //         currentFilters: newFilters,
        //         filteredCollections: filterProperties(state.filteredCollections, action.payload)
        //     };
        default:
            return state;
    }
};

export default flightsReducer;
