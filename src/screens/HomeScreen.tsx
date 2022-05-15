import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import LandmarkMap from '../components/LandmarkMap/LandmarkMap';
import LandmarkList from '../components/LandmarkList/LandmarkList';

const HomeScreen: FunctionComponent = () => {
  return (
    <View>
      <LandmarkMap />
      <LandmarkList />
    </View>
  );
};

export default HomeScreen;
