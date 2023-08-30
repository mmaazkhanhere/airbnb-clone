"use client"

import React, { useState } from 'react'

const Tick = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.75 8.75l3.5 3.5l7-7.5" />
        </svg>
    )
}

const PriceBox = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggle = () => {
        setToggleMenu(!toggleMenu);
    }

    return (
        <article className='mx-auto max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-2xl mt-[200px] 
        border rounded-xl md:block md:px-6 lg:px-4 xl:px-0'>
            <div className='flex items-center justify-between py-2 lg:py-5 px-2'>
                <div className='flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4'>
                    <p className='font-semibold border-r border-r-gray-300  pr-12 md:pr-4'>Display total price</p>
                    <p className='text-gray-500'>Includes all fees, before taxes</p>
                </div>
                <div
                    className={`flex items-center ${!toggleMenu ? 'bg-gray-400' : 'bg-gray-800'} 
                    w-[50px] rounded-2xl `}
                    onClick={handleToggle}
                >
                    {
                        toggleMenu ? (
                            <div className=' bg-white text-black w-7 h-7 rounded-full border
                            flex items-center justify-center translate-x-6 transition ease-in-out 
                            duration-300'>
                                <Tick />
                            </div>
                        ) : (
                            <div className='w-7 h-7 rounded-full bg-white border transition translate-x-0
                                ease-in-out  duration-300'
                            />
                        )
                    }

                </div>
            </div>
        </article>

    )
}

export default PriceBox