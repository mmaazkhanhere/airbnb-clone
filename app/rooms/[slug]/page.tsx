"use client"

import React, { useEffect, useState } from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import { IoMdMedal } from "react-icons/io"
import { LuShare } from "react-icons/lu"
import { AiOutlineHeart } from "react-icons/ai"
import ImageGrid from '../components/ImageGrid'
import Information from '../components/RoomInformation'
import ReserveBox from '../components/ReserveBox'
import BookingCalendar from '../components/BookingCalendar'
import RatingList from '../components/RatingList'
import Map from '../components/Map'
import HostDetail from '../components/HostDetail'
import Rules from '../components/Rules'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { RoomProps } from "@/interface";
import Image from 'next/image'
import { getDetails } from '@/app/uitls/getDetails'
import ImageSlide from '../components/ImageSlide'

const RoomDetails = ({ params }: { params: { slug: string } }) => {

    const [data, setData] = useState<RoomProps | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productData = await getDetails(params.slug);
                setData(productData);
            } catch (error) {
                console.error("Error facing while calling getDetails function: ", error);
                throw new Error("Error while using getDetails function")
            }
        };
        fetchData();
    }, [params.slug])

    if (data === null) {
        return <div className='w-full h-screen flex items-center justify-center'>
            <Image src="/assets/logo.png" alt='Logo Picture' width={200} height={200} />
        </div>
    }

    return (
        <main className='max-w-sm md:max-w-3xl lg:max-w-5xl xl:max-w-6xl
        mx-auto'>
            <Header
                price={data.price}
                original_price={data.original_price}
                ratings_recieved={data.ratings_recieved}
                review={data.reviews}
            />
            {/*Title */}
            <div className='w-full mx-auto mt-6'>
                <h1 className='font-semibold text-2xl md:text-3xl'>{data.name}</h1>
            </div>


            {/*Review and location */}

            <div className='flex items-center justify-between gap-5 mt-2 mx-auto
            px-4 md:px-8 lg:px-4 xl:px-0'>
                <div className='flex items-center justify-start gap-2 md:gap-4 text-base lg:text-lg
                flex-wrap md:flex-nowrap'>
                    {/*Ratings */}
                    <div className='flex items-center gap-2 '>
                        <BsFillStarFill />
                        <span className='text-bold'>{data.ratings_recieved}</span>
                    </div>
                    {/*Reviews */}
                    <p className='underline font-semibold cursor-pointer leading-tight'>
                        <span>{data.reviews}</span> reviews
                    </p>
                    {/*Superhost */}
                    {
                        data.superhost && (
                            <div className='flex items-center gap-2'>
                                <IoMdMedal />
                                <span>Superhost</span>
                            </div>
                        )
                    }
                    {/*City and Country */}
                    <p className='font-semibold underline'>
                        <span>{data.city}</span>, {data.state && <span>{data.state},</span>} <span>{data.country}</span>
                    </p>
                </div>
                {/*Share and save */}
                <div className='hidden md:flex items-center justify-start gap-5'>
                    {/*Share */}
                    <div className='flex items-center justify-center gap-2'>
                        <LuShare />
                        <span>Share</span>
                    </div>
                    {/*Save */}
                    <div className='flex items-center justify-center gap-2'>
                        <AiOutlineHeart />
                        <span>Save</span>
                    </div>
                </div>
            </div>

            {/*Image Grid */}

            <div className='hidden md:block px-4 md:px-8 lg:px-4 xl:px-0'>
                <ImageGrid key={data.name} image={data.images} />
            </div>
            <div className='block md:hidden mt-5 px-4 md:px-8 lg:px-4 xl:px-0'>
                <ImageSlide key={data.name} image={data.images} />
            </div>

            {/*Information */}

            <section className='flex w-full items-start justify-center mt-10 mx-auto
            px-4 md:px-8 lg:px-4 xl:px-0'>
                <div className='w-full md:w-3/5 xl:w-2/3'>
                    <Information
                        host={data.host}
                        bedroom={data.bedrooms}
                        information={data.information}
                        bedroomImages={data.bedroomImages}
                        amenities={data.amenities}
                    />
                </div>
                <div className='w-full hidden md:block md:w-2/5 xl:w-1/3 mr-6'>
                    <ReserveBox
                        original_price={data.original_price}
                        price={data.price}
                        ratings_recieved={data.ratings_recieved}
                        review={data.reviews}
                        discount={data.discount}
                        airbnb_fee={data.airbnb_fee}
                        clean_fee={data.clean_fee}

                    />
                </div>
            </section>

            {/*Calendar */}

            <section className='w-full md:w-2/3 px-4 md:px-8 lg:px-4 xl:px-0'>
                <BookingCalendar dateBooked={[data.dateBooked]} />
            </section>

            {/*Ratings */}

            <section className=' mx-auto px-4 md:px-8 lg:px-4 xl:px-0'>
                <div className='my-14 border border-gray-200 w-full' />
                <RatingList criteria={data.ratings} />
            </section>

            {/*Map */}
            {/* 
            <section className='mx-auto px-4 md:px-8 lg:px-4 xl:px-0'>
                <div className='my-14 border border-gray-200 w-full' />
                <Map
                    latitude={data.latitude}
                    longtitude={data.longtitude}
                    city={data.city}
                    state={data.state}
                    country={data.country}
                    sub_direction={data.sub_direction}
                />
            </section> */}

            {/*Host Information */}
            <section className='mx-auto px-4 md:px-8 lg:px-4 xl:px-0'>
                <div className='my-14 border border-gray-200 w-full' />
                <HostDetail host={data.host} />
            </section>

            {/*Rules and safety */}

            <section className='px-4 md:px-8 lg:px-4 xl:px-0 mx-auto'>
                <div className='my-14 border border-gray-200 w-full' />
                <Rules />
            </section>

            {/*Footer */}

            <section className='w-full bg-gray-100'>
                <div className='mt-14 border border-gray-200 w-full' />
                <Footer />
            </section>

        </main>
    )
}

export default RoomDetails