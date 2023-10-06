import axios from 'axios';
import React, { useEffect, useState} from 'react' 
import { useParams } from 'react-router-dom';
import TextDetails from '../components/TextDetails'
import './Details.scss'

export interface IDetailsProps {
  id?: string;
}



const Details:React.FC<IDetailsProps> = () => {
  
  const {id} = useParams();
  const [movieDetails, setMoviesDetails] = useState<any>([])
  

  useEffect(() => {
    const getMovieDetail = async () => {

     await axios
      .get(`http://www.omdbapi.com/?apikey=8cc026ad&s&i=${id}&plot=full`)
      .then(res => setMoviesDetails(res.data))
      .catch(err => console.log(err))
    }
    getMovieDetail();
  }, [id])


const {Title, Year, Poster, Runtime, Plot} = movieDetails
 
  return (
    <div className='detais-container d-flex'>
      <TextDetails Title={Title} Runtime={Runtime} Year={Year} Plot={Plot} />

      <div className="poster-container">
        <img src={Poster} alt='poster do filme' />
      </div>
    </div>
  )
}

export default Details;