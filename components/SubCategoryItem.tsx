import React from 'react'
import { FaSwimmingPool } from "react-icons/fa"

const SubCategoryItem = () => {
    return (
        <article className='flex flex-col items-center justify-center max-w-[80px] gap-1 
        text-gray-500 hover:text-gray-800 cursor-pointer'>
            <FaSwimmingPool className="w-[24px] h-[24px]" />
            <span className='text-xs text-center'>Amazing Pools</span>
        </article>
    )
}

export default SubCategoryItem