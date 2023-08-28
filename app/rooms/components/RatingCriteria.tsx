import { RatingCriteriaProps } from '@/interface'
import React from 'react'

const RatingCriteria: React.FC<{ criteria: RatingCriteriaProps }> = ({ criteria }) => {
    const ratingPercentage = (criteria.value * 2.0) * 10
    return (
        <article className='flex items-center justify-between gap-4 mr-10'>
            <span className='text-xl'>{criteria.category}</span>
            <div className='flex items-center justify-center gap-4'>
                <div className='relative w-[150px] h-1 bg-gray-300 rounded-lg'>
                    <div style={{ width: `${ratingPercentage}%` }} className="bg-black h-1 z-20 top-0 left-0 rounded-lg" />
                </div>
                <span>{(criteria.value).toFixed(1)}</span>
            </div>

        </article>
    )
}

export default RatingCriteria