import React, { useEffect, useState } from "react"
import { cartData } from "./cart"
import CartRow from "./components/cart_row"
import './styles/app.scss'
import './styles/reset.css'

export const App = () => {
  const [cart, setCart] = useState(cartData)

  const onClick = (itemName: string, add: boolean) => {
    setCart(prevCart => ({
      ...prevCart,
      [itemName]: {
        ...prevCart[itemName],
        quantity: cart[itemName].quantity + (add ? 1 : -1)
      }
    }))
  }

  const rows = Object.keys(cart).map(i => {
    return <CartRow itemName={i} cart={cart} onClick={onClick} key={i}/>
  })

  return (
    <div className='app'>
      <h1>Shopping Cart</h1> 
      <div className='cart'>
        {rows}
      </div>
    </div>
    
  )
  
}