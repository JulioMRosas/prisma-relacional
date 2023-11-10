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
    <ul className='flex flex-col space-y-2 max-w-[200px] max-h-[250px] p-6 bg-white border border-[#ccc]'>
        <li>{productName}</li>
        <li>"{productDescription}"</li>
        <li>${Number.parseFloat(productPrice).toFixed(2)}</li>
        <input type="button" value="Eliminar" className='p-2 rounded-lg bg-[#00A1C6] text-[#fff] cursor-pointer' 
            onClick={async() => await deleteProduct(data)}/>
        <input type="button" value="Editar" className='p-2 rounded-lg bg-[#00A1C6] text-[#fff] cursor-pointer' 
            onClick={() => {
                setProduct(data)
                route.push("../registerproduct")
            }}/>
    </ul>
  )
}

export default ProductCard;