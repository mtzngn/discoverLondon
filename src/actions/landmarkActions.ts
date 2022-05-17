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

export const initializeLandmarks = (payload: any) => {
  return {type: INITIALIZE_LANDMARKS, payload};
};

export const likeLandmark = (payload: number) => {
  return {type: LIKE_LANDMARK, payload};
};

export const selectLandmark = (payload: number) => {
  return {type: SELECT_LANDMARK, payload};
};

export type LandmarkAction = InitializeAction | LikeAction | SelectAction;
