
export const getCartTotals = (cartItems) => {
    let totalCartItems = 0
    let totalCartCost = 0

    for(let {quantity , price} of cartItems.values()){
        totalCartCost += quantity * price
        totalCartItems += quantity
    }

    return {totalCartItems , totalCartCost}
}