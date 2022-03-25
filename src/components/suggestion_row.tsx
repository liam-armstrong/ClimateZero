import { cartData, replacements } from "../cart"
import { HiOutlineCheck, HiOutlineX } from "react-icons/hi";
import { formatter } from "../utils"

interface IProps {
  cart: cartData,
  acceptSuggestion: (original: string) => void,
  dismissSuggestion: (itemName: string) => void,
  originalItem: string, 
}

const SuggestionRow = ({cart, acceptSuggestion, originalItem, dismissSuggestion}: IProps) => {
  const itemData = cart[originalItem]
  const replacementItem = replacements[originalItem]
  const replacementData = cart[replacementItem]
  const improvementRaw = ((replacementData.score - itemData.score)/itemData.score) * 100
  const improvementRound = Math.round((improvementRaw + Number.EPSILON) * 100) / 100

  return (
      <div className="replacement-row">
        <HiOutlineCheck onClick={(e) => {e.stopPropagation(); acceptSuggestion(originalItem)}}/>
        <div className="row-data">
          <p>{originalItem} to {replacementItem}</p>
          <p>{improvementRound}% improvement in climate factors</p>
          <p>{formatter.format(itemData.price * itemData.quantity)} to {formatter.format(replacementData.price * itemData.quantity)}</p>
        </div>
        <HiOutlineX onClick={(e) => {e.stopPropagation(); dismissSuggestion(originalItem)}}/>
      </div>
    )
  }
  
  export default SuggestionRow