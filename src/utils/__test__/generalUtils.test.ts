import {isAndroid, getWidth, getHeight} from '../generalUtils';

describe('isAndroid', () => {
  test('isAndroid', () => {
    expect(isAndroid()).toBeFalsy();
  });
});

describe('getWidth', () => {
  test('getWidth', () => {
    expect(getWidth()).toBe(750);
  });
});

describe('getHeight', () => {
  test('getHeight', () => {
    expect(getHeight()).toBe(1334);
  });
});
