import './Header.css'
import { DropDown } from '../categorias/Categories'
import { Search } from './search/Search'
import cartIcon from '../../assets/cartIcon.svg'

export const Header = () => {
    return (
        <section>
            <div className='container-header'>
                <h1>Exclusive</h1>
                <Search/>
                <img src={cartIcon} alt="cartIcon" className='cartIcon'/>
            </div>
                <div className='line'></div>
        </section>
    )
}