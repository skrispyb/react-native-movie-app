import React from 'react';
import { Box, Center, Text } from 'native-base';

const MovieContainer = ({ title }) => {

  return (
    <>
      <Box width='100%'>
        <Center py={10}>
          <Text>{title}</Text>
        </Center>
      </Box>
    </>
  )
}

export default MovieContainer
