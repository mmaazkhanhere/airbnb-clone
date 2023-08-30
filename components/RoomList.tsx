"use client"

import React, { useEffect, useState } from 'react'
import RoomCard from './RoomCard';
import { client } from '@/sanity/lib/client';
import { RoomCardProps } from '@/interface';
import Image from 'next/image';

const getRoomDetail = async (subCategory?: string) => {

    const catData: any = [];

    if (subCategory) {
        const promises = Array.from({ length: 2 }).slice(0, 3).map(async (_, index) => {
            const catQuery = await client.fetch(`
                *[_type == 'homes' && subcat[${index}].sub_category == '${subCategory}']{
                    city,
                    state,
                    country,
                    subtitle,
                    price,
                    thumbnail,
                    ratings_recieved,
                    "slug": slug.current,
                    dateGap,
                    images
                }
            `);
            return catQuery;
        });

        await Promise.all(promises);

        promises.forEach(async catQuery => {
            catData.push(...await catQuery);
        });

        return catData;
    }

    const query = await client.fetch(`
    *[_type=='homes']{
        city,
        state,
        country,
        subtitle,
        price,
        thumbnail,
        ratings_recieved,
        "slug":slug.current,
        subcat,

        dateGap,
        images
        }
    `);

    return query
}

const RoomList: React.FC<{ subCategory: string }> = ({ subCategory }) => {

    console.log(subCategory);

    const [data, setData] = useState<RoomCardProps[] | null>(null);

    useEffect(() => {
        async function fetchRoomData() {
            const roomData = await getRoomDetail(subCategory);
            setData(roomData);
        }
        fetchRoomData();
    }, [subCategory]);

    if (data === null) {
        return <div className='w-full h-screen flex items-center justify-center'>
            <Image src="/assets/logo.png" alt='Logo Picture' width={200} height={200} />
        </div>
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 
        gap-6 items-center justify-center max-w-sm md:max-w-3xl lg:max-w-5xl xl:max-w-[1750px] 
        mx-auto md:px-6 lg:px-4 xl:px-0 '
        >
            {
                data.map((room) => (
                    <RoomCard key={room.name} details={room} />
                ))
            }
        </div>
    )
}

export default RoomList