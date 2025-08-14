import GamesCarousel from '@/components/backgrounds/GamesCarousel';
import React from 'react';
import { SafeAreaView } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <GamesCarousel />
    </SafeAreaView>
  );
}
