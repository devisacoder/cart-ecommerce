import { useContext } from "react"
import { ProductContext } from "../../context/ProductContext"
import style from "./ProductsAll.module.css"
import { Link } from "react-router-dom"
import addCart from '../../assets/addCart.svg'


export const AllProducts = () => {
    const { filteredProducts, formatearPrecio} = useContext(ProductContext)

    return (
        <div className={style.containerProducts}>
            <div className={style.products}>
                {filteredProducts.map((product) => (
                    <div key={product.id} className={style.containerItemProduct}>
                        <img 
                            className={style.iconAddCart} 
                            src={addCart} 
                            alt="icono para agregar productos al carrito"
                        />
                        
                        <Link to={`/product/${String(product.id)}`} className={style.fullLink}>
                            <img src={product.image} className={style.imageProducts} alt={product.name} loading="lazy" />
                            <h3>{product.name}</h3>
                            <div className={style.containerPrice}>
                                <p>Price: {formatearPrecio(product.price)}</p>
                                {product.before && <p className={style.before}>Before: {formatearPrecio(product.before)}</p>}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}