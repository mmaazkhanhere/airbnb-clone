import React from 'react'
import { Image as SanityImage } from 'sanity'
import Image from 'next/image'

import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { urlForImage } from '@/sanity/lib/image';

interface ImageSlideProps {
    image: SanityImage[]
}

const ImageSlide: React.FC<ImageSlideProps> = ({ image }) => {
    return (
        <section className='max-w-[370px]'>
            <Splide
                options={{
                    perPage: 1,
                    rewind: false,
                    focus: 'center',
                    perMove: 1,
                }}
            >
                {
                    image.map((image) => (
                        <SplideSlide key={image.asset?._ref}>
                            <Image src={urlForImage(image).url()} alt={"Room Images"}
                                width={400}
                                height={400}
                                loading='lazy'
                                className='object-cover'
                            />
                        </SplideSlide>
                    ))
                }
            </Splide>
        </section>
    )
}

export default ImageSlide