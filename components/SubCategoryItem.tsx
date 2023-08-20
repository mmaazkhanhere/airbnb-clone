import React from 'react'
import { FaSwimmingPool } from "react-icons/fa"

const SubCategoryItem = () => {
    return (
        <article className='flex flex-col items-center justify-center max-w-[80px] gap-1'>
            <FaSwimmingPool size={22} />
            <span className='text-sm text-center'>Amazing Pools</span>
        </article>
    )
}

export default SubCategoryItem