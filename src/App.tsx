import React, { useState } from "react"
import { IoIosCheckmarkCircleOutline, IoMdCloseCircleOutline } from "react-icons/io";
import { cartCategory, cartData } from "./cart"
import { filterCartByCategory, formatter } from "./utils"
import CartRow from "./components/cart_row"
import './styles/app.scss'
import './styles/reset.css'

export const App = () => {
  const [cart, setCart] = useState(cartData)
  const [enableExtension, setEnableExtension] = useState(true)
  const goal = 60

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
    return <CartRow 
      itemName={i} 
      cart={cart} 
      onClick={onClick} 
      key={i}
      enableExtension={enableExtension}
    />
  })

  const meatRows = Object.keys(meatItems).map(i => {
    return <CartRow 
      itemName={i} 
      cart={cart} 
      onClick={onClick} 
      key={i}
      enableExtension={enableExtension}
    />
  })

  const pantryRows = Object.keys(pantryItems).map(i => {
    return <CartRow 
      itemName={i} 
      cart={cart} 
      onClick={onClick} 
      key={i}
      enableExtension={enableExtension}
    />
  })

  const subtotal = Object.keys(cart)
    .reduce((acc, k) => acc + cart[k].quantity * cart[k].price, 0)

  const scoreData = Object.keys(cart)
    .reduce((acc, k) => [
      acc[0] + cart[k].quantity * cart[k].score, 
      acc[1] + cart[k].quantity
    ], [0, 0])

  const averageScore = scoreData[1] ? 
    Math.round(((scoreData[0]/scoreData[1])+Number.EPSILON * 100))
    : 0
              
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
            {
              enableExtension && 
                ((averageScore >= goal || averageScore < 1) 
                  ? <div className="extension-totals blue">
                      <p>Average Score: {averageScore < 1 ? '-' : averageScore}</p>
                      <IoIosCheckmarkCircleOutline /> Above goal of {goal}
                    </div>
                  : <div className="extension-totals red"> 
                      <p>Average Score: {averageScore}</p>
                      <IoMdCloseCircleOutline /> Below goal of {goal}
                    </div>)
            }
          </div>
        </div>
      </div>
    </div>
    
  )
  
}