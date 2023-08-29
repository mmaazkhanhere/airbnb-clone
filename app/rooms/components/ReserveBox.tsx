"use client"

import { calculateTotal } from '@/app/uitls/calculateTotal';
import calculateTotalDays from '@/app/uitls/calculateTotalDays';
import { selectedDateRange } from '@/app/uitls/dateUtils';
import { formatDateString } from '@/app/uitls/formatDateString';
import { ReserveBoxProps } from '@/interface';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { AiFillStar } from "react-icons/ai"

const ReserveBox: React.FC<ReserveBoxProps> =
    ({ original_price, price, ratings_recieved, review, discount, airbnb_fee, clean_fee }) => {

        const [show, setShow] = useState('block');
        const [lastScrollY, setLastScrollY] = useState(0);

        const startDate = selectedDateRange[0].startDate;
        const endDate = selectedDateRange[0].endDate;

        const formattedStartDate = formatDateString(startDate);
        const formattedEndDate = formatDateString(endDate);

        const totalDays = calculateTotalDays(startDate, endDate);

        useEffect(() => {
            const controlBox = () => {
                const scrollY = window.scrollY;

                if (scrollY > 400 && scrollY <= 1900) {
                    setShow('sticky-center'); // Stick to the center
                }
                else {
                    setShow('block'); // Show as a normal block
                }

                setLastScrollY(scrollY);
            };

            window.addEventListener('scroll', controlBox);

            return () => {
                window.removeEventListener('scroll', controlBox);
            };
        }, [lastScrollY]);

        const total = price * totalDays;

        return (
            <article
                className={`border shadow-2xl ml-10 rounded-xl ${show} z-10 w-full p-4 max-w-sm`}
            >
                {/*Price and Review */}

                <div className='flex items-center justify-between w-full'>
                    {/*Price */}
                    <div className='flex items-center justify-center gap-2'>
                        {
                            original_price && (
                                <span className='text-2xl line-through font-semibold text-gray-400'>
                                    ${original_price}
                                </span>
                            )
                        }

                        <span className='text-2xl  font-semibold'>
                            ${price}
                        </span>
                        <span className='font-thin self-end'>night</span>
                    </div>

                    {/*Ratings */}
                    <div className='flex items-center justify-center gap-2'>
                        <AiFillStar />
                        <span className='font-semibold'>{ratings_recieved}</span>
                        <span className='text-gray-500 underline font-medium'>{review} reviews</span>
                    </div>
                </div>

                {/*Checkout and checkin settings */}

                <div className='grid grid-cols-2 border rounded-xl w-full mt-6'>
                    <div className='w-full p-2 flex flex-col items-start justify-center border-r'>
                        <p className='text-xs uppercase font-medium'>check-in</p>
                        <span className='w-full py-2'>{formattedStartDate}</span>
                    </div>
                    <div className='w-full p-2 flex flex-col items-start justify-center border-b'>
                        <p className='text-xs uppercase font-medium'>checkout</p>
                        <span className='w-full py-2'>{formattedEndDate}</span>
                    </div>
                    <div className=' col-span-2 w-full border-t p-2'>
                        <p className='text-xs uppercase font-medium'>guests</p>
                        <select name="guest" id="guests" className='w-full mt-2 py-1'>
                            <option value="1">
                                1 Adult
                            </option>
                            <option value="2">
                                2 Adults
                            </option>
                            <option value="3">
                                3 Adults
                            </option>
                            <option value="4">
                                4 Adults
                            </option>
                        </select>
                    </div>
                </div>

                {/*Button */}

                <Link href="/book/1">
                    <button className='w-full py-3 bg-[#dd3c59] text-white rounded-lg mt-4 font-bold'>
                        Reserve
                    </button>
                </Link>
                <span className='py-4 self-center text-gray-500'>
                    You wont be charged yet
                </span>

                {/*Price Calculation  */}

                <div className='flex items-center justify-between w-full mt-5'>
                    <p className='underline text-gray-600'><span>${price}</span> x <span>{totalDays}</span> nights</p>
                    <span>{total}</span>
                </div>
                {
                    airbnb_fee && (
                        <div className='flex items-center justify-between w-full mt-5'>
                            <p className='text-gray-600 underline cursor-pointer'>Airbnb Fee</p>
                            <span className='text-gray-600'>{airbnb_fee}</span>
                        </div>
                    )
                }
                {
                    clean_fee && (
                        <div className='flex items-center justify-between w-full mt-5'>
                            <p className='text-gray-600 underline cursor-pointer'>Cleaning Fee</p>
                            <span className='text-gray-600'>{clean_fee}</span>
                        </div>
                    )
                }
                {
                    discount && (
                        <div className='flex items-center justify-between w-full mt-5'>
                            <p className='text-gray-600'>Weekly stay discounts</p>
                            <span className='text-green-500'>-${discount}</span>
                        </div>
                    )
                }
                {/*Line Separator */}
                <div className='my-4 border border-gray-200 w-full' />

                {/*Total cost */}
                <div className='flex items-center justify-between w-full pb-2'>
                    <p className='font-semibold'>Total before taxes</p>
                    <span className='font-semibold'>${calculateTotal(total)}</span>
                </div>
            </article>

        )
    }

export default ReserveBox

