import { useContext } from "react"
import { ProductContext } from "../../context/ProductContext"
import style from "./ProductsAll.module.css"
import { Link } from "react-router-dom"

export const AllProducts = () => {
    const { products, formatearPrecio} = useContext(ProductContext)

    console.log("Cantidad de productos en Storybook:", products.length);

    return (
        <div className={style.containerProducts}>
            <div className={style.products}>
                {products.map((product) => (
                    <Link key={product.id} className={style.containerItemProduct} to={`/product/${String(product.id)}`}>
                        <img src={product.image} className={style.imageProducts} alt={product.name} loading="lazy"/>
                        <h3>{product.name}</h3>
                        <div className={style.containerPrice}>
                            <p>Price: {formatearPrecio(product.price)}</p>
                            {product.before && <p className={style.before}>Before: {formatearPrecio(product.before)}</p>}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}