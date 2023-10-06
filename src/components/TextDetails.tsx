import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaRegCopyright  } from 'react-icons/fa';
import { BsDot  } from 'react-icons/bs';

interface ITextDetailsProps {
    Title: string,
    Runtime: string;
    Year: string; 
    Plot: string;
}

const TextDetails: React.FC<ITextDetailsProps> = ({Title, Runtime, Year, Plot}) => {
  return (
    <div className="text-container">
        <Link className='' to="/"><FaArrowLeft /></Link>
        <div className='d-flex small-details'>{Runtime} <BsDot/> {Year} <BsDot/> <FaRegCopyright /></div>
        <h1 className="title">{Title}</h1>
        <div>
            <h4>Plot</h4>
            <p>{Plot}</p>
        </div>
    </div>
  )
}

export default TextDetails