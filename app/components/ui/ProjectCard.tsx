import React from 'react';
import { View, Text, Pressable, Linking } from 'react-native';
import SkillPill from './SkillPill';

export default function ProjectCard({ name, desc, link, tags }:{
  name: string; desc: string; link: string; tags: string[];
}) {
  return (
    <Pressable onPress={() => Linking.openURL(link)} style={{ marginBottom: 14 }}>
      <View style={{
        borderWidth: 1, borderColor: '#00FF80',
        backgroundColor: 'rgba(0,255,128,0.06)',
        padding: 14, borderRadius: 14
      }}>
        <Text style={{ color: '#00FF80', fontWeight: '800', fontSize: 16 }}>{name}</Text>
        <Text style={{ color: '#a7f7bf', marginTop: 6 }}>{desc}</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
          {tags.map((t, i) => <SkillPill key={i} label={t} />)}
        </View>
      </View>
    </Pressable>
  );
}
