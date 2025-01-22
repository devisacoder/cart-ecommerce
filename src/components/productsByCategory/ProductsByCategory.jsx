import { ProductContext } from "../../context/ProductContext"
import { useParams } from "react-router"
import { useContext } from "react"
import style from "../productsAll/Products.module.css"


export const ProductsByCategory = () => {
    const { categories } = useParams()
    const { products, formatearPrecio } = useContext(ProductContext)

    const filteredProducts = products.filter((product) => product.category === categories)
    
    return (
        <div className={style.containerProducts}>
            <div className={style.products}>
                {filteredProducts.map((product) => (
                    <div key={product.id} className={style.containerItemProduct}>
                        <img src={product.image} className={style.imageProducts} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Price: {formatearPrecio(product.price)}</p>
                        {product.before && <p className={style.before}>Before: {formatearPrecio(product.before)}</p>}
                    </div>
                ))}
            </div>
        </div>
    )
}