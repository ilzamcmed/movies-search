import React from 'react' 
import { Link } from 'react-router-dom';

export type TMovie = {
  imdbID: string;
  Poster: string;
  id: string;
  Title?: string;
  Plot?: string;
}

export interface IMoviesListProps {
  movies: TMovie[]
}

const MoviesList:React.FC<IMoviesListProps> = ({movies}) =>  (
    <div data-testid="movies-list" className="movies">
      {movies.map(({ imdbID, Poster, Title }) => (
        <Link key={imdbID} to={`details/${imdbID}`}>
          <div data-testid='movieId' aria-label={`Movie poster from ${Title}`} className="movie-poster" >
            <img  src={Poster} alt={`Movie poster from ${Title}`}/>
          </div>
          
        </Link>
        ))
      }
    </div> 
  )


export default MoviesList;