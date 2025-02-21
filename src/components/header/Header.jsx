import './Header.css'
import { Search } from './search/Search'
import cartIcon from '../../assets/cartIcon.svg'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <section>
            <div className='container-header'>
                <Link
                    to={"/"}
                    className="title"
                >
                    Exclusive
                </Link>
                <Search/>
                <img src={cartIcon} alt="cartIcon" className='cartIcon'/>
            </div>
                <div className='line'></div>
        </section>
    )
}