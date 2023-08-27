import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import React from 'react'
import { Image as SanityImage } from 'sanity'

const Bedroom: React.FC<{ image: SanityImage, index: number }> = ({ image, index }) => {
    return (
        <div className='flex flex-col items-start justify-center w-full'>
            <div className='rounded-xl overflow-hidden mt-8'>
                <Image src={urlForImage(image).url()} alt="Room Picture" width={300} height={300} />
            </div>
            <span className='text-lg font-semibold mt-2'>Bedroom {index + 1}</span>
            <p>1 queen bed, 1 floor mattress</p>
        </div>
    )
}

export default Bedroom