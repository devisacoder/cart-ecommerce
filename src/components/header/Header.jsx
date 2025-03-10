import './Header.css'
import { Search } from '../search/Search'
import cartIcon from '../../assets/cartIcon.svg'
import { Link } from 'react-router-dom'
import { DropDown } from '../categories/Categories'

export const Header = () => {
    return (
        <section>
            <div className='container'>
                <div className='container-header'>
                    <Link
                        to={"/"}
                        className="title"
                    >
                        Exclusivo
                    </Link>
                    <Search/>
                    <img src={cartIcon} alt="cartIcon" className='cartIcon'/>
                </div>
                    <DropDown/>
            </div>
                <div className='line'></div>
        </section>
    )
}