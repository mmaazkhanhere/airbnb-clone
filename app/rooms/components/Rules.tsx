import React from 'react'
import { IoIosArrowForward } from "react-icons/io"

const Rules = () => {
    return (
        <div>
            {/*Heading */}
            <h2 className='text-xl xl:text-2xl font-semibold pb-6'>Things to know</h2>
            {/*Rules */}
            <div className='flex flex-col md:flex-row items-start justify-between w-full md:text-base xl:text-lg
            gap-3 md:gap-0'>
                {/*House Rules */}
                <div className='flex flex-col items-start border border-blue-500 justify-between w-full md:text-base xl:text-lg
                gap-3 md:gap-0'>
                    <h4 className='text-lg md:text-base font-semibold'>
                        House rules
                    </h4>
                    <p>Checkin: 1:00 PM - 6:00 PM</p>
                    <p>Checkout before 10:00 AM</p>
                    <p>12 guests maximum</p>
                    <div className='flex items-center  justify-start gap-4 font-semibold hover:cursor-pointer md:mt-2'>
                        <span className='underline'>Show more </span>
                        <IoIosArrowForward size={20} />
                    </div>
                </div>
                {/*Safety and Property */}
                <div className='flex flex-col items-start border border-blue-500 justify-between w-full md:text-base xl:text-lg
                gap-3 md:gap-0'>
                    <h4 className='text-lg md:text-base font-semibold'>
                        Safety & property
                    </h4>
                    <p>No carbon monoxide alarm</p>
                    <p>No smoke alarm</p>
                    <p>Security camera / recording device</p>
                    <div className='flex items-center justify-start gap-4 font-semibold hover:cursor-pointer md:mt-2'>
                        <span className='underline'>Show more </span>
                        <IoIosArrowForward size={20} />
                    </div>
                </div>
                {/*Cancellation policy */}
                <div className='flex flex-col items-start border border-green-500 justify-between w-full md:text-base xl:text-lg
                gap-3 md:gap-0'>
                    <h4 className='text-lg md:text-base font-semibold'>
                        Cancellation policy
                    </h4>
                    <p>Cancel before <span>Aug 27</span> for a partial refund</p>
                    <p className=' leading-tight'>
                        Review the Host’s full cancellation policy which applies even if
                        you cancel for illness or disruptions caused by COVID-19.
                    </p>
                    <div className='flex items-center justify-start gap-4 font-semibold hover:cursor-pointer md:mt-2'>
                        <span className='underline'>Show more </span>
                        <IoIosArrowForward size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rules