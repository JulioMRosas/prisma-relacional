"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { useShopContext } from '@/provider/shopProvider';
import { deleteProduct } from '@/libs/deleteProduct';

const ProductCard = ({ data }) => {
  const { id, productName, productDescription, productPrice } = data;
  const { setProduct } = useShopContext();
  const route = useRouter();

  return (
    <ul className='max-w-[200px] max-h-[200px] p-6 bg-white border border-[#ccc]'>
        <li>{productName}</li>
        <li>{productDescription}</li>
        <li>{productPrice}</li>
        <input type="button" value="Eliminar" className='cursor-pointer' 
            onClick={async() => await deleteProduct(data)}/>
        <input type="button" value="Editar" className='cursor-pointer' 
            onClick={() => {
                setProduct(data)
                route.push("../registerproduct")
            }}/>
    </ul>
  )
}

export default ProductCard;