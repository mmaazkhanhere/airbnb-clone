import Image from 'next/image'
import React from 'react'
import { GiDesk } from "react-icons/gi"
import { BsDoorOpen } from "react-icons/bs"
import { FaArrowUpFromWaterPump, FaLocationDot } from "react-icons/fa6"
import { AiOutlineWifi } from 'react-icons/ai'
import Bedroom from './Bedroom'
import AmenitiesBox from './AmenitiesBox'

const Information = () => {
    return (
        <main className='flex flex-col items-start justify-center inset-0 pr-10'>

            {/*Beds and host information */}
            <section className='flex items-center justify-between w-full'>
                <div className='flex flex-col items-start justify-center'>
                    <h1 className='text-2xl font-semibold'>
                        Entire villa hosted by <span>Shreya</span>
                    </h1>
                    <ul className='flex items-center justify-center text-sm list-inside list-disc 
                    text-gray-600 mt-1'>
                        <li>12 guests</li>
                        <li className='ml-2'>3 bedrooms</li>
                        <li className='ml-2'> 3 beds</li>
                        <li className='ml-2'>3 baths</li>
                    </ul>
                </div>
                <div className='w-16 h-16 rounded-full overflow-hidden'>
                    <Image src="/assets/person1.webp" alt="Host Picture" width={100} height={100}
                        className='object-cover'
                    />
                </div>
            </section>

            {/*Separator line */}
            <div className='my-8 border border-gray-200 w-full' />

            {/*Features */}
            <section className='flex flex-col items-start justify-center w-full gap-5'>
                {/*Feature 1 */}
                <div className='flex items-start justify-start gap-4'>
                    <GiDesk size={32} />
                    <div className='flex flex-col item-start justify-center'>
                        <p className='font-semibold text-lg'>Dedicated workspace</p>
                        <p className='text-gray-500'>A common area with wifi that’s well-suited for working.</p>
                    </div>
                </div>
                {/*Feature 2 */}
                <div className='flex items-start justify-start gap-4'>
                    <BsDoorOpen size={32} />
                    <div className='flex flex-col item-start justify-center'>
                        <p className='font-semibold text-lg'>Self check-in</p>
                        <p className='text-gray-500'>You can check in with the building staff.</p>
                    </div>
                </div>
                {/*Feature 3 */}
                <div className='flex items-start justify-start gap-4'>
                    <FaLocationDot size={32} />
                    <div className='flex flex-col item-start justify-center'>
                        <p className='font-semibold text-lg'>Great location</p>
                        <p className='text-gray-500'>100% of recent guests gave the location a 5-star rating.</p>
                    </div>
                </div>
            </section>

            {/*Separator line */}
            <div className='my-8 border border-gray-200 w-full' />

            {/*Detailed Information */}
            <section className='w-full'>
                <p className='text-md'>
                    Jannat blends the most luxurious backdrop of your fantasy with nature’s incredible marvels to create a
                    tranquil utopia that caters to your comfort where Breakfast is complimentary! This 3Bed pool villa in Nashik
                    is a hidden paradise waiting to dazzle you with its tranquil charm.
                </p>
            </section>

            {/*Separator line */}
            <div className='my-10 border border-gray-200 w-full' />

            {/*Bedrooms Picture */}

            <section className='w-full'>
                <h1 className='text-2xl font-semibold'>Where you&apos;ll sleep</h1>
                <div className='grid grid-cols-2 items-center justify-between'>
                    {/*1st Bedroom */}
                    <Bedroom />
                    <Bedroom />
                </div>
            </section>

            {/*Separator line */}
            <div className='my-10 border border-gray-200 w-full' />

            {/*Amenities */}

            <section className='w-full'>
                <h1 className='text-2xl font-semibold'>
                    What this place offers
                </h1>
                <div className='grid grid-cols-2 items-start justify-center text-xl mt-8'>
                    <AmenitiesBox />
                    <AmenitiesBox />
                    <AmenitiesBox />
                    <AmenitiesBox />
                    <AmenitiesBox />
                    <AmenitiesBox />
                    <AmenitiesBox />
                    <AmenitiesBox />
                </div>
                <button className=' border border-black py-2 px-4 rounded-lg text-lg font-semibold mt-8'>
                    Show all 42 amenities
                </button>
            </section>

            {/*Separator line */}
            <div className='my-6 border border-gray-200 w-full' />

        </main>
    )
}

export default Information