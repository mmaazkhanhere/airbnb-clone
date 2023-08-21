import React from 'react'
import RoomCard from './RoomCard';

const RoomList = () => {
    const totalRooms = 56;
    return (
        <div className='flex flex-wrap gap-4'>
            {
                Array.from({ length: totalRooms }).map((_, index) => (
                    <RoomCard key={index} />
                ))
            }
        </div>
    )
}

export default RoomList