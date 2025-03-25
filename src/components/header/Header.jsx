import './Header.css'
import { Search } from '../search/Search'
import { Link } from 'react-router-dom'
import { DropDown } from '../categories/Categories'
import { UploadYourProducts } from '../UploadYourProducts/UploadYourProducts'

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
                    <UploadYourProducts/>
                </div>
                    <DropDown/>
            </div>
                <div className='line'></div>
        </section>
    )
}