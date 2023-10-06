import React, { useState } from "react";
import './Home.scss'
import MoviesList, {  TMovie } from "../components/MoviesList";

import axios from "axios";

const Home: React.FC<any> = () => {

  const [name, setName] = useState("");
  const [movies, setMovies] = useState<TMovie[] |[]>([])
  const [notFound, setNotFound] = useState<boolean>(false)

 const handleSubmit = async (e: any) => {
    e.preventDefault();

    setNotFound(false)

   await axios
    .get(`https://www.omdbapi.com/?apikey=8cc026ad&s=${name}&type=movie&page=1&plot=full`)
    .then((res) => {

      if (res.data.Response === 'True') {
        setNotFound(false)
        console.log('resposta true')
        return setMovies(res.data.Search)
      } 

      if(res.data.Response === 'False') {
        setMovies([])
        console.log('resposta falsa')
        return setNotFound(true)
      }
    })

    .catch((err) => {console.log(err)});
  };
  console.log(movies)

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className='searchBar'>
          <label htmlFor='name'></label>
          <input
            type='text'
            name='name'
            placeholder='Search movies...'
            onChange={(e) => setName(e.target.value)}
          />
         
        </div>

        <button onClick={handleSubmit}>Search</button>
      </form>

      {!!movies &&
        <MoviesList movies={movies} /> 
      }

      {notFound && (
        <h3 className="">No movies found</h3>
      )}


    </div>
  );
};

export default Home