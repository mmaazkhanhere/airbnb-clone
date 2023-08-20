"use client"

import React, { useState } from 'react';
import SubCategoryItem from './SubCategoryItem';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

const SubCategory = () => {
    const totalItems = 40;   // Total number of items
    const itemsPerPage = 17; // Number of items per page
    const [currentPage, setCurrentPage] = useState(0);
    const lastPage = Number(((totalItems - 1) / 17).toFixed(0))

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <section className='fixed w-full '>
            <div className='border border-gray-200 w-full mt-[90px]' />
            <section className='mt-[20px] mx-auto flex items-center justify-start'>
                {
                    currentPage > 0 && (
                        <button onClick={handlePrev} disabled={currentPage === 0}>
                            <AiOutlineLeft className=" border rounded-full p-2 w-9 h-9 font-bold" />
                        </button>
                    )
                }
                <div className='grid grid-cols-[repeat(17,auto)] gap-1 transform transition-all duration-300'>
                    {

                        Array.from({ length: totalItems }).slice(startIndex, endIndex).map((_, index) => (

                            <SubCategoryItem key={startIndex + index} />

                        ))

                    }
                </div>
                {
                    currentPage < lastPage && (
                        <button onClick={handleNext} disabled={endIndex >= totalItems}>
                            <AiOutlineRight className=" border rounded-full p-2 w-9 h-9 font-bold" />
                        </button>
                    )
                }


            </section>
        </section>
    );
}

export default SubCategory;
