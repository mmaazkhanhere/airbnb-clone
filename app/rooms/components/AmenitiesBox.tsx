import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import React from 'react'
import { Image as SanityImage } from 'sanity'

interface AmenityBoxProps {
    name: string,
    image: SanityImage
}

const AmenitiesBox: React.FC<{ amenity: AmenityBoxProps }> = ({ amenity }) => {
    return (
        <div className='w-full flex items-center justify-start gap-4 mt-4'>
            <Image src={urlForImage(amenity.image).url()} alt={amenity.name} width={28} height={28} />
            <span>{amenity.name}</span>
        </div>
    )
}

export default AmenitiesBox