import React from 'react'
import ProductCard from './Card'
import PaginationRounded from '../../../../generalComponents/Pagination'
const ProductGrid = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 mb-[50px]">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div className='mb-4 flex items-center justify-center'>
                <PaginationRounded count={3} />
            </div>

        </div>

    )
}

export default ProductGrid