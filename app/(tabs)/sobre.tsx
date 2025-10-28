import React from 'react';
import { ScrollView } from 'react-native';
import { MotiView, MotiText } from 'moti';
import { ThemedView } from '@components/ui/themed-view';


export default function Sobre() {
  return (
    <ThemedView>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <MotiView from={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 600 }}>
          <MotiText style={{ fontSize: 26, fontWeight: '700', color: '#00FF80', marginBottom: 12 }}>Sobre Mim</MotiText>
          <MotiText style={{ color: '#cfeccf', lineHeight: 22 }}>
            Sou estudante de Sistemas para Internet na UNICAP e residente no programa Porto Digital pela Ferreira Costa. Trabalho com desenvolvimento Web e Mobile, banco de dados e projetos de IoT. Gosto de transformar ideias em código com foco em experiência do usuário.
          </MotiText>
        </MotiView>
      </ScrollView>
    </ThemedView>
  );
}