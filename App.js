import { useState, default as React } from 'react';
import { View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
const {
  block, set, event, Value
} = Animated;

export default function App() {
  const [panState] = useState(new Value(0));
  return (
    <PanGestureHandler onHandlerStateChange={event([
      {
        nativeEvent: {
          state: panState
        }
      },
    ])}>
      <View style={{ flex: 1 }} />
    </PanGestureHandler>
  );
}
