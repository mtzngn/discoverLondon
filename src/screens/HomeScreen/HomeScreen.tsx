import React, {useEffect} from 'react';
import {View} from 'react-native';
import LandmarkMap from '../../components/LandmarkMap/LandmarkMap';
import LandmarkList from '../../components/LandmarkList/LandmarkList';
import {initializeLandmarks} from '../../reducers/landmarksSlicer';
import {markerDetails, cardDetails, likedCards} from './utils';

import {useDispatch} from 'react-redux';

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
    <View>
      <LandmarkMap />
      <LandmarkList />
    </View>
  );
};

export default HomeScreen;
