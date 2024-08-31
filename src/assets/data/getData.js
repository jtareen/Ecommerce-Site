import { dummyProducts } from "./data.js"

export const getHomePageProducts = () => {
    let productsCopy = [...dummyProducts]
    let discountedProducts = [...productsCopy].sort((a, b) => (b.discount || 0) - (a.discount || 0)).slice(0 , 8)

    let bestSellingProducts = [...productsCopy].sort((a, b) => (b.ratings.totalReviews || 0) - (a.ratings.totalReviews || 0)).slice(0 , 5)

    return {discountedProducts , bestSellingProducts}
}


export const getAllProducts = () => {
    return [...dummyProducts]
}