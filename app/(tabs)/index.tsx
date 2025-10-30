import React from 'react';
import { Image, StyleSheet, Dimensions, View } from 'react-native';
import { MotiView, MotiText } from 'moti';
import { ThemedView } from '@components/ui/themed-view';
import SocialRow from '@components/ui/SocialRow';
import { PROFILE } from '@data';

export default function Home() {
  return (
    <ThemedView>
      {/* ===== CONTEÚDO PRINCIPAL ===== */}
      <View style={styles.overlay}>
        <MotiView
          from={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 1000 }}
          style={styles.content}
        >
          <Image source={PROFILE.avatar} style={styles.avatar} />
          <MotiText style={styles.name}>{PROFILE.name}</MotiText>
          <MotiText style={styles.subtitle}>
            {PROFILE.role} · React · Next.js · Tailwind · Spring Boot · IoT
          </MotiText>

          {/* ===== ÍCONES SOCIAIS ===== */}
          <View style={{ marginTop: 25 }}>
            <SocialRow links={PROFILE.links} />
          </View>
        </MotiView>
      </View>
    </ThemedView>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 165,
    height: 165,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#00FF80',
    marginBottom: 15,
    shadowColor: '#00FF80',
    shadowOpacity: 0.6,
    shadowRadius: 18,
  },
  name: {
    fontSize: 30,
    fontWeight: '800',
    color: '#00FF80',
    textShadowColor: '#00FF80',
    textShadowRadius: 20,
  },
  subtitle: {
    color: '#a7f7bf',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 22,
  },
});
