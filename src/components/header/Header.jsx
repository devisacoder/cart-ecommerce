import './Header.css'
import { DropDown } from '../categorias/dropDown'
import { Search } from './search/Search'
import cartIcon from '../../assets/cartIcon.svg'
import { Slider } from '../Slider/Slider'


export const Header = () => {
    return (
        <section>
            <div className='container-header'>
                <h1>Exclusive</h1>
                <DropDown/>
                <Search/>
                <img src={cartIcon} alt="cartIcon" className='cartIcon'/>
            </div>
                <div className='line'></div>
                <Slider/>
        </section>
    )
}