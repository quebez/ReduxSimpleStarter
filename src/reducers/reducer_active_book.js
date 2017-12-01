//state is not app state, but only state of the responsible reducer
export default (state = null, action) => {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state; //don't care about the action
}