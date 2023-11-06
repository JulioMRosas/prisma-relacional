import React from 'react';
import { getEveryUser } from '@/libs/getEveryUser';
import UserCard from '@/components/UserCard';

const usersListPage = async () => {
    const data = await getEveryUser();
    
  return (
    <main className='grid p-6'>
      <h2 className='text-center text-[#333] mb-6'>Usuarios registrados</h2>
      <div className='h-1 border-dotted border-b-2 border-[#ccc]'></div>
      <div className='grid grid-cols-3 h-screen justify-center p-6'>
          {data.map(user => (<UserCard key={user.id} data={user}/>))}
      </div>
    </main>
  )
}

export default usersListPage;