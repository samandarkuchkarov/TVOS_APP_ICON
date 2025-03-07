/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import MyNativeView from './MyNativeView';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <MyNativeView style={{width: 100, height: 100, backgroundColor: 'red'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
    padding: 80,
  },
  list: {
    flexDirection: 'row',
    gap: 20,
  },
});

export default App;
