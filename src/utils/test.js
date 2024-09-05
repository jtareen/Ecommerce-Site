const cartItems = new Map();
cartItems.set(1, { name: 'Product 1', quantity: 2 });
cartItems.set(2, { name: 'Product 2', quantity: 1 });

// Transform Map to an array
const item = cartItems.get(1)

if(cartItems.has(4)){
    console.log('true')
}

console.log(item.quantity)