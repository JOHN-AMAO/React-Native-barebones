import { View, Text, Image, TouchableOpacity, Dimensions, StatusBar } from 'react-native'
import React from 'react'
import Animated, { FadeInRight, FadeInUp } from 'react-native-reanimated'
import { Link } from 'expo-router/build/link/Link'
const { width, height } = Dimensions.get('window')

const OnboardingScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="light-content" />
      
      {/* Background Design */}
      <View className="absolute top-0 w-full">
        <View className="bg-blue-500 h-[400] rounded-b-[60]">
          {/* Decorative circles */}
          <View className="absolute -top-20 -left-20 w-[200] h-[200] rounded-full bg-blue-400/30" />
          <View className="absolute top-40 -right-20 w-[200] h-[200] rounded-full bg-blue-400/20" />
        </View>
      </View>

      {/* Content */}
      <View className="flex-1 justify-between p-6 pt-24">
        <Animated.View 
          entering={FadeInRight.duration(1000).springify()}
          className="items-center"
        >
          <Image 
            source={{uri: "https://utfs.io/f/PUt3O4SmnbQyMaYr905ky2lU0FPVGfoKMYtJTSXmzCgaeE7A"}} 
            className="w-[280] h-[280] rounded-full"
            resizeMode="contain"
          />
          <Animated.Text 
            entering={FadeInUp.delay(500).duration(1000)}
            className="text-4xl font-bold text-white text-center mt-10"
          >
            Welcome to StudentHub
          </Animated.Text>
          <Animated.Text 
            entering={FadeInUp.delay(700).duration(1000)}
            className="text-white text-center mt-4 text-lg px-6 opacity-90"
          >
            Your one-stop platform for managing your academic journey with ease
          </Animated.Text>
        </Animated.View>

        <Animated.View 
          entering={FadeInUp.delay(1000).duration(1000)}
          className="space-y-4 mb-12"
        >
          <TouchableOpacity 
            className="bg-white p-5 rounded-2xl shadow-lg shadow-blue-500/30"
            activeOpacity={0.8}
          >
            <Link href="/(auth)/signup">
              <Text className="text-blue-500 text-center font-bold text-lg">
                Get Started
              </Text>
            </Link>
          </TouchableOpacity>
          
          <TouchableOpacity 
            className="border-2 border-white/80 p-5 rounded-2xl"
            activeOpacity={0.8}
          >
            <Text className="text-white text-center font-bold text-lg">
              I already have an account
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  )
}

export default OnboardingScreen 