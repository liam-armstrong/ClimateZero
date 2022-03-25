import { cartData } from "../cart"
import { HiOutlinePlusSm, HiOutlineMinusSm } from "react-icons/hi";
import { formatter } from "../utils"
import ExtensionPopover from "./extension_popover";

interface IProps {
  itemName: string,
  cart: cartData
  onClick: (itemName: string, add: boolean) => void,
  enableExtension: boolean,
}

const CartRow = ({itemName, cart, onClick, enableExtension}: IProps) => {
  const itemData = cart[itemName]
  
  return (
      <div className="cart-row">
        <div className="controls">
          <button onClick={() => onClick(itemName, false)} disabled={itemData.quantity < 1} >
            <HiOutlineMinusSm /> 
          </button>
          <p>{itemData['quantity']}</p> 
          <button onClick={() => onClick(itemName, true)}>
            <HiOutlinePlusSm /> 
          </button>
        </div>
        
        <p>{itemName}</p>
        <h4 className="price-text">@ {formatter.format(itemData.price)}</h4>

        { enableExtension && <ExtensionPopover cart={cart} itemName={itemName} />}
        
        <h3 className="total">{
          itemData['quantity'] === 0 ? 0 :
          formatter.format(itemData['quantity'] * itemData['price'])
        }</h3> 
      </div>
    )
  }
  
  export default CartRow