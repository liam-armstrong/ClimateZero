import React, { useState } from "react"
import { cartCategory, cartData } from "./cart"
import { filterCartByCategory, formatter } from "./utils"
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

  const produceItems = filterCartByCategory(cart, cartCategory.PRODUCE)
  const meatItems = filterCartByCategory(cart, cartCategory.MEAT)
  const pantryItems = filterCartByCategory(cart, cartCategory.PANTRY)

  const produceRows = Object.keys(produceItems).map(i => {
    return <CartRow itemName={i} cart={cart} onClick={onClick} key={i}/>
  })

  const meatRows = Object.keys(meatItems).map(i => {
    return <CartRow itemName={i} cart={cart} onClick={onClick} key={i}/>
  })

  const pantryRows = Object.keys(pantryItems).map(i => {
    return <CartRow itemName={i} cart={cart} onClick={onClick} key={i}/>
  })

  const subtotal = Object.keys(cart)
                    .reduce((acc, k) => acc + cart[k].quantity * cart[k].price, 0)
              
  return (
    <div className='app'>
      <h1>Shopping Cart</h1> 
      <div className='cart'>
        <div className="cart-row divider">Produce</div>
        {produceRows}
        <div className="cart-row divider">Meat</div>
        {meatRows}
        <div className="cart-row divider">Pantry</div>
        {pantryRows}
        <div className="cart-row divider">Totals</div>
        <div className="cart-row total">
          <div className="total">
            Subtotal: {formatter.format(subtotal)} <br/>
            Tax: {formatter.format(subtotal * 0.1)} <br/>
            <b>Total: {formatter.format(subtotal * 1.1)}</b>
          </div>
        </div>
      </div>
    </div>
    
  )
  
}