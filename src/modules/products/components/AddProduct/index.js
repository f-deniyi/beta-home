import React, { useEffect, useState } from 'react'
import ModalManagement from '../../../../generalComponents/ModalManagement'
import { close, gallery } from '../../../../assets/icons'
import AddProductAttribute from './Attribute'
import InputWithFullBoarder from '../../../../generalComponents/InputWithFullBoarder'
import SelectInput from '../../../../generalComponents/SelectInput'
import useGetSCategoriesQuery from '../../../shopManagement/controllers/get_shop_categories'
import CustomButton from '../../../../generalComponents/Button'
import useFileUpload from '../../../fileupload/fileUploadController'
import useCreateProduct from '../../controllers/create_product'
import useGetShopsAttributesQuery from '../../../shopManagement/vendor/controller/get_shop_attribute'

const AddProduct = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [weightArray, setWeightArray] = useState([])
    const [colorArray, setColorArray] = useState([])
    const [sizeArray, setSizeArray] = useState([])
    const [selectedCategories, setCategories] = useState([])
    const shopId = localStorage.getItem('beta-vendor-shop')
    const [colorValues, setColorValues] = useState([])
    const [selectedAttribute, setSelectedAttribute] = useState([])
    const [attributesValues, setAttributesValues] = useState([])

    const { attributes, isLoading: gettingShop } = useGetShopsAttributesQuery({
        enabled: Boolean(shopId),
        shopId: shopId,
    });


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

    const { categories } = useGetSCategoriesQuery({
        enabled: true
    })

    const { postCaller: createProduct, isLoading, isSuccess } = useCreateProduct()

    const {
        error: fileUploadError,
        handleFileUpload: uploadFile,
        isLoading: fileLoading,
        data: uploadUrl,
    } = useFileUpload();

    const handleCategoryChange = (e) => {
        console.log(e)
        // setCategories(e)
    }





    useEffect(() => {
        document.getElementById('add_product').close()
    }, [isSuccess])


    const handleInputChange = (id, event) => {
        const newAttributes = [...selectedAttribute];
        const index = newAttributes.findIndex(attr => attr.id === id);
        
        if (index !== -1) {
          newAttributes[index].value = event.target.value;
          setAttributesValues(newAttributes);
        }
      };
      


    const handleProduct = async () => {
        const galleryPromises = uploadedImages.map(el => uploadFile(el.file))
        const galleries = await Promise.all(galleryPromises)
        const attributes = attributesValues
            .reduce((result, { name, id, attribute_name, value }) => {
                const existingAttr = result.find(item => item.name === attribute_name);
                if (existingAttr) {
                    existingAttr.values.push({ value: id, price: value });
                } else {
                    result.push({
                        name: attribute_name,
                        values: [{ value: id, price: value }],
                    });
                }
                return result;
            }, []);
        const data = {
            name,
            description,
            price: Number(price),
            "shop_id": shopId,
            "quantity": Number(quantity),
            attributes,
            // "attributes": [
            //     {
            //         "name": "colour",
            //         "values":
            //             colorArray.map(el => ({
            //                 "value": el,
            //                 "price": Number(price)
            //             }))

            //     },
            //     {
            //         "name": "size",
            //         "values":
            //             sizeArray.map(el => ({
            //                 "value": el,
            //                 "price": Number(price)
            //             }))

            //     },
            //     {
            //         "name": "weight",
            //         "values":
            //             weightArray.map(el => ({
            //                 "value": el,
            //                 "price": Number(price)
            //             }))

            //     },

            // ],
            "image": {
                "original": galleries[0],
                "thumbnail": galleries[0]
            },
            "gallery":
                galleries.map(el => (
                    {
                        "original": el,
                        "thumbnail": el
                    }
                )
                )

            ,
            "categories": 
                selectedCategories.map(el => el?.id)
            
        }
        createProduct(data)
    }

    useEffect(() => {
    }, [attributesValues])

    return (

        <ModalManagement
            id={"add_product"}
            hideCancel={true}
        >
            <form>

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
                                    className="mx-auto w-16 h-16 object-cover"
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
                <div>
                    <InputWithFullBoarder
                        label={'Name'}
                        placeholder={'Enter product name'}
                        className={'!bg-[#EDEDED] !py-4 !px-[24px]'}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <InputWithFullBoarder
                        label={'Price'}
                        type='number'
                        placeholder={'Enter price'}
                        className={'!bg-[#EDEDED] !py-4 !px-[24px]'}
                        onChange={(e) => {
                            setPrice(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <InputWithFullBoarder
                        label={'Quantity'}
                        type='number'
                        placeholder={'Enter quantity'}
                        className={'!bg-[#EDEDED] !py-4 !px-[24px]'}
                        onChange={(e) => {
                            setQuantity(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <InputWithFullBoarder
                        isTextArea
                        label={'Description'}
                        placeholder={'Enter product description'}
                        className={'!bg-[#EDEDED] !py-4 !px-[24px] h-[150px] '}
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <SelectInput
                        label='Categories'
                        isMulti
                        id='product-category'
                        options={categories}
                        onChange={handleCategoryChange}
                    />
                </div>


                <div className='flex items-center justify-between'>
                    <p className='text-[15px] font-medium'>Add Attributes</p>
                    <input type="checkbox" className="toggle" onChange={(e) => {
                        setAddAttribute(e.target.checked)
                    }} />
                </div>
                <div className='mt-[12px]'>
                    {addAttribute &&
                        <div>
                            {attributes?.map(el => {
                                const containsColor = /color|colour/i.test(el.name);

                                return (
                                    <div>

                                        <SelectInput
                                            isMulti
                                            label={el?.name}
                                            options={el?.values.map(ele => {
                                                return { name: ele, id: ele, attribute_name: el?.name }
                                            })}
                                            onChange={(e, opt) => {

                                                // setSelectedAttribute(e)
                                                if (opt.action === 'select-option') {
                                                    const updatedAttributes = [...selectedAttribute, opt.option]
                                                    setSelectedAttribute(updatedAttributes);

                                                } else if (opt.action === 'remove-value') {
                                                    const updatedAttribute = selectedAttribute.filter(e => e.id !== opt.removedValue.id)
                                                    setSelectedAttribute(updatedAttribute)
                                                } else {
                                                    const updatedAttribute = selectedAttribute.filter(e => e.attribute_name !== opt.removedValues[0].attribute_name)
                                                    setSelectedAttribute(updatedAttribute)
                                                }

                                            }}
                                        />
                                        {
                                            containsColor &&
                                            < div className="my-[17px] ml-3 flex gap-2 flex-wrap">
                                                {
                                                    selectedAttribute.filter(ele => /color|colour/i.test(ele.attribute_name)).map(el =>
                                                        <div className='flex gap-x-2'>
                                                            <p className='text-[14px] font-medium'>{el?.id}</p>
                                                            <div
                                                                key={el}
                                                                style={{
                                                                    backgroundColor:
                                                                        el?.id
                                                                }}
                                                                className={`flex items-center justify-center p-1 rounded-full h-[15px] w-[15px] `}

                                                            >

                                                            </div>
                                                        </div>

                                                    )
                                                }

                                            </div>
                                        }
                                        <div className='ml-[25px]'>
                                            {
                                                selectedAttribute?.filter(ele => el?.name === ele?.attribute_name)?.map((el, index) =>
                                                    // //console.log('Outer map:', el);

                                                    <InputWithFullBoarder
                                                        type={'number'}
                                                        key={el?.id}
                                                        label={el?.id}
                                                        placeholder={`Enter ${el?.id} price`}
                                                        onChange={(event) => handleInputChange(el?.id, event)}
                                                    />


                                                )
                                            }
                                        </div>


                                    </div>

                                )
                            })}
                        </div>
                        // <AddProductAttribute
                        //     weightArray={weightArray}
                        //     setWeightArray={setWeightArray}
                        //     sizeArray={sizeArray}
                        //     setSizeArray={setSizeArray}
                        //     colorArray={colorArray}
                        //     setColorArray={setColorArray}

                        // />
                    }
                </div>
                <div>
                    <CustomButton
                        onClick={(e) => {
                            e.preventDefault()
                            handleProduct()
                        }}
                        disabled={isLoading || fileLoading}
                        isLoading={isLoading || fileLoading}
                        buttonText={'Add Product'}
                        className={'!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandPrimary text-black !py-[15px]'}
                    />
                </div>
            </form>

        </ModalManagement >
    )
}

export default AddProduct