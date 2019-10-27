import { ERROR, CLEAR_ERROR } from './types';

export const errorLogger = error => dispatch => {
  setTimeout(() => {
    dispatch({
      type: CLEAR_ERROR
    });
  }, 2000);

  dispatch({
    type: ERROR,
    payload: error
  });
};
