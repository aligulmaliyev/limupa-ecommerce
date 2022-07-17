import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'swiper/css';
import { Provider } from 'react-redux';
import store from './store/store';
import { wishlistActions } from './store/slices/wishlist-slice';
import { cartActions } from './store/slices/cart-slice';

const root = ReactDOM.createRoot(document.getElementById('root'));
const getWishListFromLS = () => {
  try {
    const persistedState = localStorage.getItem('wishlist')
    if (persistedState)
      return JSON.parse(persistedState)
  }
  catch (e) {
    console.log(e)
  }
}

const getCartFromLS = () => {
  try {
    const persistedState = localStorage.getItem('cart')
    if (persistedState)
      return JSON.parse(persistedState)
  }
  catch (e) {
    console.log(e)
  }
}

const wishlist = getWishListFromLS()
const cart = getCartFromLS()

store.dispatch(wishlistActions.hydrate(wishlist));
store.dispatch(cartActions.hydrate(cart));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
