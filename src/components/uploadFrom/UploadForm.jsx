import { useUploadYourProducts } from "../../hooks/useUploadYourProducts"
import './uploadForm.css'
import { uploadFormFields } from './uploadFormFields.js.js'

export const UploadForm = ({ handleClick }) => {
    const { 
        message,
        isLoading, 
        productData,
        handleChange,
        handleSubmit,
        imagePreviews,
        handleImageChange,
    } = useUploadYourProducts()

    return (
        <div className="container-form-upload-your-products">
            <form onSubmit={handleSubmit}>
                <div className="form-header">
                    <button className="close-button" onClick={() => handleClick()}>✖</button>
                </div>
                {uploadFormFields?.map((input, id) => (
                    <div key={id}>
                        <label>{input.label}</label>
                        <input 
                            className="input-upload" 
                            type={input.type} 
                            placeholder={input.placeholder}
                            name={input.label.split(":")[0].toLowerCase()}
                            value={productData[input.label.split(":")[0].toLowerCase()]}
                            required 
                            onChange={handleChange}
                            disabled={isLoading}
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
                        required
                        disabled={isLoading}
                    />
                </div>

                <div className="preview-images">
                    {imagePreviews.map((src, index) => (
                        <img key={index} src={src} alt={`preview-${index}`} className="image-preview" />
                    ))}
                </div>

                <button className="button-upload" type="submit" disabled={isLoading}>
                    { isLoading ? "Uploading..." : "Enviar"}
                </button>

                {message && <p className={`message ${message.includes("❌") ? "error" : "success"}`}>{message}</p>}

            </form>
            
            {isLoading && (
                <div className="loading-overlay">
                    <div className="spinner"></div>
                    <p>Subiendo producto...</p>
                </div>
            )}
        </div>
    )
}
