import {isAndroid, getWidth, getHeight} from '../generalUtils';

describe('isAndroid', () => {
  it('should return false for ios', () => {
    expect(isAndroid()).toBeFalsy();
  });

  it('should return true for android', () => {
    jest.mock('react-native/Libraries/Utilities/Platform', () => ({
      OS: 'android',
      select: () => null,
    }));
    expect(isAndroid()).toBeTruthy();
  });
});

describe('getWidth', () => {
  it('getWidth', () => {
    expect(getWidth()).toBe(750);
  });
});

describe('getHeight', () => {
  it('getHeight', () => {
    expect(getHeight()).toBe(1334);
  });
});
