import React from 'react';
import LottieView from 'lottie-react-native';
import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function MatrixBackground() {
  return (
    <LottieView
      source={require('@/assets/animations/DragonMatrixEffect.json')}
      autoPlay
      loop
      style={styles.bg}
    />
  );
}

const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    width,
    height,
    zIndex: -10,
    opacity: 0.25,
  },
});
