import { useState } from "react"
import { useQueryClient } from "react-query"

export const useUploadYourProducts = () => {
  const [imagePreviews, setImagePreviews] = useState([])
  const [images, setImages] = useState([])
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("") 
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    category: "",
    stock: "",
    discount: "",
    price: "",
  })

  const queryClient = useQueryClient();
  
  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files)
    setImages(files)
    const previews = files.map((file) => URL.createObjectURL(file))
    setImagePreviews(previews)
  }

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    })
  }

  const resetForm = () => {
    setProductData({ 
      name: "", 
      description: "", 
      category: "", 
      stock: "", 
      discount: "",
      price: ""
    })
    setImages([])
    setImagePreviews([])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("") 

    const formData = new FormData()
    formData.append(
      "product",
      JSON.stringify({
        ...productData,
        category: productData.category.split(",").map((cat) => cat.trim()),
        discount: 0,
      })
    )

    images.forEach((file) => {
      formData.append("images", file)
    })

    try {
      const response = await fetch("http://localhost:8080/products", {
        method: "POST",
        body: formData,
      })
      const result = await response.json()
      console.log("Respuesta del backend:", result)

      if (response.ok) {
        setMessage("✅ Producto subido con éxito")
        resetForm()
        queryClient.invalidateQueries("products")
      } else {
        throw new Error(result.message || "Error al subir el producto")
      }
    } catch (error) {
      setMessage("❌ Hubo un error, intenta de nuevo o contacta a soporte.")
    } finally {
      setIsLoading(false)
    }
  }


  return {
    open,
    images,
    message, 
    isLoading,
    productData,
    handleClick,
    handleSubmit,
    handleChange,
    imagePreviews,
    handleImageChange,
  }
}

