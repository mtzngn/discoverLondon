import React, {useRef, useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {RouteProp} from '@react-navigation/native';
import {getWidth, getHeight, isAndroid} from '../../utils/generalUtils';
import Icon from 'react-native-vector-icons/Fontisto';
import {blue, whiteBg, darkShadow} from '../../themes/colors';
import LikedIndicator from '../../common/LikedIndicator/LikedIndicator';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: whiteBg,
  },
  cardImage: {
    width: getWidth(),
    height: getHeight() / 2,
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    padding: 10,
  },
  description: {
    padding: 10,
  },
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
  likedContainer: {
    position: 'absolute',
    left: 320,
    top: isAndroid() ? 20 : 50,
    zIndex: 10,
  },
});

interface DetailsProps {
  route: RouteProp<
    {params: {name: string; id: number; uri: string; description: string}},
    'params'
  >;
  navigation: {goBack: Function};
}
const LandCardDetailsScreen: React.FC<DetailsProps> = ({route, navigation}) => {
  const {name, id, uri, description} = route.params;
  const mountedAnimated = useRef(new Animated.Value(0)).current;

  const animation = (toValue: number, delay: number) =>
    Animated.timing(mountedAnimated, {
      toValue,
      duration: 200,
      delay,
      useNativeDriver: false,
    });

  useEffect(() => {
    animation(1, 300).start();
  });

  const translateY = mountedAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [250, 0],
  });
  return (
    <View style={styles.screenContainer}>
      <View style={styles.likedContainer}>
        <SharedElement id={`item.${id}.liked`}>
          <LikedIndicator id={id} />
        </SharedElement>
      </View>
      <SharedElement id={`item.${id}.photo`}>
        <Image source={{uri}} style={styles.cardImage} />
      </SharedElement>
      <TouchableOpacity
        testID={'angleDownButton'}
        onPress={() => {
          animation(0, 1).start();
          navigation.goBack();
        }}
        style={styles.backButtonContainer}>
        <Icon name="angle-down" size={20} color={blue} />
      </TouchableOpacity>
      <Animated.Text
        style={{
          ...styles.title,
          opacity: mountedAnimated,
          transform: [{translateY}],
        }}>
        {name}
      </Animated.Text>
      <Animated.Text
        style={{
          ...styles.description,
          opacity: mountedAnimated,
          transform: [{translateY}],
        }}>
        {description}
      </Animated.Text>
    </View>
  );
};

export default LandCardDetailsScreen;
