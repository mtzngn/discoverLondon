import React, {useEffect} from 'react';
import {View} from 'react-native';
import LandmarkMap from '../../components/LandmarkMap/LandmarkMap';
import LandmarkList from '../../components/LandmarkList/LandmarkList';
import londonLandmarks from '../../api/londonLandmarks.json';
import {initializeLandmarks} from '../../actions/landmarkActions';

import {useDispatch} from 'react-redux';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeLandmarks(londonLandmarks));
  });

  return (
    <View>
      <LandmarkMap />
      <LandmarkList />
    </View>
  );
};

export default HomeScreen;
