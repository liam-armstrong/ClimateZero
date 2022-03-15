import { cartData, cartCategory } from "../cart"
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { filterCartByCategory } from "../utils"

interface IProps {
  itemName: string,
  cart: typeof cartData
}

const ExtensionPopover = ({itemName, cart}: IProps) => {
  const itemData = cart[itemName]

  const categoryData = Object.values(filterCartByCategory(cart, itemData.category))
  const rank = categoryData
    .sort((a,b) => b.score - a.score)
    .findIndex(i => i.price === itemData.price) + 1

  const popover = (
    <Popover id="info-popover">
      <Popover.Header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Empty_set.svg" alt='logo'></img>
        Climate Zero Stats
      </Popover.Header>
      <Popover.Body>
        Score calculated based on greenhouse gas emissions: <br/>
        <strong>{itemData.score}/100</strong>
        <div className='sep-line'></div>
        This is ranked 
        <strong> {rank}/{categoryData.length} </strong> 
        in the {cartCategory[itemData.category].toLocaleLowerCase()} category
        <br />
        <a href="https://www.bbc.com/news/science-environment-46459714">Source</a>
      </Popover.Body>
    </Popover>
  );  
  
  return (
      <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover}>
        <h4 className="price-text extension-trigger">and Score: {itemData.score}</h4>
      </OverlayTrigger>
    )
  }
  
  export default ExtensionPopover