import React from 'react'
import { IoIosArrowForward } from "react-icons/io"

const Rules = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold pb-6'>Things to know</h2>
            <div className='flex items-start justify-between w-full'>
                <div className='flex flex-col items-start justify-center gap-2 text-lg max-w-xs'>
                    <h4 className='font-semibold'>
                        House rules
                    </h4>
                    <p>Checkin: 1:00 PM - 6:00 PM</p>
                    <p>Checkout before 10:00 AM</p>
                    <p>12 guests maximum</p>
                    <div className='flex items-center justify-start gap-4 font-semibold hover:cursor-pointer mt-2'>
                        <span className='underline'>Show more </span>
                        <IoIosArrowForward size={20} />
                    </div>
                </div>
                <div className='flex flex-col items-start justify-center gap-2 text-lg max-w-xs'>
                    <h4 className='font-semibold'>
                        Safety & property
                    </h4>
                    <p>No carbon monoxide alarm</p>
                    <p>No smoke alarm</p>
                    <p>Security camera / recording device</p>
                    <div className='flex items-center justify-start gap-4 font-semibold hover:cursor-pointer mt-2'>
                        <span className='underline'>Show more </span>
                        <IoIosArrowForward size={20} />
                    </div>
                </div>
                <div className='flex flex-col items-start justify-center gap-2 text-lg max-w-md'>
                    <h4 className='font-semibold'>
                        Cancellation policy
                    </h4>
                    <p>Cancel before <span>Aug 27</span> for a partial refund</p>
                    <p className=' leading-tight'>
                        Review the Host’s full cancellation policy which applies even if
                        you cancel for illness or disruptions caused by COVID-19.
                    </p>
                    <div className='flex items-center justify-start gap-4 font-semibold hover:cursor-pointer mt-2'>
                        <span className='underline'>Show more </span>
                        <IoIosArrowForward size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rules