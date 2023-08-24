import React from 'react'
import { BiCopyright, BiGlobe } from 'react-icons/bi'
import { IoIosArrowForward } from "react-icons/io"
import { GrFacebook } from "react-icons/gr"
import { FaSquareTwitter } from 'react-icons/fa6'
import { FaInstagramSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <div className='max-w-6xl mx-auto'>
                <h2 className='text-2xl font-semibold py-8'>
                    Explore other options in and around <span>Pimplad Nasik</span>
                </h2>
                <h4 className='text-xl py-6'>Other types of stays on Airbnb</h4>
                <div className='grid grid-cols-2 xl:grid-cols-4 w-full gap-4 justify-start
                font-medium text-gray-400'>
                    <p className='hover:cursor-pointer'>Wellington vacation rentals</p>
                    <p className='hover:cursor-pointer'>Wellington monthly stays</p>
                    <p className='hover:cursor-pointer'>House rentals in Wellington</p>
                    <p className='hover:cursor-pointer'>Villa rentals in New Zealand</p>
                    <p className='hover:cursor-pointer'>House rentals in New Zealand</p>
                    <p className='hover:cursor-pointer'>Amazing pools</p>
                    <p className='hover:cursor-pointer'>Luxury rentals in New Zealand</p>
                </div>
                <div className='py-6 flex items-center justify-start gap-3 text-gray-400'>
                    <span>Airbnb</span>
                    <IoIosArrowForward />
                    <span>India</span>
                    <IoIosArrowForward />
                    <span>Maharashtra</span>
                    <IoIosArrowForward />Konkan Division
                </div>
            </div>
            <div className='my-10 w-full border border-gray-200' />
            <div className='flex items-start justify-between gap-5 max-w-6xl mx-auto'>
                <div className='flex flex-col items-start justify-center gap-4'>
                    <h3 className='font-semibold'>Support</h3>
                    <p className='hover:underline'>Help Center</p>
                    <p className='hover:underline'>Air Cover</p>
                    <p className='hover:underline'>Supporting people with disabilities</p>
                    <p className='hover:underline'>Cancelation options</p>
                    <p className='hover:underline'>Our COVID-19 Response</p>
                    <p className='hover:underline'>Report a neighborhood concern</p>
                </div>
                <div className='flex flex-col items-start justify-center gap-4'>
                    <h3 className='font-semibold'>Community</h3>
                    <p className='hover:underline'>Airbnb.org: disaster relief housing</p>
                    <p className='hover:underline'>Combatinf discrimination</p>
                </div>
                <div className='flex flex-col items-start justify-center gap-4'>
                    <h3 className='font-semibold'>Hosting</h3>
                    <p className='hover:underline'>Airbnb your home</p>
                    <p className='hover:underline'>AirCover for hosts</p>
                    <p className='hover:underline'>Exploring hosting resources</p>
                    <p className='hover:underline'>Visit our community forum</p>
                    <p className='hover:underline'>How to host responsibly</p>
                    <p className='hover:underline'>Airbnb-friendly apartments</p>
                </div>
                <div className='flex flex-col items-start justify-center gap-4'>
                    <h3 className='font-semibold'>Airbnb</h3>
                    <p className='hover:underline'>Newsroom</p>
                    <p className='hover:underline'>Learn about new features</p>
                    <p className='hover:underline'>Letter from our founders</p>
                    <p className='hover:underline'>Careers</p>
                    <p className='hover:underline'>Investors</p>
                    <p className='hover:underline'>Gift cards</p>
                </div>
            </div>
            <div className='my-5 w-full border border-gray-200' />
            <footer className='flex items-center justify-between max-w-6xl mx-auto pb-5'>
                <div className='flex items-center justify-center gap-5'>
                    <ul className='flex items-center justify-center gap-4 list-disc text-gray-600'>
                        <li className='flex items-center justify-center gap-1 text-sm'>
                            <BiCopyright />
                            <p>2023 Airbnb, Inc.</p>
                        </li>
                        <li className='hover:underline hover:cursor-pointer ml-4'>Terms</li>
                        <li className='hover:underline hover:cursor-pointer ml-4'>Sitemap</li>
                        <li className='hover:underline hover:cursor-pointer ml-4'>Privacy</li>
                        <li className='hover:underline hover:cursor-pointer ml-4'>Your Privacy Choices</li>
                    </ul>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <div className='flex items-center justify-center gap-4 font-semibold cursor-pointer
                    hover:underline'>
                        <BiGlobe />
                        <p>
                            English(US)
                        </p>
                    </div>
                    <div className='hover:underline font-semibold cursor-pointer'>
                        $ USD
                    </div>
                    <div className='flex items-center justify-center gap-5'>
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