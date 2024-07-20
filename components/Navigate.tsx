"use client";
import { firebaseAuth } from "@/firebase/firebase"
import { signOut } from "firebase/auth"
import Link from "next/link";
import { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";

const Navigate = () => {
    const [user,setUser] = useState(false)
    const logoutHandler =()=>{
        signOut(firebaseAuth).then((result)=>console.log(result)
       ).catch((error)=>console.log(error))
    }
    
  return (
    <>
      <div className="w-full h-[3rem] text-white flex border-b p-1">
         <div className="w-[40%] flex items-center">
            <div className="ml-10 p-1 hover:border-b hover:border-red-600 font-semibold ">
              <Link href='/explore' >Explore</Link>
            </div>
            <div className="ml-10 p-1 hover:border-b hover:border-red-600 font-semibold">
              <Link href='/create' >Generator</Link>
            </div>
         </div>
         <div className="w-[40%]  flex ">
          {/* Image gen */}
         </div>
         <div className="text-white flex justify-center items-center w-[20%]">
             <div onClick={()=>setUser(!user)} className="cursor-pointer hover:border-b hover:border-red-600 p-1">
               <FaRegCircleUser size={25}/>
             </div> 
             <div  className="cursor-pointer  p-1 ml-5">
               <Link href='/create' className="bg-blue-600 py-2 px-4 rounded-full">Create</Link>
             </div>     
         </div>
         {user&&(
        <div className="absolute text-white mt-[3.5rem] ml-[80rem]">
          <div className="bg-[#161616] p-1 w-[5rem] text-center rounded-full">
           <button onClick={logoutHandler}>logout</button>
          </div>
        </div>
      )}
      </div>
      
    </>
  )
}

export default Navigate