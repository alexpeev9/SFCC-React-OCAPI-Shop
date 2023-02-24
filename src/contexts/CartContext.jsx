import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext(null)

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null)
  const [cartItems, setCartItems] = useState(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (cart && cart.product_items) {
      setCount(cart.product_items.length)
    }
  }, [cart])

  return (
    <CartContext.Provider
      value={{ cart, setCart, count, cartItems, setCartItems }}
    >
      {children}
    </CartContext.Provider>
  )
}
