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
          {/* ===== Imagem de Perfil ===== */}
          <Image
            source={require('../assets/images/perfil.jpeg')}
            style={{
              width: 150,
              height: 150,
              borderRadius: 75,
              borderWidth: 2,
              borderColor: '#00FF80',
              marginBottom: 15,
            }}
          />

          {/* ===== Título ===== */}
          <MotiText
            style={{
              fontSize: 28,
              fontWeight: '700',
              color: '#00FF80',
              textAlign: 'center',
              textShadowColor: '#00FF80',
              textShadowRadius: 15,
              marginBottom: 10,
            }}
          >
            👨‍💻 Sobre Mim
          </MotiText>

          {/* ===== Descrição ===== */}
          <MotiText
            style={{
              color: '#00FF80',
              lineHeight: 24,
              marginTop: 4,
              fontSize: 15,
              textAlign: 'justify',
            }}
          >
            Olá! Sou <MotiText style={{ fontWeight: 'bold', color: '#00FF80' }}>Denis Barbosa</MotiText>, 
            desenvolvedor focado em criar soluções que unem tecnologia, design e propósito. 
            Tenho experiência em projetos Web, Mobile e IoT, sempre buscando entregar produtos 
            que gerem impacto real e melhorem a experiência das pessoas.
          </MotiText>

          <MotiText
            style={{
              color: '#00FF80',
              lineHeight: 24,
              marginTop: 12,
              textAlign: 'justify',
            }}
          >
            Atualmente, curso <MotiText style={{ fontWeight: 'bold', color: '#00FF80' }}>Sistemas para Internet na UNICAP</MotiText> 
            e participo da <MotiText style={{ fontWeight: 'bold', color: '#00FF80' }}>Residência Porto Digital</MotiText>. 
            Ao longo dessa jornada, venho desenvolvendo projetos com tecnologias como 
            React, Next.js, Node.js, Spring Boot, Prisma e Parse (Back4App).
          </MotiText>

          {/* ===== Frase Final ===== */}
          <MotiText
            style={{
              color: '#00FF80',
              lineHeight: 22,
              marginTop: 25,
              fontStyle: 'italic',
              textAlign: 'center',
            }}
          >
            “Transformar ideias em soluções digitais é o que me move.” 🚀
          </MotiText>

          {/* ===== Contato e Redes ===== */}
          <View style={{ marginTop: 40, width: '100%', alignItems: 'center' }}>
            <MotiText
              style={{
                color: '#00FF80',
                fontWeight: '700',
                fontSize: 20,
                marginBottom: 15,
              }}
            >
              🌐 Contato & Redes
            </MotiText>

            <View style={{ gap: 12 }}>
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

/* ====== Componente de Linha para Contatos ====== */
function Row({ icon, text }: { icon: keyof typeof Ionicons.glyphMap; text: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
      <Ionicons name={icon} size={20} color="#00FF80" />
      <MotiText style={{ color: '#00FF80', fontSize: 15 }}>{text}</MotiText>
    </View>
  );
}
