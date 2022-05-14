import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import WelcomeScreen from '../screens/WelcomeScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Text>Welcome to heaven</Text>
      <WelcomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'lightblue',
  },
});

export default App;
