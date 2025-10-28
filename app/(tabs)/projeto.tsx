import React from 'react';
import { View, Pressable, Linking } from 'react-native';
import { MotiView, MotiText } from 'moti';
import { ThemedView } from '@components/ui/themed-view';
const projects = [
  { name: 'Ação Saúde', url: 'https://github.com/denisbarbosa/acao-saude' },
  { name: 'Clima+', url: 'https://github.com/denisbarbosa/clima-plus' },
  { name: 'Hera', url: 'https://github.com/denisbarbosa/hera' }
];

export default function Projeto() {
  return (
    <ThemedView>
      <View style={{ padding: 20 }}>
        {projects.map((p, i) => (
          <MotiView
            key={i}
            from={{ opacity: 0, translateY: 18 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: i * 140 }}
            style={{
              marginBottom: 14,
              padding: 12,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#00FF80',
              backgroundColor: 'rgba(0,255,128,0.05)'
            }}
          >
            <MotiText
              style={{
                color: '#00FF80',
                fontWeight: '700',
                fontSize: 16,
                marginBottom: 4
              }}
            >
              {p.name}
            </MotiText>

            <Pressable onPress={() => Linking.openURL(p.url)} style={{ marginTop: 6 }}>
              <MotiText
                style={{
                  color: '#a7f7bf',
                  textDecorationLine: 'underline'
                }}
              >
                {p.url}
              </MotiText>
            </Pressable>
          </MotiView>
        ))}
      </View>
    </ThemedView>
  );
}
