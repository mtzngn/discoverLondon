import React, {FunctionComponent} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {getHeight, getWidth} from '../../utils';
import LandmarkCard from '../LandmarkCard/LandmarkCard';

const styles = StyleSheet.create({
  listContainer: {
    marginTop: getHeight() * 0.7,
    height: getHeight() * 0.3,
    width: getWidth(),
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 30,
  },
});

const DATA = [
  {
    name: 'Big Ben',
    id: 1,
    description:
      'Big Ben is the nickname for the Great Bell of the striking clock at the north end of the Palace of Westminster; the name is frequently extended to also refer to the clock and the clock tower. The official name of the tower in which Big Ben is located was originally the Clock Tower; it was renamed Elizabeth Tower in 2012 to mark the Diamond Jubilee of Elizabeth II, Queen of the United Kingdom.',
    image:
      'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    name: 'Big Ben',
    id: 2,
    description:
      'Big Ben is the nickname for the Great Bell of the striking clock at the north end of the Palace of Westminster; the name is frequently extended to also refer to the clock and the clock tower. The official name of the tower in which Big Ben is located was originally the Clock Tower; it was renamed Elizabeth Tower in 2012 to mark the Diamond Jubilee of Elizabeth II, Queen of the United Kingdom.',
    image:
      'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
];

const renderItem = ({item}: any) => (
  <LandmarkCard name={item.name} id={item.id} uri={item.image} />
);

const LandmarkList: FunctionComponent = () => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
        data={DATA}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default LandmarkList;
