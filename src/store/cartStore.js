
// src/store.js
import {create} from 'zustand';

const useStore = create((set) => ({
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  addToCart: (product) => set((state) => {
    const updatedCart = [...state.cart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return { cart: updatedCart };
  }),
  removeFromCart: (id) => set((state) => {
    const updatedCart = state.cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return { cart: updatedCart };
  }),
  getTotal: () => {
    const { cart } = useStore.getState(); // Access the current cart state
    return cart.reduce((total, item) => total + (item.price || 0), 0);
  },
}));

export default useStore;
