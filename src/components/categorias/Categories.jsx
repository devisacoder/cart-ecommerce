import { Link } from 'react-router';
import { ProductContext } from '../../context/ProductContext';
import { useDropDown } from '../../hooks/useDropDown';
import styles from './Categories.module.css';
import { useContext } from 'react';

export const DropDown = () => {
    const { isOpen, isSmallScreen, toggleDropDown } = useDropDown();
   const { category } = useContext(ProductContext);


    return (
        <div className={styles.containerDropDown}>
            <button className={styles.dropDown} onClick={toggleDropDown}>
                Categories ↓ 
            </button>
            {(isOpen || !isSmallScreen) && (
                <div className={`${styles.containerItems} ${isOpen && styles.isOpen}`}>
                    {category.map((categories, index) => (
                        <Link
                            key={index}
                            to={`/category/${categories}`}
                            className={styles.item}
                        >
                            {categories}
                        </Link>

                    ))}
                </div>
            )}
        </div>
    );
};
