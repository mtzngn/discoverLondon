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
    const markerDetails = londonLandmarks.map(el => {
      return {
        latlng: {
          latitude: el.latlng.latitude,
          longitude: el.latlng.longitude,
        },
        isSelected: false,
        id: el.id,
      };
    });
    const cardDetails = londonLandmarks.map(el => {
      return {
        name: el.name,
        id: el.id,
        uri: el.image,
        description: el.description,
      };
    });
    const likedCards = londonLandmarks.map(el => {
      return {
        isLiked: false,
        id: el.id,
      };
    });

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
