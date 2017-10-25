// Write an action type and a synchronous action creator in our action-creators.js for receiving our puppies. Remember, this is just a function that returns an object with a type field (for the action type), and a payload (our puppies).

import axios from 'axios'


// action types

const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES'


// ACTION CREATORS

export const receivePuppies = (puppies) => {
  const action = { type: RECEIVE_PUPPIES, puppies }
  return action
}


export function fetchPuppies() {
  return function thunk(dispatch) {
    return axios.get('/api/puppies')
      .then(res => res.data)
      .then(puppies => {
        dispatch(receivePuppies(puppies))
      })
  }

}
