import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import LottieView from 'lottie-react-native';

export function ThemedView({ children, style }: any) {
  const { theme } = useTheme();
  return (
    <View style={[styles.container, style]}>
      {theme === 'dark' && (
        <LottieView source={require('../../assets/animations/matrix-bg.json')} autoPlay loop style={styles.background} />
      )}
      <View style={[styles.overlay, { backgroundColor: theme === 'dark' ? 'rgba(0,0,0,0.82)' : '#fff' }]}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { position: 'absolute', width: '100%', height: '100%', zIndex: -1 },
  overlay: { flex: 1, justifyContent: 'flex-start', alignItems: 'stretch' }
});