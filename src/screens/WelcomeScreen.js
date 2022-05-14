import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';

const WelcomeScreen = ({landmarkLiked, likeLandmark}) => {
  useEffect(() => {
    console.log(landmarkLiked);
  });
  return (
    <View>
      <Text>Welcome Screen yo here is the state: {landmarkLiked}</Text>
      <Button title="send the action" onPress={likeLandmark} />
    </View>
  );
};

const mapStateToProps = state => {
  return {landmarkLiked: state.landmark.landmarkLiked};
};

export default connect(mapStateToProps, actions)(WelcomeScreen);
