import { VERIFICATION } from '../actions/types';

// Reducer

const initialState = {
  isLoggedIn: false,
};

function verifyReducer(state = initialState, action) {
  switch (action.type) {
    case VERIFICATION:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
}


export default verifyReducer;
