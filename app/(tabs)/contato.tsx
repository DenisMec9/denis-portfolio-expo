import React from 'react';
import { View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from '@components/ui/themed-view';
import * as Linking from 'expo-linking';

const contacts = [
  { icon: 'logo-whatsapp', url: 'https://wa.me/5581999999999' },
  { icon: 'logo-linkedin', url: 'https://linkedin.com' },
  { icon: 'logo-github', url: 'https://github.com' }
];

export default function Contato() {
  return (
    <ThemedView>
      <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 24, paddingTop: 20 }}>
        {contacts.map((c, i) => (
          <Pressable key={i} onPress={() => Linking.openURL(c.url)} style={{ marginHorizontal: 12 }}>
            <Ionicons name={c.icon as any} size={44} color="#00FF80" />
          </Pressable>
        ))}
      </View>
    </ThemedView>
  );
}