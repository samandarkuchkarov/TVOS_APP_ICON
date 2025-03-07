/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef} from 'react';
import {
  FocusDestination,
  StyleSheet,
  TouchableOpacity,
  TVFocusGuideView,
  useWindowDimensions,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const halfItems = Array.from(Array(4).keys());
  const fullItems = Array.from(Array(10).keys());
  const {width} = useWindowDimensions();
  const [nextFocusDown, setNextFocusDown] = React.useState<FocusDestination>();
  const nextFocusDownRef = useRef<FocusDestination>(null);

  return (
    <View style={styles.container}>
      <TVFocusGuideView
        autoFocus
        style={[styles.list, {justifyContent: 'flex-end'}]}>
        {halfItems.map(i => {
          return (
            <TouchableOpacity
              nextFocusDown={i == 0 ? nextFocusDown : nextFocusDownRef.current}
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
                if (i == 0 && r) {
                  nextFocusDownRef.current = r;
                  setNextFocusDown(r);
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
