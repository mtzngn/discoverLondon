import {LandmarkAction, Landmark} from '../actions/landmarkActions';
import {INITIALIZE_LANDMARKS, LIKE_LANDMARK, SELECT_LANDMARK} from '../actions';

interface Landmarks {
  landmarks: Array<Landmark>;
  tracksViewChanges: boolean;
}

const INITIAL_STATE: Landmarks = {
  landmarks: [],
  tracksViewChanges: false,
};

export default (state = INITIAL_STATE, action: LandmarkAction) => {
  switch (action.type) {
    case INITIALIZE_LANDMARKS:
      return {...state, landmarks: action.payload};
    case LIKE_LANDMARK:
      const likedLanmarkId = action.payload;
      return {
        ...state,
        landmarks: state.landmarks.map(el =>
          el.id === likedLanmarkId ? {...el, isLiked: !el.isLiked} : el,
        ),
      };
    case SELECT_LANDMARK:
      const selectedLandmarkId = action.payload;
      return {
        ...state,
        landmarks: state.landmarks.map(el =>
          el.id === selectedLandmarkId
            ? {...el, isSelected: true}
            : {...el, isSelected: false},
        ),
      };
    default:
      return state;
  }
};
