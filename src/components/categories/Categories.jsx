import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import { useDropDown } from '../../hooks/useDropDown';
import styles from './Categories.module.css';
import { useContext } from 'react';

export const DropDown = () => {
  const { isOpen, toggleDropDown, dropdownRef } = useDropDown();
  const { products } = useContext(ProductContext);

  const categories = products
    ? products
        .flatMap(product => Array.isArray(product.category) ? product.category : [product.category]) 
        .filter(Boolean)
    : [];

  const uniqueCategories = [...new Set(categories)]; 
  
  return (
    <div ref={dropdownRef} className={styles.containerDropDown}>
        <button className={styles.dropDown} onClick={toggleDropDown}>
            Categories  v
        </button>
        {isOpen && (
            <div className={`${styles.containerItems} ${isOpen && styles.isOpen}`}>
              {uniqueCategories.map((category, index) => (
                  <Link key={index} to={`/category/${category}`} className={styles.item}>
                      {category}
                  </Link>
              ))}
            </div>
        )}
    </div>
  );
};
