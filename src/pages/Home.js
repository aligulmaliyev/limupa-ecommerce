import React from 'react'
import Modal from '../components/modal/Modal'
import Banner from '../containers/home/Banner'
import BeginStaticBanner from '../containers/home/BeginStaticBanner'
import ProductsContainer from '../containers/home/ProductsContainer'
import StaticBanner from '../containers/home/StaticBanner'
import TabProducts from '../containers/home/TabProducts'

const Home = () => {
  let categories = [
    {
      id: 1,
      name: 'Prime Video'
    },
    {
      id: 2,
      name: 'Computers'
    },
    {
      id: 3,
      name: 'Electronics'
    }
  ]

  return (
    <>
      <Banner />
      <TabProducts />
      <StaticBanner />
      <ProductsContainer title="Laptop" data={[]} categories={categories} />
      <ProductsContainer title='TV & Audio' data={[]} categories={categories} />
      <BeginStaticBanner />
      <ProductsContainer title="Trendding Products" data={[]} categories={categories} />
      <ProductsContainer title="Bestsellers" data={[]} categories={categories} />
      <Modal/>
    </>
  )
}

export default Home