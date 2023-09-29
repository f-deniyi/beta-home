import React, { useState } from 'react'
import ModalManagement from '../../../../generalComponents/ModalManagement'
import { close, gallery } from '../../../../assets/icons'
import AddProductAttribute from './Attribute'

const AddProduct = () => {
    const [uploadedImages, setUploadedImages] = useState([]);
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const newImage = { url: reader.result, file };
                setUploadedImages([...uploadedImages, newImage]);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDeleteImage = (index) => {
        const updatedImages = uploadedImages.filter((_, i) => i !== index);
        setUploadedImages(updatedImages);
    };

    const [addAttribute, setAddAttribute] = useState(false)
    return (
        <ModalManagement
            id={"add_product"}
            hideCancel={true}
        >
            <div className='flex items-center justify-between mb-6'>
                <p className='text-[18px] font-medium '>Add a Product</p>
                <div onClick={() => document.getElementById('add_product').close()} role='button'>
                    <img src={close} alt='close-icon' className='h-[23px] w-[23px]' />
                </div>

            </div>
            <div className='mb-5'>
                <div className="relative border-dashed border-2 border-black bg-[#f2f2f2] p-6 rounded-lg text-center h-[120px] w-[120px] flex items-center justify-center">
                    <label className="cursor-pointer block">
                        <div className="mb-2">
                            <img
                                src={gallery}
                                alt="Icon"
                                className="mx-auto w-[40px] h-[30px] object-contain"
                            />
                        </div>
                        <span className="block text-[12px] font-medium">Add Image</span>
                        <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => handleFileUpload(e)}
                        />
                    </label>
                </div>

                <div className="flex mt-5">
                    {/* Uploaded Images */}
                    {uploadedImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative border-dashed border-2 border-black rounded-md mx-2 text-center bg-[#f2f2f2]"
                        >
                            <img
                                src={image.url}
                                alt={`Uploaded Image ${index + 1}`}
                                className="mx-auto w-16 h-16 object-contain"
                            />
                            <button
                                className="absolute -top-2 -right-2 bg-brandPrimary rounded-full hover:text-red-700"
                                onClick={() => handleDeleteImage(index)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 6.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 11-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.293z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>

            </div>

            <div className='flex items-center justify-between'>
                <p className='text-[15px] font-medium'>Add Attributes</p>
                <input type="checkbox" className="toggle" onChange={(e) => {
                    setAddAttribute(e.target.checked)
                }} />
            </div>
            <div>
                {addAttribute && <AddProductAttribute />}
            </div>

        </ModalManagement>
    )
}

export default AddProduct