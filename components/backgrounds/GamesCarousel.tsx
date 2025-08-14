import { games } from '@/lib/mock-data/games';
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const gameImages: Record<string, any> = {
  'beer-pong.jpg': require('@/assets/images/games/beer-pong.jpg'),
  'chess.jpg': require('@/assets/images/games/chess.jpg'),
  'hit-8.jpg': require('@/assets/images/games/hit-8.jpg'),
  'mensch-aergere-dich-nicht.jpg': require('@/assets/images/games/mensch-aerger-dich-nicht.jpg'),
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
    <View>
      <ImageBackground
        source={gameImages[item.imagePath]}
        style={styles.carouselImage}
      >
        <Text style={styles.carouselText}>{item.title}</Text>
        <Text style={styles.carouselTextDescription}>{item.description}</Text>
      </ImageBackground>
    </View>
  );
}

const GamesCarousel = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View id='carousel-component'>
      <Carousel
        loop={true}
        width={width}
        height={height}
        snapEnabled={true}
        pagingEnabled={true}
        autoPlayInterval={2000}
        data={games}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ item, index }) =>
          renderItem({ item, index, rounded: true })
        }
      />
    </View>
  );
};

export default GamesCarousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
  },
  carouselItem: {
    height: '100%',
    width: '100%',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselText: {
    color: 'white',
    fontSize: 24,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  carouselTextDescription: {
    color: 'white',
    fontSize: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
});
