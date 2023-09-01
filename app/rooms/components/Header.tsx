"use client"

import React, { useEffect, useRef, useState } from 'react'
import { BsSearch } from "react-icons/bs"
import Link from 'next/link';
import Image from 'next/image'
import { GiHamburgerMenu } from "react-icons/gi"
import { BiGlobe } from "react-icons/bi"
import { FaStar } from 'react-icons/fa';
import { IoIosArrowBack } from "react-icons/io"
import { HeaderProps } from '@/interface';
import { LuShare } from 'react-icons/lu';
import { AiOutlineHeart } from 'react-icons/ai';



function Avatar() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path fill="none" d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0ZM20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5Z" />
            <path fill="currentColor" d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0Z" />
        </svg>
    )
}

const Header: React.FC<HeaderProps> = ({ price, original_price, ratings_recieved, review, slug }) => {

    const [menu, setMenu] = useState<boolean>(false);

    const handleMenu = () => {
        setMenu(!menu);
    };

    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (menuRef && !menuRef.current?.contains(event.target as Node)) {
                setMenu(false);
            };
        };

        if (menu) {
            document.addEventListener("click", handleOutsideClick);
        } else {
            document.removeEventListener("click", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        }
    }, [menu])

    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {

        const scrollHeader = () => {
            const scrollY = window.scrollY;
            setLastScrollY(scrollY)
        }
        window.addEventListener('scroll', scrollHeader);

        return () => {
            window.removeEventListener('scroll', scrollHeader);
        };

    }, [lastScrollY])

    return (
        <header className='relative mx-auto'>
            <nav>
                {
                    (lastScrollY > 0 || lastScrollY <= 400) && (
                        <>
                            <section className='hidden md:flex items-center justify-between mx-auto py-4'>
                                {/*Icon */}
                                <Link href="/" className='hidden lg:block'>
                                    <Image src="/assets/logo.png" alt="Airbnb Logo" width={110} height={110} />
                                </Link>
                                <Link href="/" className='block lg:hidden'>
                                    <Image src="/assets/logo-small.png" alt="Airbnb Logo" width={40} height={40} />
                                </Link>
                                {/*Search bar */}
                                <nav className='flex items-center justify-center rounded-3xl border shadow-md
                                hover:shadow-lg py-2 lg:pl-6 lg:pr-2 cursor-pointer'
                                >
                                    <input placeholder='Start your search'
                                        className=' placeholder:text-gray-700 md:text-sm lg:text-base
                                font-semibold w-60 md:px-3 lg:px-0'
                                    />
                                    <div className='p-2 bg-[#fe385d] rounded-full mr-2'>
                                        <BsSearch className="text-white font-black" />
                                    </div>
                                </nav>
                                {/*User and avatar */}
                                <nav className='flex items-center lg:gap-5 md:text-sm lg:text-base'>
                                    <p className='font-semibold text-gray-600 leading-tight rounded-xl hover:bg-gray-100
                                py-2 md:px-2 lg:px-4  cursor-pointer'>
                                        Airbnb your home
                                    </p>
                                    <div className='rounded-full hover:bg-gray-100 cursor-pointer p-2'>
                                        <BiGlobe size={22} className="text-gray-700 " />
                                    </div>
                                    <div className='border-2 flex items-center justify-between rounded-3xl
                                    gap-2 px-4 py-1 hover:shadow-md cursor-pointer'>
                                        <button onClick={handleMenu}>
                                            <GiHamburgerMenu className="text-gray-600" />
                                        </button>
                                        <div className="text-gray-500">
                                            <Avatar />
                                        </div>
                                    </div>
                                </nav>
                            </section>
                            {/*Navbar for mobile */}
                            <nav className='flex md:hidden items-center justify-between bg-gray-100 p-2
                            mx-auto max-w-sm'>
                                <Link href='/' >
                                    <IoIosArrowBack size={20} className='p-2 w-10 h-10 rounded-full' />
                                </Link>
                                <div className="flex items-center justify-center">
                                    <LuShare className='p-2 w-10 h-10 rounded-full' />
                                    <AiOutlineHeart className='p-2 w-10 h-10 rounded-full' />
                                </div>
                            </nav>
                        </>

                    )
                }
                {
                    menu && (
                        <section
                            ref={menuRef}
                            className='absolute border p-4 rounded-lg text-sm shadow-md w-52 top-18
                            right-0 z-50 bg-white'>
                            <div className='w-full p-2 hover:bg-gray-100 font-semibold cursor-pointer'>
                                Sign up
                            </div>
                            <div className='w-full p-2 hover:bg-gray-100 cursor-pointer'>
                                Log in
                            </div>
                            <div className='w-full border my-2 border-gray-200' />
                            <div className='w-full p-2 hover:bg-gray-100 cursor-pointer'>
                                Airbnb your home
                            </div>
                            <div className='w-full p-2 hover:bg-gray-100 cursor-pointer'>
                                Help Center
                            </div>
                        </section>
                    )
                }
                {
                    lastScrollY > 450 && (
                        <section className='mx-auto w-full md:p-6 fixed left-0 top-0 bg-white 
                        z-20 border-b-2 border-b-gray-300'
                        >
                            <div className={`max-w-6xl mx-auto hidden md:flex items-center
                            ${lastScrollY > 450 && lastScrollY < 1900 ? 'justify-start' : 'justify-between'}`}>
                                <div className='flex items-center justify-start gap-6
                                font-semibold'>
                                    <p className='hover:border-b-2 hover:border-b-black'>Photos</p>
                                    <p className='hover:border-b-2 hover:border-b-black'>Amenities</p>
                                    <p className='hover:border-b-2 hover:border-b-black'>Reviews</p>
                                    <p className='hover:border-b-2 hover:border-b-black'>Location</p>
                                </div>
                                {
                                    lastScrollY >= 1900 && (
                                        <div className='flex items-center justify-center gap-4'>
                                            {/*Original price and reviews */}
                                            <div className='flex flex-col items-start gap-2'>
                                                <div className='flex items-center justify-center gap-2 text-lg font-semibold'>
                                                    {
                                                        original_price && (
                                                            <p className=' text-gray-500 line-through'>${original_price}</p>
                                                        )
                                                    }

                                                    <p><span>${price}</span> night</p>
                                                </div>
                                                <div className='flex items-center justify-start gap-2'>
                                                    <div className='flex items-start justify-center gap-1'>
                                                        <FaStar />
                                                        <p className='text-xs'>{ratings_recieved}</p>
                                                    </div>
                                                    <p className='underline text-medium text-gray-400 text-xs'>
                                                        ({review} reviews)
                                                    </p>
                                                </div>
                                            </div>
                                            {/*Reserve */}
                                            <Link href={`/book/${slug}`}
                                                className='py-4 px-6 text-white font-bold bg-[#dd3c59]
                                                rounded-lg text-lg'>
                                                Reserve
                                            </Link>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                    )
                }
            </nav>
            <section className='fixed md:hidden bottom-0 left-0 border-t border-gray-200 
            p-2 z-20 w-full bg-white'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-center gap-2 font-semibold'>
                        {
                            original_price && (
                                <p className='text-gray-500 line-through'>${original_price}</p>
                            )
                        }
                        <p><span>${price}</span> night</p>
                    </div>
                    {/*Reserve */}

                    <Link href={`/book/${slug}`}
                        className='p-2 px-4 text-white font-bold bg-[#dd3c59]
                    rounded-lg'>
                        Reserve
                    </Link>
                </div>
            </section>
        </header>
    )
}
export default Header




// <div className='absolute bottom-0 left-0 z-10 border border-gray-100 w-full' />