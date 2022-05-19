import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import LandmarkCard from '../LandmarkCard';

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
      ],
    }),
}));

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

const MOCKED_PROPS = {
  id: 1,
  name: 'testName',
  uri: 'testUri',
  description: 'testDescription',
};

describe('LandmarkCard', () => {
  describe('renders', () => {
    it('correctly when isLiked false', () => {
      const {getByText} = render(<LandmarkCard {...MOCKED_PROPS} />);
      expect(getByText('testName')).toBeTruthy();
    });
  });
  describe('onPress', () => {
    it('navigates to LandmarkCardDetails', () => {
      const {getByText} = render(<LandmarkCard {...MOCKED_PROPS} />);
      fireEvent.press(getByText('testName'));
      expect(mockedNavigate).toHaveBeenCalledWith('CardDetails', MOCKED_PROPS);
    });
  });
});
