import { DropDown } from "../../components/categorias/Categories"
import { Header } from "../../components/header/Header"
import { Slider } from "../../components/Slider/Slider"

export const Home = () => {
    return(
        <div>
            <Header/>
            <Slider />
            <DropDown />
        </div>
    )
}