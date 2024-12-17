import searchIcon from '../../../assets/searchIcon.svg'
import './Search.css'

export const Search = () => {
    return (
        <div className='container-search'>
            <input 
                type="text" 
                placeholder="Buscar"
                className='input-search'
            />
            <button className='button-input'><img src={searchIcon} alt="" /></button>
        </div>
    )
}