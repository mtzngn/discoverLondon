import React from 'react';
import {StyleSheet, TouchableOpacity, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {useDispatch, useSelector} from 'react-redux';
import {likeLandmark} from '../../actions';
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
  const isLiked = likedCards?.filter(el => el?.id === id)[0]?.isLiked;

  const dispatch = useDispatch();
  const AnimatedIcon = Animated.createAnimatedComponent(Icon);
  return (
    <TouchableOpacity
      style={styles.heartContainer}
      onPress={() => dispatch(likeLandmark(id))}>
      {isLiked ? (
        <AnimatedIcon name="heart" size={20} color={red} testID={'heartIcon'} />
      ) : (
        <Icon name="heart-alt" size={20} color={red} testID={'heartAltIcon'} />
      )}
    </TouchableOpacity>
  );
};

export default LikedIndicator;
