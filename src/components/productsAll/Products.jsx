import { useContext } from "react"
import { ProductContext } from "../../context/ProductContext"
import style from "./Products.module.css"

export const AllProducts = () => {
    const { products, formatearPrecio} = useContext(ProductContext)

    return (
        <div className={style.containerProducts}>
            <div className={style.products}>
                {products.map((product) => (
                    <div key={product.id} className={style.containerItemProduct}>
                        <img src={product.image} className={style.imageProducts} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Price: {formatearPrecio(product.price)}</p>
                        {product.before && <p className={style.before}>Before: {formatearPrecio(product.before)}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}