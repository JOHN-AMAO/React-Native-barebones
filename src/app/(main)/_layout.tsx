import { Tabs } from 'expo-router';
import { Home, User, Settings, LayoutDashboard, Search } from 'lucide-react-native';

import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Hide headers globally
        tabBarStyle: {
          backgroundColor: '#fff', // Tab bar styling
          borderTopWidth: 0,
          elevation: 5,
        },
        tabBarActiveTintColor: '#007AFF', // Active tab icon color
        tabBarInactiveTintColor: '#8E8E93', // Inactive tab icon color
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
          tabBarLabel: 'Home',
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ color, size }) => <Search color={color} size={size} />,
          tabBarLabel: 'Explore',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
          tabBarLabel: 'Profile',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color, size }) => <Settings color={color} size={size} />,
          tabBarLabel: 'Settings',
        }}
      />
    </Tabs>
  );
}
