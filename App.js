import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  // ==========================================
  // ESTADOS (Controlam o que aparece na tela)
  // ==========================================
  const [telaAtual, setTelaAtual] = useState('login'); 
  const [abaAtual, setAbaAtual] = useState('inicio'); 
  const [filtroAtivo, setFiltroAtivo] = useState('Todos');

  // ==========================================
  // TELA 1: LOGIN
  // ==========================================
  if (telaAtual === 'login') {
    return (
      <View style={styles.containerCenter}>
        <Text style={styles.title}>Flor & Gestão</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.icon}>👤</Text>
          <TextInput style={styles.input} placeholder="E-mail ou telefone" placeholderTextColor="#888" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.icon}>🔒</Text>
          <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} placeholderTextColor="#888" />
          <Text style={styles.icon}>👁️</Text>
        </View>

        <TouchableOpacity style={styles.btnPrimary} onPress={() => setTelaAtual('principal')}>
          <Text style={styles.btnTextPrimary}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSecondary}>
          <Text style={styles.btnTextSecondary}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // ==========================================
  // TELA 3: ADICIONAR PRODUTO
  // ==========================================
  if (telaAtual === 'addProduto') {
    return (
      <View style={styles.containerTop}>
        <Text style={styles.subtitle}>Adicionar Novo Produto</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.icon}>🏷️</Text>
          <TextInput style={styles.input} placeholder="Nome do produto" placeholderTextColor="#888" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.icon}>💲</Text>
          <TextInput style={styles.input} placeholder="Preço (R$)" keyboardType="numeric" placeholderTextColor="#888" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.icon}>📦</Text>
          <TextInput style={styles.input} placeholder="Quantidade" keyboardType="numeric" placeholderTextColor="#888" />
        </View>

        <TouchableOpacity 
          style={styles.btnPrimary} 
          onPress={() => {
            alert("Sucesso! Produto adicionado.");
            setTelaAtual('principal'); 
          }}
        >
          <Text style={styles.btnTextPrimary}>Salvar Produto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSecondary} onPress={() => setTelaAtual('principal')}>
          <Text style={styles.btnTextSecondary}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // ==========================================
  // TELA 2: PRINCIPAL (Com Abas e Barra Inferior)
  // ==========================================
  return (
    <View style={styles.containerApp}>
      {/* ÁREA DE CONTEÚDO DAS ABAS */}
      <View style={styles.contentArea}>
        
        {/* CONTEÚDO: INÍCIO */}
        {abaAtual === 'inicio' && (
          <View>
            <Text style={styles.greeting}>Olá, Maria! 🌸</Text>
            
            <TouchableOpacity style={styles.btnPrimary} onPress={() => setTelaAtual('addProduto')}>
              <Text style={styles.btnTextPrimary}>+ Adicionar produto</Text>
            </TouchableOpacity>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtroContainer}>
              {['Todos', 'Flores', 'Folhagens', 'Decorações'].map((filtro) => (
                <TouchableOpacity 
                  key={filtro}
                  style={[styles.btnPill, filtroAtivo === filtro && styles.btnPillAtivo]}
                  onPress={() => setFiltroAtivo(filtro)}
                >
                  <Text style={[styles.textPill, filtroAtivo === filtro && styles.textPillAtivo]}>{filtro}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        {/* CONTEÚDO: ESTOQUE */}
        {abaAtual === 'estoque' && (
          <View>
            <Text style={styles.subtitle}>📦 Meu Estoque</Text>
            <Text style={styles.textLight}>Aqui vai entrar a sua lista de produtos no futuro!</Text>
          </View>
        )}

        {/* CONTEÚDO: VENDAS */}
        {abaAtual === 'vendas' && (
          <View>
            <Text style={styles.subtitle}>🛍️ Vendas</Text>
            <Text style={styles.textLight}>Tela de carrinho e finalização de vendas.</Text>
          </View>
        )}

        {/* CONTEÚDO: FINANCEIRO */}
        {abaAtual === 'financeiro' && (
          <View>
            <Text style={styles.subtitle}>💲 Financeiro</Text>
            <Text style={styles.textLight}>Relatórios de lucros e despesas.</Text>
          </View>
        )}

        {/* CONTEÚDO: MAIS (FOCO EM ADMINISTRAÇÃO) */}
        {abaAtual === 'mais' && (
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.subtitle}>⚙️ Administração</Text>
            
            <Text style={styles.sectionTitle}>🏢 Dados da Empresa</Text>
            <BotaoConfig icone="📝" texto="Informações da Loja (CNPJ)" />
            <BotaoConfig icone="🕒" texto="Horário de Funcionamento" />

            <Text style={styles.sectionTitle}>👥 Gestão de Equipe</Text>
            <BotaoConfig icone="🧑‍💼" texto="Funcionários e Permissões" />
            <BotaoConfig icone="🔑" texto="Controle de Acessos" />

            <Text style={styles.sectionTitle}>💳 Financeiro e Vendas</Text>
            <BotaoConfig icone="💲" texto="Métodos de Pagamento e Taxas" />
            <BotaoConfig icone="🧾" texto="Exportar Relatórios (Excel/PDF)" />

            <Text style={styles.sectionTitle}>🔗 Integrações e Aparelhos</Text>
            <BotaoConfig icone="💬" texto="Integração WhatsApp" />
            <BotaoConfig icone="🖨️" texto="Impressoras e Leitores" />

            {/* BOTÃO DE SAIR */}
            <TouchableOpacity 
              style={[styles.btnSecondary, { marginTop: 30, marginBottom: 40, borderColor: '#d32f2f' }]} 
              onPress={() => { 
                setTelaAtual('login'); 
                setAbaAtual('inicio'); 
              }}
            >
              <Text style={[styles.btnTextSecondary, { color: '#d32f2f' }]}>Sair do Sistema</Text>
            </TouchableOpacity>
          </ScrollView>
        )}
      </View>

      {/* BARRA DE NAVEGAÇÃO INFERIOR */}
      <View style={styles.bottomNav}>
        <BotaoNav icone="🏠" texto="Início" id="inicio" abaAtual={abaAtual} setAbaAtual={setAbaAtual} />
        <BotaoNav icone="📦" texto="Estoque" id="estoque" abaAtual={abaAtual} setAbaAtual={setAbaAtual} />
        <BotaoNav icone="🛍️" texto="Vendas" id="vendas" abaAtual={abaAtual} setAbaAtual={setAbaAtual} />
        <BotaoNav icone="💲" texto="Finanças" id="financeiro" abaAtual={abaAtual} setAbaAtual={setAbaAtual} />
        <BotaoNav icone="•••" texto="Mais" id="mais" abaAtual={abaAtual} setAbaAtual={setAbaAtual} />
      </View>
    </View>
  );
}

// ==========================================
// COMPONENTES AUXILIARES
// ==========================================
function BotaoNav({ icone, texto, id, abaAtual, setAbaAtual }) {
  const isAtivo = abaAtual === id;
  return (
    <TouchableOpacity style={styles.navItem} onPress={() => setAbaAtual(id)}>
      <Text style={styles.navIcone}>{icone}</Text>
      <Text style={[styles.navTexto, isAtivo && styles.navTextoAtivo]}>{texto}</Text>
    </TouchableOpacity>
  );
}

function BotaoConfig({ icone, texto }) {
  return (
    <TouchableOpacity style={styles.btnConfig}>
      <View style={styles.btnConfigLeft}>
        <Text style={styles.iconConfig}>{icone}</Text>
        <Text style={styles.textConfig}>{texto}</Text>
      </View>
      <Text style={styles.arrowConfig}>›</Text>
    </TouchableOpacity>
  );
}

// ==========================================
// ESTILOS (CSS do React Native)
// ==========================================
const styles = StyleSheet.create({
  containerCenter: { flex: 1, padding: 20, backgroundColor: '#f8f9fa', justifyContent: 'center' },
  containerTop: { flex: 1, padding: 20, paddingTop: 50, backgroundColor: '#f8f9fa' },
  containerApp: { flex: 1, backgroundColor: '#f8f9fa' },
  contentArea: { flex: 1, padding: 20, paddingTop: 50 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#2e7d32', textAlign: 'center', marginBottom: 40 },
  subtitle: { fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 20 },
  greeting: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 20 },
  textLight: { color: '#888', fontSize: 16 },
  
  inputGroup: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderWidth: 1, borderColor: '#e0e0e0', borderRadius: 8, paddingHorizontal: 12, marginBottom: 16, height: 50 },
  icon: { fontSize: 18 },
  input: { flex: 1, marginLeft: 10, fontSize: 14, outlineStyle: 'none' },
  
  btnPrimary: { backgroundColor: '#2e7d32', borderRadius: 8, padding: 15, alignItems: 'center', marginBottom: 16, marginTop: 10 },
  btnTextPrimary: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  btnSecondary: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#e0e0e0', borderRadius: 8, padding: 15, alignItems: 'center' },
  btnTextSecondary: { color: '#333', fontWeight: 'bold', fontSize: 16 },
  
  // Filtros (Pills)
  filtroContainer: { flexDirection: 'row', marginTop: 10, marginBottom: 20 },
  btnPill: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#e0e0e0', borderRadius: 20, paddingVertical: 8, paddingHorizontal: 16, marginRight: 10, height: 40, justifyContent: 'center' },
  btnPillAtivo: { backgroundColor: '#2e7d32', borderColor: '#2e7d32' },
  textPill: { color: '#888', fontSize: 14, fontWeight: '500' },
  textPillAtivo: { color: 'white' },

  // Barra Inferior
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'white', paddingVertical: 12, paddingBottom: 20, borderTopWidth: 1, borderColor: '#e0e0e0' },
  navItem: { alignItems: 'center', justifyContent: 'center' },
  navIcone: { fontSize: 22, marginBottom: 4 },
  navTexto: { fontSize: 12, color: '#888', fontWeight: '500' },
  navTextoAtivo: { color: '#2e7d32', fontWeight: 'bold' },

  // Estilos da aba de Configurações / Administração
  sectionTitle: { fontSize: 14, fontWeight: 'bold', color: '#888', marginTop: 25, marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 },
  btnConfig: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', padding: 16, borderRadius: 10, marginBottom: 8, borderWidth: 1, borderColor: '#eee' },
  btnConfigLeft: { flexDirection: 'row', alignItems: 'center' },
  iconConfig: { fontSize: 20, marginRight: 15 },
  textConfig: { fontSize: 16, color: '#333', fontWeight: '500' },
  arrowConfig: { fontSize: 24, color: '#ccc', paddingBottom: 4 },
});