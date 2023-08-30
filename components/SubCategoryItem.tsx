
import { SubCategoryProps } from '@/interface'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import React from 'react'


const SubCategoryItem: React.FC<{ subCat: SubCategoryProps, onCategorySelect: (value: string) => void }> = ({ subCat, onCategorySelect }) => {

    const handleClick = () => {
        onCategorySelect(subCat.sub_category);
    }

    return (
        <div>
            <button className='flex flex-col items-center justify-center max-w-[80px] gap-1 
        text-gray-500 hover:text-gray-800 cursor-pointer active:border-b-2 border-black'
                onClick={handleClick}
            >
                <Image src={urlForImage(subCat.image).url()} width={24} height={24} alt={subCat.sub_category} />
                <span className='text-xs text-center'>{subCat.sub_category}</span>
            </button>

        </div>

    )
}

export default SubCategoryItem