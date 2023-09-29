import Image from 'next/image'
import React from 'react'
import Approved from "@/assets/approved.png"
import Rejected from "@/assets/rejected.png"
import Pending from "@/assets/pending.png"
function Cards() {
  return (
    <div className='flex-col space-y-4 md:space-y-0 md:flex-row flex item-center justify-between w-full p-2 md:gap-1'>
        <div className='lg:w-[300px] rounded shadow-md md:w-[200px] bg-yellow-400  item-center justify-between p-6 flex text-white'>
            <div>
                <p>152</p>
                <p>Accounts Approved</p>
            </div>
            <div>
                <Image src={Approved} quality={100}/>
            </div>
        </div>

        <div className='lg:w-[300px] rounded shadow-md md:w-[200px]  item-center justify-between p-6 flex bg-blue-500 text-white'>
            <div>
                <p>542</p>
                <p>Accounts Pending</p>
            </div>
            <div>
                <Image src={Pending} quality={100}/>
            </div>
        </div>

        <div className='lg:w-[300px] rounded shadow-md  md:w-[200px]  item-center justify-between p-6 flex  bg-blue-400 text-white'>
            <div>
                <p>520</p>
                <p>Accounts Rejected</p>
            </div>
            <div>
                <Image src={Rejected} quality={100}/>
            </div>
        </div>
    </div>
  )
}

export default Cards