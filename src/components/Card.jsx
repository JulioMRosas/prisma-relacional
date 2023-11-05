"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { useArtistContext } from '@/provider/artistProvider';

const Card = ({ product }) => {
  const { id, name, age, band, genre } = data;
  const { setArtist } = useArtistContext();
  const route = useRouter();

  return (
    <ul className='max-w-[200px] max-h-[200px] p-6 bg-white border border-[#ccc]'>
        <li>{name}</li>
        <li>{age}</li>
        <li>{band}</li>
        <li>{genre}</li>
        <input type="button" value="Eliminar" className='cursor-pointer' 
        onClick={async() => await deleteArtist(data)}/>
        <input type="button" value="Editar" className='cursor-pointer' 
        onClick={() => {
          setArtist(data)
          route.push("../register")
        }}/>
    </ul>
  )
}

export default Card;