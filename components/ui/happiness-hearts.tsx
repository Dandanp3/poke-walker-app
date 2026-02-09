import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Heart } from "lucide-react-native";

export function HappinessHearts({ level }: { level: number }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Happiness</Text>
      <View style={styles.heartRow}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Heart
            key={i}
            size={18}
            color={i <= level ? "#ef4444" : "#27272a"}
            fill={i <= level ? "#ef4444" : "transparent"}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 8 },
  label: { fontSize: 12, color: '#a1a1aa', fontWeight: '600', textTransform: 'uppercase' },
  heartRow: { flexDirection: 'row', gap: 4 },
});