//action creator; needs to return an action (always type, sometimes payload)
export function selectBook(book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
