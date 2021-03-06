import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../containers/home/Banner'
import BeginStaticBanner from '../containers/home/BeginStaticBanner'
import ProductsContainer from '../containers/home/ProductsContainer'
import StaticBanner from '../containers/home/StaticBanner'
import TabProducts from '../containers/home/TabProducts'
import { fetchProducts } from '../store/actions/product-actions';

const CATEGORIES = [
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

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productsReducer.products);

  useEffect(() => {
    dispatch(fetchProducts());
    //eslint-disable-next-line
  }, [])

  return (
    <>
      <Banner />
      <TabProducts data={products} />
      <StaticBanner />
      <ProductsContainer title="Laptop" data={products} categories={CATEGORIES} filterKey={1} />
      <ProductsContainer title='TV & Audio' data={products} categories={CATEGORIES} filterKey={1} />
      <BeginStaticBanner />
      <ProductsContainer title="Trendding Products" data={products} categories={CATEGORIES} filterKey={1} />
      <ProductsContainer title="Bestsellers" data={products} categories={CATEGORIES} filterKey={1} />
    </>
  )
}

export default Home