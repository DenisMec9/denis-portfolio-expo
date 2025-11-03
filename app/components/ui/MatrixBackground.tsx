import React from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

export default function MatrixBackground() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <LottieView
          source={require('../../assets/animations/DragonMatrixEffect.json')}
          autoPlay
          loop
          style={styles.animation}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#000', // Fundo sólido preto para evitar bordas brancas
  },
  container: {
    position: 'absolute',
    width: width,
    height: Platform.OS === 'web' ? window.innerHeight : height, // corrige altura web
    top: 0,
    left: 0,
    zIndex: -1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: width,
    height: Platform.OS === 'web' ? window.innerHeight : height,
  },
});
