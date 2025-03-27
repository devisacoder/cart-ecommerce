import { useContext } from "react"
import { ProductContext } from "../../context/ProductContext"
import style from "./ProductsAll.module.css"
import { Link } from "react-router-dom"

export const AllProducts = () => {
    const { filteredProducts, formatearPrecio} = useContext(ProductContext)

    return (
        <div className={style.containerProducts}>
            <div className={style.products}>
                {filteredProducts?.map((product) => (
                    <div key={product.id} className={style.containerItemProduct}>
                        <Link to={`/product/${String(product.id)}`} className={style.fullLink}>
                            <img src={product.images[0]} className={style.imageProducts} alt={product.name} loading="lazy" />
                            <h3>{product.name}</h3>
                            <div className={style.containerPrice}>
                                <p>Price: {formatearPrecio(product.price)}</p>
                                {product.discount > 0 && <p className={style.discount}>Before: {formatearPrecio(product.discount)}</p>}

                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}