import { LucideInbox } from 'lucide-react'

export default function Footer() {
  return (
    <div className="bg-black text-white rounded-t-4xl px-24 py-16">
      <div className="bg-[#74bf24] w-fit p-2 rounded-full">
        <LucideInbox color="white" size={40}/>
      </div>
      <div className='flex justify-between items-center py-8 pb-16 mb-16 border-b-2 border-gray-300'>
        <div className='max-w-[40%]'>
          <p className='font-semibold text-5xl'>Keep up with the latest</p>
          <p className='text-gray-300 mt-4'>Join our newsletter to stay upto date on features and releases.</p>
        </div>
        <div className='text-gray-300'>
          <p className='text-white'>Stay up to date</p>
          <input className="bg-gray-700 rounded-full px-4 py-2 outline-none w-80 my-4" type="email" placeholder="Enter your email" />
          <button className='bg-[#74bf24] text-black px-4 py-2 rounded-full font-semibold ml-2 cursor-pointer'>Subscribe</button>
          <p>
            By subscribing you agree to our <a href="#" className='underline text-white'>Privacy Policy</a>
          </p>
        </div>
      </div>
      <div className='flex items-center gap-8'>
        <div className='flex-1'>
          <div className="flex items-center gap-2">
            <div className="bg-[#74bf24] h-8 w-8 rounded"></div>
            <p className="font-bold text-3xl text-white">PAY4ME</p>
          </div>
          <p className='mt-4 text-lg'>Make your complicated finance more simple</p>
        </div>
        <div className='flex flex-3 justify-between text-gray-300'>
          <ul className='flex flex-col gap-4'>
            <p className='text-white font-semibold text-lg'>Pay4me</p>
            <li><a href='#'>Payment</a></li>
            <li><a href='#'>Card</a></li>
            <li><a href='#'>Pricing</a></li>
          </ul>
          <ul className='flex flex-col gap-4'>
            <p className='text-white font-semibold text-lg'>Products</p>
            <li><a href='#'>Personal</a></li>
            <li><a href='#'>Business</a></li>
            <li><a href='#'>Invoices</a></li>
          </ul>
          <ul className='flex flex-col gap-4'>
            <p className='text-white font-semibold text-lg'>Company</p>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Careers</a></li>
            <li><a href='#'>Press Kit</a></li>
          </ul>
          <ul className='flex flex-col gap-4'>
            <p className='text-white font-semibold text-lg'>Developer</p>
            <li><a href='#'>API Documentation</a></li>
            <li><a href='#'>Guide</a></li>
            <li><a href='#'>Change Log</a></li>
          </ul>
          <ul className='flex flex-col gap-4'>
            <p className='text-white font-semibold text-lg'>Community</p>
            <li><a href='#'>Refer a Friend</a></li>
            <li><a href='#'>Gift</a></li>
          </ul>
          <ul className='flex flex-col gap-4'>
            <p className='text-white font-semibold text-lg'>Support</p>
            <li><a href='#'>Help</a></li>
            <li><a href='#'>FAQ</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
          <ul className='flex flex-col gap-4'>
            <p className='text-white font-semibold text-lg'>Legal</p>
            <li><a href='#'>Privary Policy</a></li>
            <li><a href='#'>Terms of Services</a></li>
            <li><a href='#'>Cookies</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
