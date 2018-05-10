//state argument is not application state, only the state that this reducer is responsible for.
export default function (state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return {...state, pages: action.payload.pages};
        default:
            return state;
    }
    return state;
}