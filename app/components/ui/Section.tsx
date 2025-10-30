import React from 'react';
import { View } from 'react-native';

export default function Section({ children, style }: React.PropsWithChildren<{style?: any}>) {
  return <View style={[{ paddingHorizontal: 20, paddingVertical: 16 }, style]}>{children}</View>;
}
