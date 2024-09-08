import { 
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST,
    CLOSE_CART_ALERT
} from './actions'

export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const newCartItems = new Map(state.cartItems);
            const { product, quantity } = action.payload;
            let item = undefined

            if (!quantity){
                return {...state}
            }

            if (newCartItems.has(product.id)) {
                // If the item exists, update the quantity
                item = newCartItems.get(product.id);
                item = {...item, quantity: item.quantity + quantity}
                if (item.quantity > 5){
                    alert('Can not add more then five Item of same product to cart')
                    return {...state}
                } else {
                    newCartItems.set(product.id, { ...item })
                }
            } else {
                // If the item doesn't exist, add it to the cart
                item = {
                    id: product.id,
                    name: product.name,
                    imgUrl: product.images[0].url,
                    price: product.price,
                    quantity
                };
                newCartItems.set(product.id, item)
            }

            sessionStorage.setItem('cartItems', JSON.stringify(Array.from(newCartItems.entries())))
            return { ...state, cartItems: newCartItems, cartAlert: {visible: true, product, quantity: item.quantity} };
        }

        case REMOVE_FROM_CART: {
            const newCartItems = new Map(state.cartItems);
            newCartItems.delete(action.payload)

            sessionStorage.setItem('cartItems', JSON.stringify(Array.from(newCartItems.entries())))
            return { ...state, cartItems: newCartItems }
        }

        case INCREASE_QUANTITY: {
            const newCartItems = new Map(state.cartItems)

            const newItem  = newCartItems.get(action.payload)
            newCartItems.set(action.payload, { ...newItem, quantity: newItem.quantity + 1})

            sessionStorage.setItem('cartItems', JSON.stringify(Array.from(newCartItems.entries())))
            return {...state, cartItems: newCartItems}
        }

        case DECREASE_QUANTITY: {
            const newCartItems = new Map(state.cartItems)

            const newItem = newCartItems.get(action.payload)
            newCartItems.set(action.payload, { ...newItem , quantity: newItem.quantity - 1})

            sessionStorage.setItem('cartItems', JSON.stringify(Array.from(newCartItems.entries())))
            return {...state, cartItems: newCartItems}
        }

        case ADD_TO_WISHLIST:{
            const newWishlistItems = new Map(state.wishlistItems)
            newWishlistItems.set(action.payload.product.id, action.payload.product)
            
            localStorage.setItem('wishlistItems', JSON.stringify(Array.from(newWishlistItems.entries())))
            return { ...state, wishlistItems: newWishlistItems};
        }

        case REMOVE_FROM_WISHLIST: {
            const newWishlistItems = new Map(state.wishlistItems)
            newWishlistItems.delete(action.payload.id)
    
            localStorage.setItem('wishlistItems', JSON.stringify(Array.from(newWishlistItems.entries())))
            return { ...state, wishlistItems: newWishlistItems};
        }
            

        case CLOSE_CART_ALERT: {
            return {...state, cartAlert: {visible: false, product: null, quantity: 0}}
        }

        default:
            return state;
    }
}