import { products } from "./data.js"

export const getHomePageProducts = () => {
    let productsCopy = [...products]
    let discountedProducts = [...productsCopy].sort((a, b) => (b.discount || 0) - (a.discount || 0)).slice(0 , 8)

    let newArrival = [...productsCopy].filter((product) => product.newArrival !== undefined)

    let bestSellingProducts = [...productsCopy].sort((a, b) => (b.ratings.totalReviews || 0) - (a.ratings.totalReviews || 0)).slice(0 , 5)

    return {discountedProducts , bestSellingProducts, newArrival}
}

export const getAllProducts = (category) => {
    if(!category){
        return [...products]
    }
    else {
        return [...products].filter(product => product.category.toLocaleLowerCase() === category.toLocaleLowerCase())
    }
}

export const getProduct = (id) => {
    const product = [...products].find(product => product.id === id)
    const relatedProducts = [...products].filter(item => item.id === product.relatedProducts[0] || item.id === product.relatedProducts[1])
    return {product , relatedProducts}
}