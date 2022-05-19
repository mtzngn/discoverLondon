import {Dimensions, Platform} from 'react-native';

export const getWidth = () => Dimensions.get('window').width;

export const getHeight = () => Dimensions.get('window').height;

export const isAndroid = () => Platform.OS === 'android';
