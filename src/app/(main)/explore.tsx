import { View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { Search, Filter } from "lucide-react-native";

export default function Explore() {
  return (
    <View className="flex-1 bg-gray-100">
      {/* Search Header */}
      <View className="p-4 bg-white shadow-sm">
        <View className="flex-row items-center space-x-2">
          <View className="flex-1 flex-row items-center bg-gray-100 rounded-lg p-2">
            <Search size={20} className="text-gray-500 mr-2" />
            <TextInput
              placeholder="Search courses, subjects..."
              className="flex-1"
            />
          </View>
          <TouchableOpacity className="p-2">
            <Filter size={24} className="text-blue-500" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 p-4">
        {/* Popular Categories */}
        <View className="mb-6">
          <Text className="text-xl font-bold mb-4">Popular Categories</Text>
          <View className="flex-row flex-wrap gap-2">
            {['Mathematics', 'Science', 'History', 'Languages', 'Arts', 'Technology'].map((category) => (
              <TouchableOpacity 
                key={category}
                className="bg-white px-4 py-2 rounded-full border border-gray-200"
              >
                <Text className="text-gray-700">{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Featured Courses */}
        <View>
          <Text className="text-xl font-bold mb-4">Featured Courses</Text>
          {[1, 2, 3].map((item) => (
            <TouchableOpacity 
              key={item}
              className="bg-white p-4 rounded-lg mb-3 shadow-sm"
            >
              <Text className="text-lg font-semibold mb-2">Advanced Mathematics</Text>
              <Text className="text-gray-600 mb-2">Learn advanced mathematical concepts with practical examples</Text>
              <View className="flex-row justify-between items-center">
                <Text className="text-blue-500 font-semibold">$49.99</Text>
                <Text className="text-gray-500">4.8 ★ (2.5k reviews)</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
