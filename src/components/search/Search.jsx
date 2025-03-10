import './Search.css'
import searchIcon from '../../assets/searchIcon.svg'

export const Search = () => {
    return (
        <div className='container-search'>
            <input 
                type="text" 
                placeholder="Buscar"
                className='input-search'
            />
            <button aria-label='boton para buscar productos' className='button-input'><img src={searchIcon} alt="" /></button>
        </div>
    )
}