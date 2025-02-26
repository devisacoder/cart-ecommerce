import { DropDown } from "../../components/categories/Categories"
import { Header } from "../../components/header/Header"
import { Slider } from "../../components/slider/Slider"
import { AllProducts } from "../../components/AllProducts/ProductsAll"

export const Home = () => {
    return(
        <div>
            <Header/>
            <Slider />
            <DropDown />
            <AllProducts />
        </div>
    )
}