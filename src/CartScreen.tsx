import React, { useEffect, useState } from "react"
import { IoIosCheckmarkCircleOutline, IoMdCloseCircleOutline } from "react-icons/io";
import { cartCategory, cartData } from "./cart"
import { filterCartByCategory, formatter } from "./utils"
import CartRow from "./components/cart_row"
import P1IntroModal from "./components/p1_intro_modal";
import P2IntroModal from "./components/p2_intro_modal";
import SuggestionBox from "./components/suggestions_box"
import './styles/app.scss'
import './styles/reset.css'


interface IProps {
  p1: boolean,
  p2: boolean,
  onComplete: (data: Record<string, any>) => void,
  start: boolean,
  initialCart: cartData
}

export enum goalLevel {
  "Easy" = 60,
  "Hard" = 80
}

const Cart = ({p1, p2, onComplete, initialCart}: IProps) => {
  const [cart, setCart] = useState(initialCart)
  const [welcomeScreen, setWelcomeScreen] = useState(true)
  const [goalLevel, setGoalLevel] = useState(0)
  const [startTime, setStartTime] = useState(0)
  const [numReplacements, setNumReplacements] = useState(0)
  
  useEffect(() => {
    setCart(initialCart)
  }, [initialCart])

  const onClick = (itemName: string, add: boolean) => {
    setCart(prevCart => ({
      ...prevCart,
      [itemName]: {
        ...prevCart[itemName],
        quantity: cart[itemName].quantity + (add ? 1 : -1)
      }
    }))
  }

  const replaceItems = (original: string, replacement: string) => {
    setCart(prevCart => ({
      ...prevCart,
      [original]: {
        ...prevCart[original],
        quantity: 0
      },
      [replacement]: {
        ...prevCart[replacement],
        quantity: prevCart[replacement]['quantity'] + prevCart[original]['quantity']
      }
    }))
    setNumReplacements(numReplacements + 1)
  }

  const closeWelcomeModal = (goalLevel?: goalLevel) => {
    setStartTime(Date.now())
    if(goalLevel) setGoalLevel(goalLevel)
    setWelcomeScreen(false)
  }

  const onCheckout = () => {
    onComplete({
      [`${p1 ? 'p1' : 'p2'}numSeconds`]: `${Math.floor((Date.now() - startTime)/1000)}`,
      [`${p1 ? 'p1' : 'p2'}totalPrice`]: `${subtotal}`,
      [`${p1 ? 'p1' : 'p2'}averageScore`]: `${averageScore}`,
      [`${p1 ? 'p1' : 'p2'}numReplacements`]: `${numReplacements}`
    })
    setWelcomeScreen(true)
  }

  const toCartRow = (key: string, i: number) => <CartRow 
    itemName={key} 
    cart={cart} 
    onClick={onClick} 
    key={i}
    enableExtension={p1}
  />

  const produceRows = Object.keys(filterCartByCategory(cart, cartCategory.PRODUCE)).map(toCartRow)
  const meatRows = Object.keys(filterCartByCategory(cart, cartCategory.MEAT)).map(toCartRow)
  const pantryRows = Object.keys(filterCartByCategory(cart, cartCategory.PANTRY)).map(toCartRow)
  const dairyRows = Object.keys(filterCartByCategory(cart, cartCategory.DAIRY)).map(toCartRow)

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
      { p1 && <P1IntroModal isOpen={welcomeScreen} onClose={closeWelcomeModal} />}
      { p2 && <P2IntroModal isOpen={welcomeScreen} onClose={closeWelcomeModal} />}
      <div className='cart-container'>
        <h1>Shopping Cart</h1> 
        <div className='cart'>
          <div className="cart-row divider">Produce</div>
          {produceRows}
          <div className="cart-row divider">Meat</div>
          {meatRows}
          <div className="cart-row divider">Pantry</div>
          {pantryRows}
          <div className="cart-row divider">Dairy</div>
          {dairyRows}
          <div className="cart-row divider">Totals</div>
          <div className="cart-row total">
           {
            p1 && 
              ((averageScore >= goalLevel || averageScore < 1) 
                ? <div className="extension-totals blue">
                    <p>Average Score: {averageScore < 1 ? '-' : averageScore}</p>
                    <IoIosCheckmarkCircleOutline /> Above goal of {goalLevel}
                  </div>
                : <div className="extension-totals red"> 
                    <p>Average Score: {averageScore}</p>
                    <IoMdCloseCircleOutline /> Below goal of {goalLevel}
                  </div>)
            }
            <div>
              Subtotal: {formatter.format(subtotal)} <br/>
              Tax: {formatter.format(subtotal * 0.1)} <br/>
              <b>Total: {formatter.format(subtotal * 1.1)}</b> <br/>
              <button className="btn-checkout" onClick={onCheckout}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
      {p2 && <SuggestionBox cart={cart} replaceItems={replaceItems}/>}
    </div>   
  )
}

export default Cart;