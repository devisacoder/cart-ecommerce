// DropDown.jsx
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import { useDropDown } from '../../hooks/useDropDown';
import styles from './Categories.module.css';
import { useContext } from 'react';

export const DropDown = () => {
  const { isOpen, toggleDropDown, dropdownRef } = useDropDown();
  const { category } = useContext(ProductContext);

  return (
    <div ref={dropdownRef} className={styles.containerDropDown}>
        <button className={styles.dropDown} onClick={toggleDropDown}>
            Categories ▼
        </button>
        {isOpen && (
            <div className={`${styles.containerItems} ${isOpen && styles.isOpen}`}>
            {category.map((cat, index) => (
                <Link key={index} to={`/category/${cat}`} className={styles.item}>
                {cat}
                </Link>
            ))}
            </div>
        )}
    </div>
  );
};
