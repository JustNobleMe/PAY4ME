import { LucideLandmark } from 'lucide-react';
import Map from '../assets/images/map.png';

export default function Support() {
  return (
    <section className=' flex flex-col items-center'>
      <h1>Trusted by thousands of students and immigrants around the world</h1>
      <div className='relative'>
        <img src={Map} alt="World map showing support locations" className=''/>
        <div className='group absolute bottom-31 left-[52%]'>
          <div className='relative w-4 h-4 rounded-full bg-green-800 '></div>
          <div className='hidden absolute -left-45 -top-30 z-2 bg-gray-100 shadow-xl rounded-md h-40 w-40 group-hover:block'>
            <div className='bg-[#74bf24] rounded-full w-fit p-1'>
              <LucideLandmark className='text-white'/>
            </div>
          </div>
        </div>
        <div className='w-4 h-4 rounded-full bg-yellow-300 absolute bottom-18 left-[25.7%]'></div>
        <div className='w-4 h-4 rounded-full bg-red-500 absolute top-[45%] left-[18.7%]'></div>
        <div className='w-4 h-4 rounded-full bg-blue-500 absolute top-[39.9%] right-[50%]'></div>
        <div className='w-4 h-4 rounded-full bg-red-500 absolute top-[50.5%] right-[24.5%]'></div>
        <div className='w-4 h-4 rounded-full bg-blue-500 absolute bottom-[13.7%] right-[3.4%]'></div>
      </div>
    </section>
  )
}
