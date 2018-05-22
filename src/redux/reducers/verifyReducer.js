import { VERIFICATION, SIGNIN, SIGNOUT } from '../actions/types';

// Reducer

const initialState = {
  isLoggedIn: false,
  userID: '',
};

function verifyReducer(state = initialState, action) {
  switch (action.type) {
    case VERIFICATION:
      return {
        ...state,
        isLoggedIn: action.payload.success,
        userID: action.payload.userID,
      };
    case SIGNIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case SIGNOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}


export default verifyReducer;
