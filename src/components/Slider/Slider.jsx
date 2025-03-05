import styles from './Slider.module.css'
import { useSlider } from "../../hooks/useSlider"
import { SlideItem } from "./SliderItem"
import { useContext } from "react"
import { ProductContext} from "../../context/ProductContext"

export const Slider = () => {
    const {filteredProducts} = useContext(ProductContext)
    
    const { currentIndex, setCurrentIndex } = useSlider(filteredProducts.length)

    const currentProduct = filteredProducts[currentIndex] || {};

    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <SlideItem image={currentProduct.image} name={currentProduct.name} product={currentProduct.id}/>
                <div className={styles.navigation}>
                    {filteredProducts?.map((_, index) => (
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