import React, { useState } from 'react'
import { plusIcon } from '../../../../../assets/icons'
import { IoIosClose } from 'react-icons/io'

const WeightAttribute = () => {
    const [weightArray, setWeightArray] = useState([])
    const [weightValue, setWeightValue] = useState('')

    const handleChangeComplete = () => {
        if (weightValue.length > 0) {
            setWeightArray(arr => [...arr, weightValue])
        }
    };

    const deleteWeight = (weight) => {
        const filteredArray = weightArray.filter(el => el !== weight)
        setWeightArray(filteredArray)
    }

    return (
        <div className='flex items-centr gap-2 justify-between w-full'>
            <p>Weight: </p>
            <div className='flex-grow w-full'>
                <div className="flex items-center bg-[#EDEDED] rounded-md w-full ml-3">
                    <input type="number"
                        className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none h-[60px] flex-1 px-4 py-2 bg-transparent focus:border-none hover:border-none focus:outline-none focus:shadow-none appearance-none"
                        onChange={(e) => {
                            setWeightValue(e.target.value)
                        }}
                    />
                    <button className="px-5 py-2 bg-brandPrimary text-white rounded-r-md text-[#000] h-[60px]" onClick={() => {
                        handleChangeComplete()
                    }}>
                        <img src={plusIcon} alt='icon' />
                    </button>

                </div>
                <div className='mt-[17px] ml-3 flex gap-2'>
                    {
                        weightArray.map(el =>
                            <div className='flex items-center bg-black rounded-full w-[90px]'>
                                <p className='text-[#f2f2f2] py-[5px] px-[10px]  font-medium'>{`${el}cm`}</p>
                                <div className='cursor-pointer' onClick={() => {
                                    deleteWeight(el)
                                }}>
                                    <IoIosClose color='#fff' Weight={22} />
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>

        </div>
    )
}

export default WeightAttribute