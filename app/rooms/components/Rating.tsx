import Image from 'next/image'
import React from 'react'

const Rating = () => {
    return (
        <div className='flex flex-col items-start justify-center w-full'>
            <div className='flex items-center justify-center gap-5'>
                <div className='w-14 h-14 rounded-full overflow-hidden'>
                    <Image src="/assets/person1.webp" alt='Person Profile'
                        width={100} height={100}
                        className='object-cover'
                    />
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <span className='text-xl font-semibold'>Apeksha</span>
                    <span className='text-gray-600'>May 2023</span>
                </div>
            </div>
            <div className='py-2 text-lg pr-14'>
                <p>
                    This villa stands by it name.. Jannat.. breathe taking view, peace and amazing food quality..
                    It is a complete package... must visit!
                </p>
            </div>
        </div>
    )
}

export default Rating