import { Box, Button, Divider, Heading, Image, Text, VStack } from 'native-base';
import React from 'react';
import ShowScreen from '../screens/ShowScreen';

const MovieCard = props => {
  const { image, title, relaese_date, popularity, navigation, overview } = props

  return (
    <Box mb={4}>
      <VStack space={4} flexDirection='row' divider={<Divider />}>
        <Box>
          <Image alt={title} source={{ uri: `http://image.tmdb.org/t/p/w500${image}` }} size={'lg'} />
        </Box>
        <Box ml={2} flexShrink={1}>
          <Heading size='xs'>{title}</Heading>
          <Text fontSize={12}>Popularity: {popularity}</Text>
          <Text fontSize={12}>Release Date: {relaese_date}</Text>
          <Button
            backgroundColor='#0AF'
            width='100%'
            onPress={() =>
              navigation.navigate(component={ShowScreen}, {
                title,
                image,
                overview,
                popularity,
                relaese_date
              })
            }
          >
            More Details
          </Button>
        </Box>
      </VStack>
    </Box>
  )
}

export default MovieCard
