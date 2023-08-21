import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'

const RoomCard = () => {
    return (
        <article className='border-2'>
            <Link
                href="/rooms/1"
                className='flex flex-col items-start justify-center relative max-w-md'
            >
                <div className='rounded-lg overflow-hidden'>
                    <Image src="/assets/room1.webp" width={500} height={500} alt="Room Picture" />
                </div>
                <div className=' w-full'>
                    <div className='flex items-start justify-between'>
                        <div className='flex flex-col items-start justify-center'>
                            <p className='font-bold'>Cape Town, South Africa</p>
                            <p className='text-gray-400'><span>8,317</span> kilometers away</p>
                            <p className='text-gray-400'><span>Aug 28</span> - <span>Sep 2</span></p>
                            <p><span className='font-bold'>$1577</span>night</p>
                        </div>
                        <div className='flex items-center'>
                            <BsFillStarFill />
                            4.84
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    )
}

export default RoomCard