import {createSlice, PayloadAction} from '@reduxjs/toolkit';

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

interface LandmarksState {
  markerDetails: MarkerDetails[];
  cardDetails: CardDetails[];
  likedCards: LikedCards[];
}

const initialState: LandmarksState = {
  markerDetails: [],
  cardDetails: [],
  likedCards: [],
};

export const landmarksSlice = createSlice({
  name: 'landmarks',
  initialState,
  reducers: {
    initializeLandmarks: (state, action: PayloadAction<LandmarksState>) => {
      state.markerDetails = action.payload.markerDetails;
      state.cardDetails = action.payload.cardDetails;
      state.likedCards = action.payload.likedCards;
    },
    likeLandmark: (state, action: PayloadAction<number>) => {
      const updatedCard = state.likedCards.find(
        card => card.id === action.payload,
      );
      if (updatedCard) {
        updatedCard.isLiked = !updatedCard?.isLiked;
      }
    },
    selectLandmark: (state, action: PayloadAction<number>) => {
      state.markerDetails = state.markerDetails.map(marker =>
        marker.id === action.payload
          ? {...marker, isSelected: true}
          : {...marker, isSelected: false},
      );
    },
  },
});

export const {initializeLandmarks, likeLandmark, selectLandmark} =
  landmarksSlice.actions;

export default landmarksSlice.reducer;
