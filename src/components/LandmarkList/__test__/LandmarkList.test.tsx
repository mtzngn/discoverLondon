import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import LandmarkList from '../LandmarkList';

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

const mockUseDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockImplementation(() => mockUseDispatch),
  useSelector: jest
    .fn()
    .mockImplementation(jest.fn)
    .mockReturnValue({
      markerDetails: [
        {isLiked: false, id: 1},
        {isLiked: false, id: 2},
        {isLiked: false, id: 3},
        {isLiked: false, id: 4},
        {isLiked: false, id: 5},
      ],
      cardDetails: [
        {
          description: 'Big Ben...',
          id: 1,
          name: 'Big Ben',
          uri: 'https://images/1',
        },
        {
          description: 'The National Gallery...',
          id: 2,
          name: 'National Gallery',
          uri: 'https://images/2',
        },
        {
          description: 'Buckingham Palace...',
          id: 3,
          name: 'Buckingham Palace',
          uri: 'https://images/3',
        },
        {
          description: 'Tower Bridge...',
          id: 4,
          name: 'Tower Bridge',
          uri: 'https://images/4',
        },
        {
          description: 'The British Museum...',
          id: 5,
          name: 'The British Museum',
          uri: 'https://images/5',
        },
      ],
    }),
}));
const landmarkNames = [
  'Big Ben',
  'National Gallery',
  'Buckingham Palace',
  'Tower Bridge',
  'The British Museum',
];

describe('LandmarkList', () => {
  describe('renders', () => {
    it.each(landmarkNames)('', name => {
      const {getByText} = render(<LandmarkList />);
      expect(getByText(name)).toBeTruthy();
    });
  });
});
