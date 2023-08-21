import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import { AiFillHeart } from "react-icons/ai"

const RoomCard = () => {
    return (
        <article className='mt-6'>
            <Link
                href="/rooms/1"
                className='flex inset-0 flex-col items-start justify-center relative max-w-xs'
            >
                <div className='rounded-lg overflow-hidden'>
                    <div className='absolute z-10 top-5 right-5 
                    text-gray-800 opacity-80'>
                        <AiFillHeart size={25} />
                    </div>
                    <Image
                        src="/assets/room1.webp"
                        alt="Room Picture"
                        width={353}
                        height={324}
                        className='object-cover w-[353px] h-[304px]'
                        loading='lazy'
                    />

                </div>
                <div className='w-full mt-4'>
                    <div className='flex flex-col sm:flex-row items-start justify-between'>
                        <div className='flex flex-col items-start justify-center'>
                            <p className='font-bold'>Cape Town, South Africa</p>
                            <p className='text-gray-400'><span>8,317</span> kilometers away</p>
                            <p className='text-gray-400'><span>Aug 28</span> - <span>Sep 2</span></p>
                            <p><span className='font-bold'>$1577</span>night</p>
                        </div>
                        <div className='flex items-center mt-4 sm:mt-0'>
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
