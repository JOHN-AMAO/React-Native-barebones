import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router/build/link/Link'

const SignUp = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4">
        {/* Logo Section */}
        <View className="items-center mt-10 mb-6">
          <Image 
            source={{uri: "https://utfs.io/f/PUt3O4SmnbQyMaYr905ky2lU0FPVGfoKMYtJTSXmzCgaeE7A"}} 
            className="w-32 h-32"
            resizeMode="contain"
          />
        </View>

        {/* Form Section */}
        <View className="space-y-4">
          <Text className="text-3xl font-bold text-gray-800 mb-6">Create Account</Text>
          
          <View className="space-y-2">
            <Text className="text-gray-600 text-sm">Full Name</Text>
            <TextInput 
              className="w-full bg-gray-100 rounded-lg p-3 text-gray-800"
              placeholder="Enter your full name"
            />
          </View>

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
              placeholder="Create a password"
              secureTextEntry
            />
          </View>

          <View className="space-y-2">
            <Text className="text-gray-600 text-sm">Confirm Password</Text>
            <TextInput 
              className="w-full bg-gray-100 rounded-lg p-3 text-gray-800"
              placeholder="Confirm your password"
              secureTextEntry
            />
          </View>

          <TouchableOpacity className="bg-blue-500 p-4 rounded-lg mt-4">
            <Link href="/home">
              <Text className="text-white text-center font-semibold text-lg">Sign Up</Text>
            </Link>
          </TouchableOpacity>

          <View className="flex-row justify-center mt-4">
            <Text className="text-gray-600">Already have an account? </Text>
            <TouchableOpacity>
              <Text className="text-blue-500">Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default SignUp 