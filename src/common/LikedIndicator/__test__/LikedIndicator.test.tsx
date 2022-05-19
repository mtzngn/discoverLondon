import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import LikedIndicator from '../LikedIndicator';

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
          isLiked: true,
          isSelected: false,
          latlng: {
            latitude: 51.50890357879391,
            longitude: -0.12850203078005293,
          },
        },
      ],
    }),
}));

describe('LikedIndicator', () => {
  describe('renders', () => {
    it('correctly when isLiked false', () => {
      const {getByTestId} = render(<LikedIndicator id={1} />);
      expect(getByTestId('heartAltIcon')).toBeTruthy();
    });

    it('correctly when isLiked true', () => {
      const {getByTestId} = render(<LikedIndicator id={2} />);
      expect(getByTestId('heartIcon')).toBeTruthy();
    });
  });
  describe('onPress', () => {
    it('dispatches toggle for isLiked field', () => {
      const {getByTestId} = render(<LikedIndicator id={1} />);
      fireEvent.press(getByTestId('heartAltIcon'));
      expect(mockUseDispatch).toHaveBeenCalledWith({
        payload: 1,
        type: 'like_landmark',
      });
    });
  });
});
