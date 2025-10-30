import React from 'react';
import { ScrollView, Linking, TouchableOpacity, View, Image } from 'react-native';
import { MotiText, MotiView } from 'moti';
import { ThemedView } from '@components/ui/themed-view';
import { Ionicons } from '@expo/vector-icons';

export default function Sobre() {
  return (
    <ThemedView>
      <ScrollView contentContainerStyle={{ padding: 22 }}>
        <MotiView
          from={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 800 }}
          style={{ alignItems: 'center' }}
        >
          <Image
            source={require('../assets/images/perfil.jpeg')} // ✅ Caminho corrigido
            style={{
              width: 150,
              height: 150,
              borderRadius: 75,
            }}
          />

          <MotiText
            style={{
              fontSize: 28,
              fontWeight: '700',
              color: '#00FF80',
              textAlign: 'center',
              textShadowColor: '#00FF80',
              textShadowRadius: 15,
              marginTop: 10,
            }}
          >
            👨‍💻 Sobre Mim
          </MotiText>

          <MotiText
            style={{
              color: '#d8ffd8',
              lineHeight: 24,
              marginTop: 12,
              fontSize: 15,
              textAlign: 'justify',
            }}
          >
            Olá! Me chamo <MotiText style={{ fontWeight: 'bold', color: '#00FF80' }}>Denis Barbosa</MotiText> 
            e sou apaixonado por tecnologia, inovação e design. Atualmente, curso 
            <MotiText style={{ fontWeight: 'bold', color: '#00FF80' }}> Sistemas para Internet na UNICAP</MotiText> 
            e participo da <MotiText style={{ fontWeight: 'bold', color: '#00FF80' }}>Residência Porto Digital</MotiText> 
            pela <MotiText style={{ fontWeight: 'bold', color: '#00FF80' }}>Ferreira Costa</MotiText>.
          </MotiText>

          <MotiText
            style={{
              color: '#cfeccf',
              lineHeight: 24,
              marginTop: 12,
              textAlign: 'justify',
            }}
          >
            Já atuei em projetos reais nas áreas de 
            <MotiText style={{ color: '#00FF80' }}> Front-end, Back-end e IoT</MotiText>, 
            utilizando tecnologias como React, Next.js, Node.js, Parse (Back4App), Prisma, PostgreSQL e Spring Boot.
          </MotiText>

          <MotiText
            style={{
              color: '#a7f7bf',
              lineHeight: 22,
              marginTop: 20,
              fontStyle: 'italic',
              textAlign: 'center',
            }}
          >
            “A tecnologia só faz sentido quando conecta pessoas.” 🚀
          </MotiText>

          {/* ===== Contato e Redes ===== */}
          <View style={{ marginTop: 35, width: '100%', alignItems: 'center' }}>
            <MotiText style={{ color: '#00FF80', fontWeight: '700', fontSize: 20, marginBottom: 12 }}>
              🌐 Contato & Redes
            </MotiText>

            <View style={{ gap: 10 }}>
              <TouchableOpacity onPress={() => Linking.openURL('mailto:denisfilho2@exemplo.com')}>
                <Row icon="mail" text="denisfilho2@exemplo.com" />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL('https://wa.me/5581988954430')}>
                <Row icon="logo-whatsapp" text="+55 81 98895-4430" />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/denis_mec9/')}>
                <Row icon="logo-instagram" text="@denis_mec9" />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/denis-barbosa-7b98972bb/')}>
                <Row icon="logo-linkedin" text="LinkedIn" />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL('https://github.com/DenisMec9')}>
                <Row icon="logo-github" text="GitHub" />
              </TouchableOpacity>
            </View>
          </View>
        </MotiView>
      </ScrollView>
    </ThemedView>
  );
}

function Row({ icon, text }: { icon: keyof typeof Ionicons.glyphMap; text: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
      <Ionicons name={icon} size={20} color="#00FF80" />
      <MotiText style={{ color: '#d8ffd8', fontSize: 15 }}>{text}</MotiText>
    </View>
  );
}
