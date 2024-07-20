'use client'
import React from 'react';
import {Image} from '../app/text/image';
import { CiHeart } from "react-icons/ci";

interface ExploreCartProps {
  c: Image;
}
const ExploreCart: React.FC<ExploreCartProps> = ({ c }) => {
  console.log(c);

  return (
    <div className='m-4  '>
        <div className='absolute flex cursor-pointer p-2 hover:text-red-600'>
           <CiHeart size={25}/>
           <h1>{c.likes}</h1>
        </div>
        <img src={c.image} alt={c.text} className='w-[25rem] h-[20rem] hover:h-[21rem] hover:w-[26rem]' />
        <p className='-mt-10 p-2 opacity-100'>{c.text}</p>
    </div>
  );
};

export default ExploreCart;
