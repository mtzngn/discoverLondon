/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {
  StyleSheet,
  FlatList,
  Animated,
  ScrollView,
  ListRenderItem,
} from 'react-native';
import {RootState} from '../../store/store';
import {useSelector} from 'react-redux';
import {MarkerDetails, CardDetails} from '../../reducers/landmarksSlicer';
import {getHeight, getWidth, isAndroid} from '../../utils/generalUtils';
import LandmarkCard from '../LandmarkCard/LandmarkCard';
import {whiteBg} from '../../themes/colors';

const styles = StyleSheet.create({
  listContainer: {
    marginTop: isAndroid() ? getHeight() * 0.65 : getHeight() * 0.7,
    height: isAndroid() ? getHeight() * 0.35 : getHeight() * 0.3,
    width: getWidth(),
    position: 'absolute',
    backgroundColor: whiteBg,
    borderRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});

const renderItem: ListRenderItem<CardDetails> = ({item}) => (
  <LandmarkCard
    name={item.name}
    id={item.id}
    uri={item.uri}
    description={item.description}
  />
);

const LandmarkList: React.FC = () => {
  const {cardDetails} = useSelector((state: RootState) => state.landmarks);

  const {markerDetails} = useSelector((state: RootState) => state.landmarks);

  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    const selectedLandmarkId = markerDetails?.filter(
      (el: MarkerDetails) => el?.isSelected,
    )[0]?.id;
    selectedLandmarkId &&
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: selectedLandmarkId - 1,
        viewOffset: 40,
      });
  }, [markerDetails]);

  return (
    <ScrollView
      style={styles.listContainer}
      contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
      decelerationRate={0}
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                x: scrollX,
              },
            },
          },
        ],
        {
          useNativeDriver: false,
        },
      )}
      scrollEventThrottle={10}>
      <FlatList
        ref={flatListRef}
        contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
        data={cardDetails}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={item => `card${item.id}`}
        snapToInterval={300}
        snapToAlignment="center"
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default LandmarkList;
