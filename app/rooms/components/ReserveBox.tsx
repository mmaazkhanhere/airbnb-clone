import React from 'react'
import { AiFillStar } from "react-icons/ai"

const ReserveBox = () => {
    return (
        <section className='flex flex-col items-start justify-center p-4 border shadow-md 
        sticky z-20 ml-10 rounded-xl'>

            {/*Price and Review */}

            <div className='flex items-center justify-between w-full'>
                {/*Price */}
                <div className='flex items-center justify-center gap-2'>
                    <span className='text-2xl line-through font-semibold text-gray-400'>
                        $519
                    </span>
                    <span className='text-2xl  font-semibold'>
                        $415
                    </span>
                    <span className='font-thin self-end'>night</span>
                </div>

                {/*Ratings */}
                <div className='flex items-center justify-center gap-2'>
                    <AiFillStar />
                    <span className='font-semibold'>5.0</span>
                    <span className='text-gray-500'>5 reviews</span>
                </div>
            </div>

            {/*Checkout and checkin settings */}

            <div className='grid grid-cols-2 border rounded-xl w-full mt-6'>
                <div className='w-full p-2 flex flex-col items-start justify-center border-r'>
                    <p className='text-xs uppercase font-medium border-b'>check-in</p>
                    <span className='w-full p-2'>9/3/2023</span>
                </div>
                <div className='w-full p-2 flex flex-col items-start justify-center border-b'>
                    <p className='text-xs uppercase font-medium'>checkout</p>
                    <span className='w-full p-2'>12/3/2023</span>
                </div>
                <div className=' col-span-2 w-full border-t p-2'>
                    <p className='text-xs uppercase font-medium'>guests</p>
                    <select name="guest" id="guests" className='w-full mt-2'>
                        <option value="1">
                            1 Adult
                        </option>
                        <option value="1">
                            2 Adult
                        </option>
                        <option value="1">
                            3 Adult
                        </option>
                        <option value="1">
                            4 Adult
                        </option>
                    </select>
                </div>
            </div>

            {/*Button */}

            <button className='w-full py-3 bg-[#fe385d] text-white rounded-lg mt-6 font-bold'>
                Reserve
            </button>
            <span className='py-4 self-center text-gray-500'>
                You wont be charged yet
            </span>
        </section>
    )
}

export default ReserveBox