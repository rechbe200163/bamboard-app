import GamesCarousel from '@/components/backgrounds/GamesCarousel';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <GamesCarousel />;
    </SafeAreaView>
  );
}
