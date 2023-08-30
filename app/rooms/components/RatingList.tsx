import React from 'react'
import { FaStar } from 'react-icons/fa'
import RatingCriteria from './RatingCriteria'
import Rating from './Rating'
import { RatingCriteriaProps } from '@/interface'

const RatingList: React.FC<{ criteria: RatingCriteriaProps[] }> = ({ criteria }) => {
    return (
        <section>
            <div className='flex items-center justify-items-center gap-3'>
                <FaStar size={26} />
                <span className='font-semibold text-2xl'>5.0</span>
                <p className='font-semibold text-2xl'><span>5</span> Reviews</p>
            </div>
            <div className='py-8 grid grid-cols-1 lg:grid-cols-2 gap-4 '>
                {
                    criteria.map((rating) => (
                        <RatingCriteria key={rating.category} criteria={rating} />
                    ))
                }
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-14 mt-5'>
                <Rating />
            </div>
        </section>
    )
}

export default RatingList