import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, RefreshControl } from 'react-native';
import { Bell, Calendar, Book, Clock, ChevronRight } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Assignment {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  status: 'pending' | 'submitted';
}

interface Announcement {
  id: string;
  title: string;
  from: string;
  time: string;
}

interface ClassSchedule {
  id: string;
  subject: string;
  time: string;
  room: string;
  teacher: string;
}

const Home = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  
  const assignments: Assignment[] = [
    {
      id: '1',
      title: 'Mathematics Assignment 3',
      subject: 'Mathematics',
      dueDate: 'Due Tomorrow',
      status: 'pending'
    },
    {
      id: '2',
      title: 'Physics Lab Report',
      subject: 'Physics',
      dueDate: 'Due in 3 days',
      status: 'pending'
    }
  ];

  const announcements: Announcement[] = [
    {
      id: '1',
      title: 'Mid-term Exam Schedule Released',
      from: 'Academic Office',
      time: '2 hours ago'
    },
    {
      id: '2',
      title: 'Science Fair Registration Open',
      from: 'Science Department',
      time: '5 hours ago'
    }
  ];

  const todaySchedule: ClassSchedule[] = [
    {
      id: '1',
      subject: 'Mathematics',
      time: '9:00 AM - 10:30 AM',
      room: 'Room 101',
      teacher: 'Dr. Smith'
    },
    {
      id: '2',
      subject: 'Physics',
      time: '11:00 AM - 12:30 PM',
      room: 'Room 203',
      teacher: 'Prof. Johnson'
    }
  ];

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Simulate data refresh
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const renderAssignmentCard = (assignment: Assignment) => (
    <TouchableOpacity
      key={assignment.id}
      className="bg-white p-4 rounded-xl mb-3 flex-row items-center"
    >
      <View className="bg-blue-100 p-3 rounded-lg">
        <Book size={24} color="#2563EB" />
      </View>
      <View className="flex-1 ml-3">
        <Text className="text-lg font-semibold">{assignment.title}</Text>
        <Text className="text-gray-600">{assignment.subject}</Text>
      </View>
      <View>
        <Text className="text-red-500 font-medium">{assignment.dueDate}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderAnnouncementCard = (announcement: Announcement) => (
    <TouchableOpacity
      key={announcement.id}
      className="bg-white p-4 rounded-xl mb-3"
    >
      <View className="flex-row justify-between items-start">
        <Text className="text-lg font-semibold flex-1 mr-2">{announcement.title}</Text>
        <Text className="text-gray-500 text-sm">{announcement.time}</Text>
      </View>
      <Text className="text-gray-600 mt-1">{announcement.from}</Text>
    </TouchableOpacity>
  );

  const renderScheduleCard = (schedule: ClassSchedule) => (
    <TouchableOpacity
      key={schedule.id}
      className="bg-white p-4 rounded-xl mb-3"
    >
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <View className="bg-purple-100 p-3 rounded-lg">
            <Clock size={24} color="#7C3AED" />
          </View>
          <View className="ml-3">
            <Text className="text-lg font-semibold">{schedule.subject}</Text>
            <Text className="text-gray-600">{schedule.time}</Text>
          </View>
        </View>
        <ChevronRight size={20} color="#6B7280" />
      </View>
      <View className="mt-2">
        <Text className="text-gray-600">{schedule.room} • {schedule.teacher}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView
        className="flex-1"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Header */}
        <View className="p-4 flex-row justify-between items-center">
          <View>
            <Text className="text-gray-600">Good morning,</Text>
            <Text className="text-2xl font-bold">Alex Johnson </Text>
          </View>
          <TouchableOpacity className="bg-white p-2 rounded-full">
            <Bell size={24} color="#374151" />
          </TouchableOpacity>
        </View>

        {/* Upcoming Assignments */}
        <View className="p-4">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-bold">Upcoming Assignments</Text>
            <TouchableOpacity>
              <Text className="text-blue-600">See all</Text>
            </TouchableOpacity>
          </View>
          {assignments.map(renderAssignmentCard)}
        </View>

        {/* Today's Schedule */}
        <View className="p-4">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-bold">Today's Schedule</Text>
            <TouchableOpacity>
              <Calendar size={24} color="#374151" />
            </TouchableOpacity>
          </View>
          {todaySchedule.map(renderScheduleCard)}
        </View>

        {/* Announcements */}
        <View className="p-4">
          <Text className="text-xl font-bold mb-4">Announcements</Text>
          {announcements.map(renderAnnouncementCard)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;