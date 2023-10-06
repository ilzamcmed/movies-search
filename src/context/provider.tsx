import { ReactNode, useState } from "react"
import { MovieContext, INITIAL_STATE } from "./MovieContext"

interface IProps {
    children: ReactNode
    movies: [];
    setMovies: Function;
}

const MovieContextProvider = ({children }: IProps) => {

    const [movies, setMovies] = useState(INITIAL_STATE)

    return (
        <MovieContext.Provider value={{movies}}>{children}</MovieContext.Provider>
    )
  }
  
export default MovieContextProvider