import { Link } from 'react-router-dom'
import styles from './Slider.module.css'

export const SlideItem = ({ image, name, product}) => {
    return(
        <Link to={`/product/${String(product)}`}>
            <picture>
                <img className={styles.image} src={image} alt={name} loading='eager' />
            </picture>
        </Link>
    )
}