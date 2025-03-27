import { createContext } from "react"
import { useQuery } from "react-query"
import { useState } from "react"
import { getProducts } from "../service/getProductsSlider"

export const ProductContext = createContext()

export const ProviderContext = ({ children }) => {

    const { data: products = []} = useQuery('products', getProducts)
    const [ busqueda, setBusqueda ] = useState('')

    const productsPromotios = products.filter(product => 
        product.category.includes('Promotions')
    );
    

    const category = products.length > 0 ? [...new Set(products.map(product => product.category))] : []

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(busqueda.toLocaleLowerCase())
    )

    const formatearPrecio = (precio) => {
        return new Intl.NumberFormat("es-CL", {
            style: "currency",
            currency: "CLP",
        }).format(precio);
    }

    return(
        <ProductContext.Provider value={{ 
            category,
            busqueda,
            products, 
            setBusqueda,
            formatearPrecio,
            filteredProducts,
            productsPromotios,
        }}>
            {children}
        </ProductContext.Provider>
    )
}