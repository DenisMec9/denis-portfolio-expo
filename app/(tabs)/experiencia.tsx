import React from 'react';
import { View, ScrollView } from 'react-native';
import { MotiView, MotiText } from 'moti';
import { ThemedView } from '@components/ui/themed-view';

const experiencias = [
  {
    cargo: 'Estagiário em Desenvolvimento de Sistemas',
    empresa: 'AponTI · Estágio',
    descricao:
      'Desenvolvimento e manutenção de websites, portais e e-commerces, utilizando linguagens de programação e ferramentas web. Apoio em testes de software, configuração de redes e servidores, além de documentação técnica.',
    periodo: 'out 2025 - o momento · 1 mês',
    local: 'Pernambuco, Brasil · Híbrida',
  },
  {
    cargo: 'Estagiário em Comunicação e Tecnologia',
    empresa: 'Conteúdo Legal · Estágio',
    descricao:
      'Apoio no desenvolvimento e implementação de soluções digitais. Suporte na produção de conteúdo audiovisual e digital, além de colaboração em projetos de marketing e redes sociais.',
    periodo: 'abr 2025 - o momento · 7 meses',
    local: 'Recife, Pernambuco, Brasil · Híbrida',
  },
  {
    cargo: 'Residente em Tecnologia e Inovação',
    empresa: 'Programa Porto Digital',
    descricao:
      'Atuação em projetos de desenvolvimento Full Stack com foco em soluções web e mobile. Ênfase em boas práticas, integração de APIs e metodologias ágeis.',
    periodo: '2024 - 2025',
    local: 'Recife, Pernambuco · Presencial',
  },
  {
    cargo: 'Desenvolvedor Full Stack', 
    empresa: 'Universidade Católica de Pernambuco (UNICAP)',
    descricao:
      'Desenvolvimento de aplicações acadêmicas e projetos práticos, unindo front-end, back-end e Internet das Coisas (IoT) com foco em inovação e usabilidade.',
    periodo: '2024 - 2025',
    local: 'Recife, Pernambuco · Presencial',
  },
];

export default function Experiencia() {
  return (
    <ThemedView>
      {/* Scroll habilitado */}
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100 }}>
        <MotiText
          style={{
            fontSize: 26,
            fontWeight: '700',
            color: '#00FF80',
            marginBottom: 20,
            textAlign: 'center',
            textShadowColor: '#00FF80',
            textShadowRadius: 12,
          }}
        >
          💼 Experiências
        </MotiText>

        {experiencias.map((exp, index) => (
          <MotiView
            key={index}
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 600, delay: index * 150 }}
            style={{
              marginBottom: 22,
              backgroundColor: 'rgba(0,0,0,0.6)',
              borderRadius: 14,
              padding: 18,
              borderLeftWidth: 3,
              borderLeftColor: '#00FF80',
              shadowColor: '#00FF80',
              shadowOpacity: 0.3,
              shadowRadius: 10,
              elevation: 5,
            }}
          >
            <MotiText
              style={{
                color: '#00FF80',
                fontSize: 18,
                fontWeight: '700',
                marginBottom: 4,
              }}
            >
              {exp.cargo}
            </MotiText>

            <MotiText
              style={{
                color: '#c9ffd9',
                fontSize: 15,
                marginBottom: 4,
              }}
            >
              {exp.empresa}
            </MotiText>

            <MotiText
              style={{
                color: '#a8f7b7',
                fontSize: 14,
                lineHeight: 20,
                marginBottom: 6,
              }}
            >
              {exp.descricao}
            </MotiText>

            <MotiText
              style={{
                color: '#74ff9c',
                fontSize: 13,
                marginTop: 4,
              }}
            >
              {exp.periodo}
            </MotiText>

            <MotiText
              style={{
                color: '#5cff8c',
                fontSize: 13,
              }}
            >
              {exp.local}
            </MotiText>
          </MotiView>
        ))}
      </ScrollView>
    </ThemedView>
  );
}
