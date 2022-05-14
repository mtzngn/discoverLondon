import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const WelcomeScreen = ({landmarkLiked, likeLandmark}) => {
  useEffect(() => {
    console.log(landmarkLiked);
  });
  return (
    <View>
      <Text>Welcome Screen yo here is the state: {landmarkLiked}</Text>
      <Button title="send the action" onPress={likeLandmark} />
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const mapStateToProps = state => {
  return {landmarkLiked: state.landmark.landmarkLiked};
};

export default connect(mapStateToProps, actions)(WelcomeScreen);
