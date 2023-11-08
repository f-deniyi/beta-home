import React, { useState } from 'react'
import ProductCard from './Card'
import PaginationRounded from '../../../../generalComponents/Pagination'
import ProductDetails from '../Details'

const ProductGrid = ({ products, pagination, paginationChange, onSelect = null }) => {
    const [productId, setProductId] = useState(null)
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 mb-[50px]">
                {products?.map(product =>
                    <ProductCard
                        product={product}
                        setProductId={setProductId}
                        onSelect={onSelect}
                    />
                )
                }
                {/* <ProductCard />
                */}
            </div>
            <div className='mb-4 flex items-center justify-center'>
                <PaginationRounded
                    count={pagination?.pageTotal}
                    onChange={paginationChange}
                />
            </div>
            <ProductDetails
                productId={productId}
                setProductId={setProductId}

            />
        </div>

    )
}

export default ProductGrid