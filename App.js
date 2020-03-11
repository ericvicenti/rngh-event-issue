import { useState, default as React } from 'react';
import { View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
const {
  block, set, event, Value
} = Animated;

export default function App() {
  const [panState] = useState(new Value(0));
  const [translateX] = useState(new Value(0));
  const [translateY] = useState(new Value(0));
  return (
    <PanGestureHandler onGestureEvent={event([
      {
        nativeEvent: {
          state: ({ translationX: x, translationY: y, state }) =>
          block([
            set(panState, state),
            set(translateX, x),
            set(translateY, y),
          ])
        },
      },
    ])}>
      <View style={{ flex: 1 }} />
    </PanGestureHandler>
  );
}
