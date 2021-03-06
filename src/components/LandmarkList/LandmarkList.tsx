/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {
  StyleSheet,
  FlatList,
  Animated,
  ScrollView,
  ListRenderItem,
} from 'react-native';
import {RootState} from '../../store/store';
import {useSelector} from 'react-redux';
import {CardDetails} from '../../reducers/landmarksReducer';
import {getHeight, getWidth, isAndroid} from '../../utils/generalUtils';
import LandmarkCard from '../LandmarkCard/LandmarkCard';
import {whiteBg} from '../../themes/colors';
import useScrollTo from '../../hooks/useScrollTo/useScrollTo';

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

  useScrollTo(flatListRef, markerDetails);

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
        onScrollToIndexFailed={info => {
          const wait = new Promise(resolve => setTimeout(resolve, 500));
          wait.then(() => {
            flatListRef.current?.scrollToIndex({
              index: info.index,
              animated: true,
            });
          });
        }}
        data={cardDetails}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={item => `card${item.name}`}
        snapToInterval={300}
        snapToAlignment="center"
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        testID={'landmarkList'}
      />
    </ScrollView>
  );
};

export default LandmarkList;
