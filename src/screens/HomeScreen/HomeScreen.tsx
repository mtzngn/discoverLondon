import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import LandmarkMap from '../../components/LandmarkMap/LandmarkMap';
import LandmarkList from '../../components/LandmarkList/LandmarkList';
import londonLandmarks from '../../api/londonLandmarks.json';

interface Data {
  id: number;
  name: string;
  description: string;
  image: string;
  latlng: {
    latitude: number;
    longitude: number;
  };
}

const HomeScreen: React.FC = () => {
  useEffect(() => {
    setData(londonLandmarks);
  }, []);

  const [data, setData] = useState<Array<Data>>([]);
  return (
    data && (
      <View>
        <LandmarkMap data={data} />
        <LandmarkList data={data} />
      </View>
    )
  );
};

export default HomeScreen;
