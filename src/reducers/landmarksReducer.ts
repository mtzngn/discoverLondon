import {PayloadAction} from '@reduxjs/toolkit';
import {LIKE_LANDMARK} from '../actions/types';

interface LandmarkState {
  landmarkLiked: boolean;
}

const INITIAL_STATE: LandmarkState = {
  landmarkLiked: false,
};

export default (state = INITIAL_STATE, action: PayloadAction<number>) => {
  switch (action.type) {
    case LIKE_LANDMARK:
      return {...state, landmarkLiked: true};
    default:
      return state;
  }
};
