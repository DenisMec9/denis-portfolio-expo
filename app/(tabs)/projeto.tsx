import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Dimensions } from 'react-native';
import { MotiView } from 'moti';
import { ThemedView } from '@components/ui/themed-view';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

export default function Projetos() {
  const projetos = [
    {
      nome: 'Conversores em Next.js',
      descricao: 'Aplicação com conversores de moeda, temperatura e distância.',
      url: 'https://conversores-nextjs.vercel.app/',
    },
    {
      nome: 'Jogo de Dados',
      descricao: 'Jogo interativo tipo Bulls and Cows com frontend dinâmico.',
      url: 'https://pfe-2025.vercel.app/jogo',
    },
    {
      nome: 'CRUD de Despesas',
      descricao: 'Aplicação para cadastrar, editar e excluir despesas (HTML + CSS + JS).',
      url: 'https://web2024-4.vercel.app/atv8-%20CRUD%20de%20Despesas/',
    },
    {
      nome: 'Jogo Senha em JS Puro',
      descricao: 'Mini game de adivinhação com validação em tempo real.',
      url: 'https://web2024-4.vercel.app/Portf%C3%B3lio/Game.html',
    },
  ];

  return (
    <ThemedView style={styles.container}>
      {/* ===== Fundo Matrix animado ===== */}
      <LottieView
        source={require('@assets/animations/DragonMatrixEffect.json')}
        autoPlay
        loop
        style={styles.matrixBackground}
      />

      {/* ===== Conteúdo principal ===== */}
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>🧩 Missões no GitHub</Text>

        {projetos.map((repo, index) => (
          <MotiView
            key={index}
            from={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 600, delay: index * 200 }}
            style={styles.card}
          >
            <Text style={styles.nome}>{repo.nome}</Text>
            <Text style={styles.descricao}>{repo.descricao}</Text>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => Linking.openURL(repo.url)}
            >
              <Text style={styles.textoBotao}>Explorar 🚀</Text>
            </TouchableOpacity>
          </MotiView>
        ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: '#000',
  },
  scroll: {
    paddingBottom: 100,
  },
  matrixBackground: {
    position: 'absolute',
    width,
    height,
    zIndex: -2,
    opacity: 0.55,
    transform: [{ scale: 1.2 }],
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#00FF80',
    textAlign: 'center',
    marginBottom: 25,
    textShadowColor: '#00FF80',
    textShadowRadius: 14,
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#00FF80',
    shadowColor: '#00FF80',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },
  nome: {
    color: '#00FF80',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  descricao: {
    color: '#d9ffd9',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 14,
  },
  botao: {
    alignSelf: 'flex-start',
    backgroundColor: '#00FF80',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  textoBotao: {
    color: '#000',
    fontWeight: '700',
    fontSize: 15,
  },
});
