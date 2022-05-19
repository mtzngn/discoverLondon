import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LikedIndicator from '../../common/LikedIndicator/LikedIndicator';
import {lightText} from '../../themes/colors';
import {SharedElement} from 'react-navigation-shared-element';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {CardDetails} from '../../actions';

const styles = StyleSheet.create({
  cardContainer: {
    width: 280,
    height: 200,
    marginHorizontal: 10,
  },
  cardImage: {
    flex: 1,
    borderRadius: 30,
  },
  cardOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardTitle: {
    fontSize: 30,
    maxWidth: 200,
    color: lightText,
    fontWeight: '800',
    marginTop: 'auto',
    paddingLeft: 20,
    paddingBottom: 5,
  },
});

export type RootStackParamList = {
  CardDetails: {
    name: string;
    id: number;
    uri: string;
    description: string;
  };
};

const LandmarkCard: React.FC<CardDetails> = ({name, id, uri, description}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const onPress = () => {
    navigation.navigate('CardDetails', {name, id, uri, description});
  };
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <SharedElement id={`item.${id}.photo`} style={{width: 280, height: 200}}>
        <Image style={styles.cardImage} source={{uri}} />
      </SharedElement>
      <View style={styles.cardOverlay}>
        <Text style={styles.cardTitle}>{name}</Text>
        <SharedElement id={`item.${id}.liked`}>
          <LikedIndicator id={id} />
        </SharedElement>
      </View>
    </TouchableOpacity>
  );
};

export default LandmarkCard;
