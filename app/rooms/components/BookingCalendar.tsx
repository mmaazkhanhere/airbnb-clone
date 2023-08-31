"use client"

import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import React, { useState } from 'react'
import { selectedDateRange, setSelectedDateRange } from '@/app/uitls/dateUtils';
import { FaRegKeyboard } from "react-icons/fa"

interface BookingCalendarProps {
    dateBooked: Date[]
}



const BookingCalendar: React.FC<BookingCalendarProps> = ({ dateBooked }) => {

    const [date, setDate] = useState(selectedDateRange);

    const handleDateChange = (item: any) => {
        const newDateRange = [
            {
                startDate: item.selection.startDate,
                endDate: item.selection.endDate,
                key: 'selection',
            },
        ];

        setDate(newDateRange);
        setSelectedDateRange(newDateRange);
    };

    return (
        <>
            <div className='hidden md:block'>
                <h2 className='text-2xl font-semibold mb-5'>
                    1 night in <span>Pimplad Nasik</span>
                </h2>
                <DateRange
                    editableDateInputs={true}
                    onChange={handleDateChange}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    months={2}
                    direction={"horizontal"}
                    rangeColors={['black']}
                    minDate={new Date()}
                    disabledDates={[new Date()]}
                    color='#b0aeae'

                />
                <div className='py-6 flex items-center justify-between w-full max-w-[650px]'>
                    <FaRegKeyboard size={24} className="cursor-pointer" />
                    <p className=' tracking-wide underline font-semibold text-gray-700 cursor-pointer'>Clear dates</p>
                </div>
            </div>
            <div className='block md:hidden'>
                <h2 className='text-2xl font-semibold mb-5'>
                    1 night in <span>Pimplad Nasik</span>
                </h2>
                <DateRange
                    editableDateInputs={true}
                    onChange={handleDateChange}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    months={2}
                    direction={"vertical"}
                    rangeColors={['black']}
                    minDate={new Date()}
                    disabledDates={[new Date()]}
                    color='#b0aeae'

                />
                <div className='py-6 flex items-center justify-between w-full max-w-[650px]'>
                    <FaRegKeyboard size={24} className="cursor-pointer" />
                    <p className=' tracking-wide underline font-semibold text-gray-700 cursor-pointer'>Clear dates</p>
                </div>
            </div>
        </>

    )
}

export default BookingCalendar;
