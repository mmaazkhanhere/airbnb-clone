import React from 'react'
import { FaWifi } from 'react-icons/fa'


const AmenitiesBox = () => {
    return (
        <div className='w-full flex items-center justify-start gap-4 mt-4'>
            <FaWifi size={28} />
            <span>Wifi</span>
        </div>
    )
}

export default AmenitiesBox