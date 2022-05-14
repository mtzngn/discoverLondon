import {LIKE_LANDMARK} from '../actions/types';

const INITIAL_STATE = {
  landmarkLiked: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIKE_LANDMARK:
      return {...state, landmarkLiked: true};
    default:
      return state;
  }
};
