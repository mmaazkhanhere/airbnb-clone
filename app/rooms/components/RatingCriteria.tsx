import React from 'react'

interface RatingCriteriaProps {
    criteria: {
        name: string;
        rating: number;
    }
}

const RatingCriteria: React.FC<RatingCriteriaProps> = ({ criteria }) => {
    const ratingPercentage = (criteria.rating * 2) * 10
    return (
        <div className='flex items-center justify-between gap-4 mr-10'>
            <span className='text-xl'>{criteria.name}</span>
            <div className='flex items-center justify-center gap-4'>
                <div className='relative w-[150px] h-1 bg-gray-300 rounded-lg'>
                    <div style={{ width: `${ratingPercentage}%` }} className="bg-black h-1 z-20 top-0 left-0 rounded-lg" />
                </div>
                <span>{criteria.rating}</span>
            </div>

        </div>
    )
}

export default RatingCriteria