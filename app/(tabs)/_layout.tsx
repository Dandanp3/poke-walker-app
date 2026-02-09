import React, { useEffect } from 'react';
import { Tabs } from 'expo-router';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Home, User, RefreshCw, ShoppingBag, Settings } from 'lucide-react-native';
import { setStatusBarHidden } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';

export default function TabLayout() {
  // Configuração imersiva
  useEffect(() => {
    // Esconde a barra de notificações (topo)
    setStatusBarHidden(true, 'none');

    if (Platform.OS === 'android') {
      // Faz os botões de baixo sumirem e só aparecerem com gesto (arrastar)
      NavigationBar.setVisibilityAsync('hidden');
      NavigationBar.setBehaviorAsync('inset-touch');
    }
  }, []);

  const activeColor = "#eab308"; // Dourado Pikachu
  const inactiveColor = "#a1a1aa"; // Cinza muted

  return (
    <View style={{ flex: 1, backgroundColor: '#09090b' }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#09090b',
            borderTopColor: '#27272a',
            // Aumentamos a altura e o padding para os ícones não ficarem colados na borda física
            height: 75, 
            paddingBottom: 15,
            borderTopWidth: 1,
            elevation: 0,
            position: 'absolute', // Garante que o conteúdo do app passe por trás da barra se necessário
            bottom: 0,
            left: 0,
            right: 0,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabItem icon={Home} label="Home" focused={focused} activeColor={activeColor} inactiveColor={inactiveColor} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabItem icon={User} label="Profile" focused={focused} activeColor={activeColor} inactiveColor={inactiveColor} />
            ),
          }}
        />
        <Tabs.Screen
          name="trade"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabItem icon={RefreshCw} label="Trade" focused={focused} activeColor={activeColor} inactiveColor={inactiveColor} />
            ),
          }}
        />
        <Tabs.Screen
          name="mart"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabItem icon={ShoppingBag} label="Mart" focused={focused} activeColor={activeColor} inactiveColor={inactiveColor} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabItem icon={Settings} label="Settings" focused={focused} activeColor={activeColor} inactiveColor={inactiveColor} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

function TabItem({ icon: Icon, label, focused, activeColor, inactiveColor }: any) {
  return (
    <View style={styles.tabItemContainer}>
      <View style={[styles.iconBox, focused && styles.iconBoxActive]}>
        <Icon size={20} color={focused ? activeColor : inactiveColor} />
      </View>
      <Text style={[styles.label, { color: focused ? activeColor : inactiveColor }]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tabItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 12,
  },
  iconBox: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBoxActive: {
    backgroundColor: 'rgba(234, 179, 8, 0.15)',
  },
  label: {
    fontSize: 10,
    fontWeight: '600',
    marginTop: 4,
  },
});