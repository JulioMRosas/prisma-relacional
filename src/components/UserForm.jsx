"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserContext } from '@/provider/userProvider';
import { addUser } from '@/libs/addUser';

const UserForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const { user, setUser} = useUserContext();
  const route = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([username, email, password, confirmPassword].includes('')) {
      setError(true);
      return
    }

    setError(false);

    const newUser = {
        username,
        email,
        password
    }

    if (user === null) {
      addUser(newUser);
      setUser(null);
      route.push("/");
    }
    else if (user !== null) {
      updateUser(newUser, user.id);
      setUser(null);
      route.push("/");
    }

    await addUser(newUser);
  }

  return (
    <div className='w-[50%] mt-4'>
      <h2 className='text-center text-[#333] mb-4'>
        {
          user ? "Edita al usuario" : "Registra a un usuario"
        }
      </h2>
      <form className='flex flex-col space-y-4'>
        <div className='border-dotted border-b-2 border-[#ccc]'></div>
        { error && <div className='bg-red-500 p-2 rounded-md font-bold'>Error: Debes llenar todos los campos</div> }
        <label htmlFor="username" className='text-[#333]'>Nombre del usuario</label>
        <input type="text" placeholder='ej. manuel23' id='username' className='p-2 rounded-md border border-[#ccc]' value={username} onChange={e => setUsername(e.target.value)}/>
        <label htmlFor="email" className='text-[#333]'>Email</label>
        <input type="text" placeholder='manuel23@gmail.com' id='email' className='p-2 rounded-md border border-[#ccc]' value={email} onChange={e => setEmail(e.target.value)}/>
        <label htmlFor="password" className='text-[#333]'>Contraseña</label>
        <input type="text" placeholder='********' id='password' className='p-2 rounded-md border border-[#ccc]' value={password} onChange={e => setPassword(e.target.value)}/>
        <label htmlFor="confirmPassword" className='text-[#333]'>Confirma tu contraseña</label>
        <input type="text" placeholder='********' id='confirmPassword' className='p-2 rounded-md border border-[#ccc]' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
        {
          user === null ? (        
            <div className='flex justify-center'>
              <input type="submit" value="Registrar" className='font-bold text-[#fff] bg-[#00A1C6] mt-2 p-2 rounded-md cursor-pointer' onClick={handleSubmit}/>
            </div>) : (
            <div className='flex justify-center'>
              <input type="submit" value="Editar" className='font-bold text-[#fff] bg-[#00A1C6] mt-2 p-2 rounded-md cursor-pointer' onClick={handleSubmit}/>
            </div>
          )
        }
      </form>
    </div>
  )
}

export default UserForm;