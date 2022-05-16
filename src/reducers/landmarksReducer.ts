import {LandmarkAction, Landmark} from '../actions/landmarkActions';
import {INITIALIZE_LANDMARKS, LIKE_LANDMARK} from '../actions/types';

interface Landmarks {
  landmarks: Array<Landmark>;
}

const INITIAL_STATE: Landmarks = {
  landmarks: [],
};

export default (state = INITIAL_STATE, action: LandmarkAction) => {
  switch (action.type) {
    case INITIALIZE_LANDMARKS:
      return {...state, landmarks: action.payload};
    case LIKE_LANDMARK:
      const landmarkId = action.payload;
      return {
        ...state,
        landmarks: state.landmarks.map(el =>
          el.id === landmarkId ? {...el, isLiked: !el.isLiked} : el,
        ),
      };
    default:
      return state;
  }
};
