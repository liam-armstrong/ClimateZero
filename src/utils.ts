import { cartData, cartItem, cartCategory } from "./cart";

export function shuffle(array: any[]) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const isCategory = (item: cartItem, category: cartCategory) => 
  item.category === category

export const filterCartByCategory = (cart: cartData, category: cartCategory) => 
  Object.keys(cart)
    .filter( key => isCategory(cart[key], category) )
    .reduce( (res: cartData, key) => {res[key] = cart[key]; return res}, {} );

export const formatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2
})

export const distributeItems = (cart1: cartData, cart2: cartData, sharedItems: cartData) => {
  const keys = Object.keys(sharedItems)
  shuffle(keys)
  for(let key of keys.slice(0, keys.length / 2)) cart1 = { [key]: sharedItems[key], ...cart1 }
  for(let key of keys.slice(keys.length / 2, keys.length)) cart2 = { [key]: sharedItems[key], ...cart2}
  return [cart1, cart2]
}