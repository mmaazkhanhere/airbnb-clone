import React from 'react'
import { IoIosArrowForward } from "react-icons/io"

const Footer = () => {
    return (
        <article className='w-full bg-gray-200'>
            <div className='max-w-6xl'>
                <h2 className='text-2xl font-semibold py-8'>
                    Explore other options in and around <span>Pimplad Nasik</span>
                </h2>
                <h4 className='text-lg py-6'>Other types of stays on Airbnb</h4>
                <div className='grid grid-cols-2 xl:grid-cols-4 w-full gap-4 justify-start'>
                    <p className='hover:cursor-pointer'>Wellington vacation rentals</p>
                    <p className='hover:cursor-pointer'>Wellington monthly stays</p>
                    <p className='hover:cursor-pointer'>House rentals in Wellington</p>
                    <p className='hover:cursor-pointer'>Villa rentals in New Zealand</p>
                    <p className='hover:cursor-pointer'>House rentals in New Zealand</p>
                    <p className='hover:cursor-pointer'>Amazing pools</p>
                    <p className='hover:cursor-pointer'>Luxury rentals in New Zealand</p>
                </div>
                <div className='py-6 flex item-center justify-start gap-4'>
                    <span>Airbnb</span>
                    <IoIosArrowForward />
                    <span>India</span>
                    <IoIosArrowForward />
                    <span>Maharashtra</span>
                    <IoIosArrowForward />Konkan Division
                </div>
            </div>
        </article>
    )
}

export default Footer