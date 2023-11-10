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
    <ul className='flex flex-col space-y-2 max-w-[200px] max-h-[250px] p-6 bg-white border border-[#ccc]'>
        <li>{username}</li>
        <li>{email}</li>
        <li>{password}</li>
        <input type="button" value="Eliminar" className='p-2 rounded-lg bg-[#00A1C6] text-[#fff] cursor-pointer' 
            onClick={async() => await deleteUser(data)}/>
        <input type="button" value="Editar" className='p-2 rounded-lg bg-[#00A1C6] text-[#fff] cursor-pointer' 
            onClick={() => {
                setUser(data)
                route.push("../registeruser")
            }}/>
    </ul>
  )
}

export default UserCard;