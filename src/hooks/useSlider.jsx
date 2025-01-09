import { useEffect } from "react"
import { useState } from "react"

export const useSlider = (totalSlides) => {
    const [currentIndex, setCurrentIndex] =useState(0)

    useEffect(() => {
        if(totalSlides > 0) {
            const interval =setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
            }, 3000);

            return () => clearInterval(interval)
        }
    }, [totalSlides])

    return {currentIndex, setCurrentIndex}
}