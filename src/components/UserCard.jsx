"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { useShopContext } from '@/provider/shopProvider';
import { deleteUser } from '@/libs/deleteUser';

const UserCard = ({ data }) => {
  const { id, username, email, password } = data;
  const { setUser } = useShopContext();
  const route = useRouter();

  return (
    <ul className='max-w-[200px] max-h-[200px] p-6 bg-white border border-[#ccc]'>
        <li>{username}</li>
        <li>{email}</li>
        <input type="button" value="Eliminar" className='cursor-pointer' 
            onClick={async() => await deleteUser(data)}/>
        <input type="button" value="Editar" className='cursor-pointer' 
            onClick={() => {
                setUser(data)
                route.push("../registeruser")
            }}/>
    </ul>
  )
}

export default UserCard;