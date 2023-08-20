import Header from '@/components/Header'
import SubCategory from '@/components/SubCategory'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='max-w-[1750px] mx-auto h-[1000px]'>
      <Header />
      <SubCategory />
    </div>
  )
}

export default Home