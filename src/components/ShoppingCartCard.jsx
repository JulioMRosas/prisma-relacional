"use client";
import React, { useState, useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { getCartInfo } from '@/libs/getCartInfo';

const ShoppingCartCard = ({ shoppingCarts }) => {
  const { id } = shoppingCarts;
  const [cartInfo, setCartInfo] = useState(null);

  useEffect(() => {
    const fetchCardInfo = async () => {
      try {
        const info = await getCartInfo(id);
        console.log('Fetched Cart Info:', info);
        setCartInfo(info);
      } catch (error) {
        console.error('Error fetching cart info:', error);
      }
    };
  
    fetchCardInfo();
  }, [id]);

  return (
    <ul className='max-w-[200px] max-h-[250px] p-6 bg-white border border-[#ccc]'>
      {console.log(cartInfo)}
      <li>
        <ShoppingCartIcon/>
        {cartInfo && cartInfo.user && (
          <>
            <p>{cartInfo.user.username}</p>
            <ul>
              {cartInfo.products.map((product) => (
                <li key={product.id}>
                  {product.productName} - ${product.productPrice}
                </li>
              ))}
            </ul>
          </>
        )}
      </li>
    </ul>
  )
}

export default ShoppingCartCard;

/* Example
{
  "id": "ff284dd4-9cc9-4f25-bce0-644ce7d71a66",
  "userId": "56543f11-fabb-4af8-ba27-8775a97c9d1a",
  "user": {
    "id": "56543f11-fabb-4af8-ba27-8775a97c9d1a",
    "username": "ibby",
    "email": "ibby@test.com",
    "password": "hola",
    "createdAt": "2023-11-13T17:03:20.807Z",
    "updatedAt": "2023-11-13T17:03:20.807Z"
  },
  "products": [
    {
      "id": "509cfe2e-3c56-4182-8a62-959dc968d8e2",
      "productName": "gansito",
      "productDescription": "recuerdame",
      "productPrice": 15,
      "productCreatedAt": "2023-11-13T17:03:41.672Z"
    }
  ]
}
*/