import Slider from "../components/Slider/Slider"
import ProductSection from "../components/ProductSection/ProductSection"
import Sales from "../components/Sales/Sales"
import './css/Home.css'
import Categories from "../components/Categories/Categories"
import NewArrivals from "../components/NewArrivals/NewArrivals"
import FeatureBlock from "../components/FeatureBlock/FeatureBlock"

const Home = () => {
    return (
        <main>
            <Slider />
            <hr />
            <Sales />
            <hr />
            <Categories />
            <hr />
            <ProductSection title="This Month" subtitle="Best Selling Products" topButton={true}></ProductSection>
            <hr />
            <ProductSection title="Our Products" subtitle="Explore Our Products" topButton={true}></ProductSection>
            <hr />
            <NewArrivals />
            <FeatureBlock />
        </ main>
    )
}

export default Home