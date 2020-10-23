import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import flightsReducer from './flights/flights.reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['properties'],
  stateReconciler: autoMergeLevel2
};

const rootReducer = combineReducers({
  flights: flightsReducer
});

export default persistReducer(persistConfig, rootReducer);
