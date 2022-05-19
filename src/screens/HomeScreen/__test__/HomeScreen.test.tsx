import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';

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
          isLliked: false,
          isSelected: false,
          latlng: {
            latitude: 51.50890357879391,
            longitude: -0.12850203078005293,
          },
        },
      ],
      cardDetails: [
        {
          name: 'testName',
          id: 1,
          uri: 'testUri',
          description: 'testDescription',
        },
      ],
    }),
}));

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('HomeScreen', () => {
  it('should render', () => {
    const {getByText} = render(<HomeScreen />);
    expect(getByText('testName')).toBeTruthy();
  });

  it('should dispatch the initialization action', () => {
    render(<HomeScreen />);
    expect(mockUseDispatch).toHaveBeenCalled();
  });
});
