import React from 'react';
import { View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';

export default function SocialRow({ links }:{links: {whatsapp?: string; linkedin?: string; github?: string}}) {
  const items = [
    { icon: 'logo-whatsapp' as const, url: links.whatsapp },
    { icon: 'logo-linkedin' as const, url: links.linkedin },
    { icon: 'logo-github' as const, url: links.github },
  ].filter(x => !!x.url);

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 8 }}>
      {items.map((it, i) => (
        <Pressable key={i} onPress={() => Linking.openURL(it.url!)}>
          <Ionicons name={it.icon} size={44} color="#00FF80" />
        </Pressable>
      ))}
    </View>
  );
}
