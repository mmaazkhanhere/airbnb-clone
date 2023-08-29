import { SubCategoryProps } from '@/interface'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import React from 'react'
import { FaSwimmingPool } from "react-icons/fa"

const SubCategoryItem: React.FC<{ subCat: SubCategoryProps }> = ({ subCat }) => {
    return (
        <article className='flex flex-col items-center justify-center max-w-[80px] gap-1 
        text-gray-500 hover:text-gray-800 cursor-pointer'>
            <Image src={urlForImage(subCat.image).url()} width={24} height={24} alt={subCat.sub_category} />
            <span className='text-xs text-center'>{subCat.sub_category}</span>
        </article>
    )
}

export default SubCategoryItem