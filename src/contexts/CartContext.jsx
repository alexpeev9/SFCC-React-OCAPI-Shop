import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext(null)

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (cart) {
      setCount(cart.product_items?.length || 0)
    }
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, setCart, count, setCount }}>
      {children}
    </CartContext.Provider>
  )
}
