import React from 'react'
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

const roomHref = [
    {
        href1: '/assets/room3.webp',
        href2: '/assets/room4.webp',
        href3: '/assets/room5.webp',
        href4: '/assets/room6.webp',
        href5: '/assets/room7.webp'
    },
]

const RoomDetails = () => {
    return (
        <main >
            <Header />
            <div className='max-w-6xl mx-auto mt-6'>
                <h1 className='font-semibold text-2xl'>Lovely Studio with Burj Khalifa views from Balcony</h1>
            </div>


            {/*Review and location */}

            <div className='flex items-center justify-between gap-5 mt-2 text-sm max-w-6xl mx-auto'>
                <div className='flex items-center justify-center gap-4'>
                    <div className='flex items-center gap-2 '>
                        <BsFillStarFill />
                        <span>4.81</span>
                    </div>
                    <p className='underline font-semibold cursor-pointer leading-tight'>
                        <span>20</span> reviews
                    </p>
                    <div className='flex items-center gap-2'>
                        <IoMdMedal />
                        <span>Superhost</span>
                    </div>
                    <p className='font-semibold underline'>
                        <span>Dubai</span>, <span>United Arab Emirates</span>
                    </p>
                </div>
                {/*Share and save */}
                <div className='flex items-center justify-start gap-5'>
                    <div className='flex items-center justify-center gap-2'>
                        <LuShare />
                        <span>Share</span>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <AiOutlineHeart />
                        <span>Save</span>
                    </div>
                </div>
            </div>

            {/*Image Grid */}

            <div>
                {
                    roomHref.map((ref) => (
                        <ImageGrid key={ref.href1} href={ref} />
                    ))
                }

            </div>

            {/*Information */}

            <section className='flex w-full items-start justify-center mt-10 max-w-6xl mx-auto'>
                <div className=' w-2/3'>
                    <Information />
                </div>
                <div className='w-1/3 mr-6'>
                    <ReserveBox />
                </div>
            </section>

            {/*Calendar */}

            <section className='w-2/3 max-w-6xl mx-auto'>
                <BookingCalendar />
            </section>

            {/*Ratings */}

            <section className='max-w-6xl mx-auto'>
                <div className='my-14 border border-gray-200 w-full' />
                <RatingList />
            </section>

            {/*Map */}

            <section className='max-w-6xl mx-auto'>
                <div className='my-14 border border-gray-200 w-full' />
                {/* {<Map />} */}
            </section>

            {/*Host Information */}
            <section className='mx-auto max-w-6xl'>
                <div className='my-14 border border-gray-200 w-full' />
                <HostDetail />
            </section>

            {/*Rules and safety */}

            <section className='max-w-6xl mx-auto'>
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