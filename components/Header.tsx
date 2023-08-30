"use client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import SubCategoryItem from './SubCategoryItem';
import { BsSearch } from "react-icons/bs"
import { HiAdjustmentsHorizontal } from "react-icons/hi2"
import { BiGlobe } from "react-icons/bi"
import { GiHamburgerMenu } from "react-icons/gi"

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SubCategoryProps } from '@/interface';

function Avatar() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path fill="none" d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0ZM20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5Z" />
            <path fill="currentColor" d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0Z" />
        </svg>
    )
}

const Header: React.FC<{ category: SubCategoryProps[], setCat: (value: string) => void }> = ({ category, setCat }) => {

    const [menu, setMenu] = useState<boolean>(false);
    const [catSelected, setCatSelected] = useState<string>("");
    setCat(catSelected);

    const handleCategory = (value: string) => {
        setCatSelected(value);
    }

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
        <nav className={`${pathName === '/' ? 'fixed' : 'block'} top-0 md:left-30 bg-white z-20 
            w-[390px] md:w-[770px] lg:w-[1024px] xl:w-[1750px] mx-auto`}>
            {
                pathName === '/' && (
                    <div className=" mx-auto flex  items-center justify-center md:justify-between py-4 ">
                        {/*Logo */}
                        <Link href="/">
                            <Image src="/assets/logo.png" alt="Airbnb Logo" width={110} height={110}
                                className='hidden lg:block' />
                            <Image src="/assets/logo-small.png" alt="Airbnb Logo" width={40} height={40}
                                className='hidden md:block lg:hidden' />
                        </Link>
                        {/*Search bar */}
                        <nav className='flex items-center justify-center rounded-3xl border shadow-sm hover:shadow-lg'>
                            <div className='border-r-2 border-l-gray-500 text-sm md:text-base font-semibold px-2 
                            md:px-3 lg:px-4'>
                                Anywhere
                            </div>
                            <div className='border-r-2 border-l-gray-500 text-sm md:text-base font-semibold px-2 
                            md:px-3 lg:px-4'>
                                Any week
                            </div>
                            <div className='flex items-center justify-center p-2'>
                                <input placeholder='Add guests' className=' placeholder:text-gray-500 text-sm md:text-base
                                w-24' />
                                <div className='p-1 lg:p-2 bg-[#fe385d] rounded-full'>
                                    <BsSearch className="text-white font-black" />
                                </div>
                            </div>
                        </nav>
                        {/*User profile and other */}
                        <nav className='items-center md:gap-2 lg:gap-5 hidden md:flex'>
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
                    <section className='-z-20 mb-4 md:px-6 lg:px-4 xl:px-0 '>
                        <div className='border border-gray-200 w-full' />
                        <div className='flex items-centem r justify-start 
                        md:gap-1 lg:gap-3 xl:gap-4'>
                            <section className='mt-[20px] w-[380px] md:w-[584px] 
                            lg:w-[824px] xl:w-full'>
                                <Splide
                                    options={{
                                        pagination: false,
                                        rewind: false,
                                        gap: '12px',
                                        focus: 'center',
                                        perPage: 15,
                                        perMove: 2,
                                        breakpoints: {
                                            1024: {
                                                perPage: 9,
                                                gap: '10px'
                                            },
                                            765: {
                                                perPage: 7,
                                                gap: '8px'
                                            },
                                            380: {
                                                perPage: 4,
                                                gap: '6px'
                                            }
                                        }
                                    }}
                                >
                                    {
                                        category.map((cat) => (
                                            <SplideSlide key={cat.sub_category}>
                                                <SubCategoryItem subCat={cat} onCategorySelect={handleCategory} />
                                            </SplideSlide>
                                        ))
                                    }
                                </Splide>
                            </section>
                            <div className='hidden md:flex items-center justify-center py-4 px-2 gap-2 border rounded-lg'>
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