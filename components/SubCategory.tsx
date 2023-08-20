"use client"

import React, { useState } from 'react';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import SubCategoryItem from './SubCategoryItem';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { HiAdjustmentsHorizontal } from "react-icons/hi2"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

const SubCategory = () => {
    const totalItems = 40;   // Total number of items
    const itemsPerPage = 17; // Number of items per page

    return (

        <section className='fixed w-full '>
            <div className='border border-gray-200 w-full mt-[90px]' />
            <div className='flex items-center justify-start max-w-[1750] gap-4'>
                <section className='mt-[20px] max-w-[1600px]'>
                    <Splide
                        options={{
                            perPage: itemsPerPage,
                            pagination: false,
                            gap: '1rem',
                            rewind: false,
                            focus: 'center',
                            perMove: itemsPerPage,
                        }}
                    >
                        {Array.from({ length: totalItems }).map((_, index) => (
                            <SplideSlide key={index}>
                                <SubCategoryItem />
                            </SplideSlide>
                        ))}
                    </Splide>
                </section>
                <div className='flex items-center justify-center py-4 px-2 gap-2 border rounded-lg'>
                    <HiAdjustmentsHorizontal size={22} />
                    <p>Filter</p>
                </div>
            </div>

        </section>

    );
}

export default SubCategory;

{/*  */ }