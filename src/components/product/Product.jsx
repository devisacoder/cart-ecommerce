import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ProductContext } from "../../context/ProductContext"
import style from './Product.module.css'

export const Product = () => {
    const { id } = useParams()
    const { products, formatearPrecio } = useContext(ProductContext)

    const filteresProduct = products.filter((product) => product.id === Number(id))
    
    return(
        <div className={style.container}>
            {filteresProduct?.map((product) => (
                <div key={product.id} className={style.containerProduct}>
                    <div>
                        <img loading="lazy" className={style.imageProduct} src={product.images?.[0]} alt={product.name} />
                    </div>
                    <div className={style.containerInfo}>
                        <div>
                            <h3 className={style.nameProduct}>{product.name}</h3>
                            <div className={style.containerPrice}>
                                {product.discount > 0 && <p className={style.discount}>Before: {formatearPrecio(product.discount)}</p>}
                                <p className={style.price}>Price: {formatearPrecio(product.price)}</p>
                            </div>
                        </div>
                        <p className={style.descriptionProduct}>{product.description}</p>
                        <button className={style.buttonProduct}>Agregar al carrito</button>            
                    </div>
                </div>
            ))}
        </div>
    )
}