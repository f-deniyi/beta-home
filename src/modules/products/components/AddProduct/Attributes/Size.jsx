import React, { useState } from 'react'
import { plusIcon } from '../../../../../assets/icons'
import { IoIosClose } from 'react-icons/io'

const SizeAttribute = ({
    sizeArray,
    setSizeArray
}) => {
    const [sizeValue, setSizeValue] = useState('')

    const handleChangeComplete = () => {
        if (sizeValue.length > 0) {
            setSizeArray(arr => [...arr, sizeValue])
        }
    };

    const deleteSize = (size) => {
        const filteredArray = sizeArray.filter(el => el !== size)
        setSizeArray(filteredArray)
    }

    return (
        <div className='flex items-centr gap-2 w-full'>
            <p>Size: </p>
            <div className='flex-grow'>
                <div className="flex items-center bg-[#EDEDED] rounded-md w-full ml-3">
                    <input type="number"
                        className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none h-[60px] flex-1 px-4 py-2 bg-transparent focus:border-none hover:border-none focus:outline-none focus:shadow-none appearance-none"
                        onChange={(e) => {
                            setSizeValue(e.target.value)
                        }}
                    />
                    <button className="px-5 py-2 bg-brandPrimary text-white rounded-r-md text-[#000] h-[60px]" onClick={(e) => {
                        e.preventDefault()
                        handleChangeComplete()
                    }}>
                        <img src={plusIcon} alt='icon' />
                    </button>

                </div>
                <div className='mt-[17px] ml-3 flex gap-2'>
                    {
                        sizeArray?.map(el =>
                            <div className='flex items-center bg-black rounded-full w-[90px]'>
                                <p className='text-[#f2f2f2] py-[5px] px-[10px]  font-medium'>{`${el}cm`}</p>
                                <div className='cursor-pointer' onClick={() => {
                                    deleteSize(el)
                                }}>
                                    <IoIosClose color='#fff' size={22} />
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>

        </div>
    )
}

export default SizeAttribute