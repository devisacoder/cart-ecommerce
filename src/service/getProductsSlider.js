const API = '../../public/productsSlider.json'

export const getProductsSlider = async () => {
    const data = await fetch(API)
    const respons = data.json()
    return respons
}