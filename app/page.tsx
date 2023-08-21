import Footer from '@/components/Footer'
import Header from '@/components/Header'
import PriceBox from '@/components/PriceBox'
import RoomList from '@/components/RoomList'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='max-w-[1750px] mx-auto relative'>
      <Header />
      <PriceBox />
      <RoomList />
      <Footer />
    </div>
  )
}

export default Home