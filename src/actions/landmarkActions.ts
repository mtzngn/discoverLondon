import {LIKE_LANDMARK, INITIALIZE_LANDMARKS} from './types';

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
  isFocused: boolean;
}

export interface InitializeAction {
  readonly type: 'INITIALIZE_LANDMARKS';
  payload: Array<Landmark>;
}

export interface LikeAction {
  readonly type: 'LIKE_LANDMARK';
  payload: number;
}

export const initializeLandmarks = (payload: any) => {
  return {type: INITIALIZE_LANDMARKS, payload};
};

export const likeLandmark = (payload: number) => {
  return {type: LIKE_LANDMARK, payload};
};

export type LandmarkAction = InitializeAction | LikeAction;
