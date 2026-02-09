import { View } from 'react-native';
import { useColorScheme } from 'nativewind';
import { ReactNode } from 'react';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { colorScheme } = useColorScheme();

  return (
    // O View serve para garantir que o tema seja aplicado na raiz do app
    <View style={{ flex: 1 }} key={colorScheme} className="bg-background">
      {children}
    </View>
  );
}