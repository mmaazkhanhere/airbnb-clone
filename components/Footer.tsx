"use client"

import React from 'react'
import { BiCopyright, BiGlobe } from "react-icons/bi"
import { IoIosArrowUp } from "react-icons/io"
import { FaMap } from "react-icons/fa"
import { usePathname } from 'next/navigation';

const Footer = () => {

    const pathName = usePathname();

    return (

        <footer className={`sticky w-full bottom-0 left-0 z-50  flex flex-col items-center justify-center 
        gap-14 max-w-sm md:max-w-3xl lg:max-w-5xl xl:max-w-[1750px] md:px-6 lg:px-4 xl:px-0 mt-20 mx-auto`}>

            <div className='bg-black text-white flex items-center justify-center 
                px-6 py-2 rounded-2xl gap-3 -mt-24 '
            >
                <p>Show map</p>
                <FaMap />
            </div>
            <div className='flex flex-col items-center justify-center bg-white w-full'>
                <div className='flex items-center justify-between w-full max-w-[1750px] mt-2 mx-auto h-[40px]' >
                    <ul className='flex items-center justify-center gap-4 list-disc text-gray-600'>
                        <li className='flex items-center justify-center gap-1 text-sm'>
                            <BiCopyright />
                            <p>2023 Airbnb, Inc.</p>
                        </li>
                        <li className='hover:underline hover:cursor-pointer ml-4'>Terms</li>
                        <li className='hover:underline hover:cursor-pointer ml-4'>Sitemap</li>
                        <li className='hover:underline hover:cursor-pointer ml-4'>Privacy</li>
                        <li className='hover:underline hover:cursor-pointer ml-4'>Your Privacy Choices</li>
                        <li className='hover:underline hover:cursor-pointer ml-4'>Destination</li>
                    </ul>
                    <div className='flex items-center justify-center gap-6 tracking-tight text-gray-600 
                                hover:underline font-semibold'>
                        <div className='flex items-center justify-center gap-4'>
                            <BiGlobe />
                            <p>
                                English(US)
                            </p>
                        </div>
                        <div className='hover:underline'>
                            $ USD
                        </div>
                        <div className='flex items-center justify-center gap-2'>
                            <p>Support & resources</p>
                            <IoIosArrowUp size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer