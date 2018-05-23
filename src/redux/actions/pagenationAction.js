import {
  UPDATE_CURRENT_PAGE, 
  UPDATE_START_END_PAGE, 
} from './types';

export const updateCurrPage = page => (dispatch) => {   
  dispatch({ type: UPDATE_CURRENT_PAGE, payload: page });
}

export const updateStartEndPage = (start, end) => (dispatch) => {   
  dispatch({ type: UPDATE_START_END_PAGE, payload: { start, end } });
}
