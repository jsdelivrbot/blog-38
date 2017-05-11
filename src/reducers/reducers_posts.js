import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
      // Gets an array and creates and object => {"4":{"id":4,"title":"hi"},"36":{"id":36,"title":"hey"}}
    default:
      return state;
  }
}
