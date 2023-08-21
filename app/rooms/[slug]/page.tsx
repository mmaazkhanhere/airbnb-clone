import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import { IoMdMedal } from "react-icons/io"
import { LuShare } from "react-icons/lu"
import { AiOutlineHeart } from "react-icons/ai"
import ImageGrid from '../components/ImageGrid'

const RoomDetails = () => {
    return (
        <main className='mt-6 max-w-6xl mx-auto'>
            <h1 className='font-semibold text-3xl'>Lovely Studio with Burj Khalifa views from Balcony</h1>
            {/*Review and location */}
            <div className='flex items-center justify-between gap-5 mt-2'>
                <div className='flex items-center justify-center gap-4'>
                    <div className='flex items-center gap-2'>
                        <BsFillStarFill />
                        <span>5</span>
                    </div>
                    <p className='underline font-semibold cursor-pointer'>
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
            <div>
                <ImageGrid />
            </div>

        </main>
    )
}

export default RoomDetails