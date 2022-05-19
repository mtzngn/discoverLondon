import React from 'react';

jest.mock('react-navigation-shared-element', () => {
  const {View} = require('react-native');
  const SharedElement = props => {
    return <View>{props.children}</View>;
  };
  return {
    __esModule: true,
    SharedElement: SharedElement,
  };
});

jest.mock('react-native-maps', () => {
  const {View} = require('react-native');
  const MockMapView = props => {
    return <View>{props.children}</View>;
  };
  const MockMarker = props => {
    return <View>{props.children}</View>;
  };
  return {
    __esModule: true,
    default: MockMapView,
    Marker: MockMarker,
  };
});

jest.mock('react-native-vector-icons/Fontisto', () => 'Icon');
