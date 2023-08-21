import React from 'react'
import RoomCard from './RoomCard';

const RoomList = () => {
    const totalRooms = 40;
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 
        gap-6 items-center justify-center'
        >
            {
                Array.from({ length: totalRooms }).map((_, index) => (
                    <RoomCard key={index} />
                ))
            }
        </div>
    )
}

export default RoomList