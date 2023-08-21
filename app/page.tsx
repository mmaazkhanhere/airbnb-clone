import Footer from '@/components/Footer'
import Header from '@/components/Header'
import PriceBox from '@/components/PriceBox'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='max-w-[1750px] mx-auto h-[1000px] relative'>
      <Header />
      <PriceBox />
      <Footer />
    </div>
  )
}

export default Home