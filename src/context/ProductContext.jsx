import { createContext } from "react"
import { getProductsSlider} from '../service/getProductsSlider'
import { useState } from "react"
import { useEffect } from "react"

export const ProductContext = createContext()

export const ProviderContext = ({ children }) => {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])

    const filteredProducts = products.filter(product => product.category === "Promotions")

    useEffect(() => {
        fetchProductosSlider()
    },[])

    const fetchProductosSlider = async () => {

        const data = await getProductsSlider()
        setProducts(data)

        const categoryName = [...new Set(data.map((product) => product.category))]
        setCategory(categoryName)

    }

    const formatearPrecio = (precio) => {
        return new Intl.NumberFormat("es-CL", {
            style: "currency",
            currency: "CLP",
        }).format(precio);
    }

    return(
        <ProductContext.Provider value={{ 
            products, 
            filteredProducts,
            category,
            formatearPrecio
        }}>
            {children}
        </ProductContext.Provider>
    )
}