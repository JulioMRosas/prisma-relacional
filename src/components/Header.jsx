"use client";
import React from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import PageviewIcon from '@mui/icons-material/Pageview';

const Header = () => {
  return (
    <>
      {/* Normal menu */}
      <header className='hidden sm:grid grid-cols-3 p-6 bg-[#DDDDDD] text-[#333]'>
          <Link href={"../"} className='justify-self-center'>Inicio</Link>
          <Link href={"../register"} className='justify-self-center'>Registrar</Link>
          <Link href={"../consult"} className='justify-self-center'>Ver Registros</Link>
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
              <li>
                <Link href={'../register'}><AppRegistrationIcon className='-translate-y-1 mr-1'/>Registro</Link>
              </li>
              <li>
                <Link href={'../consult'}><PageviewIcon className='-translate-y-1 mr-1'/>Ver Registros</Link>
              </li>
            </ul>
          </Popover.Panel>
        </Transition>
     </Popover>
    </>
  )
}

export default Header;