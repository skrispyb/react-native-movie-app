import { Box } from 'native-base';
import React, { useState } from 'react';
import Loading from '../layout/Loading';
import MoviesList from '../lists/MoviesList';

const TVShowsContainer = ({ navigation, TVShowsOfType }) => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Box mx='auto' mt={5} p={0}>
      <Box>
        {isLoading ? <Loading /> : <MoviesList navigation={navigation} moviesOfType={TVShowsOfType} />}
      </Box>
    </Box>
  )
}

export default TVShowsContainer
