import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {getHeight, getWidth} from '../../utils';
import LandmarkCard from '../LandmarkCard/LandmarkCard';

const styles = StyleSheet.create({
  listContainer: {
    marginTop: getHeight() * 0.65,
    height: getHeight() * 0.35,
    width: getWidth(),
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 30,
  },
});

const renderItem = ({item}: any) => (
  <LandmarkCard name={item.name} id={item.id} uri={item.image} />
);

const LandmarkList: React.FC = ({data}) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
        data={data}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default LandmarkList;