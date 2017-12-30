import _ from  'lodash';

import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id'); 
            //from array - object with key id [{name, id}, 
            //{name, id}] -> {id: {name, id}}
        default:
            return state;
    }
}