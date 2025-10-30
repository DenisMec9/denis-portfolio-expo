import React from 'react';
import { Text, View } from 'react-native';

export default function SkillPill({ label }: {label: string}) {
  return (
    <View style={{
      paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999,
      borderWidth: 1, borderColor: '#00FF80', backgroundColor: 'rgba(0,255,128,0.06)', margin: 6
    }}>
      <Text style={{ color: '#a7f7bf', fontWeight: '600' }}>{label}</Text>
    </View>
  );
}
