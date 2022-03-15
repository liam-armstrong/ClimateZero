import { cartData, cartItem, cartCategory } from "./cart";

const isCategory = (item: cartItem, category: cartCategory) => 
  item.category === category

export const filterCartByCategory = (cart: typeof cartData, category: cartCategory) => 
  Object.keys(cart)
    .filter( key => isCategory(cart[key], category) )
    .reduce( (res: typeof cartData, key) => (res[key] = cart[key], res), {} );

export const formatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2
})