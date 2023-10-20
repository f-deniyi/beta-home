import React, { useEffect } from 'react'
import ModalManagement from '../../../../generalComponents/ModalManagement'
import { close, warning } from '../../../../assets/icons'
import useDeleteProductMutation from '../../controllers/delete_product'
import CustomButton from '../../../../generalComponents/Button'

const DeleteProduct = ({ productId }) => {
    const {
        deleteCaller: deleteProduct,
        isSuccess,
        isLoading
    } = useDeleteProductMutation()


    useEffect(() => {
        document.getElementById('delete_product').close()
    }, [isSuccess])

    return (
        <ModalManagement id='delete_product'>
            {/* <div className='flex items-center justify-between mb-6'>
                <p className='text-[18px] font-medium '>Product </p>
                <div onClick={() => document.getElementById('delete_product').close()} role='button'>
                    <img src={close} alt='close-icon' className='h-[23px] w-[23px]' />
                </div>
            </div> */}
            <div className=''>
                <div className='flex items-center justify-center flex-col'>
                    <div className='mb-[16px]'>
                        <img src={warning} alt='icon' />
                    </div>
                    <h3 className='text-[20px] font-medium w-[60%] text-center'>Are you sure you want to
                        delete this Product?</h3>
                    <p className='text-[#8B8B8B] text-[12px] font-medium my-[18px] w-[60%] text-center'>This action will permanently delete this product from our data base.</p>
                </div>
                <div className='flex items-center gap-2 w-3/4 mx-auto justify-center mt-[10px]'>
                    <CustomButton
                        onClick={(e) => {
                            e.preventDefault()
                            deleteProduct(productId)
                        }}
                        disabled={isLoading}
                        isLoading={isLoading}
                        buttonText={'Yes'}
                        className={'!text-[15px]  rounded-[30px] bg-brandPrimary w-1/2 !py-3 hover:opacity-70  transition duration-300]'}
                    />
                    {/* <button className=''
                        onClick={() => }
                    >
                        Yes
                    </button> */}
                    <button className='text-[15px] rounded-[30px] bg-[#f2f2f2] w-1/2 py-3 hover:opacity-70 transition duration-300'
                        onClick={() => document.getElementById('delete_product').close()}>
                        No
                    </button>

                </div>
            </div>

        </ModalManagement>
    )
}

export default DeleteProduct