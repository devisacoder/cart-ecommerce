import { useState } from 'react'
import './UploadYourProducts.css'
import { uploadFormFields } from './uploadFormFields.js'
import { useUploadYourProducts } from '../../hooks/useUploadYourProducts.jsx'

export const UploadYourProducts = () => {
    const [ open, setOpne ] = useState(false)
    const { images, handleImageChange } = useUploadYourProducts()

    const handleClick = () => {
        setOpne(prev => !prev)
        console.log("abrir")
    }

    return (
        <div>
            <button onClick={handleClick} className="button-upload-products">
                Upload your products
            </button>

            {open && (
                <div className="container-form-upload-your-products">
                    <form>
                        {uploadFormFields?.map((input, id) => (
                            <div key={id}>
                            <label>{input.label}</label>
                            <input 
                                className="input-upload" 
                                type={input.type} 
                                placeholder={input.placeholder} 
                            />
                            </div>
                        ))}

                        <div>
                            <label>Upload Images</label>
                            <input
                                className="input-upload input-upload-img"
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>

                        <div className="preview-images">
                            {images.map((src, index) => (
                            <img key={index} src={src} alt={`preview-${index}`} className="image-preview" />
                            ))}
                        </div>

                        <button className="button-upload">Enviar</button>
                    </form>
                </div>
            )}
        </div>
    )
}
