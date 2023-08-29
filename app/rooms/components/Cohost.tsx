import { CoHostProps } from '@/interface'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import React from 'react'

const Cohost: React.FC<{ host: CoHostProps }> = ({ host }) => {
    return (
        <div className='flex items-center justify-center gap-4'>
            <Image src={urlForImage(host.image).url()} alt={host.name}
                width={100} height={100}
                className='w-12 h-12 rounded-full object-cover overflow-hidden'
            />
            <span className='text-lg'>{host.name}</span>
        </div>
    )
}

export default Cohost