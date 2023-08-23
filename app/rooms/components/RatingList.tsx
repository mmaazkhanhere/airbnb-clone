import React from 'react'
import { FaStar } from 'react-icons/fa'
import RatingCriteria from './RatingCriteria'
import Rating from './Rating'

const rating = [
    {
        name: 'Cleanliness',
        rating: 4.9
    },
    {
        name: 'Accuracy',
        rating: 4.8
    },
    {
        name: 'Communication',
        rating: 4.8
    },
    {
        name: 'Location',
        rating: 3.5
    },
    {
        name: 'Check-in',
        rating: 4.8
    },
    {
        name: 'Value',
        rating: 4.8
    },
]

const RatingList = () => {
    return (
        <section>
            <div className='flex items-center justify-items-center gap-3'>
                <FaStar size={26} />
                <span className='font-semibold text-2xl'>5.0</span>
                <p className='font-semibold text-2xl'><span>5</span> Reviews</p>
            </div>
            <div className='py-8 grid grid-cols-2 gap-4 '>
                {
                    rating.map((rating) => (
                        <RatingCriteria key={rating.rating} criteria={rating} />
                    ))
                }
            </div>
            <div className='grid grid-cols-2 gap-14 mt-5'>
                <Rating />
                <Rating />
                <Rating />
                <Rating />
                <Rating />
                <Rating />
            </div>
        </section>
    )
}

export default RatingList