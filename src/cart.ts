import { shuffle, distributeItems } from "./utils"

export enum cartCategory{
    'PRODUCE',
    'MEAT',
    'PANTRY',
    'DAIRY',
}

export type cartItem = {
    category: cartCategory,
    price: number,
    score: number,
    quantity: number
}

//Data sourced from http://www.foodemissions.com/foodemissions/Calculator

export const cart1Data: Record<string, cartItem> = {
    'Honeycrisp Apple': {
        category: cartCategory.PRODUCE,
        price: 1.05,
        score: 72,
        quantity: 0,
    },
    'Fuji Apple': {
        category: cartCategory.PRODUCE,
        price: 2.00,
        score: 85,
        quantity: 0,
    },
    'Granny Smith Apple': {
        category: cartCategory.PRODUCE,
        price: 2.5,
        score: 90,
        quantity: 0,
    },
    'Organic Grassfed Ribeye Steak': {
        category: cartCategory.MEAT,
        price: 12.99,
        score: 45,
        quantity: 0,
    },
    'Lamb Shank (Pack of 4)': {
        category: cartCategory.MEAT,
        price: 21,
        score: 58,
        quantity: 0,
    },
    'White Rice (5kg)': {
        category: cartCategory.PANTRY,
        price: 13.49,
        score: 41,
        quantity: 0,
    },
    'Brown Rice (5kg)': {
        category: cartCategory.PANTRY,
        price: 15.49,
        score: 50,
        quantity: 0,
    },
    'Oat Milk': {
        category: cartCategory.DAIRY,
        price: 4.50,
        score: 71,
        quantity: 0,
    },
    'Dairy Milk, 3%': {
        category: cartCategory.DAIRY,
        price: 2.50,
        score: 22,
        quantity: 0,
    },
    'Chickpeas': {
        category: cartCategory.PANTRY,
        price: 1.19,
        score: 99,
        quantity: 0,
    },
    'Black Beans': {
        category: cartCategory.PANTRY,
        price: 1.19,
        score: 95,
        quantity: 0,
    },
}

export const cart2Data: Record<string, cartItem> = {
    'Heirloom Tomato': {
        category: cartCategory.PRODUCE,
        price: 1.32,
        score: 43,
        quantity: 0,
    },
    'Roma Tomato': {
        category: cartCategory.PRODUCE,
        price: 2.00,
        score: 30,
        quantity: 0,
    },
    'Black Organic Grapes (Bag)': {
        category: cartCategory.PRODUCE,
        price: 4.59,
        score: 40,
        quantity: 0,
    },
    'Red Grapes (Bag)': {
        category: cartCategory.PRODUCE,
        price: 4.69,
        score: 65,
        quantity: 0,
    },
    'Chicken Breast (Pack of 4)': {
        category: cartCategory.MEAT,
        price: 13.00,
        score: 77,
        quantity: 0,
    },
    'Tofu': {
        category: cartCategory.MEAT,
        price: 3.54,
        score: 95,
        quantity: 0,
    },
    'American Cheese (Pack of 24)': {
        category: cartCategory.DAIRY,
        price: 7.99,
        score: 60,
        quantity: 0,
    },
    'Mozarella Cheese': {
        category: cartCategory.DAIRY,
        price: 4.99,
        score: 70,
        quantity: 0,
    },
    'Pepperjack Cheese': {
        category: cartCategory.DAIRY,
        price: 6.50,
        score: 85,
        quantity: 0,
    },
}

export const sharedCartItems: Record<string, cartItem> = {
    'Large Avocado': {
        category: cartCategory.PRODUCE,
        price: 1.99,
        score: 20,
        quantity: 0,
    },
    'Bananas (Bunch)': {
        category: cartCategory.PRODUCE,
        price: 2.10,
        score: 64,
        quantity: 0,
    },
    'Fusilli Pasta': {
        category: cartCategory.PANTRY,
        price: 4.59,
        score: 67,
        quantity: 0,
    },
    'Steel Cut Oats': {
        category: cartCategory.PANTRY,
        price: 6.49,
        score: 72,
        quantity: 0,
    },
    'Loaf of Bread': {
        category: cartCategory.PANTRY,
        price: 1.99,
        score: 78,
        quantity: 0,
    },
    'Potatoes (Bag of 8)': {
        category: cartCategory.PANTRY,
        price: 6.99,
        score: 84,
        quantity: 0,
    },
}

export type cartData = typeof cart1Data

export const carts = shuffle(distributeItems(cart1Data, cart2Data, sharedCartItems))

export const replacements: Record<string, string> = {
    'Mozarella Cheese': 'Pepperjack Cheese',
    'American Cheese (Pack of 24)': 'Pepperjack Cheese',
    'Chicken Breast (Pack of 4)': 'Tofu',
    'Black Organic Grapes (Bag)': 'Red Grapes (Bag)',
    'Black Beans': 'Chickpeas',
    'Roma Tomato': 'Heirloom Tomato',
    'Dairy Milk, 3%': 'Oat Milk',
    'White Rice (5kg)': 'Brown Rice (5kg)',
    'Organic Grassfed Ribeye Steak': 'Lamb Shank (Pack of 4)',
    'Fuji Apple': 'Granny Smith Apple',
    'Honeycrisp Apple': 'Fuji Apple'
}