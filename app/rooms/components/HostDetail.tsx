
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
            <div className='flex items-center justify-start gap-5'>
                <div className='w-16 h-16 rounded-full overflow-hidden'>
                    <Image src={urlForImage(host.profile).url()} alt={host.name}
                        width={120} height={120}
                        className='object-cover'
                    />
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <h2 className=' text-3xl font-bold tracking-wide'>
                        Hosted by <span>{host.name}</span>
                    </h2>
                </div>
            </div>
            <div className='flex items-start justify-start gap-16 mt-5'>
                <div className='flex flex-col items-start justify-center gap-5 w-full
                max-w-lg'>
                    <div className='flex items-center justify-between gap-5'>
                        <div className='flex items-center justify-center gap-2'>
                            <FaStar size={20} />
                            <p className='text-xl'><span>{host.review} Reviews</span></p>
                        </div>
                        <div className='flex items-center justify-center gap-2'>
                            <MdVerifiedUser size={20} />
                            <p className='text-xl'><span>Identity verified</span></p>
                        </div>
                        {
                            host.super_host && (
                                <div className='flex items-center justify-center gap-2'>
                                    <FaMedal siz={20} />
                                    <p className='text-xl'><span>Superhost</span></p>
                                </div>
                            )
                        }
                    </div>
                    <p className='text-lg'>
                        {host.background}
                    </p>
                    <div className='flex flex-col gap-2 items-start'>
                        <h4 className='font-semibold text-xl'>Co-Hosts</h4>
                        {
                            host.co_host?.length > 0 && (
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
                    <div className='flex flex-col gap-2'>
                        <h4 className='font-semibold text-xl'>During your stay</h4>
                        <p className='text-lg'>we have a care team present on the villa to take care.</p>
                    </div>

                </div>
                <div className='text-lg flex flex-col items-start gap-6 w-full'>
                    <p>Language: <span>{host.languages.toString().split(' ')}</span> </p>
                    <p>Responsive Rate: <span>{host.response_rate}%</span></p>
                    <p>Response time: {host.response_time}</p>
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