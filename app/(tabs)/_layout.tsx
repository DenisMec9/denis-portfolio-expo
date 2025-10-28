import React from 'react';
import { Tabs } from 'expo-router';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <ThemeProvider>
      <MainTabs />
    </ThemeProvider>
  );
}

function MainTabs() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Tabs screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons: any = { index: 'home', sobre: 'person', experiencia: 'briefcase', projeto: 'code-slash', contato: 'chatbox' };
          return <Ionicons name={icons[route.name]} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#00FF80',
        tabBarInactiveTintColor: isDark ? '#7c7c7c' : '#6b7280',
        tabBarStyle: { backgroundColor: isDark ? '#000' : '#fff', borderTopWidth: 0.3 },
        headerShown: false
      })} />
    </>
  );
}