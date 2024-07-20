"use client";
import {  useEffect, useState } from 'react';
import {firebaseAuth} from '../firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth';
import Navigate from '../components/Navigate'
import { useRouter } from 'next/navigation';
export default function Home() {

  const [User,setUser] = useState(false)
  console.log(User);
  
  const router = useRouter()
  useEffect(()=>{
    onAuthStateChanged(firebaseAuth,(user)=>{
      if (user) {
        setUser(true)
      }else{
        setUser(false)
        router.push('/signin')
      }
    })
  },[onAuthStateChanged,User])

  return (
    <div className="">
       {User&&(
        <div>
          <Navigate/>
        </div>
       )}
    </div>
  );
}
