"use client"

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import PriceBox from '@/components/PriceBox'
import RoomList from '@/components/RoomList'
import { SubCategoryProps } from '@/interface'
import { client } from '@/sanity/lib/client'
import React, { useEffect, useState } from 'react'


const getData = async () => {
  const query = await client.fetch(`*[_type=='category']{
    sub_category,
    image,
  }`);
  return query;
}

const Home = () => {

  const [subCat, setSubCat] = useState<SubCategoryProps[]>([]);
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setSubCat(data);
    }
    fetchData();
  }, [])

  return (
    <div >
      <Header category={subCat} setCat={setCategory} />
      <PriceBox />
      <RoomList subCategory={category} />
      <Footer />
    </div>
  )
}

export default Home