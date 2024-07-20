'use client'

import ExploreCart from "@/components/ExploreCart";
import {Image} from '../text/image';

const page:React.FC = () => {
 const images:Image[] = [{
      id:1,
      likes:10,
      image:'/image1.avif',
      text:'kasugdyustdfusdjcvydhfewtyhfcvxhcg'
    },
    {
        id:2,
        likes:10,
        image: '/image2.jpeg',
        text:'kasugdyustdfusdjcvydhfewtyhfcvxhcg'
      },
    {
        id:3,
        likes:10,
        image:'/image3.avif',
        text:'kasugdyustdfusdjcvydhfewtyhfcvxhcg'
    },
    {
        id:4,
        likes:10,
        image:'image4.jpeg',
        text:'kasugdyustdfusdjcvydhfewtyhfcvxhcg'
    },
    {
        id:5,
        likes:10,
        image:'image5.jpeg',
        text:'kasugdyustdfusdjcvydhfewtyhfcvxhcg'
    }];

  return (
    <div className='ml-1 '>
        <div className="flex flex-wrap ml-[5rem]">
            {images.map((c)=>(
                <div key={c.id}>
                    <ExploreCart c={c}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default page