import { createContext, useContext, useReducer } from "react"
import { reducer } from "./reducer"
import { getCartTotals } from "./utils"
import { 
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST,
    CLOSE_CART_ALERT
} from './actions'

const initialState = {
    cartItems: new Map(JSON.parse(sessionStorage.getItem('cartItems'))),
    wishlistItems: new Map(JSON.parse(localStorage.getItem('wishlistItems'))),
    alert: {
        visible: false,
        message: '',
    },
    cartAlert: {
        visible: false,
        product: null,
        quantity: 0,
    }
}

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {totalCartItems , totalCartCost} = getCartTotals(state.cartItems)
    const totalWishlistItems = state.wishlistItems.size

    const addToCart = (product, quantity) => {
        dispatch({type: ADD_TO_CART, payload: {product , quantity}})
    }

    const removeCartItem = (id) => {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: id
        })
    }

    const decreaseCartItemQuantity = (id) => {
        const item = state.cartItems.get(id)

        if (item.quantity === 1) {
            removeCartItem(id)
        }
        else {
            dispatch({type: DECREASE_QUANTITY, payload: id})
        }
    }
    
    const increaseCartItemQuantity = (id) => {
        const item = state.cartItems.get(id)
        if (item.quantity < 5) {
            dispatch({type: INCREASE_QUANTITY, payload: id})
            return true
        }
        return false
    }

    const addRemoveWishlist = (product) => {
        if (state.wishlistItems.has(product.id)){
            dispatch({type: REMOVE_FROM_WISHLIST, payload: {id: product.id}})
        } else {
            dispatch({type: ADD_TO_WISHLIST, payload: {product}})
        }
    }

    const closeCartAlert = () => {
        dispatch({type: CLOSE_CART_ALERT})
    }

    return <GlobalContext.Provider value={{ 
        ...state,
        totalCartItems,
        totalWishlistItems,
        totalCartCost,
        addToCart,
        removeCartItem,
        decreaseCartItemQuantity,
        increaseCartItemQuantity,
        addRemoveWishlist,
        closeCartAlert,
        }}>
        {children}
    </GlobalContext.Provider>
}

export default AppContext