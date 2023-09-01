import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Success = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='border max-w-sm md:max-w-3xl lg:max-w-5xl xl:max-w-[1750px]
            rounded-xl p-8 flex flex-col items-center gap-6'>
                <Image src="/assets/logo.png" alt="Airbnb Logo" width={200} height={200} />
                <p className='font-semibold text-xl md:text-2xl text-center'>
                    Thank you for staying with us. We hope so your stay is memorable! Please make sure to
                    arrive at time. Wish you a happy journey
                </p>
                <Link href='/' className='w-full md:w-[250px] py-3 md:py-4 text-white font-semibold bg-[#dd3c59] rounded-lg
                        text-center'>
                    Return to Homepage
                </Link>
            </div>
        </div>
    )
}

export default Success