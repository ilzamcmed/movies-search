import { useContext } from "react";
import { MovieContext } from "./MovieContext";

export const useMovieContext = () => {

    const context = useContext(MovieContext);

    return context;
}