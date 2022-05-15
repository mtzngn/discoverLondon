import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LikedIndicator from '../../common/LikedIndicator/LikedIndicator';

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
    color: 'white',
    fontWeight: '800',
    marginTop: 'auto',
    paddingLeft: 20,
    paddingBottom: 5,
  },
});

interface Props {
  name: string;
  id: number;
  uri: string;
}

const LandmarkCard: React.FC<Props> = ({name, id, uri}) => {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.cardImage} source={{uri}} />
      <View style={styles.cardOverlay}>
        <Text style={styles.cardTitle}>{name}</Text>
        <LikedIndicator />
      </View>
    </View>
  );
};

export default LandmarkCard;
