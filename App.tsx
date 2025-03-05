/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const halfItems = Array.from(Array(5).keys());
  const fullItems = Array.from(Array(10).keys());
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={[styles.list, {justifyContent: 'flex-end'}]}>
        {halfItems.map(i => {
          return (
            <TouchableOpacity
              key={i}
              style={{
                width: width / 10 - 20,
                height: 60,
                backgroundColor: 'red',
              }}
            />
          );
        })}
      </View>
      <View style={styles.list}>
        {halfItems.map(i => {
          return (
            <TouchableOpacity
              key={i}
              style={{
                width: width / 10 - 20,
                height: 60,
                backgroundColor: 'red',
              }}
            />
          );
        })}
      </View>
      <View style={styles.list}>
        {fullItems.map(i => {
          return (
            <TouchableOpacity
              key={i}
              style={{
                width: width / 10 - 20,
                height: 60,
                backgroundColor: 'red',
              }}
            />
          );
        })}
      </View>
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
