import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import ProtectedRoute from './ProtectedRoute';
const Layout = React.lazy(() => import("./layout/Layout"));
const About = React.lazy(() => import("./pages/About"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Home = React.lazy(() => import("./pages/Home"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductsDetail = React.lazy(() => import("./pages/ProductsDetail"));
const WishList = React.lazy(() => import("./pages/WishList"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const ScrollToTop = React.lazy(() => import("./components/ScrollToTop"));



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/login' element={
          <Suspense fallback={<div className='snipper'><Circles color='#fed700' ariaLabel="loading-indicator" /></div>}>
            <Login />
          </Suspense>}
        />
        <Route path='/register' element={
          <Suspense fallback={<div className='snipper'><Circles color='#fed700' ariaLabel="loading-indicator" /></div>}>
            <Register />
          </Suspense>}
        />
        <Route path='/' element={
          <ProtectedRoute>
            <Suspense fallback={<div className='snipper'><Circles color='#fed700' ariaLabel="loading-indicator" /></div>}>
              <Layout />
            </Suspense>
          </ProtectedRoute>} >

          <Route index element={
            <Suspense fallback={<div className='snipper'><Circles color='#fed700' ariaLabel="loading-indicator" /></div>}>
              <Home />
            </Suspense>}
          />
          <Route path='/products' element={
            <Suspense fallback={<div className='snipper'><Circles color='#fed700' ariaLabel="loading-indicator" /></div>}>
              <Products />
            </Suspense>}
          />
          <Route path='/products/categories/:categoryId' element={
            <Suspense fallback={<div className='snipper'><Circles color='#fed700' ariaLabel="loading-indicator" /></div>}>
              <Products />
            </Suspense>}
          />
          <Route path='/product/:id' element={
            <Suspense fallback={<div className='snipper'><Circles color='#fed700' ariaLabel="loading-indicator" /></div>}>
              <ProductsDetail />
            </Suspense>}
          />
          <Route path='/cart' element={
            <Suspense fallback={<div className='snipper'><Circles color='#fed700' ariaLabel="loading-indicator" /></div>}>
              <Cart />
            </Suspense>}
          />
          <Route path='/wishlist' element={
            <Suspense fallback={<div className='snipper'><Circles color='#fed700' ariaLabel="loading-indicator" /></div>}>
              <WishList />
            </Suspense>}
          />
          <Route path='/about' element={
            <Suspense fallback={<div className='snipper'><Circles color='#fed700' ariaLabel="loading-indicator" /></div>}>
              <About />
            </Suspense>}
          />
          <Route path='/contact' element={
            <Suspense fallback={<div className='snipper'><Circles color='#fed700' ariaLabel="loading-indicator" /></div>}>
              <Contact />
            </Suspense>}
          />
          <Route path='*' element={
            <Suspense fallback={<div className='snipper'><Circles color='#fed700' ariaLabel="loading-indicator" /></div>}>
              <NotFound />
            </Suspense>}
          />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
