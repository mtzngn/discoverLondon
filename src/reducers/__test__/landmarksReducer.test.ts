import landmarksSlicer from '../landmarksReducer';
import {
  initializeLandmarks,
  likeLandmark,
  selectLandmark,
} from '../landmarksReducer';

it('should return the initial state', () => {
  expect(landmarksSlicer(undefined, {})).toEqual({
    cardDetails: [],
    likedCards: [],
    markerDetails: [],
  });
});

it('should handle initializing', () => {
  const previousState = {
    cardDetails: [],
    likedCards: [],
    markerDetails: [],
  };
  expect(
    landmarksSlicer(
      previousState,
      initializeLandmarks({
        markerDetails: [
          {id: 1, latlng: {latitude: 1, longitude: 2}, isSelected: false},
        ],
        cardDetails: [{id: 1, name: 'test', uri: 'test', description: 'test'}],
        likedCards: [{id: 1, isLiked: false}],
      }),
    ),
  ).toEqual({
    cardDetails: [{description: 'test', id: 1, uri: 'test', name: 'test'}],
    likedCards: [
      {
        id: 1,
        isLiked: false,
      },
    ],
    markerDetails: [
      {
        id: 1,
        isSelected: false,
        latlng: {
          latitude: 1,
          longitude: 2,
        },
      },
    ],
  });
});

it('should handle liking a landmark', () => {
  const previousState = {
    cardDetails: [],
    likedCards: [{id: 1, isLiked: false}],
    markerDetails: [],
  };
  expect(landmarksSlicer(previousState, likeLandmark(1))).toEqual({
    cardDetails: [],
    likedCards: [
      {
        id: 1,
        isLiked: true,
      },
    ],
    markerDetails: [],
  });
});

it('should handle selecting a landmark', () => {
  const previousState = {
    cardDetails: [],
    likedCards: [],
    markerDetails: [
      {id: 1, latlng: {latitude: 1, longitude: 2}, isSelected: false},
    ],
  };
  expect(landmarksSlicer(previousState, selectLandmark(1))).toEqual({
    cardDetails: [],
    likedCards: [],
    markerDetails: [
      {
        id: 1,
        isSelected: true,
        latlng: {
          latitude: 1,
          longitude: 2,
        },
      },
    ],
  });
});
