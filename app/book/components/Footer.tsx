import React from 'react'
import { BiCopyright, BiGlobe } from 'react-icons/bi'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaSquareTwitter } from 'react-icons/fa6'
import { GrFacebook } from 'react-icons/gr'

const Footer = () => {
    return (
        <footer className='w-full bg-slate-200 md:p-8 xl:p-4 mt-20'>
            <footer className='flex flex-col xl:flex-row gap-4 xl:gap-0 items-start
            md:items-center justify-between max-w-6xl mx-auto'
            >
                <div className='flex items-center justify-center gap-5 order-2 xl:order-1'>
                    <ul className='flex flex-col md:flex-row item-start md:items-center 
                    justify-center md:gap-4 list-disc text-gray-600'
                    >
                        <li className='flex items-center justify-start md:justify-center gap-1 text-sm'>
                            <BiCopyright />
                            <p>2023 Airbnb, Inc.</p>
                        </li>
                        <li className='hover:underline hover:cursor-pointer ml-4'>Terms</li>
                        <li className='hover:underline hover:cursor-pointer ml-4'>Sitemap</li>
                        <li className='hover:underline hover:cursor-pointer ml-4'>Privacy</li>
                        <li className='hover:underline hover:cursor-pointer ml-4'>Your Privacy Choices</li>
                    </ul>
                </div>
                <div className='flex items-center lg:justify-between xl:justify-center gap-6 md:gap-8 
                xl:gap-4 order-1 xl:order-2 xl:font-semibold flex-wrap md:flex-nowrap'
                >
                    <div className='flex items-center justify-center gap-3 lg:gap-4  cursor-pointer
                    hover:underline'>
                        <BiGlobe />
                        <p>
                            English(US)
                        </p>
                    </div>
                    <div className='hover:underline cursor-pointer'>
                        $ USD
                    </div>
                    <div className='hidden md:flex items-center justify-center md:gap-3 xl:gap-5'>
                        <GrFacebook size={20} />
                        <FaSquareTwitter size={22} />
                        <FaInstagramSquare size={22} />
                    </div>
                </div>
            </footer>
        </footer>

    )
}

export default Footer