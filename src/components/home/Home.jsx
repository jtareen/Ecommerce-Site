import Slider from "./slider"
import Portion from "./Portion"
import './Home.css'

const Home = () => {
    return (
        <main>
            <Slider />
            <Portion title="Today's" subtitle="Flash Sales" scrollable={true}>

            </Portion >
            <hr />
            <Portion title="Categories" subtitle="Browse By Category"></Portion>
            <hr />
            <Portion title="This Month" subtitle="Best Selling Products" topButton={true}></Portion>
            <hr />
            <Portion title="Today's" subtitle="Flash Sales"></Portion>
            <hr />
        </ main>
    )
}

export default Home