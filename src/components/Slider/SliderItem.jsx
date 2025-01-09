import styles from './Slider.module.css'

export const SlideItem = ({ image, name}) => {
    return(
        <div>
            <img className={styles.image} src={image} alt={name} />
        </div>
    )
}