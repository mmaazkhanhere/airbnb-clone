
import { HostProps } from '@/interface'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import React from 'react'
import { FaMedal, FaStar } from 'react-icons/fa'
import { MdVerifiedUser } from "react-icons/md"
import { RiShieldUserFill } from "react-icons/ri"
import Cohost from './Cohost'


const HostDetail: React.FC<{ host: HostProps }> = ({ host }) => {

    return (
        <article>
            {/*Image and Name */}
            <div className='flex items-center justify-start gap-5'>
                {/*Image */}
                <div className='w-16 h-16 rounded-full overflow-hidden'>
                    <Image src={urlForImage(host.profile).url()} alt={host.name}
                        width={120} height={120}
                        className='object-cover'
                    />
                </div>
                {/*Name */}
                <div className='flex flex-col items-start justify-center'>
                    <h2 className='md:text-2xl lg:text-3xl font-bold tracking-wide'>
                        Hosted by <span>{host.name}</span>
                    </h2>
                </div>
            </div>
            {/*Information */}
            <div className='flex items-start justify-start gap-16 mt-5'>
                <div className='flex flex-col items-start justify-center gap-5 w-full
                max-w-lg'>
                    {/*Rating and Reviews */}
                    <div className='flex items-center justify-between gap-5'>
                        {/*Reviews and ratings */}
                        <div className='flex items-center justify-start gap-2'>
                            {
                                host.ratings && (
                                    <div className='flex items-center justify-center gap-2'>
                                        <FaStar size={20} />
                                        <p className='text-lg lg:text-xl'><span>{host.ratings}</span></p>
                                    </div>
                                )
                            }
                            {
                                host.review && (
                                    <p className='text-lg lg:text-xl'><span>{host.review} Reviews</span></p>
                                )
                            }

                        </div>
                        {/*Verified User */}
                        <div className='flex items-center justify-center gap-2'>
                            <MdVerifiedUser size={20} />
                            <p className='text:lg lg:text-xl'><span>Identity verified</span></p>
                        </div>
                        {/*Super host */}
                        {
                            host.super_host && (
                                <div className='flex items-center justify-center gap-2'>
                                    <FaMedal siz={20} />
                                    <p className='text-xl'><span>Superhost</span></p>
                                </div>
                            )
                        }
                    </div>
                    {/*Background Information */}
                    <p className='lg:text-lg'>
                        {host.background}
                    </p>
                    {/*Cohost Information */}
                    <div className='flex flex-col gap-2 items-start'>
                        <h4 className='font-semibold textl-lg lg:text-xl'>Co-Hosts</h4>
                        {
                            host.co_host?.map > 0 && (
                                <div className='flex items-center justify-start gap-4'>
                                    {
                                        host.co_host?.map((host) => (
                                            <Cohost host={host} key={host.name} />
                                        ))
                                    }
                                </div>
                            )
                        }
                    </div>
                    {/*During stay */}
                    <div className='flex flex-col gap-2'>
                        <h4 className='font-semibold text-lg lg:text-xl'>During your stay</h4>
                        <p className='lg:text-lg'>we have a care team present on the villa to take care.</p>
                    </div>

                </div>
                <div className='lg:text-lg flex flex-col items-start gap-6 w-full'>
                    {
                        host.languages.length > 0 && (
                            <p>Language: <span>{host.languages.toString().split(' ')}</span> </p>
                        )
                    }
                    {
                        host.response_rate && (
                            <p>Responsive Rate: <span>{host.response_rate}%</span></p>
                        )
                    }
                    {
                        host.response_time && (
                            <p>Response time: {host.response_time}</p>
                        )
                    }
                    <button className='py-2 px-6 border border-black rounded-lg font-semibold'>
                        Contact Host
                    </button>
                    <div className='flex items-center justify-center gap-5'>
                        <RiShieldUserFill size={28} />
                        <p className='max-w-xs text-xs'>
                            To protect your payment, never transfer money or communicate outside of the Airbnb website or app.
                        </p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default HostDetail