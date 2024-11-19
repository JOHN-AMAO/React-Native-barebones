import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Animated, { FadeInDown } from 'react-native-reanimated'

const SignIn = () => {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <ScrollView className="flex-1 bg-white">
        <View className="p-4 pt-8">
          {/* Background Design */}
          <View className="absolute top-0 w-full">
            <View className="bg-blue-500/10 h-[300] rounded-b-[60]">
              <View className="absolute -top-20 -left-20 w-[200] h-[200] rounded-full bg-blue-400/20" />
              <View className="absolute top-40 -right-20 w-[200] h-[200] rounded-full bg-blue-400/10" />
            </View>
          </View>

          {/* Logo Section */}
          <Animated.View 
            entering={FadeInDown.duration(1000).springify()}
            className="items-center mt-16 mb-10 "
          >
            <Image 
              source={{uri: "https://utfs.io/f/PUt3O4SmnbQyMaYr905ky2lU0FPVGfoKMYtJTSXmzCgaeE7A"}} 
              className="w-40 h-40 rounded-full"
              resizeMode="contain"
            />
          </Animated.View>

          {/* Form Section */}
          <Animated.View 
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className="space-y-4 bg-white p-6 rounded-3xl shadow-lg shadow-gray-100"
          >
            <Text className="text-3xl font-bold text-gray-800 mb-6">Welcome Back!</Text>
            
            <View className="space-y-2">
              <Text className="text-gray-600 text-sm font-medium">Email</Text>
              <TextInput 
                className="w-full bg-gray-50 rounded-xl p-4 text-gray-800 border border-gray-200"
                placeholder="Enter your email"
                placeholderTextColor="#9CA3AF"
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>

            <View className="space-y-2">
              <Text className="text-gray-600 text-sm font-medium">Password</Text>
              <TextInput 
                className="w-full bg-gray-50 rounded-xl p-4 text-gray-800 border border-gray-200"
                placeholder="Enter your password"
                placeholderTextColor="#9CA3AF"
                secureTextEntry
              />
            </View>

            <TouchableOpacity className="py-2">
              <Text className="text-blue-500 text-right font-medium">Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              className="bg-blue-500 p-4 rounded-xl shadow-lg shadow-blue-500/30"
              activeOpacity={0.8}
            >
              <Link href="/home">
                <Text className="text-white text-center font-semibold text-lg">Sign In</Text>
              </Link>
            </TouchableOpacity>

            <View className="flex-row justify-center mt-6">
              <Text className="text-gray-600">Don't have an account? </Text>
              <TouchableOpacity activeOpacity={0.8}>
                <Link href="/(auth)/signup">
                  <Text className="text-blue-500 font-medium">Sign Up</Text>
                </Link>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default SignIn