"use client"

import React, { useEffect, useRef, useState } from 'react'
import { BsSearch } from "react-icons/bs"
import Link from 'next/link';
import Image from 'next/image'
import { GiHamburgerMenu } from "react-icons/gi"
import { BiGlobe } from "react-icons/bi"
import { FaStar } from 'react-icons/fa';


function Avatar() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path fill="none" d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0ZM20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5Z" />
            <path fill="currentColor" d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0Z" />
        </svg>
    )
}

const Header = () => {

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

    console.log(lastScrollY)
    // const [show, setShow] = useState('block');


    return (
        <header className='relative w-full'>
            {
                (lastScrollY > 0 || lastScrollY <= 400) && (
                    <nav className='flex items-center justify-between max-w-6xl mx-auto py-4 '>
                        {/*Icon */}
                        <Link href="/">
                            <Image src="/assets/logo.png" alt="Airbnb Logo" width={110} height={110} />
                        </Link>
                        {/*Search bar */}
                        <nav className='flex items-center justify-center rounded-3xl border shadow-md 
                    hover:shadow-lg py-2 pl-6 pr-2 cursor-pointer'
                        >
                            <input placeholder='Start your search' className=' placeholder:text-gray-700 font-semibold w-60' />
                            <div className='p-2 bg-[#fe385d] rounded-full'>
                                <BsSearch className="text-white font-black" />
                            </div>
                        </nav>
                        {/*User and avatar */}
                        <nav className='flex items-center gap-5 '>
                            <p className='font-semibold text-gray-600 leading-tight rounded-xl hover:bg-gray-100
                    py-2 px-4 cursor-pointer'>
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
                    </nav>
                )
            }
            {
                menu && (
                    <section
                        ref={menuRef}
                        className='absolute border p-4 rounded-lg text-sm shadow-md w-52 top-18 right-72 z-50 bg-white'>
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
                    <section className='w-full p-6 fixed top-0 left-0 bg-white z-20 border-b-2 border-b-gray-300'
                    >
                        <div className={`max-w-6xl w-full mx-auto flex items-center 
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
                                        <div className='flex flex-col items-start gap-2'>
                                            <p><span className='font-semibold'>$507</span> night</p>
                                            <div className='flex items-center justify-start'>
                                                <FaStar />
                                                <p className='text-xs'><span>5.00</span> (5 reviews)</p>
                                            </div>
                                        </div>
                                        <button className='py-4 px-6 text-white font-bold bg-[#dd3c59] 
                                        rounded-lg text-lg'>
                                            Reserve
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                    </section>
                )
            }

            <div className='absolute bottom-0 left-0 z-10 border border-gray-100 w-full' />
        </header>
    )
}

export default Header