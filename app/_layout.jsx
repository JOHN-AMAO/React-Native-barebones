import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
  return (
    <>
      <Stack.Screen name='index' />
    </>
  );
};

export default RootLayout;
