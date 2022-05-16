import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {useDispatch} from 'react-redux';
import {likeLandmark} from '../../actions';
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
  liked: boolean;
  id: number;
}

const LikedIndicator: React.FC<Props> = ({liked, id}) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={styles.heartContainer}
      onPress={() => dispatch(likeLandmark(id))}>
      {liked ? (
        <Icon name="heart" size={20} color={red} />
      ) : (
        <Icon name="heart-alt" size={20} color={red} />
      )}
    </TouchableOpacity>
  );
};

export default LikedIndicator;
