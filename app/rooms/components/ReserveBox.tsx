"use client"

import { selectedDateRange } from '@/app/uitls/dateUtils';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { AiFillStar } from "react-icons/ai"

const ReserveBox = () => {

    const [show, setShow] = useState('block');
    const [lastScrollY, setLastScrollY] = useState(0);

    const startDate = selectedDateRange[0].startDate;
    const endDate = selectedDateRange[0].endDate;

    const formatDateString = (date: any) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();
        return `${day}/${month}/${year}`;
    };

    const formattedStartDate = formatDateString(startDate);
    const formattedEndDate = formatDateString(endDate);

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

    return (
        <article
            className={`border shadow-2xl ml-10 rounded-xl ${show} z-10 w-full p-4 max-w-sm`}
        >
            {/*Price and Review */}

            <div className='flex items-center justify-between w-full'>
                {/*Price */}
                <div className='flex items-center justify-center gap-2'>
                    <span className='text-2xl line-through font-semibold text-gray-400'>
                        $519
                    </span>
                    <span className='text-2xl  font-semibold'>
                        $415
                    </span>
                    <span className='font-thin self-end'>night</span>
                </div>

                {/*Ratings */}
                <div className='flex items-center justify-center gap-2'>
                    <AiFillStar />
                    <span className='font-semibold'>5.0</span>
                    <span className='text-gray-500'>5 reviews</span>
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
                <p className='underline text-gray-600'><span>$519</span> x <span>7</span> nights</p>
                <span>$3632</span>
            </div>
            <div className='flex items-center justify-between w-full mt-5'>
                <p className='text-gray-600'>Weekly stay discounts</p>
                <span className='text-green-500'>-$726</span>
            </div>

            {/*Line Separator */}
            <div className='my-4 border border-gray-200 w-full' />

            {/*Total cost */}
            <div className='flex items-center justify-between w-full pb-2'>
                <p className='font-semibold'>Total before taxes</p>
                <span className='font-semibold'>$2906</span>
            </div>
        </article>

    )
}

export default ReserveBox

