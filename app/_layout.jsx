import React from "react";
import { Stack, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name='index'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='profile'
          options={{ headerShown: false }}
        />
      </Stack>
    </>
  );
};

export default RootLayout;
