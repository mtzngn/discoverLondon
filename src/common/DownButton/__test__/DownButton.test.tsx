import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import DownButton from '../DownButton';

const mockedAnimation = jest
  .fn()
  .mockImplementation(() => jest.fn())
  .mockReturnValue({start: jest.fn});
const mockedGoBack = jest.fn();
const mockedNavigation = {
  goBack: mockedGoBack,
};
describe('DownButton', () => {
  it('renders', () => {
    const {getByTestId} = render(
      <DownButton navigation={mockedNavigation} animation={mockedAnimation} />,
    );
    expect(getByTestId('angleDownButton')).toBeTruthy();
  });

  describe('onPress', () => {
    it('calls animation', () => {
      const {getByTestId} = render(
        <DownButton
          navigation={mockedNavigation}
          animation={mockedAnimation}
        />,
      );
      fireEvent.press(getByTestId('angleDownButton'));
      expect(mockedAnimation).toHaveBeenCalledWith(0, 1);
    });

    it('calls goBack', () => {
      const {getByTestId} = render(
        <DownButton
          navigation={mockedNavigation}
          animation={mockedAnimation}
        />,
      );
      fireEvent.press(getByTestId('angleDownButton'));
      expect(mockedGoBack).toHaveBeenCalled();
    });
  });
});
