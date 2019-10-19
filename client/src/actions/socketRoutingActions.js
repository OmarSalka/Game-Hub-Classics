import { JOIN } from './types';

export const join = formData => {
  return {
    type: JOIN,
    payload: formData
  };
};
