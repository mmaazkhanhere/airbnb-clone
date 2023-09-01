"use client"
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import BookingDetail from '../components/BookingDetail'
import Footer from '../components/Footer'
import { BookDataProps } from '@/interface'
import { getBookData } from '@/app/uitls/getBookData'
import Image from 'next/image'
import BookingDetailMobile from '../components/BookingDetailMobile'

const Home = ({ params }: { params: { slug: string } }) => {
    const [roomData, setRoomData] = useState<BookDataProps | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getBookData(params.slug);
            setRoomData(data);
        }
        fetchData();
    }, [params.slug]);

    if (roomData === null) {
        return <div className='w-full h-screen flex items-center justify-center'>
            <Image src="/assets/logo.png" alt='Logo Picture' width={200} height={200} />
        </div>
    }

    return (
        <div className='max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto'>
            <Header />
            <div className='hidden md:block'>
                <BookingDetail room={roomData} />
            </div>
            <div className='block md:hidden'>
                <BookingDetailMobile roomMobile={roomData} />
            </div>
            <Footer />
        </div>
    )
}

export default Home