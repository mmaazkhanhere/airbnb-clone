import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { MdVerifiedUser } from "react-icons/md"
import { RiShieldUserFill } from "react-icons/ri"

const HostDetail = () => {
    return (
        <article className='max-w-6xl'>
            <div className='flex items-center justify-start gap-5'>
                <div className='w-16 h-16 rounded-full overflow-hidden'>
                    <Image src={"/assets/person1.webp"} alt="Host Picture"
                        width={100} height={100}
                        className='object-cover'
                    />
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <h2 className=' text-3xl font-bold tracking-wide'>
                        Hosted by <span>Shreya</span>
                    </h2>
                </div>
            </div>
            <div className='flex items-start justify-start gap-16 mt-5'>
                <div className='flex flex-col items-start justify-center gap-5 w-full
                max-w-lg'>
                    <div className='flex items-center justify-between gap-5'>
                        <div className='flex items-center justify-center gap-2'>
                            <FaStar size={20} />
                            <p className='text-xl'><span>66 Reviews</span></p>
                        </div>
                        <div className='flex items-center justify-center gap-2'>
                            <MdVerifiedUser size={20} />
                            <p className='text-xl'><span>Identity verified</span></p>
                        </div>
                    </div>
                    <p className='text-lg'>
                        Hi! I’m Shreya and I’m eager to host families and friends in our private villas, on behalf
                        of Saffron Stays , a leading private villa rental & luxury hospitality start-up.
                    </p>
                    <div className='flex flex-col gap-2 items-start'>
                        <h4 className='font-semibold text-xl'>Co-Hosts</h4>
                        <div className='flex items-center justify-center gap-4'>
                            <Image src="/assets/person1.webp" alt="Co-host picture"
                                width={100} height={100}
                                className='w-12 h-12 rounded-full object-cover overflow-hidden'
                            />
                            <span className='text-lg'>Tejas</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h4 className='font-semibold text-xl'>During your stay</h4>
                        <p className='text-lg'>we have a care team present on the villa to take care.</p>
                    </div>

                </div>
                <div className='text-lg flex flex-col items-start gap-6 w-full'>
                    <p>Language: <span>English</span> </p>
                    <p>Responsive Rate: <span>90%</span></p>
                    <p>Response time: within an hour</p>
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