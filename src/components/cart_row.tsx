import { cartData } from "../cart"
import Button from 'react-bootstrap/Button'
import { HiOutlinePlusSm, HiOutlineMinusSm } from "react-icons/hi";
import { formatter } from "../utils"

interface IProps {
  itemName: string,
  cart: typeof cartData
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
        <h4 className="price-text">@ {formatter.format(itemData.price)} per unit</h4>
        
        <h3 className="total">{
          itemData['quantity'] === 0 ? 0 :
          formatter.format(itemData['quantity'] * itemData['price'])
        }</h3> 
      </div>
    )
  }
  
  export default CartRow