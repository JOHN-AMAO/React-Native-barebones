import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignIn = () => {
  return (
    <View className="flex-1 bg-white p-4">
      {/* Logo Section */}
      <View className="items-center mt-20 mb-10">
        <Image 
          source={{uri: "https://utfs.io/f/PUt3O4SmnbQyMaYr905ky2lU0FPVGfoKMYtJTSXmzCgaeE7A"}} 
          className="w-40 h-40"
          resizeMode="contain"
        />
      </View>

      {/* Form Section */}
      <View className="space-y-4">
        <Text className="text-3xl font-bold text-gray-800 mb-6">Welcome Back!</Text>
        
        <View className="space-y-2">
          <Text className="text-gray-600 text-sm">Email</Text>
          <TextInput 
            className="w-full bg-gray-100 rounded-lg p-3 text-gray-800"
            placeholder="Enter your email"
          />
        </View>

        <View className="space-y-2">
          <Text className="text-gray-600 text-sm">Password</Text>
          <TextInput 
            className="w-full bg-gray-100 rounded-lg p-3 text-gray-800"
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>

        <TouchableOpacity>
          <Text className="text-blue-500 text-right">Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-blue-500 p-4 rounded-lg">
          <Link href="/home">
            <Text className="text-white text-center font-semibold text-lg">Sign In</Text>
          </Link>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-4">
          <Text className="text-gray-600">Don't have an account? </Text>
          <TouchableOpacity>
            <Text className="text-blue-500">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SignIn 