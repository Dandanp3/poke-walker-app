import React, { useEffect } from "react"
import { View, StyleSheet } from "react-native"
import { Image } from "expo-image"
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withRepeat, 
  withTiming, 
  withSequence 
} from "react-native-reanimated"

interface PokemonImageProps {
  src: string
  name: string
  size?: number
  animated?: boolean
}

export function PokemonImage({
  src,
  name,
  size = 200,
  animated = true,
}: PokemonImageProps) {
  
  const floatAnim = useSharedValue(0);

  useEffect(() => {
    if (animated) {
      floatAnim.value = withRepeat(
        withSequence(
          withTiming(-10, { duration: 2000 }),
          withTiming(0, { duration: 2000 })
        ),
        -1,
        false
      );
    } else {
      floatAnim.value = 0;
    }
  }, [animated]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: floatAnim.value }],
    };
  });

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      {/* Removemos a View do 'glow' daqui */}
      
      <Animated.View style={animated ? animatedStyle : undefined}>
        <Image
          source={src}
          contentFit="contain"
          style={{
            width: size,
            height: size,
          }}
          transition={500}
        />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // O estilo 'glow' também pode ser removido daqui
});