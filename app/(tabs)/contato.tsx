import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MotiView, MotiText } from 'moti';
import { ThemedView } from '@components/ui/themed-view';
import * as Linking from 'expo-linking';

const contacts = [
  { icon: 'logo-whatsapp', url: 'https://wa.me/5581988954430', label: 'WhatsApp' },
  { icon: 'logo-linkedin', url: 'https://linkedin.com/in/denis-barbosa-7b98972bb/', label: 'LinkedIn' },
  { icon: 'logo-github', url: 'https://github.com/DenisMec9', label: 'GitHub' },
];

export default function Contato() {
  return (
    <ThemedView>
      <View style={styles.container}>
        {/* ===== TÍTULO ===== */}
        <MotiText
          from={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 600 }}
          style={styles.title}
        >
          ✉️ Vamos conversar?
        </MotiText>

        <MotiText
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 300, duration: 800 }}
          style={styles.subtitle}
        >
          Estou sempre aberto a novas ideias, projetos e colaborações.
        </MotiText>

        {/* ===== ÍCONES DE CONTATO ===== */}
        <View style={styles.iconRow}>
          {contacts.map((c, i) => (
            <MotiView
              key={i}
              from={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', delay: i * 150 }}
            >
              <Pressable
                onPress={() => Linking.openURL(c.url)}
                style={({ pressed }) => [
                  styles.iconContainer,
                  { transform: [{ scale: pressed ? 0.9 : 1 }] },
                ]}
              >
                <Ionicons name={c.icon as any} size={44} color="#00FF80" />
                <MotiText style={styles.label}>{c.label}</MotiText>
              </Pressable>
            </MotiView>
          ))}
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  title: {
    color: '#00FF80',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 8,
    textShadowColor: '#00FF80',
    textShadowRadius: 15,
  },
  subtitle: {
    color: '#b9ffcb',
    textAlign: 'center',
    fontSize: 15,
    width: '80%',
    marginBottom: 40,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 28,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 255, 128, 0.08)',
    borderWidth: 1,
    borderColor: '#00FF80',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#00FF80',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    color: '#00FF80',
    fontSize: 13,
    marginTop: 6,
    fontWeight: '500',
  },
});
