import Image from 'next/image'
import React from 'react'

const Bedroom = () => {
    return (
        <div className='flex flex-col items-start justify-center w-full'>
            <div className='rounded-xl overflow-hidden mt-8'>
                <Image src='/assets/room4.webp' alt="Room Picture" width={300} height={300} />
            </div>
            <span className='text-lg font-semibold mt-2'>Bedroom 1</span>
            <p>1 queen bed, 1 floor mattress</p>
        </div>
    )
}

export default Bedroom