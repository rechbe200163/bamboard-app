import { games } from '@/lib/mock-data/games';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const gameImages: Record<string, any> = {
  'chess.jpg': require('@/assets/chess.jpg'),
  'hit-8.jpg': require('@/assets/hit-8.jpg'),
  'beer-pong.jpg': require('@/assets/beer-pong.jpg'),
  'mensch-aergere-dich-nicht.jpg': require('@/assets/mensch-aergere-dich-nicht.jpg'),
};

function renderItem({
  item,
  index,
  rounded,
  style,
}: {
  item: (typeof games)[number];
  index: number;
  rounded?: boolean;
  style?: object;
}) {
  return (
    <ImageBackground src={gameImages[item.imagePath]}>
      <Text>{item.title}</Text>
    </ImageBackground>
  );
}

const GamesCarousel = () => {
  return (
    <View id='carousel-component'>
      <Carousel
        loop={true}
        width={430}
        height={258}
        snapEnabled={true}
        pagingEnabled={true}
        autoPlayInterval={2000}
        data={games}
        style={{ width: '100%' }}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ item, index }) =>
          renderItem({ item, index, rounded: true })
        }
      />
    </View>
  );
};

export default GamesCarousel;

const styles = StyleSheet.create({});
