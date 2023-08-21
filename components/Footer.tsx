
import React from 'react'
import { BiCopyright, BiGlobe } from "react-icons/bi"
import { IoIosArrowUp } from "react-icons/io"

const Footer = () => {
    return (
        <footer className='fixed w-full'>
            <div className='fixed border border-gray-200 w-full' />
            <div className='flex items-center justify-between max-w-[1750px] mt-[20px]'>
                <ul className='flex items-center justify-center gap-4 list-disc text-gray-400'>
                    <li className='flex items-center justify-center gap-1 text-sm
                    hover:underline '>
                        <BiCopyright />
                        <p>2023 Airbnb, Imc.</p>
                    </li>
                    <li className='hover:underline ml-4'>Terms</li>
                    <li className='hover:underline ml-4'>Sitemap</li>
                    <li className='hover:underline ml-4'>Privacy</li>
                    <li className='hover:underline ml-4'>Your Privacy Choices</li>
                    <li className='hover:underline ml-4'>Destination</li>
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

        </footer>
    )
}

export default Footer