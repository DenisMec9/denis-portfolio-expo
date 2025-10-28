import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import { MotiView, MotiText } from 'moti';
import { ThemedView } from '@components/ui/themed-view';
import LottieView from 'lottie-react-native';

export default function Home() {
  return (
    <ThemedView>
      {/* Fundo Matrix animado */}
      <LottieView
      source={require('../assets/animations/matrix-bg.json')}
        autoPlay
        loop
        style={styles.background}
      />

      {/* Conteúdo principal */}
      <MotiView
        from={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 900 }}
        style={styles.container}
      >
        <Image
          source={require('../assets/images/perfil.jpeg')}
          style={styles.image}
        />
        <MotiText style={styles.name}>Denis Barbosa</MotiText>
        <MotiText style={styles.subtitle}>
          Desenvolvedor Full Stack · React · Next.js · Tailwind · Spring Boot · IoT
        </MotiText>
      </MotiView>
    </ThemedView>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    width,
    height,
    opacity: 0.15,
    zIndex: -1,
  },
  container: {
    alignItems: 'center',
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 3,
    borderColor: '#00FF80',
    marginBottom: 12,
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    color: '#00FF80',
    textShadowColor: '#00FF80',
    textShadowRadius: 15,
  },
  subtitle: {
    color: '#a7f7bf',
    marginTop: 8,
    textAlign: 'center',
  },
});
