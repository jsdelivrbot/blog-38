import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload); // delete action.payload => id from state
    case FETCH_POST:
      // const post = ation.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
      // Gets an array and creates and object => {"4":{"id":4,"title":"hi"},"36":{"id":36,"title":"hey"}}
    default:
      return state;
  }
}
