import React from 'react'
import Header from '../components/Header'
import BookingDetail from '../components/BookingDetail'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className='max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto'>
            <Header />
            <BookingDetail />
            <Footer />
        </div>
    )
}

export default Home