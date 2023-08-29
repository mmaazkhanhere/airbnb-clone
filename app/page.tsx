
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import PriceBox from '@/components/PriceBox'
import RoomList from '@/components/RoomList'
import { SubCategoryProps } from '@/interface'
import { client } from '@/sanity/lib/client'
import React from 'react'


const getData = async () => {
  const query = await client.fetch(`*[_type=='category']{
    sub_category,
    image,
    slug
  }`);
  console.log(query)
  return query;
}

const Home = async () => {

  const catData: SubCategoryProps[] = await getData();
  return (
    <div >
      <Header category={catData} />
      <PriceBox />
      <RoomList />
      <Footer />
    </div>
  )
}

export default Home