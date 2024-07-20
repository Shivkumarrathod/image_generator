'use client'
import React, { useState } from 'react'

const page = () => {
    const [showImage ,setShowImage] = useState(false);
    const [image,setImage] = useState('')
    const [text ,setText] = useState('')

    const images = ['/image1.avif', '/image2.jpeg', '/image3.avif','image4.jpeg','image5.jpeg'];
    const handleGenImage = ()=>{
            const randomIndex = Math.floor(Math.random()*images.length);
            console.log(randomIndex);
            setImage(images[randomIndex]);
            setShowImage(true)
            setText(text)       
  }

  return (
    <div>
        <div className=''>
            <div className="flex justify-center">
                <div>
                    <input type="text" 
                      value={text}
                      onChange={(e)=>setText(e.target.value)}
                      placeholder='describe the image' className='w-[50rem] mt-10  p-2 pl-5 focus:outline-none rounded-full bg-[#161616]' />
                    <button 
                    onClick={handleGenImage}
                    className='bg-pink-600 bg-opacity-20 hover:bg-opacity-100 p-2 rounded-full px-6 ml-10' >Create</button>
                </div>
            </div>
        </div>
        {showImage&&(
           <div className="flex justify-center mt-3 mr-[9rem]  ">
                <div className='w-[50rem] h-[78vh] bg-[#161616] rounded-md'>
                    <img src={image} alt="" className='w-[50rem] h-[78vh] ' />
                    <p className='relative -top-10 ml-5'>{text}</p>
                </div>
           </div>
        )}
    </div>
  )
}

export default page