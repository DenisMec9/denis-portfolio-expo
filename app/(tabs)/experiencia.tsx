import React from 'react';
import { View } from 'react-native';
import { MotiView, MotiText } from 'moti';
import { ThemedView } from '@components/ui/themed-view';

const items = [
  { title: 'Residente Porto Digital', company: 'Ferreira Costa', period: '2024 - 2025' },
  { title: 'Desenvolvedor Web', company: 'UNICAP', period: '2023 - 2024' }
];

export default function Experiencia() {
  return (
    <ThemedView>
      <View style={{ padding: 20 }}>
        {items.map((it, i) => (
          <MotiView key={i} from={{ opacity: 0, translateY: 16 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: i*120 }} style={{ marginBottom: 18, paddingLeft: 12, borderLeftWidth: 3, borderLeftColor: '#00FF80' }}>
            <MotiText style={{ color: '#00FF80', fontSize: 18, fontWeight: '700' }}>{it.title}</MotiText>
            <MotiText style={{ color: '#dfffdc' }}>{it.company}</MotiText>
            <MotiText style={{ color: '#9fd7a9' }}>{it.period}</MotiText>
          </MotiView>
        ))}
      </View>
    </ThemedView>
  );
}