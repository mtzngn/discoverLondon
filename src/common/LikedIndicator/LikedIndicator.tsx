import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {likeLandmark} from '../../reducers/landmarksReducer';
import {RootState} from '../../store/store';
import Icon from 'react-native-vector-icons/Fontisto';
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
  const {likedCards} = useSelector((state: RootState) => state.landmarks);
  const isLiked = likedCards?.filter(el => el?.id === id)[0]?.isLiked;

  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={styles.heartContainer}
      onPress={() => dispatch(likeLandmark(id))}>
      <Icon
        name={isLiked ? 'heart' : 'heart-alt'}
        size={20}
        color={red}
        testID={isLiked ? 'heartIcon' : 'heartAltIcon'}
      />
    </TouchableOpacity>
  );
};

export default LikedIndicator;
