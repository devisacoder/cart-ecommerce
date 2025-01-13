import styles from './Categories.module.css';
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';

export const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 580);
    const { category } = useContext(ProductContext);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 580);
            if (window.innerWidth > 580) {
                setIsOpen(true); // Asegurar que esté abierto en pantallas grandes
            }else{
                setIsOpen(false); // Asegurar que esté cerrado en pantallas pequeñas
            }   
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleOpen = () => {
        if (isSmallScreen) {
            setIsOpen((prevState) => !prevState);
        }
    };

    return (
        <div className={styles.containerDropDown}>
            <button className={styles.dropDown} onClick={handleOpen}>
                Categories ↓ 
            </button>
            {(isOpen || !isSmallScreen) && (
                <div className={`${styles.containerItems} ${isOpen && styles.isOpen}`}>
                    {category.map((categories, index) => (
                        <p
                            className={styles.item}
                            key={index}
                        >
                            {categories}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};
