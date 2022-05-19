import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import LandmarkCardDetailsScreen from '../LandmarkCardDetailsScreen';

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
const mockGoBack = jest.fn();
const mockedRoute = {
  params: {
    id: 1,
    name: 'testName',
    uri: 'testUri',
    description: 'testDescription',
  },
};
const mockedNavigation = {
  goBack: mockGoBack,
};

describe('LandmarkCardDetailsScreen', () => {
  describe('renders', () => {
    it('correctly ', () => {
      const {getByText} = render(
        <LandmarkCardDetailsScreen
          route={mockedRoute}
          navigation={mockedNavigation}
        />,
      );
      expect(getByText('testName')).toBeTruthy();
    });
  });
  describe('downArrow', () => {
    describe('onPress', () => {
      it('cals navigation.goBack', () => {
        const {getByTestId} = render(
          <LandmarkCardDetailsScreen
            route={mockedRoute}
            navigation={mockedNavigation}
          />,
        );
        fireEvent.press(getByTestId('angleDownButton'));
        expect(mockedNavigation.goBack).toHaveBeenCalled();
      });
    });
  });
});
