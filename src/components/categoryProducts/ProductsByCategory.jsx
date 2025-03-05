import { ProductContext } from "../../context/ProductContext"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import style from "../AllProducts/ProductsAll.module.css"
import { Link } from "react-router-dom"


export const CategoryProducts = () => {
    const { categories } = useParams()
    const { products, formatearPrecio } = useContext(ProductContext)

    const filteredProductsByCayegory = products.filter((product) => product.category === categories)
    
    return (
        <div className={style.containerProducts}>
            <div className={style.products}>
                {filteredProductsByCayegory.map((product) => (
                    <Link 
                        key={product.id} 
                        className={style.containerItemProduct} 
                        to={`/product/${String(product.id)}`}
                    >
                        <img loading="lazy" src={product.image} className={style.imageProducts} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Price: {formatearPrecio(product.price)}</p>
                        {product.before && <p className={style.before}>Before: {formatearPrecio(product.before)}</p>}
                    </Link>
                ))}
            </div>
        </div>
    )
}