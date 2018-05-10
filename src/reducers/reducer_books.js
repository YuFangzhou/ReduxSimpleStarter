const initial = [
    {title: 'JavaScript: The buggy parts', detail: 'JavaScript is shit', pages: 101},
    {title: 'Harry Potter', detail: 'Harry Potter is shit', pages: 39},
    {title: 'The Deep Dark Fantasy', detail: 'DDF', pages: 85},
    {title: 'Eloquent Ruby', detail: 'Ruby is shit', pages: 1}
];

export default function (state = initial, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            let newState = state.map((book) => {
                if (book.title === action.payload.title) {
                    return action.payload;
                } else {
                    return book;
                }
            });
            return newState;
        default:
            return state;
    }
}