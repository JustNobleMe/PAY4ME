

export default function Nav() {
  return (
    <nav className='flex justify-between items-center px-8 py-4'>
      <div className='flex items-center gap-2'>
        <div className='bg-[#74bf24] h-8 w-8 rounded'></div>
        <p className='font-bold text-lg'>PAY4ME</p>
      </div>
      <ul className='flex items-center gap-12 bg-black text-white p-2 pr-8 rounded-2xl text-md'>
        <li><a href='#' className='bg-white text-black px-2 py-1 rounded-lg'>Home</a></li>
        <li><a href='#' className=''>About</a></li>
        <li><a href='#'>Blog</a></li>
        <li><a href='#'>Support</a></li>
        <li><a href='#'>FAQs</a></li>
      </ul>
      <div>
        <a href='#' className='bg-[#74bf24] py-1 px-2 font-medium rounded-xl'>Download App</a>
      </div>

    </nav>
  )
}
