import { cartItem } from "../cart"
import Button from 'react-bootstrap/Button'
import { HiOutlinePlusSm, HiOutlineMinusSm } from "react-icons/hi";

interface IProps {
  itemName: string,
  cart: Record<string, cartItem>
  onClick: (itemName: string, add: boolean) => void
}

const CartRow = ({itemName, cart, onClick}: IProps) => {
  const itemData = cart[itemName]
  
  return (
      <div className="cart-row">
        <div className="controls">
          <Button onClick={() => onClick(itemName, true)}>
            <HiOutlinePlusSm /> 
          </Button>
          <h3>{itemData['quantity']}</h3> 
          <Button onClick={() => onClick(itemName, false)} disabled={itemData.quantity < 1} >
            <HiOutlineMinusSm /> 
          </Button>
        </div>
        
        <h3>{itemName}</h3>
        
        <h3 className="total">{itemData['quantity'] * itemData['price']}</h3> 
      </div>
    )
  }
  
  export default CartRow