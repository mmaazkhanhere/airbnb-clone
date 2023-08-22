import Image from 'next/image'
import React from 'react'
import { CgMenuGridO } from "react-icons/cg"

const ImageGrid = () => {
    return (
        <section className='grid grid-cols-4 items-center justify-center gap-2
        max-w-6xl mt-5 relative mb-[200px]'>
            <div className='border col-span-2 row-span-2 rounded-tl-xl 
            rounded-bl-xl overflow-hidden'>
                <Image src='/assets/room3.webp' alt="Room Picture" width={600} height={500}
                    loading='lazy'
                    className='w-[600px] h-[500px] object-cover'
                />
            </div>
            <div className='w-full h-full'>
                <Image src='/assets/room4.webp' alt="Room Picture" width={300} height={250}
                    loading='lazy'
                    className='w-[300px] h-[250px] object-cover'
                />
            </div>
            <div className='w-full h-full rounded-tr-xl overflow-hidden'>
                <Image src='/assets/room5.webp' alt="Room Picture" width={300} height={250}
                    loading='lazy'
                    className='w-[300px] h-[250px] object-cover'
                />
            </div>
            <div className='w-full h-full'>
                <Image src='/assets/room6.webp' alt="Room Picture" width={300} height={250}
                    loading='lazy'
                    className='w-[300px] h-[250px] object-cover'
                />
            </div>
            <div className='w-full h-full rounded-br-xl overflow-hidden'>
                <Image src='/assets/room7.webp' alt="Room Picture" width={300} height={250}
                    loading='lazy'
                    className='w-[300px] h-[250px] object-cover'
                />
            </div>
            <div className='absolute bottom-8 right-10 z-20 flex items-center justify-center gap-2
            cursor-pointer bg-white text-sm py-1 px-4 rounded-md border border-black'>
                <CgMenuGridO />
                <span>Show all photos</span>
            </div>
        </section>
    )
}

export default ImageGrid