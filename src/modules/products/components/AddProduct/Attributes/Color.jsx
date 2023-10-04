import React, { useState } from 'react'
import { colorPicker } from '../../../../../assets/icons'
import { SketchPicker } from 'react-color'
import ModalManagement from '../../../../../generalComponents/ModalManagement'

const ColorAttribute = () => {
    const [color, setColor] = useState('#000')
    const [colorArray, setColorArray] = useState([])

    const handleChangeComplete = (color) => {
        setColor(color.hex)
        // console.log(arr)
        setColorArray(arr => [...arr, color.hex])
        // console.log('-<<color>>--', color, colorArray)
        document.getElementById('color_picker').close()
    };

    return (
        <div className='flex   w-full'>
            <p className='me-2 text-[15px] font-normal'>Color: </p>

            <div className='flex items-center  flex-grow gap-3'>
                <div className='flex'>
                    {
                        colorArray.slice(-4).map(el =>
                            <div className='h-[36px] rounded-full w-[36px]  mr-1' style={{ background: el }} />
                        )
                    }

                </div>
                <div className='flex-end ml-auto'>
                    <div role='button' className='flex bg-[#F2F2F2] rounded-full p-1 items-center justify-between' onClick={() => document.getElementById('color_picker').showModal()}>
                        <div className={`h-[36px] w-[36px]  me-1 rounded-full`} style={{ background: color }} />
                        <p className={`text-[#8E8E8E] text-[12px] me-1 font-normal`}>Pick Colours</p>
                        <div className='ml-1 pr-2'>
                            <img src={colorPicker} alt='icon' />
                        </div>

                    </div>
                </div>


            </div>

            <ModalManagement
                id={'color_picker'}
            >
                <SketchPicker
                    onChangeComplete={handleChangeComplete}
                />
            </ModalManagement>
        </div>
    )
}

export default ColorAttribute