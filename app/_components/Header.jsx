"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs';
import Image from 'next/image';

function Header() {
  return (
    <div>
      <div className='flex items-center justify-between p-5 shadow-sm'>
        <Image src='/logo.svg' width={100} height={100} alt='logo' className='w-[150px] md:w-[200px]' />
        
        {/* Media query for responsive navigation */}
        <ul className='hidden md:flex gap-14 font-medium text-lg'>
          <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Product</li>
          <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Pricing</li>
          <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Contact us</li>
          <li className='hover:text-primary transition-all duration-300 cursor-pointer'>About Us</li>
        </ul>

        <div className='flex gap-5'>
          <LoginLink><Button variant="ghost">Login</Button></LoginLink>
          <RegisterLink><Button>Get Started</Button></RegisterLink>
        </div>
      </div>

      {/* Media query styles */}
      <style jsx>{`
        @media only screen and (max-width: 390px) {
          .hidden {
            display: none; /* Hide the desktop navigation */
          }
          .flex {
            flex-direction: column; /* Stack buttons vertically */
          }
        }
      `}</style>
    </div>
  );
}

export default Header;
