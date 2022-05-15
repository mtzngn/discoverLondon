import React from 'react';
import {View, StyleSheet} from 'react-native';
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
  },
});

interface Props {
  liked: boolean;
}

const LikedIndicator: React.FC<Props> = ({liked}) => {
  return (
    <View style={styles.heartContainer}>
      {liked ? (
        <Icon name="heart" size={20} color={red} />
      ) : (
        <Icon name="heart-alt" size={20} color={red} />
      )}
    </View>
  );
};

export default LikedIndicator;
