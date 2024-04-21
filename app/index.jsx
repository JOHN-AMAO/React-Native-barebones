import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-black '>
      <Text className='text-3xl text-white font-pblack'>Aura</Text>
      <Link
        href='/profile'
        className='text-white'
      >
        Go to Profile
      </Link>
      <Link
        href='/test'
        className='text-white mt-5 border-2 border-green-500'
      >
        Test
      </Link>
      <StatusBar style='auto' />
    </View>
  );
}
