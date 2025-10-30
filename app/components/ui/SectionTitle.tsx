import React from 'react';
import { Text } from 'react-native';

export default function SectionTitle({ children }: React.PropsWithChildren) {
  return (
    <Text style={{
      fontSize: 22, fontWeight: '800',
      color: '#00FF80', textShadowColor: '#00FF80', textShadowRadius: 10
    }}>
      {children}
    </Text>
  );
}
