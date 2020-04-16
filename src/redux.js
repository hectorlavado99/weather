import { createStore, combineReducers } from 'redux';

function todos(state = [], action) {
      return state
}
const apiKey='4qD1AUoQEAwX0GY4XIeJTOaDAfI2jJHD';
let store = createStore(todos, [ apiKey ])

export default store;