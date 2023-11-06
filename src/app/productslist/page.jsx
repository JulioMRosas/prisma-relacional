import React from 'react';
import { getEveryProduct } from '@/libs/getEveryProduct';
import ProductCard from '@/components/ProductCard';

const productsListPage = async () => {
  const data = await getEveryProduct();
  return (
    <main className='grid p-6'>
    <h2 className='text-center text-[#333] mb-6'>Productos registrados</h2>
    <div className='h-1 border-dotted border-b-2 border-[#ccc]'></div>
    <div className='grid grid-cols-3 h-screen justify-center p-6'>
        {data.map(product => (<ProductCard key={product.id} data={product}/>))}
    </div>
  </main>
  )
}

export default productsListPage;