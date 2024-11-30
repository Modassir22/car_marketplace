import React from 'react'
import {SignInButton, UserButton,useUser} from '@clerk/clerk-react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom';


function Header() {
  const {user,isSignedIn} = useUser();
  return (
    <div className='flex justify-between items-center shadow-sm p-5 h-20'>
       <img src='/wheelora.svg' width={150} height={20} />

       <ul className='hidden md:flex gap-16'>
        <li className='font-medium hover:scale-105 cursor-pointer transition-all
                ease-linear hover:text-primary'>Home</li>
        <li className='font-medium hover:scale-105 cursor-pointer transition-all
                ease-linear hover:text-primary'>Search</li>
        <li className='font-medium hover:scale-105 cursor-pointer transition-all
                ease-linear hover:text-primary'>New</li>
        <li className='font-medium hover:scale-105 cursor-pointer transition-all
                ease-linear hover:text-primary'>Preowned</li>
       </ul>
      
      {
        isSignedIn?
        <div className='flex items-center gap-5'>
          <UserButton/>
          <Link to={'/profile'}>
             <Button>Submit Listing</Button>
          </Link>
          </div>
          :
           <Button>Submit Listing</Button>
      }


    </div>
  )
}

export default Header