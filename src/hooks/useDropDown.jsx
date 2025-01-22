import { useState, useEffect } from "react";

export const useDropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 700);
    
        useEffect(() => {
            const handleResize = () => {
                setIsSmallScreen(window.innerWidth <= 700);
                if (window.innerWidth > 700) {
                    setIsOpen(true); // Asegurar que esté abierto en pantallas grandes
                }else{
                    setIsOpen(false); // Asegurar que esté cerrado en pantallas pequeñas
                }   
            };
    
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);
    
        const toggleDropDown = () => {
            if (isSmallScreen) {
                setIsOpen((prevState) => !prevState);
            }
        };

    return { isOpen, isSmallScreen, toggleDropDown }
}
