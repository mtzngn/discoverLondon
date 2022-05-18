import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';

jest.mock('react-native-maps', () => {
  const {View} = require('react-native');
  const MockMapView = (props: any) => {
    return <View>{props.children}</View>;
  };
  const MockMarker = (props: any) => {
    return <View>{props.children}</View>;
  };
  return {
    __esModule: true,
    default: MockMapView,
    Marker: MockMarker,
  };
});

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockImplementation(jest.fn),
  useSelector: jest
    .fn()
    .mockImplementation(jest.fn)
    .mockReturnValue({markerDetails: [], cardDetails: []}),
}));

jest.mock('react-native-vector-icons/Fontisto', () => 'hello');
jest.mock('react-navigation-shared-element', () => 'hello');

describe('first test', () => {
  it('should return true', () => {
    const {getByText} = render(<HomeScreen />);
  });
});
