"use client";
import React from 'react';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <footer className='flex flex-1 justify-end items-center inset-x-0 bottom-0 p-8 space-x-4 text-white bg-[#477987]'>
        <div>Copyright © 2023 Ibby. All Rights Reserved.</div>
        <Link href={"https://github.com/JulioMRosas"}><GitHubIcon/></Link>
    </footer>
  )
}

export default Footer;