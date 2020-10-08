const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const bookReducer = (state=[], action) => {
  switch(action.type) {
    case CREATE_BOOK:
      return [...state, action.book]
    case REMOVE_BOOK:
      return [...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length)]
    default:
      return state;
  }
}

export default bookReducer;
