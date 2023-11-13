import React from 'react';
import ShoppingCartCard from '@/components/ShoppingCartCard';
import { getEveryShoppingCart } from '@/libs/getEveryShoppingCart';

const shoppingCartPage = async () => {
  const shoppingCarts = await getEveryShoppingCart();

  return (
    <main className='h-screen p-6'>
      <h2 className='text-center text-[#333] mb-6'>Carritos registrados</h2>
      <div className='h-1 border-dotted border-b-2 border-[#ccc]'></div>
      <div className='flex flex-col p-6'>
        {shoppingCarts.map(index => (<ShoppingCartCard key={index.id} shoppingCarts={index}/>))}
      </div>
    </main>
  )
}

export default shoppingCartPage;