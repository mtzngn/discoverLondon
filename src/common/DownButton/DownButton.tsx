import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {whiteBg, darkShadow, blue} from '../../themes/colors';
import {getWidth} from '../../utils/generalUtils';
import Icon from 'react-native-vector-icons/Fontisto';

const styles = StyleSheet.create({
  backButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: whiteBg,
    position: 'relative',
    zIndex: 10,
    bottom: 25,
    left: getWidth() - 100,
    shadowColor: darkShadow,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 5,
  },
});

const DownButton = ({animation, navigation}) => {
  return (
    <TouchableOpacity
      testID={'angleDownButton'}
      onPress={() => {
        animation(0, 1).start();
        navigation.goBack();
      }}
      style={styles.backButtonContainer}>
      <Icon name="angle-down" size={20} color={blue} />
    </TouchableOpacity>
  );
};

export default DownButton;
