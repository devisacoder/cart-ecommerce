import styles from './Slider.module.css'
import { useSlider } from "../../hooks/useSlider"
import { SlideItem } from "./SliderItem"
import { useContext } from "react"
import { ProductContext} from "../../context/ProductContext"

export const Slider = () => {
    const { productsPromotios} = useContext(ProductContext)
    
    const { currentIndex, setCurrentIndex } = useSlider(productsPromotios.length)

    const currentProduct = productsPromotios[currentIndex] || {};

    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <SlideItem images={currentProduct.images?.[0]} name={currentProduct.name} product={currentProduct.id}/>
                <div className={styles.navigation}>
                    {productsPromotios?.map((_, index) => (
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