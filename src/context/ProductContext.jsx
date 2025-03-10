import { createContext } from "react"
import { getProductsSlider} from '../service/getProductsSlider'
import { useQuery } from "react-query"

export const ProductContext = createContext()

export const ProviderContext = ({ children }) => {

    const { data: products = []} = useQuery('productsSlider', getProductsSlider)

    const filteredProducts = products.filter(product => product.category === "Promotions")

    

    
    const category = products.length > 0 ? [...new Set(products.map(product => product.category))] : []



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