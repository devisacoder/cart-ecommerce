import { useEffect, useState } from "react"
import { useSlider } from "../../hooks/useSlider"
import { getProductsSlider } from "../../service/getProductsSlider"
import { SlideItem } from "./SliderItem"
import styles from './Slider.module.css'

export const Slider = () => {
    const [products, setProducts] =useState([])
    const { currentIndex, setCurrentIndex} = useSlider(products.length)
    
    useEffect(() => {
        fetchProductosSlider()
    },[])
    
    const fetchProductosSlider = async () => {
        const data = await getProductsSlider()
        setProducts(data)
    }

    const currentProduct = products[currentIndex] || {};

return (
    <div className={styles.container}>
        <div className={styles.imageWrapper}>
            <SlideItem image={currentProduct.image} name={currentProduct.name} />
            <div className={styles.navigation}>
                {products?.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
                    />
                ))}
            </div>
        </div>
    </div>
);


}