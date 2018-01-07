import _ from  'lodash';

import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case DELETE_POST:
            return _.omit(state, action.payload);
        case FETCH_POSTS:
            //from array - object with key id [{name, id}, 
            //{name, id}] -> {id: {name, id}}
            return _.mapKeys(action.payload.data, 'id'); 
        case FETCH_POST:
            // const post = action.payload.data;
            // const newState = { ...state };
            // newState[post.id] = post;
            // return newState;

            //[interpolation used as a key of the object], this does the same as above
            return { ...state, [action.payload.data.id]: action.payload.data }
        default:
            return state;
    }
}