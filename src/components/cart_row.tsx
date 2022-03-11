import {
  Box,
  HStack,
  IconButton,
  Text
} from "@chakra-ui/react"
import { AddIcon, MinusIcon } from "@chakra-ui/icons"

const CartRow = (
    item: string, 
    cart: Record<string, any>, 
    setQuantity: (item: string, x: number) => void) => 
(
    <Box textAlign="left" fontSize="m">
        <HStack>
            <IconButton aria-label="add" icon={<AddIcon />} />
            <Text>{cart[item]['quantity']}</Text>
            <IconButton aria-label="minus" icon={<MinusIcon />} />
            <Text>{item}</Text>
            <span />
            <Text>{cart[item]['quantity'] * cart[item]['price']}</Text> 
        </HStack>
    </Box>
)

export default CartRow