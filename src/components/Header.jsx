"use client";
import React from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import PageviewIcon from '@mui/icons-material/Pageview';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <>
      {/* Normal menu */}
      <header className='hidden sm:grid grid-cols-4 p-6 bg-[#DDDDDD] text-[#333]'>
        <Link href={"../"} className='justify-self-center'>Inicio</Link>
        <Popover className="justify-self-center">
          <Popover.Button>Registrar</Popover.Button>
          <Transition
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          >
          <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />
          <Popover.Panel className='absolute text-[#333] bg-[#DDDDDD] p-6 rounded-md border border-[#333]'>
            <ul className='flex flex-col space-y-5'>
              <Link href={"../registeruser"}>Usuarios</Link>
              <Link href={"../registerproduct"}>Productos</Link>
            </ul>
          </Popover.Panel>
        </Transition>
        </Popover>
        <Popover className="justify-self-center">
          <Popover.Button>Ver Registros</Popover.Button>
          <Transition
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          >
          <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />
          <Popover.Panel className='absolute text-[#333] bg-[#DDDDDD] p-6 rounded-md border border-[#333]'>
            <ul className='flex flex-col space-y-5'>
              <Link href={"../userslist"}>Usuarios</Link>
              <Link href={"../productslist"}>Productos</Link>
            </ul>
          </Popover.Panel>
        </Transition>
        </Popover>
        <Link href={"../shoppingcartlist"} className='justify-self-center'><ShoppingCartIcon/></Link>
      </header>

      {/* Responsive menu */}
      <Popover className='sm:hidden p-6 bg-[#DDDDDD] text-[#333]'>
        <Popover.Button>
          <MenuIcon />
        </Popover.Button>
        <Transition
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />
          <Popover.Panel className='absolute text-[#333] bg-[#DDDDDD] p-6 rounded-md w-2/4 border border-[#333]'>
            <ul className='space-y-5'>
              <li>
                <Link href={'../'}><HomeIcon className='-translate-y-1 mr-1'/>Inicio</Link>
              </li>
              <li className='flex flex-col'>
                <h3><AppRegistrationIcon className='-translate-y-1 mr-1'></AppRegistrationIcon>Registrar</h3>
                <Link href={'../registeruser'}>Usuarios</Link>
                <Link href={'../registerproduct'}>Productos</Link>
              </li>
              <li className='flex flex-col'>
                <h3><PageviewIcon className='-translate-y-1 mr-1'/>Ver Registros</h3>
                <Link href={'../userslist'}>Usuarios</Link>
                <Link href={'../productslist'}>Productos</Link>
              </li>
              <li>
                <Link href={"../shoppingcartlist"}><ShoppingCartIcon/></Link>
              </li>
            </ul>
          </Popover.Panel>
        </Transition>
     </Popover>
    </>
  )
}

export default Header;