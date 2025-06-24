import { LucideLandmark, LucideArrowUpRight } from "lucide-react"

export default function tooltip([{origin, from , to, position }] : any []) {
  return (
    <div className={`group absolute ${origin.y} ${origin.x}`}>
        <div className={`relative w-4 h-4 rounded-full bg-${from}-800 animate-ping`}></div>
        <div className={`hidden absolute ${position.x}  ${position.y} z-2 px-4 py-2 bg-white shadow-xl rounded-md w-45 group-hover:block`}>
            <div className='flex justify-between items-center'>
                <div className='bg-[#74bf24] rounded-full w-fit p-1'>
                <LucideLandmark className='text-white'/>
                </div>
                <p className='text-gray-300 text-sm rounded-full border px-2'>free</p>
            </div>
            <p className='text-gray-400 text-xs font-bold mt-4'>Bank Transfer</p>
            <div className='flex justify-between bg-gray-100 rounded-full px-2 py-1 my-2'>
                <div className={`w-6 h-6 rounded-full bg-${from}-500`}></div>
                <LucideArrowUpRight />
                <div className={`w-6 h-6 rounded-full bg-${to}-500`}></div>
            </div>
            <div className='flex justify-between text-xs font-semibold mb-4'>
                <p className='text-blue-800'>citi<span className='text-blue-300'>bank</span></p>
                <p>to</p>
                <p className='bg-blue-900 text-white'>anotherBank</p>
            </div>
            <div className='text-gray-400 text-xs font-bold leading-tight'>
                <p>Amont</p>
                <p className='text-black text-2xl font-bold'>$3,500.00</p>
                <p>1-3 business days</p>
            </div>
        </div>
    </div>
  )
}
