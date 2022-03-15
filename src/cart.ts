enum category{
    'PRODUCE',
    'MEAT',
    'PANTRY'
}

export type cartItem = {
    category: category,
    price: number,
    score: number,
    quantity: number
}

export const nullCartItem: cartItem = {
    category: category.PRODUCE,
    price: 1,
    score: 1,
    quantity: 0
}

export const cartData: Record<string, cartItem> = {
    'Honeycrisp Apple': {
        category: category.PRODUCE,
        price: 1.05,
        score: 72,
        quantity: 0,
    },
    'Large Avocado': {
        category: category.PRODUCE,
        price: 1.99,
        score: 20,
        quantity: 0,
    },
    'Bananas (Bunch)': {
        category: category.PRODUCE,
        price: 2.10,
        score: 64,
        quantity: 0,
    },
    'Heirloom Tomato': {
        category: category.PRODUCE,
        price: 1.32,
        score: 38,
        quantity: 0,
    },
    'Red Grapes (Bag)': {
        category: category.PRODUCE,
        price: 6.59,
        score: 53,
        quantity: 0,
    },
    'Ribeye Steak': {
        category: category.MEAT,
        price: 11.75,
        score: 33,
        quantity: 0,
    },
    'Chicken Breast (Pack of 4)': {
        category: category.MEAT,
        price: 13.00,
        score: 77,
        quantity: 0,
    },
    'Lamb Shank (Pack of 4)': {
        category: category.MEAT,
        price: 21,
        score: 46,
        quantity: 0,
    },
    'Tofu': {
        category: category.MEAT,
        price: 3.54,
        score: 95,
        quantity: 0,
    },
    'White Rice (5kg)': {
        category: category.PANTRY,
        price: 13.49,
        score: 41,
        quantity: 0,
    },
    'Fusilli Pasta': {
        category: category.PANTRY,
        price: 4.59,
        score: 67,
        quantity: 0,
    },
    'Steel Cut Oats': {
        category: category.PANTRY,
        price: 6.49,
        score: 72,
        quantity: 0,
    },
    'Loaf of Bread': {
        category: category.PANTRY,
        price: 1.99,
        score: 78,
        quantity: 0,
    },
    'Potatoes (Bag of 8)': {
        category: category.PANTRY,
        price: 6.99,
        score: 84,
        quantity: 0,
    }
}