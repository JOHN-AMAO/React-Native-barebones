import "../global.css";
import { Slot } from "expo-router";
import { Stack } from 'expo-router'

import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false
});

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen 
        name="onboarding" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="auth/signin" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="auth/signup" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="(main)" 
        options={{ headerShown: false }} 
      />
    </Stack>
  )
}

