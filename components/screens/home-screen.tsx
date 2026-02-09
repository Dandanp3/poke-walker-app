import React from "react";
import { View, Text, ScrollView, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { mockPokemon, mockTrainer } from "@/lib/mock-data";
import { PokemonImage } from "@/components/ui/pokemon-image";
import { StatBar } from "@/components/ui/stat-bar";
import { HappinessHearts } from "@/components/ui/happiness-hearts";
import { PokeballIcon, ZapIcon, ShieldIcon, WindIcon, SwordIcon } from "@/components/ui/icons";
import { LinearGradient } from 'expo-linear-gradient';

// Cores do tema original
const THEME = {
  background: "#09090b",
  foreground: "#fafafa",
  card: "#18181b",
  muted: "#27272a",
  mutedForeground: "#a1a1aa",
  border: "rgba(39, 39, 42, 0.5)",
  primary: "#eab308", // Yellow-500
  secondary: "#27272a",
  accent: "#f97316", // Orange-500
};

export function HomeScreen() {
  const pokemon = mockPokemon;
  const trainer = mockTrainer;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 24 }}>
        
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={styles.trainerName}>{trainer.displayName}</Text>
          </View>
          <View style={styles.iconCircle}>
            <PokeballIcon size={20} color={THEME.foreground} />
          </View>
        </View>

        {/* Pokemon Showcase Card */}
        <View style={styles.showcaseWrapper}>
          <LinearGradient
            colors={['rgba(234, 179, 8, 0.15)', THEME.card, 'rgba(59, 130, 246, 0.1)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.showcaseGradient}
          >
            <View style={styles.levelBadge}>
              <Text style={styles.levelText}>Lv. {pokemon.level}</Text>
            </View>

            <View style={styles.pokemonContent}>
              <PokemonImage
                src={pokemon.imageUrl}
                name={pokemon.name}
                size={180}
              />
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.pokemonName}>{pokemon.name}</Text>
                <View style={styles.typeBadgeContainer}>
                  {pokemon.type.map((t) => (
                    <View key={t} style={styles.typeBadge}>
                      <Text style={styles.typeText}>{t}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <View style={styles.card}>
            <StatBar
              label="Experience"
              value={pokemon.xp}
              maxValue={pokemon.maxXp}
              color={THEME.primary} // Passando a cor diretamente
            />
          </View>

          <View style={styles.card}>
            <HappinessHearts level={pokemon.happiness} />
          </View>

          {/* Combat Stats Grid */}
          <View style={styles.statsGrid}>
            <StatCard
              icon={<SwordIcon size={16} color="#f97316" />}
              label="Attack"
              value={pokemon.attack}
              iconBg="#f9731615"
            />
            <StatCard
              icon={<SwordIcon size={16} color="#5af5fa" />}
              label="Special  Attack"
              value={pokemon.spAttack}
              iconBg="#079ca114"
            />
            <StatCard
              icon={<ShieldIcon size={16} color="#3b82f6" />}
              label="Defense"
              value={pokemon.defense}
              iconBg="#3b82f615"
            />
            <StatCard
              icon={<ShieldIcon size={16} color="#3b82f6" />}
              label="Special  Attack"
              value={pokemon.spDefense}
              iconBg="#3b82f615"
            />
            <StatCard
              icon={<WindIcon size={16} color="#22c55e" />}
              label="Speed"
              value={pokemon.speed}
              iconBg="#22c55e15"
            />
            <StatCard
              icon={<ZapIcon size={16} color="#ef4444" />}
              label="HP"
              value={`${pokemon.hp}/${pokemon.maxHp}`}
              iconBg="#ef444415"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function StatCard({ icon, label, value, iconBg }: any) {
  return (
    <View style={styles.statCard}>
      <View style={[styles.statIconContainer, { backgroundColor: iconBg }]}>
        {icon}
      </View>
      <View>
        <Text style={styles.statLabel}>{label}</Text>
        <Text style={styles.statValue}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  welcomeText: {
    fontSize: 10,
    color: THEME.mutedForeground,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  trainerName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: THEME.foreground,
    letterSpacing: -0.5,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(234, 179, 8, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  showcaseWrapper: {
    marginHorizontal: 20,
    marginTop: 8,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: THEME.border,
    overflow: 'hidden',
  },
  showcaseGradient: {
    padding: 24,
  },
  levelBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 99,
  },
  levelText: {
    fontSize: 12,
    fontWeight: '700',
    color: THEME.foreground,
  },
  pokemonContent: {
    alignItems: 'center',
    gap: 8,
  },
  pokemonName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.foreground,
    marginTop: 10,
  },
  typeBadgeContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 6,
  },
  typeBadge: {
    backgroundColor: THEME.secondary,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 99,
  },
  typeText: {
    fontSize: 10,
    fontWeight: '700',
    color: THEME.foreground,
    textTransform: 'uppercase',
  },
  statsSection: {
    paddingHorizontal: 20,
    marginTop: 16,
    gap: 12,
  },
  card: {
    backgroundColor: THEME.card,
    borderWidth: 1,
    borderColor: THEME.border,
    borderRadius: 20,
    padding: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'space-between',
  },
  statCard: {
    width: (Dimensions.get('window').width / 2) - 25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: THEME.card,
    borderWidth: 1,
    borderColor: THEME.border,
    borderRadius: 20,
    padding: 12,
    gap: 12,
  },
  statIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statLabel: {
    fontSize: 10,
    color: THEME.mutedForeground,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: THEME.foreground,
  },
});