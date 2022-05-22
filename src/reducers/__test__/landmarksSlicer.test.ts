import landmarksSlicer from '../landmarksSlicer';
import {
  initializeLandmarks,
  likeLandmark,
  selectLandmark,
} from '../landmarksSlicer';

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
        markerDetails: [{id: 1}],
        cardDetails: [
          {id: 1, name: 'test', image: 'test', description: 'test'},
        ],
        likedCards: [{id: 1, isLiked: false}],
      }),
    ),
  ).toEqual({
    cardDetails: [{description: 'test', id: 1, image: 'test', name: 'test'}],
    likedCards: [
      {
        id: 1,
        isLiked: false,
      },
    ],
    markerDetails: [{id: 1}],
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
    markerDetails: [{id: 1, isSelected: false}],
  };
  expect(landmarksSlicer(previousState, selectLandmark(1))).toEqual({
    cardDetails: [],
    likedCards: [],
    markerDetails: [{id: 1, isSelected: true}],
  });
});
