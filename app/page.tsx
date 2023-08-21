
import PriceBox from '@/components/PriceBox'
import RoomList from '@/components/RoomList'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <div >
      <PriceBox />
      <RoomList />
    </div>
  )
}

export default Home