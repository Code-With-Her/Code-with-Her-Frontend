import React from 'react'
import Footer from '../Footer/Footer'
import Hero from './Hero'
import Products from '../Product/Products'
import AddProduct from '../Product/AddProduct'
import ProductList from '../Product/Productlist'

function Home() {
  return (
  <>
  <Hero/>
  {/* <Products/> */}
  <AddProduct/>
  <ProductList/>
    <Footer/>
  </>
  )
}

export default Home