import { cartData, replacements } from "../cart"
import { useState } from "react";
import SuggestionRow from "./suggestion_row";

interface IProps {
  cart: cartData,
  replaceItems: (original: string, replacement: string) => void, 
}

const SuggestionsBox = ({cart, replaceItems}: IProps) => {
  const [ignoreList, setIgnoreList] = useState({})

  const replacementItems = Object.entries(cart)
    .filter(([key, value]) => value.quantity > 0 && key in replacements && !(key in ignoreList))

  const acceptSuggestion = (itemName: string) => {
    replaceItems(itemName, replacements[itemName])
  }

  const dismissSuggestion = (itemName: string) => {
    setIgnoreList(prevList => {
      return { ...prevList, [itemName]: true }
    })
  } 

  const replacementRows = replacementItems.map(([item, value], index) => 
    <SuggestionRow 
      cart={cart} 
      acceptSuggestion={acceptSuggestion} 
      originalItem={item}
      dismissSuggestion={dismissSuggestion}
      key={index}
    />
  )

  return (
      <div className="suggestions-container">
        <h1 className="blue">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Empty_set.svg" alt='logo'></img>
          Climate Zero Suggestions
        </h1>
        {replacementRows.length === 0 ? 
          <div className="suggestions-empty" >None yet!</div> : 
          replacementRows
        }
      </div>
    )
  }
  
  export default SuggestionsBox