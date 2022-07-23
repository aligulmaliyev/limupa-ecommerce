import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Layout = React.lazy(() => import("./layout/Layout"));
const About = React.lazy(() => import("./pages/About"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Home = React.lazy(() => import("./pages/Home"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductsDetail = React.lazy(() => import("./pages/ProductsDetail"));
const WishList = React.lazy(() => import("./pages/WishList"));
const ScrollToTop = React.lazy(() => import("./components/ScrollToTop"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/categories/:categoryId' element={<Products />} />
          <Route path='/product/:id' element={<ProductsDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
