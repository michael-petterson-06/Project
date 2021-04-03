// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';


class MovieList extends React.Component {
  render() {

    const { movie } = this.props
    return (
      <div className='movie-list'>
         {movie.map((filme,index) => <MovieCard key={index} movie={filme} />)}
      </div>
    );
  };
};

export default MovieList