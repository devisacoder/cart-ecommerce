import styles from './dropDown.module.css'
import { useState } from 'react'

export const DropDown = () => {
    const [ isOpen, setIsOpen ] = useState(false)

    const handleClick = () => {
        setIsOpen((prevState) => !prevState)
    }

    return(
        <div className={styles.container}>

            <button onClick={handleClick}>Categories</button>
            {isOpen && (
                <lu className={styles.menu}>
                    <li className={styles.item}>Mujer</li>
                    <li className={styles.item}>Hombre</li>
                    <li className={styles.item}>Hogar</li>
                    <li className={styles.item}>Tecnologia</li>
                </lu>
            )}
        </div>
    )
}