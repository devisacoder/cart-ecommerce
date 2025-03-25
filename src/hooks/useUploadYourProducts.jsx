import { useState } from "react"

export const useUploadYourProducts = () => {
    const [images, setImages] = useState([])

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files)
        const previews = files.map(file => URL.createObjectURL(file))
        setImages(previews)
      }
      return { images, handleImageChange }
}