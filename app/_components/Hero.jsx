"use client"
import { Button } from '@/components/ui/button';
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs';
import Image from 'next/image';
import React from 'react';

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center my-20 padding-1.5rem '>
<div className='hidden lg:block {`flex-1 flex ${styles.flexCenter}md:my-0 my-10 relative`}>'>

<Image src='/profile1.png' width={100} height={100}
     className='h-[100px] object-cover rounded-full absolute right-36'/>
<Image src='/profile3.png' width={100} height={100}
     className='h-[100px] object-cover rounded-full absolute top-48 left-16'/>
<Image src='/profile2.png' width={100} height={100}
     className='h-[100px] object-cover rounded-full absolute bottom-20 left-36'/>
<Image src='/profile4.png' width={100} height={100}
     className='h-[100px] object-cover rounded-full absolute right-16 bottom-32' />
<div className="ss:hidden styles.flexCenter"></div>
</div>

      <div className='text-center max-w-3xl lg:ml-10'>
        <h2 className='font-bold text-4xl lg:text-5xl text-slate-700 mt-10 lg:mt-0'>Easy scheduling ahead</h2>
        <h2 className='text-lg lg:text-xl mt-5 text-slate-500'>
          Scheduly is your scheduling automation platform for eliminating the back-and-forth emails to find the perfect time — and so much more.
        </h2>

        <div className='flex gap-4 flex-col mt-5'>
        <h3 className='text-sm'>Sign Up free with Google and Facebook</h3>
        <div className='flex justify-center gap-8'>
            <LoginLink>
              <Button className='flex items-center gap-4 lg:gap-4 px-4 py-3 lg:px-7 lg:py-4 p-7 '>
                <Image src='/google.png' alt='google' width={30} height={30} />
                <span className='hidden lg:block'>Sign up with Google</span>
              </Button>
            </LoginLink>
            <LoginLink>
              <Button className='flex items-center gap-4 lg:gap-4 px-4 py-3 lg:px-7 lg:py-4 p-7 '>
                <Image src='/facebook.png' alt='facebook' width={30} height={30} />
                <span className='hidden lg:block'>Sign up with Facebook</span>
               
              </Button>
            </LoginLink>
          </div>
        </div>
        
        <hr className='my-6' />

        <LoginLink>
          <h2 className='text-lg lg:text-xl'>
            <span className='text-blue-500'>Sign up Free with Email.</span> No Credit card required
          </h2>
        </LoginLink>
      </div>

      {/* Media query for smaller screens */}
      <style jsx>{`
        @media only screen and (max-width: 1024px) {
          .lg:flex-row {
            flex-direction: column;
            align-items: center;
          }
          .lg:ml-10 {
            margin-left: 0;
            margin-top: 20px;
          }
          .lg:text-base {
            font-size: 0.875rem; /* Adjust font size for medium screens */
          }
          .lg:px-7 {
            padding-left: 3.5rem; /* Adjust padding for large screens */
          }
          .lg:py-4 {
            padding-top: 1rem; /* Adjust padding for large screens */
          }
        }
      `}</style>
    </div>
  );
}

export default Hero;
