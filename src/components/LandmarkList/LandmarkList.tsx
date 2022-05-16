import React, {useEffect, useRef} from 'react';
import {StyleSheet, FlatList, Animated, ScrollView} from 'react-native';
import {getHeight, getWidth} from '../../utils';
import LandmarkCard from '../LandmarkCard/LandmarkCard';
import {whiteBg} from '../../themes/colors';
import {RootState} from '../../store/store';
import {useSelector, useDispatch} from 'react-redux';
import {likeLandmark} from '../../actions';

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

const renderItem = ({item}) => (
  <LandmarkCard
    name={item.name}
    id={item.id}
    uri={item.image}
    description={item.description}
    isLiked={item.isLiked}
  />
);

const LandmarkList: React.FC = () => {
  const dispatch = useDispatch();
  const {landmarks} = useSelector((state: RootState) => state.landmarksReducer);
  console.log('mordor', landmarks);

  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // this.flatListRef.scrollToIndex({animated: true, index: '3'});
    // dispatch(likeLandmark(1));
  }, []);

  return (
    <ScrollView
      style={styles.listContainer}
      contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
      decelerationRate={0}
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
        ref={ref => {
          flatListRef = ref;
        }}
        contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
        data={landmarks}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={item => item.id}
        snapToInterval={300}
        snapToAlignment="center"
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollToIndex={2}
      />
    </ScrollView>
  );
};

export default LandmarkList;
