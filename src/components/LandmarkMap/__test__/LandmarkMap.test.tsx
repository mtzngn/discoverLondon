import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import LandmarkMap from '../LandmarkMap';

const mockUseDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockImplementation(() => mockUseDispatch),
  useSelector: jest
    .fn()
    .mockImplementation(jest.fn)
    .mockReturnValue({
      markerDetails: [
        {
          id: 1,
          isLiked: false,
          isSelected: false,
          latlng: {
            latitude: 51.50890357879391,
            longitude: -0.12850203078005293,
          },
        },
        {
          id: 2,
          isLiked: false,
          isSelected: false,
          latlng: {
            latitude: 51.50890357879391,
            longitude: -0.12850203078005293,
          },
        },
        {
          id: 3,
          isLiked: false,
          isSelected: false,
          latlng: {
            latitude: 51.50112240771424,
            longitude: -0.14135723958435054,
          },
        },
        {
          id: 4,
          isLiked: false,
          isSelected: false,
          latlng: {
            latitude: 51.505737740072995,
            longitude: -0.07520694901800379,
          },
        },
        {
          id: 5,
          isLiked: true,
          isSelected: true,
          latlng: {
            latitude: 51.518879163719944,
            longitude: -0.12630217259903156,
          },
        },
      ],
    }),
}));

describe('LandmarkMap', () => {
  describe('renders', () => {
    it('all the markers ', () => {
      const {getAllByTestId} = render(<LandmarkMap />);
      expect(getAllByTestId('markerIcon')).toHaveLength(5);
    });
  });
  describe('Marker', () => {
    describe('onPress', () => {
      it('sends the selectlandmark action to store', () => {
        const {getAllByTestId} = render(<LandmarkMap />);
        fireEvent.press(getAllByTestId('markerIcon')[0]);
        expect(mockUseDispatch).toHaveBeenCalled();
      });
    });
  });
});
