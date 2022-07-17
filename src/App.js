import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import ProductsDetail from './pages/ProductsDetail';
import WishList from './pages/WishList';
import ScrollToTop from './components/ScrollToTop';

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
