"use client";
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const ShoppingCartCard = ({ data }) => {
  const { id, user, userId, products } = data;

  return (
    <ul className='max-w-[200px] max-h-[200px] p-6 bg-white border border-[#ccc]'>
        <li><ShoppingCartIcon/>{console.log(data)}{userId}</li>
        <li>{products}</li>
    </ul>
  )
}

export default ShoppingCartCard;