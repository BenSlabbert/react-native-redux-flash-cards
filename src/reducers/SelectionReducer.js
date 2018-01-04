// if state = undefined, set it to null
export default ( state = null, action ) => {
    // must have some initial state
    // cannot be undefined, can return null

    switch ( action.type ) {
        case 'select_library':
            return action.payload;
        default :
            return state;
    }
};
