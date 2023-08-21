"use client"

import React, { useState } from 'react'

const PriceBox = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <article className='mx-auto max-w-2xl mt-[200px] border-2 rounded-lg'>
            <div className='flex items-center justify-between py-5 px-2'>
                <div className='flex items-center gap-4'>
                    <p className='font-semibold border-r border-r-gray-300 px-4'>Display total price</p>
                    <p className='text-gray-500'>Includes all fees, before taxes</p>
                </div>
                <div className='flex items-center bg-gray-400 w-[50px] rounded-2xl'>
                    <div
                        className='w-7 h-7 rounded-full bg-white border-2' />
                </div>
            </div>
        </article>

    )
}

export default PriceBox