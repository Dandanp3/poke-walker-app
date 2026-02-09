import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface StatBarProps {
  label: string;
  value: number;
  maxValue: number;
  color?: string;
}

export function StatBar({ label, value, maxValue, color = "#eab308" }: StatBarProps) {
  const percentage = Math.min(Math.max((value / maxValue) * 100, 0), 100);

  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value} / {maxValue}</Text>
      </View>
      <View style={styles.track}>
        <View 
          style={[
            styles.progress, 
            { width: `${percentage}%`, backgroundColor: color }
          ]} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%', gap: 8 },
  labelRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  label: { fontSize: 12, color: '#a1a1aa', fontWeight: '600' },
  value: { fontSize: 12, color: '#fafafa', fontWeight: 'bold' },
  track: { height: 8, backgroundColor: '#27272a', borderRadius: 4, overflow: 'hidden' },
  progress: { height: '100%', borderRadius: 4 },
});