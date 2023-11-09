import React from 'react';
import { getEveryShoppingCart } from '@/libs/getEveryShoppingCart';
import ShoppingCartCard from '@/components/ShoppingCartCard';

const shoppingCartPage = async () => {
  const data = await getEveryShoppingCart();

  return (
    <main className='h-screen p-6'>
      <h2 className='text-center text-[#333] mb-6'>Carritos registrados</h2>
      <div className='h-1 border-dotted border-b-2 border-[#ccc]'></div>
      <div className='flex flex-col p-6'>
        {data.map(shoppingCart => (<ShoppingCartCard key={shoppingCart.id} data={shoppingCart}/>))}
      </div>
    </main>
  )
}

export default shoppingCartPage;