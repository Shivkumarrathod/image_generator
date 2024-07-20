"use client";

import {firebaseAuth} from '../../firebase/firebase'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup,} from 'firebase/auth'
import image from '../../public/image.png'
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
const page = () => {
  const googleInstat = new GoogleAuthProvider()
  const [User,setUser] = useState(false)


  const router = useRouter()
  useEffect(()=>{
    onAuthStateChanged(firebaseAuth,(user)=>{
      if (user) {
        setUser(true)
        router.push('/')
      }else{
        setUser(false)
      }
    })
  },[onAuthStateChanged,User])

  const handleGoogleSigIn=async()=>{
    await signInWithPopup(firebaseAuth , googleInstat).catch((err)=>console.log(err)
    )
  }
  return (
    <div>
      <div className="flex justify-center mt-[8rem]">
        <div className='w-[35rem]'>
          <img src='/image.png' alt="login page image" className='rounded-l' />
        </div>
        <div className='w-[21rem] bg-[#800000] rounded-r text-black text-center'>
          <h1 className='text-white font-bold mt-[12rem]'>Sign in to create your first image</h1>
          <button 
          onClick={handleGoogleSigIn}
          className='border text-white px-5 mt-2 flex ml-16 py-1 hover:bg-white hover:text-black rounded-full ' >
            <img src={'/assets/google.svg'} className='w-5 mt-0.5 me-2' alt="" />
            Sign in with google</button>
        </div>
      </div>
    </div>
  )
}

export default page
