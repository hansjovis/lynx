import { createStore } from 'redux';
import rootReducer from './reducers/root';

/**
 * Creates a new Redux store with the given initial state.
 * 
 * @param {Object} intitialState The intitial state of the Redux store.
 * 
 * @returns {Object} A Redux store.
 */
const createReduxStore = function( intitialState ) {
  return createStore( rootReducer, intitialState );
};

export default createReduxStore;