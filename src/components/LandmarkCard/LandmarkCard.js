import React, {FunctionComponent, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    width: 250,
    height: 180,
    marginHorizontal: 10,
  },
  cardImage: {
    flex: 1,
    borderRadius: 30,
  },
});

const LandmarkCard: FunctionComponent = ({name, id, uri}) => {
  useEffect(() => {
    console.log('rendercard');
    console.log(uri);
  }, []);
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.cardImage} source={{uri}} />
    </View>
  );
};

export default LandmarkCard;
