import React, {useRef} from 'react';
import {StyleSheet, TouchableOpacity, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {useDispatch, useSelector} from 'react-redux';
import {LikedCards, likeLandmark} from '../../actions';
import {RootState} from '../../store/store';
import {whiteBg, red} from '../../themes/colors';

const styles = StyleSheet.create({
  heartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: whiteBg,
    margin: 10,
    zIndex: 10,
  },
});

interface Props {
  id: number;
}

const LikedIndicator: React.FC<Props> = ({id}) => {
  const {likedCards} = useSelector(
    (state: RootState) => state.landmarksReducer,
  );
  const isLiked = likedCards?.filter((el: LikedCards) => el?.id === id)[0]
    ?.isLiked;

  const currentValue = new Animated.Value(0);

  const dispatch = useDispatch();
  const AnimatedIcon = Animated.createAnimatedComponent(Icon);

  return (
    <TouchableOpacity
      style={styles.heartContainer}
      onPress={() => dispatch(likeLandmark(id))}>
      <AnimatedIcon
        name={isLiked ? 'heart' : 'heart-alt'}
        size={20}
        color={red}
        testID={'heartIcon'}
        onLoad={Animated.spring(currentValue, {
          toValue: 1,
          friction: 5,
          useNativeDriver: true,
        }).start()}
        style={{
          transform: [{scale: isLiked ? currentValue : 1}],
        }}
      />
    </TouchableOpacity>
  );
};

export default LikedIndicator;
