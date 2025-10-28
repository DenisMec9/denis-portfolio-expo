import React from 'react';
import { Image } from 'react-native';
import { MotiView, MotiText } from 'moti';
import { ThemedView } from '@components/ui/themed-view';

export default function Home() {
  return (
    <ThemedView>
      <MotiView
        from={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 900 }}
        style={{ alignItems: 'center', padding: 20 }}
      >
        <Image
          source={require('../assets/images/perfil.jpeg')}
          style={{
            width: 160,
            height: 160,
            borderRadius: 80,
            borderWidth: 3,
            borderColor: '#00FF80',
            marginBottom: 12,
          }}
        />
        <MotiText
          style={{
            fontSize: 28,
            fontWeight: '700',
            color: '#00FF80',
            textShadowColor: '#00FF80',
            textShadowRadius: 12,
          }}
        >
          Denis Barbosa
        </MotiText>
        <MotiText
          style={{
            color: '#a7f7bf',
            marginTop: 8,
            textAlign: 'center',
          }}
        >
          Desenvolvedor Full Stack · React · Next.js · Tailwind · Spring Boot · IoT
        </MotiText>
      </MotiView>
    </ThemedView>
  );
}
