import { Link } from 'react-router-dom'
import styles from './Slider.module.css'

export const SlideItem = ({ images, name, product}) => {
    return(
        <Link to={`/product/${String(product)}`}>
            <picture>
                <img className={styles.image} src={images} alt={name} loading='eager' />
            </picture>
        </Link>
    )
}