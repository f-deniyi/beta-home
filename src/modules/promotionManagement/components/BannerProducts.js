import React, { useState } from 'react'
import ModalManagement from '../../../generalComponents/ModalManagement'
import { close, banner_img } from '../../../assets/icons'
import useGetShopsProductsQuery from '../../shopManagement/controllers/get_shops_products'
import ProductGrid from '../../products/components/ProductGrid'

const BannerProducts = ({ shopId, selectProduct }) => {
    const [activePage, setActivePage] = useState(1);

    const handlePage = (page) => {
        setActivePage(page);
    };
    const { products, pagination, isLoading } = useGetShopsProductsQuery({
        enabled: Boolean(shopId),
        shopId,
        page: activePage,
    });


    return (
        <>
            <ModalManagement
                type={'large'}
                id={"banner_products"}
                hideCancel={true}
            >
                <div className='flex items-center justify-between mb-6'>
                    <p className='text-[18px] font-medium '>Choose product</p>
                    <div onClick={() => document.getElementById('banner_products').close()} role='button'>
                        <img src={close} alt='close-icon' className='h-[23px] w-[23px]' />
                    </div>

                </div>

                <ProductGrid
                    products={products}
                    pagination={pagination}
                    paginationChange={handlePage}
                    onSelect={selectProduct}
                />


            </ModalManagement >
        </>
    )
}

export default BannerProducts