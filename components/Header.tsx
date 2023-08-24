"use client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import SubCategoryItem from './SubCategoryItem';
import { BsSearch } from "react-icons/bs"
import { HiAdjustmentsHorizontal } from "react-icons/hi2"
import { BiGlobe } from "react-icons/bi"
import { GiHamburgerMenu } from "react-icons/gi"

import { usePathname } from 'next/navigation';
import Link from 'next/link';

function Avatar() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path fill="none" d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0ZM20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5Z" />
            <path fill="currentColor" d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0Z" />
        </svg>
    )
}

const Header = () => {

    const totalItems = 40;   // Total number of items
    const itemsPerPage = 17;

    const [menu, setMenu] = useState<boolean>(false);

    const pathName = usePathname();

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

    return (
        <nav className={`${pathName === '/' ? 'fixed' : 'block'} top-0 left-30 bg-white z-20 w-[1750px]`}>
            {
                pathName === '/' && (
                    <div className="max-w-[1750px] mx-auto flex items-center justify-between py-4">
                        {/*Logo */}
                        <Link href="/">
                            <Image src="/assets/logo.png" alt="Airbnb Logo" width={110} height={110} />
                        </Link>
                        {/*Search bar */}
                        <nav className='flex items-center justify-center rounded-3xl border shadow-sm hover:shadow-lg'>
                            <div className='border-r-2 border-l-gray-500 text-base font-semibold px-4'>
                                Anywhere
                            </div>
                            <div className='border-r-2 border-l-gray-500 text-base font-semibold px-4'>
                                Any week
                            </div>
                            <div className='flex items-center justify-center p-2'>
                                <input placeholder='Add guests' className=' placeholder:text-gray-500 w-24' />
                                <div className='p-2 bg-[#fe385d] rounded-full'>
                                    <BsSearch className="text-white font-black" />
                                </div>
                            </div>
                        </nav>
                        {/*User profile and other */}
                        <nav className='flex items-center gap-5 '>
                            <p className='font-semibold text-gray-600 leading-tight'>Airbnb your home</p>
                            <BiGlobe size={22} className="text-gray-700" />
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
                    </div>
                )
            }
            {
                pathName === "/" && (
                    <section className='-z-20 mb-4'>
                        <div className='border border-gray-200 w-full' />
                        <div className='flex items-center justify-start max-w-[1750px] gap-4'>
                            <section className='mt-[20px] max-w-[1650px]'>
                                <Splide
                                    options={{
                                        perPage: itemsPerPage,
                                        pagination: false,
                                        gap: '1rem',
                                        rewind: false,
                                        focus: 'center',
                                        perMove: itemsPerPage,
                                    }}
                                >
                                    {Array.from({ length: totalItems }).map((_, index) => (
                                        <SplideSlide key={index}>
                                            <SubCategoryItem />
                                        </SplideSlide>
                                    ))}
                                </Splide>
                            </section>
                            <div className='flex items-center justify-center py-4 px-2 gap-2 border rounded-lg'>
                                <HiAdjustmentsHorizontal size={22} />
                                <p>Filter</p>
                            </div>
                        </div>
                    </section>
                )

            }
            {
                menu && (
                    <section
                        ref={menuRef}
                        className='absolute border p-4 rounded-lg text-sm shadow-md w-52 top-20 right-0 z-50 bg-white'>
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
        </nav>

    )
}

export default Header