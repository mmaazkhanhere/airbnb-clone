import React from 'react'
import RoomCard from './RoomCard';
import { client } from '@/sanity/lib/client';
import { RoomCardProps } from '@/interface';

const getRoomDetail = async () => {
    const query = await client.fetch(`
    *[_type=='homes']{
        city,
        state,
        country,
        subtitle,
        price,
        thumbnail,
        ratingsRecieved,
        "slug":slug.current,
        dateGap,
        images
        }
    `);

    return query
}

const RoomList = async () => {

    const data: RoomCardProps[] = await getRoomDetail();
    const dateStart = new Date().toLocaleString('en-US', { month: 'short', day: 'numeric' });

    const gapDate = new Date(new Date());
    gapDate.setDate(new Date().getDate() + data[0].dateGap);

    const dateEnd = gapDate.toLocaleString('en-US', { month: 'short', day: 'numeric' });

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 
        gap-6 items-center justify-center'
        >
            {
                data.map((room) => (
                    <RoomCard key={room.name} details={room} dateStart={dateStart} dateEnd={dateEnd} />
                ))
            }
        </div>
    )
}

export default RoomList