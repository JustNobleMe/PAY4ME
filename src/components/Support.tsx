import { useState } from "react";
import {
  LucideArrowLeft,
  LucideArrowRight,
  LucideArrowUpRight,
  LucideLandmark,
  LucidePause,
  LucidePlay,
  LucideSmartphone,
} from "lucide-react";
import Map from "../assets/images/map.png";
import Group from "../assets/images/group.jpg";
import LaptopGuy from "../assets/images/lapguy.png";

export default function Support() {
  const [display, setDiplay] = useState(false);

  const play = () => (display ? setDiplay(false) : setDiplay(true));

  return (
    <section className=" flex flex-col items-center bg-green" id="support">
      <h1 className="font-bold text-4xl max-w-150 text-center">
        Trusted by thousands of students and immigrants around the world
      </h1>
      <div className="relative">
        <img src={Map} alt="World map showing support locations" />
        <div className="group absolute bottom-31 left-[52%]">
          <div className="relative w-4 h-4 rounded-full bg-green-800 animate-ping"></div>
          <div className="hidden absolute -left-45  -top-50 z-2 px-4 py-2 bg-white shadow-xl rounded-md w-45 group-hover:block">
            <div className="flex justify-between items-center">
              <div className="bg-[#74bf24] rounded-full w-fit p-1">
                <LucideLandmark className="text-white" />
              </div>
              <p className="text-gray-300 text-sm rounded-full border px-2">
                free
              </p>
            </div>
            <p className="text-gray-400 text-xs font-bold mt-4">
              Bank Transfer
            </p>
            <div className="flex justify-between bg-gray-100 rounded-full px-2 py-1 my-2">
              <div className="w-6 h-6 rounded-full bg-green-500"></div>
              <LucideArrowUpRight />
              <div className="w-6 h-6 rounded-full bg-red-500"></div>
            </div>
            <div className="flex justify-between text-xs font-semibold mb-4">
              <p className="text-blue-800">
                citi<span className="text-blue-300">bank</span>
              </p>
              <p>to</p>
              <p className="bg-blue-900 text-white">anotherBank</p>
            </div>
            <div className="text-gray-400 text-xs font-bold leading-tight">
              <p>Amont</p>
              <p className="text-black text-2xl font-bold">$3,500.00</p>
              <p>1-3 business days</p>
            </div>
          </div>
        </div>
        <div className="group absolute bottom-18 left-[25.7%]">
          <div className="relative w-4 h-4 rounded-full bg-yellow-800 animate-ping"></div>
          <div className="hidden absolute -left-45  -top-50 z-2 px-4 py-2 bg-white shadow-xl rounded-md w-45 group-hover:block">
            <div className="flex justify-between items-center">
              <div className="bg-[#74bf24] rounded-full w-fit p-1">
                <LucideLandmark className="text-white" />
              </div>
              <p className="text-gray-300 text-sm rounded-full border px-2">
                free
              </p>
            </div>
            <p className="text-gray-400 text-xs font-bold mt-4">
              Bank Transfer
            </p>
            <div className="flex justify-between bg-gray-100 rounded-full px-2 py-1 my-2">
              <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
              <LucideArrowUpRight />
              <div className="w-6 h-6 rounded-full bg-green-500"></div>
            </div>
            <div className="flex justify-between text-xs font-semibold mb-4">
              <p className="text-blue-800">
                citi<span className="text-blue-300">bank</span>
              </p>
              <p>to</p>
              <p className="bg-blue-900 text-white">anotherBank</p>
            </div>
            <div className="text-gray-400 text-xs font-bold leading-tight">
              <p>Amont</p>
              <p className="text-black text-2xl font-bold">$3,500.00</p>
              <p>1-3 business days</p>
            </div>
          </div>
        </div>

        <div className="group absolute top-[45%] left-[18.7%]">
          <div className="relative w-4 h-4 rounded-full bg-red-800 animate-ping"></div>
          <div className="hidden absolute -left-45  -top-50 z-2 px-4 py-2 bg-white shadow-xl rounded-md w-45 group-hover:block">
            <div className="flex justify-between items-center">
              <div className="bg-[#74bf24] rounded-full w-fit p-1">
                <LucideLandmark className="text-white" />
              </div>
              <p className="text-gray-300 text-sm rounded-full border px-2">
                free
              </p>
            </div>
            <p className="text-gray-400 text-xs font-bold mt-4">
              Bank Transfer
            </p>
            <div className="flex justify-between bg-gray-100 rounded-full px-2 py-1 my-2">
              <div className="w-6 h-6 rounded-full bg-red-500"></div>
              <LucideArrowUpRight />
              <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
            </div>
            <div className="flex justify-between text-xs font-semibold mb-4">
              <p className="text-blue-800">
                citi<span className="text-blue-300">bank</span>
              </p>
              <p>to</p>
              <p className="bg-blue-900 text-white">anotherBank</p>
            </div>
            <div className="text-gray-400 text-xs font-bold leading-tight">
              <p>Amont</p>
              <p className="text-black text-2xl font-bold">$3,500.00</p>
              <p>1-3 business days</p>
            </div>
          </div>
        </div>
        <div className="group absolute right-[50%] top-[39.9%]">
          <div className="relative w-4 h-4 rounded-full bg-blue-800 animate-ping"></div>
          <div className="hidden absolute -left-45  -top-50 z-2 px-4 py-2 bg-white shadow-xl rounded-md w-45 group-hover:block">
            <div className="flex justify-between items-center">
              <div className="bg-[#74bf24] rounded-full w-fit p-1">
                <LucideLandmark className="text-white" />
              </div>
              <p className="text-gray-300 text-sm rounded-full border px-2">
                free
              </p>
            </div>
            <p className="text-gray-400 text-xs font-bold mt-4">
              Bank Transfer
            </p>
            <div className="flex justify-between bg-gray-100 rounded-full px-2 py-1 my-2">
              <div className="w-6 h-6 rounded-full bg-blue-500"></div>
              <LucideArrowUpRight />
              <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
            </div>
            <div className="flex justify-between text-xs font-semibold mb-4">
              <p className="text-blue-800">
                citi<span className="text-blue-300">bank</span>
              </p>
              <p>to</p>
              <p className="bg-blue-900 text-white">anotherBank</p>
            </div>
            <div className="text-gray-400 text-xs font-bold leading-tight">
              <p>Amont</p>
              <p className="text-black text-2xl font-bold">$3,500.00</p>
              <p>1-3 business days</p>
            </div>
          </div>
        </div>
        <div className="group absolute top-[50.5%] right-[24.5%]">
          <div className="relative w-4 h-4 rounded-full bg-red-800 animate-ping"></div>
          <div className="hidden absolute -left-45  -top-50 z-2 px-4 py-2 bg-white shadow-xl rounded-md w-45 group-hover:block">
            <div className="flex justify-between items-center">
              <div className="bg-[#74bf24] rounded-full w-fit p-1">
                <LucideLandmark className="text-white" />
              </div>
              <p className="text-gray-300 text-sm rounded-full border px-2">
                free
              </p>
            </div>
            <p className="text-gray-400 text-xs font-bold mt-4">
              Bank Transfer
            </p>
            <div className="flex justify-between bg-gray-100 rounded-full px-2 py-1 my-2">
              <div className="w-6 h-6 rounded-full bg-red-500"></div>
              <LucideArrowUpRight />
              <div className="w-6 h-6 rounded-full bg-green-500"></div>
            </div>
            <div className="flex justify-between text-xs font-semibold mb-4">
              <p className="text-blue-800">
                citi<span className="text-blue-300">bank</span>
              </p>
              <p>to</p>
              <p className="bg-blue-900 text-white">anotherBank</p>
            </div>
            <div className="text-gray-400 text-xs font-bold leading-tight">
              <p>Amont</p>
              <p className="text-black text-2xl font-bold">$3,500.00</p>
              <p>1-3 business days</p>
            </div>
          </div>
        </div>
        <div className='group absolute bottom-[13.7%] right-[3.4%]'>
          <div
            className='relative w-4 h-4 rounded-full bg-red-800 animate-ping'
          ></div>
          <div
            className='hidden absolute -left-45  -top-50 z-2 px-4 py-2 bg-white shadow-xl rounded-md w-45 group-hover:block'
          >
            <div className="flex justify-between items-center">
              <div className="bg-[#74bf24] rounded-full w-fit p-1">
                <LucideLandmark className="text-white" />
              </div>
              <p className="text-gray-300 text-sm rounded-full border px-2">
                free
              </p>
            </div>
            <p className="text-gray-400 text-xs font-bold mt-4">
              Bank Transfer
            </p>
            <div className="flex justify-between bg-gray-100 rounded-full px-2 py-1 my-2">
              <div className='w-6 h-6 rounded-full bg-red-500'></div>
              <LucideArrowUpRight />
              <div className='w-6 h-6 rounded-full bg-green-500'></div>
            </div>
            <div className="flex justify-between text-xs font-semibold mb-4">
              <p className="text-blue-800">
                citi<span className="text-blue-300">bank</span>
              </p>
              <p>to</p>
              <p className="bg-blue-900 text-white">anotherBank</p>
            </div>
            <div className="text-gray-400 text-xs font-bold leading-tight">
              <p>Amont</p>
              <p className="text-black text-2xl font-bold">$3,500.00</p>
              <p>1-3 business days</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-10 my-16">
        <div className="flex flex-col justify-between bg-gray-200 w-60 h-60 rounded-xl overflow-hidden p-8">
          <div>
            <div className="bg-[#74bf24] w-fit p-2 font-bold rounded-full mb-5">
              <LucideSmartphone className="text-white" />
            </div>
            <p className="font-bold text-lg leading-none">
              Hold money in 30+ currencies
            </p>
          </div>
          <div className="flex gap-2 flex-wrap justify-end rotate-50 mt-5">
            <div className="bg-white p-2 w-20 rounded-xl skew-x-10 flex flex-col items-center shadow">
              <div className="h-[60%] w-[60%] rounded-full bg-blue-600"></div>
              <p className="font-bold">EUR</p>
            </div>
            <div className="bg-white p-2 h-20 w-20 rounded-xl flex flex-col items-center shadow skew-x-10 skew-y-10">
              <div className="h-[60%] w-[60%] rounded-full bg-blue-600"></div>
              <p className="font-bold">EUR</p>
            </div>
            <div className="bg-white p-2 h-20 w-20 rounded-xl  flex flex-col items-center shadow skew-x-10 skew-y-10">
              <div className="h-[60%] w-[60%] rounded-full bg-blue-600"></div>
            </div>
            <div className="bg-white p-2 h-20 w-20 rounded-xl  flex flex-col items-center shadow skew-x-10 skew-y-10">
              <div className="h-[60%] w-[60%] rounded-full bg-blue-600"></div>
            </div>
            <div className="bg-white p-2 h-20 w-20 rounded-xl  flex flex-col items-center shadow skew-x-10 skew-y-10">
              <div className="h-[60%] w-[60%] rounded-full bg-blue-600"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-gray-200 w-60 h-60 rounded-xl overflow-hidden p-8">
          <div>
            <div className="bg-[#74bf24] w-fit p-2 font-bold rounded-full mb-5">
              <LucideSmartphone className="text-white" />
            </div>
            <p className="font-bold text-lg leading-none ">
              Subscriptions you control in one place
            </p>
          </div>
          <div className="flex gap-2 mt-8 ">
            <div className="flex-2 bg-white h-100 rounded-xl px-4 py-8">
              <p className="font-bold text-2xl">$12.00</p>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div className="bg-white h-10 rounded-xl flex justify-center items-center">
                <div className="h-[50%] w-[50%] bg-red-400 rounded-full"></div>
              </div>
              <div className="bg-white h-10 rounded-xl flex justify-center items-center">
                <div className="h-[50%] w-[50%] bg-green-400 rounded-full"></div>
              </div>
              <div className="bg-white h-10 rounded-xl"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end gap-12 bg-black text-white w-60 h-60 rounded-xl overflow-hidden p-8">
          <p className="font-bold text-lg leading-none">
            Check our other product features
          </p>
          <div className="bg-[#74bf24] w-fit px-2 py-1 rounded-2xl">
            <p>
              Read more
              <LucideArrowRight className="text-[#74bf24] bg-white inline-block ml-4 rounded-full" />
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-20 justify-center">
        <p className="font-bold text-3xl max-w-100 ">
          Pay for SEVIS, WES, Visa Applications & More
        </p>
        <p className="max-w-150 text-lg text-gray-400 font-semibold">
          We help you get closer to your study abroad and relocation goals
          faster by promptly completing your payment orders for credential
          evaluation, immigration, and visa purposes.
        </p>
      </div>
      <div className="flex gap-4 px-35 my-16">
        <div className="flex-1.5 flex flex-col justify-between bg-black text-white rounded-xl px-8 py-8">
          <div>
            <p className="font-bold text-7xl">
              300K<span className="text-[#74bf24]">+</span>
            </p>
            <p className="max-w-[80%]">
              successful transactions over the past 2 years
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <img
              src={Group}
              alt="group"
              className="rounded-full border border-white w-15 h-15 object-cover"
            />
            <img
              src={Group}
              alt="group"
              className="rounded-full border border-white w-15 h-15 object-cover"
            />
            <img
              src={Group}
              alt="group"
              className="rounded-full border border-white w-15 h-15 object-cover"
            />
            <img
              src={Group}
              alt="group"
              className="rounded-full border border-white w-15 h-15 object-cover"
            />
            <p className="font-bold text-4xl">+</p>
          </div>
        </div>
        <div className="relative flex-3">
          <img
            src={Group}
            alt="group pics"
            className={`w-full rounded-xl ${
              display ? "" : "saturate-0"
            } object-cover aspect-2/1 object-top`}
          />
          <div
            className="absolute -bottom-4 -right-4 bg-[#74bf24] p-8 rounded-full border-white border-8 cursor-pointer"
            onClick={play}
          >
            {display ? (
              <LucidePause fill="black" />
            ) : (
              <LucidePlay fill="black" />
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 px-35 my-8" id="blog">
        <div className="flex justify-end">
          <p className="font-semibold text-5xl max-w-150 ">
            Join 10+ million people who already trust us with their money
          </p>
        </div>
        <div className="relative bg-gray-100 rounded-3xl px-16 pt-24 pb-32">
          <img
            src={LaptopGuy}
            alt="Laptop guy"
            className="-scale-x-100 absolute left-4 bottom-0 w-130"
          />
          <div className="flex flex-col gap-1 items-end">
            <p className="w-[50%] text-lg font-semibold text-gray-600">
              Overall, this app has been a life-changer for me. it has
              revolutionized the way I approach my finances, providing me with
              the tools, insights, and security i need to unlock my financial
              freedom.
            </p>
            <div className="flex gap-2">
              <div className="border border-black p-1 rounded-full">
                <LucideArrowLeft />
              </div>
              <div className="border border-black p-1 rounded-full">
                <LucideArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
