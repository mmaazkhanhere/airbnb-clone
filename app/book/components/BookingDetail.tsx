import React from 'react'
import { BsApple } from 'react-icons/bs'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { GoMail } from "react-icons/go"
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import { BookDataProps } from '@/interface'
import { selectedDateRange } from '@/app/uitls/dateUtils'
import calculateTotalDays from '@/app/uitls/calculateTotalDays'
import { urlForImage } from '@/sanity/lib/image'
import { calculateTotal } from '@/app/uitls/calculateTotal'
import Link from 'next/link'

const BookingDetail: React.FC<{ room: BookDataProps }> = ({ room }) => {

    const startDate = selectedDateRange[0].startDate;
    const endDate = selectedDateRange[0].endDate;

    const totalDays = calculateTotalDays(startDate, endDate);

    const total = ((room.price + room.airbnb_fee + room.clean_fee) * totalDays) + (15.88 * totalDays);

    return (

        <section className='md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto mt-10 hidden md:block'>
            <div className='flex items-center justify'>
                <Link href={`/rooms/${room.slug}`}>
                    <div className='p-4 w-14 h-14 hover:bg-slate-100 rounded-full -ml-14 cursor-pointer'>
                        <MdOutlineKeyboardArrowLeft size={24} />
                    </div>
                </Link>
                <h1 className='text-4xl font-semibold'>
                    Request to book
                </h1>
            </div>
            <div className='flex items-start justify-between w-full  '>
                {/*Left Section */}
                <article className='md:w-1/2 lg:w-3/5 flex flex-col items-start justify-center gap-5 mr-10'>
                    <h2 className='text-2xl font-semibold mt-10'>Your trip</h2>
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex flex-col items-start justify-center text-lg'>
                            <p className=' font-semibold'>Dates</p>
                            <span>{startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}</span>
                        </div>
                        <p className='text-lg font-semibold underline cursor-pointer'>Edit</p>
                    </div>
                    <div className='flex items-center justify-between w-full text-lg'>
                        <div className='flex flex-col items-start justify-center'>
                            <p className='font-semibold'>Guests</p>
                            <span>1 guests</span>
                        </div>
                        <p className='text-lg font-semibold underline cursor-pointer'>Edit</p>
                    </div>
                    <div className='w-full my-4 border border-gray-100' />
                    <h2 className='textr-2xl font-semibold'>Login or sign up to book</h2>
                    <div className='flex flex-col w-full border py-2 border-gray-300 rounded-lg'>
                        <div className='w-full h-full focus:border-black'>
                            <p className='px-4 text-xs'>Country/Region</p>
                            <select name="phone" id="phone" className='w-full py-2 border-b
                            border-gray-300 px-4'
                            >
                                <option value="+61">Australia (+61)</option>
                                <option value="+92">Pakistan (+92)</option>
                                <option value="+44">United Kingdom (+44)</option>
                                <option value="+1">United States (+1)</option>
                            </select>
                        </div>

                        <input type="text" placeholder='Phone number'
                            className='py-2 px-4 w-full' />
                    </div>
                    <p className='text-xs'>
                        We’ll call or text you to confirm your number. Standard message and data rates apply.
                        <span className='font-semibold underline cursor-pointer'>Privacy Policy</span>
                    </p>
                    <Link href={'/success'}
                        className='w-full py-4 text-white font-semibold bg-[#dd3c59] rounded-lg
                        text-center'
                    >
                        Continue
                    </Link>
                    <div className='flex items-center justify-center gap-2 w-full'>
                        <div className='w-full border' />
                        <p>or</p>
                        <div className='w-full border' />
                    </div>
                    <div className='grid grid-cols-3 w-full gap-x-4'>
                        <div className='w-full py-3 border border-black rounded-lg hover:bg-gray-100
                            flex justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 128 128">
                                <rect width="118.35" height="118.35" x="4.83" y="4.83" fill="#3d5a98" rx="6.53" ry="6.53" />
                                <path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0 0 91 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z" />
                            </svg>
                        </div>
                        <div className='w-full py-3 border border-black rounded-lg hover:bg-gray-100
                            flex justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 128 128">
                                <path fill="#fff" d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.33 74.33 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.16 36.16 0 0 1-13.93 5.5a41.29 41.29 0 0 1-15.1 0A37.16 37.16 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.31 38.31 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.28 34.28 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38z" />
                                <path fill="#e33629" d="M44.59 4.21a64 64 0 0 1 42.61.37a61.22 61.22 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21z" />
                                <path fill="#f8bd00" d="M3.26 51.5a62.93 62.93 0 0 1 5.5-15.9l20.73 16.09a38.31 38.31 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9z" />
                                <path fill="#587dbd" d="M65.27 52.15h59.52a74.33 74.33 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z" />
                                <path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.16 37.16 0 0 0 14.08 6.08a41.29 41.29 0 0 0 15.1 0a36.16 36.16 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.73 63.73 0 0 1 8.75 92.4z" />
                            </svg>
                        </div>
                        <div className='w-full py-3 border border-black rounded-lg hover:bg-gray-100
                            flex justify-center'>
                            <BsApple size={30} />
                        </div>
                    </div>
                    <button className='w-full flex items-center border border-black px-6 py-3 rounded-lg 
                    hover:bg-gray-100'>
                        <GoMail size={26} />
                        <p className='text-lg font-semibold text-center w-full'>Contiue with mail</p>
                    </button>
                </article>
                {/*Right Section */}
                <article className='flex flex-col items-start justify-center md:gap-3 xl:gap-5 md:w-1/2 lg:w-2/5
                    border border-gray-300 rounded-lg p-6 md:sticky md:top-0 md:left-0'>
                    <div className='flex items-center justify-start gap-3 '>
                        <div className='md:w-3/5'>
                            <Image src={urlForImage(room.thumbnail).url()}
                                alt={room.name}
                                className='rounded-lg overflow-hidden'
                                width={200} height={200}
                            />
                        </div>
                        <div className='flex flex-col md:gap-2 lg:gap-2 md:w-2/5'>
                            <p className='text-sm text-gray-400'>Entire villa</p>
                            <p className='md:text-xs lg:text-sm xl:text-base'>
                                {room.name}
                            </p>
                            <div className='flex items-center justify-start lg:gap-3 xl:gap-4'>
                                <FaStar />
                                <p className='md:text-xs lg:text-base xl:text-base'>
                                    {room.ratings_recieved && <span>{room.ratings_recieved}</span>} ({room.review} reviews)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full border border-gray-300' />
                    <h2 className='md:text-lg lg:text-xl font-semibold'>Price Details</h2>
                    <div className='flex items-center justify-between w-full md:text-base lg:text-lg'>
                        <p>${room.price} x {totalDays} nights</p>
                        <span>${room.price * totalDays}</span>
                    </div>
                    {
                        room.airbnb_fee && (
                            <div className='flex items-center justify-between w-full md:text-base lg:text-lg'>
                                <p>Airbnb fees</p>
                                <span>${room.airbnb_fee}</span>
                            </div>
                        )
                    }
                    {
                        room.airbnb_fee && (
                            <div className='flex items-center justify-between w-full md:text-base lg:text-lg'>
                                <p>Airbnb fees</p>
                                <span>${room.clean_fee}</span>
                            </div>
                        )
                    }
                    <div className='flex items-center justify-between w-full md:text-base lg:text-lg'>
                        <p>Taxes</p>
                        <span>$15.88 x {totalDays}</span>
                    </div>
                    <div className='md:my-3 lg:my-4 w-full border border-gray-300' />
                    <div className='flex items-center justify-between w-full md:text-base lg:text-lg'>
                        <p className='font-bold underline'>Total (USD)</p>
                        <span className='font-bold'>${calculateTotal(total)}</span>
                    </div>
                    <div className='md:my-3 lg:my-4 w-full border border-gray-300' />
                    <p className='xl:mt-6 lg:mb-2 xl:mb-3 md:text-sm lg:text-base'>
                        This property requires a $241.73 security deposit. It will be collected separately
                        by the property prior to your arrival or at check-in.
                    </p>
                </article>
            </div>
        </section>

    )
}

export default BookingDetail