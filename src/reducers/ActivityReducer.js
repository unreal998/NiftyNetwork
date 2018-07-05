const initialState = {
  likes: 0,
  reposts: 0,
};

const ActivityReducer = (state = initialState, action) => {
  const tempState = Object.assign({}, state);
  switch (action.type) {
    case 'USER_LIKE_ACTION':
      tempState.likes = action.payload.likes;
    case "USER_REPOST_ACTION":
      tempState.reposts = action.payload.reposts;
  }
  return tempState;
};

export default ActivityReducer;
