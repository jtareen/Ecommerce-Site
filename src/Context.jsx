import { createContext, useContext, useReducer, useState } from "react"

const initialState = {
    cartItems: [],
    wishlistItems: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const { cartItems } = state;
            const { product, quantity } = action.payload;

            // Check if the item already exists in the cart
            const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

            let updatedCartItems;

            if (existingItemIndex >= 0) {
                // If the item exists, update the quantity
                updatedCartItems = cartItems.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                // If the item doesn't exist, add it to the cart
                const newItem = {
                    id: product.id,
                    name: product.name,
                    imgUrl: product.images[0].url,
                    price: product.price,
                    quantity
                };
                updatedCartItems = [...cartItems, newItem];
            }

            return { ...state, cartItems: updatedCartItems };
        }

        case 'REMOVE_FROM_CART':
            return { ...state }

        case 'ADD_TO_WISHLIST':
            let { wishlistItems } = state
            return { ...state, wishlistItems: [...wishlistItems, action.payload] };

        case 'REMOVE_FROM_WISHLIST':
            return { ...state }

        default:
            return state;
    }
}

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <GlobalContext.Provider value={{ state, dispatch }}>
        {children}
    </GlobalContext.Provider>
}

export default AppContext