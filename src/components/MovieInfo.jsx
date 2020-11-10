import React, { useEffect, useState } from 'react';
import { MoviesService } from '../services/MoviesService';

export const MovieInfo = (props) => {
  const [movie, setMovie] = useState(undefined);

  useEffect(() => {
    console.log(props);
    MoviesService.getMovieById(props?.match?.params?.id)
      .then((res) => setMovie(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <> {movie ? JSON.stringify(movie) : '...'} </>
  );
}
