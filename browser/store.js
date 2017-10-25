import {createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';


const initial = { allPuppies: [] }


const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES'



const reducer = (state = initial, action) => {
  switch (action.type){
    case RECEIVE_PUPPIES :
      return Object.assign({}, state, {allPuppies: action.puppies})
    default:
    return state;
  }
}


const store = createStore(
  reducer,
  (applyMiddleware(
    thunkMiddleware,
    createLogger()
  ))
)
export default store
