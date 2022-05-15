import React, {useRef} from 'react';
import {StyleSheet, FlatList, Animated, ScrollView} from 'react-native';
import {getHeight, getWidth} from '../../utils';
import LandmarkCard from '../LandmarkCard/LandmarkCard';
import {whiteBg} from '../../themes/colors';

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

const styles = StyleSheet.create({
  listContainer: {
    marginTop: getHeight() * 0.65,
    height: getHeight() * 0.35,
    width: getWidth(),
    position: 'absolute',
    backgroundColor: whiteBg,
    borderRadius: 30,
  },
});

const renderItem = ({item}: any) => (
  <LandmarkCard name={item.name} id={item.id} uri={item.image} />
);

const LandmarkList: React.FC<Array<Data>> = ({data}) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    data && (
      <ScrollView
        style={styles.listContainer}
        contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
        pagingEnabled
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        snapToInterval={300}
        snapToAlignment="center"
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                x: scrollX,
              },
            },
          },
        ])}
        scrollEventThrottle={1}>
        <FlatList
          contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
          data={data}
          renderItem={renderItem}
          horizontal={true}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    )
  );
};

export default LandmarkList;
