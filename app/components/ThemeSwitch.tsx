import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Pressable onPress={toggleTheme} style={{ padding: 8 }}>
      <Ionicons name={theme === 'dark' ? 'sunny' : 'moon'} size={22} color={theme === 'dark' ? '#ffd36b' : '#111'} />
    </Pressable>
  );
}