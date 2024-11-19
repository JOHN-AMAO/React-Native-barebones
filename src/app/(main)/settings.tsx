import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Cog, Lock, Bell, LogOut, User, ChevronRight } from "lucide-react-native";

export default function Settings() {
  return (
    <ScrollView className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-blue-500 pt-12 pb-6 rounded-b-[40px] shadow-lg mb-6">
        <Text className="text-2xl font-bold text-white text-center">Settings</Text>
      </View>

      {/* Settings Groups */}
      <View className="px-4">
        {/* Account Settings Group */}
        <Text className="text-sm font-semibold text-gray-500 mb-2 ml-2">ACCOUNT SETTINGS</Text>
        <View className="bg-white rounded-2xl shadow-md mb-6">
          <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-100">
            <View className="flex-row items-center">
              <View className="bg-blue-100 p-2 rounded-full mr-4">
                <User className="text-blue-500" size={24} />
              </View>
              <Text className="text-lg text-gray-700">Account</Text>
            </View>
            <ChevronRight size={20} className="text-gray-400" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-between p-4">
            <View className="flex-row items-center">
              <View className="bg-blue-100 p-2 rounded-full mr-4">
                <Lock className="text-blue-500" size={24} />
              </View>
              <Text className="text-lg text-gray-700">Privacy</Text>
            </View>
            <ChevronRight size={20} className="text-gray-400" />
          </TouchableOpacity>
        </View>

        {/* App Settings Group */}
        <Text className="text-sm font-semibold text-gray-500 mb-2 ml-2">APP SETTINGS</Text>
        <View className="bg-white rounded-2xl shadow-md mb-6">
          <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-100">
            <View className="flex-row items-center">
              <View className="bg-blue-100 p-2 rounded-full mr-4">
                <Bell className="text-blue-500" size={24} />
              </View>
              <Text className="text-lg text-gray-700">Notifications</Text>
            </View>
            <ChevronRight size={20} className="text-gray-400" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-between p-4">
            <View className="flex-row items-center">
              <View className="bg-blue-100 p-2 rounded-full mr-4">
                <Cog className="text-blue-500" size={24} />
              </View>
              <Text className="text-lg text-gray-700">Preferences</Text>
            </View>
            <ChevronRight size={20} className="text-gray-400" />
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity className="bg-white border border-red-500 rounded-xl py-4 flex-row justify-center items-center mb-6">
          <LogOut className="text-red-500 mr-2" size={24} />
          <Text className="text-red-500 text-lg font-semibold">Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
