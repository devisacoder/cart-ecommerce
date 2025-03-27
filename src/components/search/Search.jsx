import searchIcon from '../../assets/searchIcon.svg'
import './Search.css'
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'

export const Search = () => {
    const { busqueda, setBusqueda } = useContext(ProductContext)
    
    return (
        <div className='container-search'>
            <input 
                type="text" 
                placeholder="Buscar"
                className='input-search'
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />
            <button aria-label='boton para buscar productos' className='button-input'><img src={searchIcon} alt="" /></button>
        </div>
    )
}