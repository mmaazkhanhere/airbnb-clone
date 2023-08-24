import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { MdOutlineKeyboardArrowLeft } from "react-icons/md"

const Header = () => {
    return (
        <header className='w-full p-5 border-b'>
            <Link href="/" className='self-start hidden md:block'>
                <Image src='/assets/logo.png' alt='Airbnb Logo' width={120} height={120} />
            </Link>
            <div className='flex items-center justify-start md:hidden sticky top-0 left-0 bg-white'>
                <Link href='/rooms/1'>
                    <MdOutlineKeyboardArrowLeft size={24} />
                </Link>
                <h1 className='font-bold text-center  w-full'>
                    Request to book
                </h1>
            </div>
        </header>
    )
}

export default Header