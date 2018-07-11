import { ADD_ITEM } from '../actions/AddNiftAction';

const initalItem = {
  inputTweet: '',
};

const addNiftReducer = (state = initalItem, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, inputTweet: state.inputTweet + action.newItem };
    default:
      return state;
  }
};

export default addNiftReducer;
