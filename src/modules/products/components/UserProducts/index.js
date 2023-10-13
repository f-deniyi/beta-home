import React, { useState } from 'react'
import ModalManagement from '../../../../generalComponents/ModalManagement'
import { close } from '../../../../assets/icons'
import ProductGrid from '../ProductGrid'


const UserProducts = () => {

  return (
    <ModalManagement
      id='user_products'
      type='large'
    >
      <div style={{
        width: '100%'
      }}>
        <div className='flex items-center justify-between mb-6'>
          <div>
            <p className='text-[18px] font-medium '>Vendor Products</p>
            {/* <p className='text-[12px] font-normal '>List of product orders you have.</p> */}

          </div>
          <div onClick={() => document.getElementById('user_products').close()} role='button'>
            <img src={close} alt='close-icon' className='h-[23px] w-[23px]' />
          </div>

        </div>
        <ProductGrid />
      </div>


    </ModalManagement>
  )
}

export default UserProducts