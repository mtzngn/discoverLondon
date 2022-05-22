import {createSlice} from '@reduxjs/toolkit';

export interface MarkerDetails {
  id: number;
  latlng: {
    latitude: number;
    longitude: number;
  };
  isSelected: boolean;
}

export interface CardDetails {
  id: number;
  name: string;
  uri: string;
  description: string;
}
export interface LikedCards {
  id: number;
  isLiked: boolean;
}

interface Landmarks {
  markerDetails: MarkerDetails[];
  cardDetails: CardDetails[];
  likedCards: LikedCards[];
}

const initialState: Landmarks = {
  markerDetails: [],
  cardDetails: [],
  likedCards: [],
};

export const landmarksSlice = createSlice({
  name: 'landmarks',
  initialState,
  reducers: {
    initializeLandmarks: (state, action) => {
      state.markerDetails.push(...action.payload.markerDetails);
      state.cardDetails.push(...action.payload.cardDetails);
      state.likedCards.push(...action.payload.likedCards);
    },
    likeLandmark: (state, action) => {
      state.likedCards.filter(el => el.id === action.payload)[0].isLiked =
        !state.likedCards.filter(el => el.id === action.payload)[0].isLiked;
    },
    selectLandmark: (state, action) => {
      state.markerDetails = state.markerDetails.map(el =>
        el.id === action.payload
          ? {...el, isSelected: true}
          : {...el, isSelected: false},
      );
    },
  },
});

export const {initializeLandmarks, likeLandmark, selectLandmark} =
  landmarksSlice.actions;

export default landmarksSlice.reducer;
