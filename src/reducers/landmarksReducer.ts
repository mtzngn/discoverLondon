import {
  LandmarkAction,
  MarkerDetails,
  CardDetails,
} from '../actions/landmarkActions';
import {INITIALIZE_LANDMARKS, LIKE_LANDMARK, SELECT_LANDMARK} from '../actions';

interface Landmarks {
  markerDetails: Array<MarkerDetails>;
  cardDetails: Array<CardDetails>;
}

const INITIAL_STATE: Landmarks = {
  markerDetails: [],
  cardDetails: [],
};

export default (state = INITIAL_STATE, action: LandmarkAction) => {
  switch (action.type) {
    case INITIALIZE_LANDMARKS:
      return {
        ...state,
        markerDetails: action.payload.markerDetails,
        cardDetails: action.payload.cardDetails,
      };
    case LIKE_LANDMARK:
      const likedLanmarkId = action.payload;
      return {
        ...state,
        markerDetails: state.markerDetails.map(el =>
          el.id === likedLanmarkId ? {...el, isLiked: !el.isLiked} : el,
        ),
      };
    case SELECT_LANDMARK:
      const selectedLandmarkId = action.payload;
      return {
        ...state,
        markerDetails: state.markerDetails.map(el =>
          el.id === selectedLandmarkId
            ? {...el, isSelected: true}
            : {...el, isSelected: false},
        ),
      };
    default:
      return state;
  }
};
