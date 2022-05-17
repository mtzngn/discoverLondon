import {createAction} from '@reduxjs/toolkit';

export const INITIALIZE_LANDMARKS: string = 'initialize_landmarks';
export const LIKE_LANDMARK: string = 'like_landmark';
export const SELECT_LANDMARK: string = 'select_landmark';

export interface Landmark {
  id: number;
  name: string;
  description: string;
  image: string;
  latlng: {
    latitude: number;
    longtitude: number;
  };
  isLiked: boolean;
  isSelected: boolean;
}

export interface InitializeAction {
  readonly type: 'INITIALIZE_LANDMARKS';
  payload: Array<Landmark>;
}

export interface LikeAction {
  readonly type: 'LIKE_LANDMARK';
  payload: number;
}

export interface SelectAction {
  readonly type: 'SELECT_LANDMARK';
  payload: number;
}

export const initializeLandmarks = createAction(INITIALIZE_LANDMARKS);
export const likeLandmark = createAction(LIKE_LANDMARK);
export const selectLandmark = createAction(SELECT_LANDMARK);

export type LandmarkAction = InitializeAction | LikeAction | SelectAction;
