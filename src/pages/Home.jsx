import Slider from "../components/Slider/Slider"
import ProductSection from "../components/ProductSection/ProductSection"
import Sales from "../components/Sales/Sales"
import Categories from "../components/Categories/Categories"
import NewArrivals from "../components/NewArrivals/NewArrivals"
import FeatureBlock from "../components/FeatureBlock/FeatureBlock"
import './css/Home.css'
import { getHomePageProducts } from "../assets/data/getData"

const Home = () => {
    const {discountedProducts, bestSellingProducts} = getHomePageProducts()

    console.log(discountedProducts)
    console.log(bestSellingProducts)

    return (
        <main>
            <Slider />
            <hr />
            <Sales products={discountedProducts} />
            <hr />
            <Categories />
            <hr />
            <ProductSection title="This Month" subtitle="Best Selling Products" products={bestSellingProducts} topButton={true}></ProductSection>
            <hr />
            <NewArrivals />
            <FeatureBlock />
        </ main>
    )
}

export default Home