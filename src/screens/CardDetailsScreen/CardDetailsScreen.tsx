import React from 'react';
import {Image, StyleSheet, Button} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

const styles = StyleSheet.create({
  cardImage: {
    width: 200,
    height: 200,
    borderRadius: 30,
  },
});

const CardDetailsScreen: React.FC = ({route, navigation}) => {
  const {id, uri} = route.params;
  console.log('id', id);
  console.log('uri', uri);
  return (
    <>
      <SharedElement id={`item.${id}.photo`}>
        <Image source={{uri}} style={styles.cardImage} />
      </SharedElement>
      <Button title="goback" onPress={() => navigation.goBack()} />
    </>
  );
};

export default CardDetailsScreen;
