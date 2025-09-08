'use client'

import React from 'react'
import { SignIn } from '@clerk/nextjs';
function page() {
  return (
    <div className='flex w-full h-screen justify-center items-center'>
      <SignIn />
    </div>
  )
}

export default page
