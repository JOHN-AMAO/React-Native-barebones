import { Link, Redirect } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Header } from "react-native/Libraries/NewAppScreen";

export default function Page() {
  return <Redirect href="/onboarding" />
}


