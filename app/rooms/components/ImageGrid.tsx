import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import React from 'react'
import { CgMenuGridO } from "react-icons/cg"
import { Image as SanityImage } from 'sanity'

interface ImageGridProps {
    image: SanityImage[]
}

const ImageGrid: React.FC<ImageGridProps> = (image) => {

    console.log(image.image[0])
    return (
        <article className='grid grid-cols-4 items-center justify-center gap-2
        max-w-6xl mt-5 relative mx-auto'>
            <div className='border col-span-2 row-span-2 rounded-tl-xl 
            rounded-bl-xl overflow-hidden'>
                <Image src={urlForImage(image.image[0]).url()} alt="Room Picture" width={600} height={500}
                    loading='lazy'
                    className='w-[600px] h-[500px] object-cover'
                />
            </div>
            <div className='w-full h-full'>
                <Image src={urlForImage(image.image[1]).url()} alt="Room Picture" width={300} height={250}
                    loading='lazy'
                    className='w-[300px] h-[250px] object-cover'
                />
            </div>
            <div className='w-full h-full rounded-tr-xl overflow-hidden'>
                <Image src={urlForImage(image.image[2]).url()} alt="Room Picture" width={300} height={250}
                    loading='lazy'
                    className='w-[300px] h-[250px] object-cover'
                />
            </div>
            <div className='w-full h-full'>
                <Image src={urlForImage(image.image[3]).url()} alt="Room Picture" width={300} height={250}
                    loading='lazy'
                    className='w-[300px] h-[245px] object-cover'
                />
            </div>
            <div className='w-full h-full rounded-br-xl overflow-hidden'>
                <Image src={urlForImage(image.image[4]).url()} alt="Room Picture" width={300} height={250}
                    loading='lazy'
                    className='w-[300px] h-[245px] object-cover'
                />
            </div>

            <div className='absolute bottom-8 right-10 z-20 flex items-center justify-center gap-2
            cursor-pointer bg-white text-sm py-1 px-4 rounded-md border border-black'>
                <CgMenuGridO />
                <span>Show all photos</span>
            </div>
        </article>
    )
}

export default ImageGrid