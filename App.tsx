/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef} from 'react';
import type {PropsWithChildren} from 'react';
import {
  findNodeHandle,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TVFocusGuideView,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const halfItems = Array.from(Array(4).keys());
  const fullItems = Array.from(Array(10).keys());
  const {width} = useWindowDimensions();
  const ref = useRef<View>(null);
  const [nextFocusDownId, setNextFocusDownId] = React.useState<number>();

  return (
    <View style={styles.container}>
      <TVFocusGuideView
        autoFocus
        style={[styles.list, {justifyContent: 'flex-end'}]}>
        {halfItems.map(i => {
          return (
            <TouchableOpacity
              //@ts-ignore
              nextFocusDown={nextFocusDownId}
              key={i}
              style={{
                width: width / 10 - 20,
                height: 60,
                backgroundColor: 'red',
              }}
            />
          );
        })}
      </TVFocusGuideView>
      <TVFocusGuideView autoFocus style={[styles.list, {width: 1000}]}>
        {halfItems.map(i => {
          return (
            <TouchableOpacity
              key={i}
              ref={r => {
                let id = findNodeHandle(r);
                if (id) {
                  setNextFocusDownId(id);
                }
              }}
              style={{
                width: width / 10 - 20,
                height: 60,
                backgroundColor: 'red',
              }}
            />
          );
        })}
      </TVFocusGuideView>
      <TVFocusGuideView autoFocus style={styles.list}>
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
      </TVFocusGuideView>
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
