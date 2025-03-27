import './UploadYourProducts.css'
import { UploadForm } from '../uploadFrom/UploadForm.jsx'
import { useUploadYourProducts } from '../../hooks/useUploadYourProducts.jsx'

export const UploadYourProducts = () => {
    const {open, handleClick} = useUploadYourProducts()

    return (
        <section>
            <button onClick={handleClick} className="button-upload-products">
                Upload your products
            </button>

            {open && <UploadForm handleClick={handleClick}/>}
        </section>
    )
}
