"use client"

import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import React, { useState } from 'react'
import { selectedDateRange, setSelectedDateRange } from '@/app/uitls/dateUtils';

const BookingCalendar = () => {
    const [date, setDate] = useState(selectedDateRange);

    console.log(date)

    return (
        <div>
            <DateRange
                editableDateInputs={true}
                onChange={item => {
                    setDate([item.selection]);
                    setSelectedDateRange([item.selection]);
                }}
                moveRangeOnFirstSelection={false}
                ranges={date}
                months={2}
                direction={"horizontal"}
                rangeColors={['black']}
                minDate={new Date()}
                disabledDates={[new Date]}
                color='#b0aeae'
            />
        </div>
    )
}

export default BookingCalendar;
