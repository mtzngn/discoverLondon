import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App: React.ReactNode = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Text>Welcome to heaven</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'lightblue',
  },
});

export default App;
