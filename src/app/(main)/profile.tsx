import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { User, Mail, Phone, MapPin, Edit2, LogOut } from "lucide-react-native";

export default function Profile() {
  return (
    <ScrollView className="flex-1 bg-gray-100">
      {/* Header with Avatar */}
      <View className="bg-blue-500 pt-12 pb-20 rounded-b-[40px] shadow-lg">
        <View className="items-center">
          <View className="w-32 h-32 bg-white rounded-full flex items-center justify-center border-4 border-white shadow-lg">
            <User className="text-blue-500" size={80} />
          </View>
          <Text className="text-white text-2xl font-bold mt-4">John Doe</Text>
          <Text className="text-blue-100 text-base">Student</Text>
        </View>
      </View>

      {/* Profile Details */}
      <View className="px-6 -mt-12">
        <View className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <View className="flex-row items-center mb-4">
            <Mail className="text-blue-500 mr-3" size={20} />
            <Text className="text-gray-600 flex-1">john.doe@example.com</Text>
          </View>
          <View className="flex-row items-center mb-4">
            <Phone className="text-blue-500 mr-3" size={20} />
            <Text className="text-gray-600 flex-1">+1 234 567 8900</Text>
          </View>
          <View className="flex-row items-center">
            <MapPin className="text-blue-500 mr-3" size={20} />
            <Text className="text-gray-600 flex-1">New York, USA</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <TouchableOpacity className="bg-blue-500 rounded-xl py-4 mb-3 flex-row justify-center items-center shadow-sm">
          <Edit2 className="text-white mr-2" size={20} />
          <Text className="text-white text-center font-semibold text-lg">Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white border border-red-500 rounded-xl py-4 flex-row justify-center items-center mb-6">
          <LogOut className="text-red-500 mr-2" size={20} />
          <Text className="text-red-500 text-center font-semibold text-lg">Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
