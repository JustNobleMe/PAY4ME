import Phone from '../assets/images/phone.png';
import LapGuy from '../assets/images/lapguy2.jpg';
import { 
  LucideArrowRight, 
  LucideGlobe, 
  LucideArrowUpRight, 
  LucideTriangle, 
  LucideApple, 
  LucidePlay} from 'lucide-react';

export default function Header() {
  return (
    <header className='h-full flex gap-4 px-12 mt-15'>
      <div className='flex-1 bg-radial from-[#74bf24] from-10% via-green-100 via-30% to-white to-80% relative rounded-lg'>
        <img src={Phone} alt="Phone" className='absolute -top-25 left-0 h-full w-full ' />
      </div>
      <div className='flex-1 flex flex-col gap-2'>
        <div className='flex flex-col gap-4 bg-gray-100 rounded-lg px-8'>
          <p className='font-bold text-5xl antialiased'>Cross-border Payments for International 
            <br/><span className='bg-[#74bf24] inline-block rounded-4xl font-normal text-white text-xl px-4 py-1 items-center'>make payment 
              <LucideArrowRight className='text-[#74bf24] bg-white inline-block ml-4 rounded-full' />
              </span> Students</p>
          <div className='flex items-center'>
            <p className='font-semibold text-gray-800 text-lg leading-snug'>The easiest and fastest way to pay tuition and fees to educational institutions, businesses, and government agencies worldwide.</p>
            <div className='h-20 min-w-20 rounded-full bg-[#74bf24]'>
            </div>
          </div>
        </div>
        <div className='flex gap-2'>
          <div className='flex-1 flex flex-col justify-between bg-gray-100 relative items-center px-4 py-6 rounded-md'>
            <LucideGlobe className='absolute top-2 right-2 bg-black text-white text-5xl rounded-full' />
            <div className='flex flex-col items-center'>
              <p className='text-4xl font-bold relative'>
                <LucideTriangle className='absolute top-0 -left-5 fill-[#74bf24] text-sm text-transparent'/>+100K
              </p>
              <p className='text-center font-semibold text-gray-800 text-md leading-snug'>Trusted by thousands of students and immigrants around the world</p>
            </div>
            <div className='flex gap-4'>
              <div className='flex gap-1 bg-white text-sm font-bold items-center px-1 py-1 rounded-md shadow'><LucideApple className='size-4'/>Download Now</div>
              <div className='flex gap-1 bg-white text-sm font-bold items-center px-1 rounded-md shadow'><LucidePlay className='size-4'/>Download Now</div>
            </div>
          </div>
          <div className='relative flex-1 bg-black rounded-xl text-white p-2'>
            <LucideArrowUpRight className='absolute top-2 right-2 bg-white text-black rounded-full'/>
            <p className='text-xs'>Fast Payments</p>
            <p className='text-xl leading-none my-2'>Send & Receive Payments with Ease</p>
            <img src={LapGuy} alt='laptop guy' className='aspect-2/1 object-cover saturate-0 rounded-xl' />
          </div>
        </div>
      </div>
    </header>
  )
}
