import React, {useEffect} from 'react';
import LandmarkMap from '../../components/LandmarkMap/LandmarkMap';
import LandmarkList from '../../components/LandmarkList/LandmarkList';
import {initializeLandmarks} from '../../reducers/landmarksSlicer';
import {markerDetails, cardDetails, likedCards} from './utils';

import {useDispatch} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      initializeLandmarks({
        markerDetails,
        cardDetails,
        likedCards,
      }),
    );
  });

  return (
    <SafeAreaView>
      <LandmarkMap />
      <LandmarkList />
    </SafeAreaView>
  );
};

export default HomeScreen;
