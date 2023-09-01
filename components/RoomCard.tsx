"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import { AiFillHeart } from "react-icons/ai"
import { urlForImage } from '@/sanity/lib/image'
import { RoomCardProps } from '@/interface'

import '@splidejs/react-splide/css';
const { Splide, SplideSlide } = require('@splidejs/react-splide');
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const RoomCard: React.FC<{ details: RoomCardProps }> = ({ details }) => {

    const dateStart = new Date().toLocaleString('en-US', { month: 'short', day: 'numeric' });
    const gapDate = new Date(new Date());
    gapDate.setDate(new Date().getDate() + details.dateGap);

    const dateEnd = gapDate.toLocaleString('en-US', { month: 'short', day: 'numeric' });

    console.log(details.slug)

    return (
        <article className='mt-6 flex inset-0 flex-col items-start justify-center relative max-w-xs mx-auto'>
            <div className='rounded-lg overflow-hidden'>
                <div className='absolute z-10 top-5 right-5 
                    text-gray-800 opacity-80'>
                    <AiFillHeart size={25} />
                </div>
                <div className='relative'>
                    <Link href={`/rooms/${details.slug}`}>
                        <Image
                            src={urlForImage(details.thumbnail).url()}
                            alt={details.name}
                            width={353}
                            height={324}
                            className='object-cover w-[353px] h-[304px] hover:opacity-0'
                            loading='lazy'
                        />
                    </Link>
                    <section className='absolute top-0 left-0 z-20 opacity-0 hover:opacity-100 
                        max-w-[360px]'>
                        <Link href={`/rooms/${details.slug}`} target='_blank'>
                            <Splide
                                options={{
                                    perPage: 1,
                                    pagination: true,
                                    rewind: false,
                                    focus: 'center',
                                    perMove: 1,
                                }}
                            >
                                {
                                    details.images.map((image) => (
                                        <SplideSlide key={image.asset?._ref}>
                                            <Link href={`/rooms/${details.slug}`}>
                                                <Image src={urlForImage(image).url()} alt={details.name}
                                                    width={353}
                                                    height={324}
                                                    loading='lazy'
                                                    className='object-cover w-[353px] h-[304px]'
                                                />
                                            </Link>
                                        </SplideSlide>
                                    ))
                                }
                            </Splide>
                        </Link>

                    </section>
                </div>
            </div>
            <Link href={`/rooms/${details.slug}`} target='_blank'
                className='w-full mt-4'>
                <div className='flex items-start justify-between'>
                    <div className='flex flex-col items-start justify-center'>
                        <p className='font-bold'>{details.city}, {details.country}</p>
                        <p className='text-gray-400'>{details.subtitle}</p>
                        <p className='text-gray-400'><span>{dateStart}</span> - <span>{dateEnd}</span></p>
                        <p><span className='font-bold'>${details.price}</span> night</p>
                    </div>
                    <div className='flex items-center mt-4 sm:mt-0 gap-2'>
                        <BsFillStarFill />
                        {details.ratings_recieved}
                    </div>
                </div>
            </Link>
        </article >
    )
}

export default RoomCard
