
export const getProductsSlider = async () => {
        const response = await fetch('/productsSlider.json')
        const data = await response.json()
        return data
}