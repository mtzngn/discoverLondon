import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import store from '../store/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.backgroundStyle}>
        <Text>Welcome to heaven</Text>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'lightblue',
  },
});

export default App;
